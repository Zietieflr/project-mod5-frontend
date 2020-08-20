let currentTimerID = null
let initialTime = 0

export function startTimer(
    timeValues, 
    setRecentWorkTimer,
    completedTimer,
    workTimerSN, 
    breakTimerSN
  ) {
  setRecentWorkTimer()
    ? breakTimer(
      timeValues.breakTime, 
      breakTimerSN, 
      setRecentWorkTimer, 
      completedTimer
    )
    : workTimer(timeValues.workTime, workTimerSN, setRecentWorkTimer)
}

export function resetTimer(setRecentWorkTimer) {
  clearInterval(currentTimerID)
  setRecentWorkTimer(false) 
}

export function resetNoActiveTimer(setRecentWorkTimer) {
  setRecentWorkTimer(false)
  initialTime = 0
}

function workTimer(workTimeMinutes, workTimerSN, setRecentWorkTimer) {
  const workTimeSeconds = workTimeMinutes * 60
  currentTimerID = setInterval(() => {
    return timer(workTimeSeconds, workTimerSN, setRecentWorkTimer), 1000
  })
  setRecentWorkTimer(true)
}

function breakTimer(
  breakTimeMinutes, 
  breakTimerSN, 
  setRecentWorkTimer, 
  completedTimer
) {
  const breakTimeSeconds = breakTimeMinutes * 60
  currentTimerID = setInterval(() => timer(
      breakTimeSeconds,
      breakTimerSN,
      setRecentWorkTimer,
      completedTimer
    ), 
    [1000]
  )
  setRecentWorkTimer(false)
}

function breakTimerEnd(completedTimer, systemNotification) {
  completedTimer()
  systemNotification()
}


function timer(
  totalSeconds, 
  systemNotification, 
  setRecentWorkTimer, 
  onBreakCompletion = null
) {
  if (initialTime >= totalSeconds) {
    clearInterval(currentTimerID)
    initialTime = 0
    setRecentWorkTimer()
      ? systemNotification()
      : breakTimerEnd(onBreakCompletion, systemNotification)
  } else {
    initialTime += 1
  }
}
