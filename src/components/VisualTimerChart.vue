<script>
import { Pie } from 'vue-chartjs'
// const { reactiveData } = mixins

export default {
  extends: Pie,
  name: "VisualTimer",
  // mixins: [reactiveData],
  props: [ "time" ],
  data() {
    return {
      chartData: {
        labels: ['Elapsed Time', 'Remaining Time'],
        datasets: [
          {
            backgroundColor: ['#f87979', '#fff'],
            data: [1, this.time()]
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
    // this.fillData()
    this.renderChart(this.chartData, this.options)
    console.log("mounted")
    this.initalizeTicking()
  },
  methods: {
    // fillData () {
    //   this.datacollection = {
    //     labels: ["Elapsed Time", "Remaining Time"],
    //     datasets: [
    //       {
    //         backgroundColor: '#f87979',
    //         data: [0, this.time()]
    //       },
    //     ]
    //   }
    // },
    initalizeTicking() {
      // let [ elapsed, remaining ] = this.chartData.datasets[0].data
      const totalSeconds = this.time()
      const currentTimerID = setInterval( () => {
        if (this.chartData.datasets[0].data[0] >= totalSeconds) {
          clearInterval(currentTimerID)
          console.log('data', this.$data)
          this.$data._chart.destroy()
        } else {
          // elapsed += 1
          // remaining -= 1
          // console.log('visualTimerChart: elapsed, remaining', elapsed, remaining)
          this.chartData.datasets[0].data[0] += 1
          this.chartData.datasets[0].data[1] -= 1
          this.$data._chart.update()
        }
      }, 1000)
    },
    // initalizeChartData() {
    //   this.chartData = {
    //     lables: ["Elapsed Time", "Remaining Time"],
    //     datasets: [
    //       {
    //         data: [0, this.time]
    //       }
    //     ]
    //   }
    //   console.log("initializeChartData")
    // },
  },
  watch: {
  //   time: function() {
  //     this.initalizeChartData()
  //     this.initalizeTicking()
  //   }
    data: function() {
      // this.$data._chart.update()
      // this._chart.destroy()
      // this.renderChart(this.chartData, this.options)
      console.log('watcher')
    }
  }
}
</script>