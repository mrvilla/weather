<template>
	<div>
		<ClearDay v-if="icon === '01d'"></ClearDay>
		<ClearNight v-if="icon === '01n'"></ClearNight>
		<CloudDay v-if="icon === '02d'"></CloudDay>
		<CloudNight v-if="icon === '02n'"></CloudNight>
		<CloudD v-if="icon === '03d'"></CloudD>
		<CloudN v-if="icon === '03n'"></CloudN>
		<CloudyDay v-if="icon === '04d'"></CloudyDay>
		<CloudyNight v-if="icon === '04n'"></CloudyNight>
		<RainD v-if="icon === '10d'"></RainD>
		<RainN v-if="icon === '10n'"></RainN>
		<StormD v-if="icon === '11d'"></StormD>
		<StormN v-if="icon === '11n'"></StormN>
		<SnowD v-if="icon === '13d'"></SnowD>
		<SnowN v-if="icon === '13n'"></SnowN>
		<FogD v-if="icon === '50d'"></FogD>
		<FogN v-if="icon === '50n'"></FogN>
	</div>
</template>

<script>
    import ClearDay from './icons/ClearDay'
    import ClearNight from './icons/ClearNight'
    import CloudDay from './icons/CloudDay'
    import CloudNight from './icons/CloudNight'
    import CloudD from './icons/Cloud'
    import CloudN from './icons/Cloud'
    import CloudyDay from './icons/Cloudy'
    import CloudyNight from './icons/Cloudy'
    import RainD from './icons/Rain'
    import RainN from './icons/Rain'
    import StormD from './icons/Storm'
    import StormN from './icons/Storm'
    import SnowD from './icons/Storm'
    import SnowN from './icons/Storm'
    import FogD from './icons/Fog'
    import FogN from './icons/Fog'

    export default {
        name: "WeatherIcon",
        props: ['icon'],
        components: {
            ClearDay,
            ClearNight,
            CloudDay,
            CloudNight,
            CloudD,
            CloudN,
            CloudyDay,
            CloudyNight,
            RainD,
            RainN,
            StormD,
            StormN,
            SnowD,
            SnowN,
            FogD,
            FogN
        }
    }
</script>