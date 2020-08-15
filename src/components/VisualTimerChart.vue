<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  name: "VisualTimer",
  props: [ "time", "setStart" ],
  data() {
    return {
      chartData: {
        datasets: [
          {
            backgroundColor: ['#f87979', '#fff'],
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
          this.$data._chart.update()
        }
      }, 1000)
    },
  },
}
</script>