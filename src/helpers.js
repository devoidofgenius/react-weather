export function convertIconID(ID) {
  const shortID = parseInt(ID.toString()
                                .split("")
                                .slice(0, 1)
                                .join(), 10);

  const iconKey = (shortID !== 6 && shortID !== 8) ? shortID : ID;

  switch (iconKey) {
    default:
      return 'default'
    case 2:
      return 'thunderstorm'
    case 3:
      return 'drizzle'
    case 5:
      return 'rain'
    case 600:
    case 615:
    case 616:
    case 620:
      return 'lightSnow'
    case 601:
    case 602:
    case 621:
    case 622:
      return 'heavySnow'
    case 7:
      return 'fog'
    case 800:
      return 'clear'
    case 801:
      return 'fewClouds'
    case 802:
      return 'scatteredClouds'
    case 803:
      return 'brokenClouds'
    case 804:
      return 'overcast'
    case 9:
      return 'wind'
  }
}

export function whatDayIsIt(day) {

  switch(day) {
    default:
      return
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}

export function convertToCelcius(temp) {
  return Math.round(((temp - 32) * 5) / 9);
}

// if 2xx { thunderstorm } // 27.svg
// if 3xx { drizzle } // 17.svg
// if 5xx { rain } // 18.svg
// if 600, 615, 616, 620  { light snow } // 22.svg
// if 601, 602, 621, 622  { heavy snow } // 23.svg
// if 611, 612 { sleet } // 24.svg
// if 7xx { mist/haze/fog } // 13.svg Probably could be futher broken down
// if 800 { clear } // Day: 2.svg Night: 3.svg
// if 801 { few clouds } // Day: 8.svg Night: 9.svg
// if 802 { scattered clouds } // 14.svg
// if 803 { broken clouds } // 25.svg
// if 804 { overcast } // 12.svg
// if 9xx { wind } // 6.svg
