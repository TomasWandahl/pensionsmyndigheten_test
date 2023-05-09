<template>
    <div class="scheduleItemWrapper">
        <div class="item_header">
            <div class="header_info">{{parseStartTime(item.starttimeutc)}} - {{item.title}} {{ item.subtitle ? item.subtitle : '' }} </div>
            <div v-on:click="toggleDescription" class="description_toggle">
                {{ show_description ? '-' : '+' }}
            </div>
        </div>
        <div v-if="show_description" class="item_description">
            {{ item.description }}
        </div>

    </div>
</template>
  
  <script>
  var moment = require('moment');
  export default {
    name: 'ScheduleItem',
    props: {
        item: Object
    },
    data() {
        return {
            show_description: false
        }
    },
    methods: {
        parseStartTime(d) {
            const unixTime = parseInt(d.match(/\(([^)]+)\)/)[1]);
            return moment(unixTime).format('HH:mm');
        },
        toggleDescription() {
            this.show_description = !this.show_description;
        }
    }
  }
  </script>

  <style scoped>
    .scheduleItemWrapper {
    text-align: left;
    border: 1px solid #e8e8e8;
  }
  .item_header {
    background-color: #F1F1F3;
    height: 32px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .description_toggle {
    min-width: 32px;
    text-align: center;
    float: right;
    margin-left: auto;
    font-size: 8px 16px;
    cursor: pointer;
  }

  .item_description {
    background: #fff;
    padding: 16px;
    font-size: 16px;
  }

  </style>
  