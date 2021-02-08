// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/**
 * Sometimes we want delay in our code; This does that.
 * @return {Promise} -- Given amount of time to wait
 */
export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

