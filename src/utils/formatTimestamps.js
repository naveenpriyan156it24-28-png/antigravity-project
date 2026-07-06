/**
 * Formats a duration in seconds into a string in the format MM:SS.
 * @param {number} seconds - The duration in seconds.
 * @returns {string} The formatted time string (e.g. "02:04").
 */
export function formatTime(seconds) {
  if (isNaN(seconds) || seconds === null || seconds === undefined) {
    return '00:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const formattedMins = mins.toString().padStart(2, '0');
  const formattedSecs = secs.toString().padStart(2, '0');
  return `${formattedMins}:${formattedSecs}`;
}
