<template>
  <HeaderComponent />
  <div class="content">
    <div class="scheduleHeader">
    <div v-on:click="setPreviousDay" class="previousDay" v-b-tooltip.hover title="Tablå för föregående dag">
      &#8592;
    </div>
    <div class="scheduleHeaderInfo">
      Radiotablå den {{ this.scheduleDay.locale('sv').format('Do MMMM YYYY') }}
    </div>
    <div v-on:click="setNextDay" class="nextDay" v-b-tooltip.hover title="Tablå för nästa dag">
      &#8594;
    </div>
  </div>
  <div v-if="radioScheduleItems.length > 0">
    <RadioSchedule v-bind:schedule_data="radioScheduleItems" />
  </div>
  <div v-else>
    <NoSchedule v-bind:api_error="api_error"/>
  </div>
  </div>
</template>

<script>
import RadioSchedule from './components/RadioSchedule.vue'
import NoSchedule from './components/NoSchedule.vue'
import HeaderComponent from './components/HeaderComponent.vue'

var moment = require('moment');
import 'moment/locale/sv';

export default {
    components: {
      RadioSchedule, NoSchedule, HeaderComponent
    },
    data() {
      return {
        radioScheduleItems: Array,
        scheduleDay: moment(),
        api_error: false
      }
    },
    methods: {
      async getData() {
        const res = await fetch(`https://api.sr.se/api/v2/scheduledepisodes?channelid=164&format=json&pagination=false&date=${this.scheduleDay.format('Y-MM-DD')}`);
        if(!res.ok) this.api_error = true;
        else {
          const finalRes = await res.json();
          this.radioScheduleItems = finalRes.schedule;
        }
      }, 
      setPreviousDay() {
        this.scheduleDay.add(-1, 'days');
        this.getData();
        this.$forceUpdate();
      },
      setNextDay() {
        this.scheduleDay.add(1, 'days');
        this.getData();
        this.$forceUpdate();
      }
    },
    mounted() {
      this.getData();
      this.scheduleDay = moment();
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*, html {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}
body {
  background-color: #bfdefd;
}
.content {
  margin: 0 auto;
  width: 40vw;
  margin-top: 60px;
  margin-bottom: 60px;
}
.scheduleHeader {
  background-color: #e7e7e7;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.scheduleHeaderInfo {
  font-weight: bold;
}
.nextDay {
  cursor: pointer;
  min-width: 32px;
  float: right;
  margin-left: auto;
  font-size: 24px;
}
.previousDay {
  cursor: pointer;
  min-width: 32px;
  float: left;
  margin-right: auto;
  font-size: 24px;
}
@media (max-width: 1200px) {
  .content {
    width: 70vw;
  }
}
@media (max-width: 750px) {
  #app {
    margin-top: 0px;
  }
  .content {
    width: 100vw;
  }
}
</style>
