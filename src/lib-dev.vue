<script>
import { OrdisLibSample } from './entry';
export default {
    name:  'OrdisLibLibDev', // vue library dev component
    components: {
        OrdisLibSample,
    },
}
</script>

<template>
    <div class="ordis-lib-lib-dev">
        <ordis-lib-sample></ordis-lib-sample>
    </div>
</template>

<style scoped>
    .ordis-lib-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
