import clock from "clock"
import document from "document"
import { display } from 'display'
import { me as appbit } from "appbit"
import { preferences } from "user-settings"
import { today } from "user-activity"
import * as util from "../common/utils"

// Update the clock every minute
clock.granularity = "minutes"

// Get a handle on the <text> element
const hoursLabel = document.getElementById("hoursLabel")
const minutesLabel = document.getElementById("minutesLabel")
const stepsLabel =  document.getElementById("minutesLabel")

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();

  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  hoursLabel.text = `${hours}`;
  minutesLabel.text = `${mins}`;
}

const SATURATION_MAX = 0.78
const SATURATION_MIN = 0.48
let CLOCK_SATURATION = SATURATION_MAX
let isSubtracting = true;
let changeClockColor = setInterval(
	() =>
	{
		if (isSubtracting)
		{
			CLOCK_SATURATION = (CLOCK_SATURATION - 0.01).toFixed(2)
		}
		else
		{
			CLOCK_SATURATION = (CLOCK_SATURATION + 0.01).toFixed(2)
		}
		CLOCK_SATURATION = parseFloat(CLOCK_SATURATION)

		// Figure out saturation direction
		if (CLOCK_SATURATION === SATURATION_MIN)
		{
			isSubtracting = false
		}
		else if (CLOCK_SATURATION === SATURATION_MAX)
		{
			isSubtracting = true
		}

		hoursLabel.style.fill = util.hslToHex(
			300,
			0.84,
			CLOCK_SATURATION
		)
		minutesLabel.style.fill = util.hslToHex(
			300,
			0.84,
			CLOCK_SATURATION
		)
	},
	50
);

