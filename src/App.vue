<template>
  RadioTablå by Tomas
  <RadioSchedule msg="Welcome to Your Vue.js App"/>
</template>

<script>
import RadioSchedule from './components/RadioSchedule.vue'
const {fetchData} = require('./services/ApiService')

fetchData('testing url');

export default {
  name: 'App',
  components: {
    RadioSchedule
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
