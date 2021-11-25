<template>
  <div class="MySalary">
    <h4>Enter your income in TRY for each relevant end of the year.</h4>
    <div class="salaries">
      <div class="salary">
        <input v-model="salaries[2014]" placeholder="2014 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2015]" placeholder="2015 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2016]" placeholder="2016 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2017]" placeholder="2017 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2018]" placeholder="2018 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2019]" placeholder="2019 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2020]" placeholder="2020 salary" />
      </div>
      <div class="salary">
        <input v-model="salaries[2021]" placeholder="2021 salary" />
      </div>
    </div>
    <div class="button"><button v-on:click="calculate">Draw</button></div>
    <div class="graphics">
      <Graphics
        v-if="visibility"
        :years="years_array"
        :salaryUsdTL="salaryCurrencyRatio"
      >
      </Graphics>
    </div>
  </div>
</template>

<script>
import Graphics from "@/views/Graphics.vue";

export default {
  name: "Home",
  components: {
    Graphics,
  },
  data() {
    return {
      visibility: false,
      years_array: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      salaries: [{}],
      usdTryList: [{}],
      salaryCurrencyRatio: [],
    };
  },
  mounted() {
    this.usdTryList[2014] = 2.3;
    this.usdTryList[2015] = 2.9;
    this.usdTryList[2016] = 3.5;
    this.usdTryList[2017] = 3.7;
    this.usdTryList[2018] = 5.3;
    this.usdTryList[2019] = 5.95;
    this.usdTryList[2020] = 7.3;
    this.usdTryList[2021] = 12.3;
  },
  methods: {
    calculate() {
      for (let index = 2014; index < 2022; index++) {
        this.salaryCurrencyRatio.push(
          this.salaries[index] / this.usdTryList[index]
        );
      }
      this.visibility = true;
    },
  },
};
</script>

<style lang="css" scoped>
.salary {
  display: block;
}
</style>
