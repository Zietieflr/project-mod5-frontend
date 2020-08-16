<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  name: "VisualTimer",
  props: [ "time", "setStart", "decreaseTime" ],
  data() {
    return {
      chartData: {
        datasets: [
          {
            // hsl(270, 95%, 70%) & hsl(270, 50%, 100%)
            backgroundColor: ['#5E09B3', '#BF80FF'],
            data: [0, this.time()]
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
    this.initalizeTicking()
  },
  methods: {
    initalizeTicking() {
      const totalSeconds = this.time()
      const currentTimerID = setInterval( () => {
        if (this.chartData.datasets[0].data[0] >= totalSeconds) {
          clearInterval(currentTimerID)
          this.setStart(false)
          this.$data._chart.destroy()
        } else {
          this.chartData.datasets[0].data[0] += 1
          this.chartData.datasets[0].data[1] -= 1
          this.decreaseTime()
          this.$data._chart.update()
        }
      }, 1000)
    },
  },
}
</script>