type increaseBoolean = Boolean | 0 | 1

function mounted(isStartUp: increaseBoolean) {
  if (isStartUp) {
    console.log('yes')
  } else {
    console.log('no')
  }
}
mounted(0)
