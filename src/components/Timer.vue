<template>
  <li class="timer-value">
    <p>
      Work time: {{ timerValue.workTime || timerValue.work_time }}
    </p>
    <p>
      Break time: {{ timerValue.breakTime || timerValue.break_time }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'Timer',
  props: [ 'timerValue' ],  
}
</script>
