import { useEffect, useRef } from 'react';

/**
 * Custom hook to poll the translation/transcription job status from the FastAPI backend.
 * Implements exponential backoff and stops polling on component unmount or when the job completes.
 *
 * @param {string} jobId - The unique identifier of the transcription job.
 * @param {boolean} isPollingActive - Controls whether polling should run.
 * @param {function} onSuccess - Callback when backend returns status "success".
 * @param {function} onError - Callback when backend returns status "error" or request fails.
 */
export function usePollJobStatus(jobId, isPollingActive, onSuccess, onError) {
  const timeoutIdRef = useRef(null);
  const currentIntervalRef = useRef(2000); // start polling at 2 seconds
  const MAX_POLLING_INTERVAL = 30000; // hard ceiling of 30 seconds

  useEffect(() => {
    // If not active or no jobId, do not poll
    if (!isPollingActive || !jobId) {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      return;
    }

    // Reset polling interval when starting new poll
    currentIntervalRef.current = 2000;

    const poll = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'success') {
          onSuccess(data);
        } else if (data.status === 'error' || data.status === 'failed') {
          onError(new Error(data.message || 'Translation job failed on backend.'));
        } else {
          // Job is still processing; schedule next poll with exponential backoff
          currentIntervalRef.current = Math.min(
            currentIntervalRef.current * 1.5,
            MAX_POLLING_INTERVAL
          );
          timeoutIdRef.current = setTimeout(poll, currentIntervalRef.current);
        }
      } catch (err) {
        // Network errors or backend connection drops
        console.error("Polling fetch error: ", err);
        onError(err);
      }
    };

    // Trigger initial poll
    timeoutIdRef.current = setTimeout(poll, currentIntervalRef.current);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [jobId, isPollingActive, onSuccess, onError]);
}
