<template>
    <div class="noScheduleWrapper">
        <div v-if="api_error">
            <h1>Något gick snett när data skulle hämtas.</h1>
        </div>
        <div v-else>
            <h1>Ingen tablå hittades för denna dag.</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NoSchedule',
    props: {
        api_error: Boolean
    }
  }
</script>

<style>
    .noScheduleWrapper {
        background-color: #F1F1F3;
    }
</style>