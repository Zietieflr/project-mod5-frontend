let currentTimerID = null
let recentWorkTimer = false
let initialTime = 0

export function startTimer(timeValues, completedTimer) {
  recentWorkTimer ? breakTimer(timeValues.breakTime, completedTimer) : workTimer(timeValues.workTime)
}

export function workTimer(workTimeMinutes) {
  const workTimeSeconds = workTimeMinutes * 60
  currentTimerID = setInterval(() => timer(workTimeSeconds), 1000)
  recentWorkTimer = true
}

export function breakTimer(breakTimeMinutes, completedTimer) {
  const breakTimeSeconds = breakTimeMinutes * 60
  currentTimerID = setInterval(() => timer(breakTimeSeconds, completedTimer), [1000])
  recentWorkTimer = false
}

function breakTimerEnd(completedTimer) {
  alert('Break Timer worked!')
  completedTimer()
}

export function resetTimer() {
  clearInterval(currentTimerID)
  recentWorkTimer = false
}

function timer(totalSeconds, onBreakCompletion = null) {
  if (initialTime >= totalSeconds) {
    clearInterval(currentTimerID)
    initialTime = 0
    recentWorkTimer ? alert('Work Timer worked!') : breakTimerEnd(onBreakCompletion)
  } else {
    initialTime += 1
  }
}
