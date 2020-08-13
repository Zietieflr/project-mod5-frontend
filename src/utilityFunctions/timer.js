let currentTimerID = null
let recentWorkTimer = false
let initialTime = 0

export function startTimer(
    timeValues, 
    completedTimer, 
    workTimerSN, 
    breakTimerSN
  ) {
  recentWorkTimer 
    ? breakTimer(timeValues.breakTime, breakTimerSN, completedTimer) 
    : workTimer(timeValues.workTime, workTimerSN)
}

export function workTimer(workTimeMinutes, workTimerSN) {
  const workTimeSeconds = workTimeMinutes * 60
  currentTimerID = setInterval(() => timer(workTimeSeconds, workTimerSN), 1000)
  recentWorkTimer = true
}

export function breakTimer(breakTimeMinutes, breakTimerSN, completedTimer) {
  const breakTimeSeconds = breakTimeMinutes * 60
  currentTimerID = setInterval(() => timer(
      breakTimeSeconds,
      breakTimerSN,
      completedTimer
    ), 
    [1000]
  )
  recentWorkTimer = false
}

function breakTimerEnd(completedTimer, systemNotification) {
  completedTimer()
  systemNotification()
}

export function resetTimer() {
  clearInterval(currentTimerID)
  recentWorkTimer = false
}

function timer(totalSeconds, systemNotification, onBreakCompletion = null) {
  if (initialTime >= totalSeconds) {
    clearInterval(currentTimerID)
    initialTime = 0
    recentWorkTimer 
      ? systemNotification()
      : breakTimerEnd(onBreakCompletion, systemNotification)
  } else {
    initialTime += 1
  }
}
