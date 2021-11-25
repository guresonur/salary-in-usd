<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    salaryUsdTL: Array,
    years: Array,
  },
  data() {
    return {
      chartData: {
        labels: this.years,
        datasets: [
          {
            label: "USD Salary in years",
            data: this.salaryUsdTL,
            fill: true,
            borderColor: "#2554FF",
            backgroundColor: "#2554FF",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
<style></style>
