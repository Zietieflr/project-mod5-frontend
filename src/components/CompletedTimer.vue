<template>
  <li class="completed-timer">
    <p>
      Work time: {{ completedTimerValue.workTime }}
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