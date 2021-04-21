import { gettext } from "i18n";

// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function localeMonth(month){
  return gettext("m_"+month)
}

export function localeWeekDay(day){
  return gettext("w_"+day)
}

/**
 */
export function hslToHex(h, s, l)
{
   let a = s * Math.min(l,1-l)
   let f = (n,k=(n+h/30)%12) => Math.ceil(
      (l - a*Math.max(Math.min(k-3,9-k,1),-1)) * 255 
   )
   return rgbToHex(f(0),f(8),f(4))
}

/**
 */
export function rgbToHex(r, g, b) {
  return "#" + 
		((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * Sometimes we want delay in our code; This does that.
 * @return {Promise} -- Given amount of time to wait
 */
export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

