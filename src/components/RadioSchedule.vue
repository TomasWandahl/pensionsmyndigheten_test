<template>
    <div class="scheduleWrapper">
        <ScheduleItem :key="index" v-bind:item="item" v-for="(item, index) in schedule_data"/>
    </div>
</template>
  
  <script>
  import ScheduleItem from './ScheduleItem.vue';
  export default {
    name: 'RadioSchedule',
    props: {
      schedule_data: Array
    },
    components: {
      ScheduleItem
    },
    methods: {
        parseStartTime(d) {
           return new Date(parseInt(d.match(/\(([^)]+)\)/)[1])).toTimeString().split(' ')[0];
        }
    },
    mounted() {
        console.log(this.schedule_data);
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .scheduleWrapper {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 8px;

    }
  </style>
  