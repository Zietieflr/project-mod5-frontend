<template>
  <li class="completed-timer-value">
    <p>
      Work time: {{ completedTimerValue.workTime }}
    </p>
    <p>
      Break time: {{ completedTimerValue.breakTime }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'CompletedTimer',
  props: [ 'completedTimerValue' ],  
}
</script>