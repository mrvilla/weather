<template>
	<div id="app">
		<div class="home">
			<Header :main="weatherData.list[0].weather[0].main" :high="weatherData.list[0].main.temp_max" :low="weatherData.list[0].main.temp_min" :temp="weatherData.list[0].main.temp" :city="weatherData.city.name" :icon="weatherData.list[0].weather[0].icon"  />
			<DescriptionList />
		</div>
	</div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import DescriptionList from "@/components/DescriptionList"
    import {mapState} from "vuex"

    export default {
        name: 'App',
        data() {
            const {city, list} = this.$store.state.weatherData;
            const {weather, main} = list[0];

            return {
                high: main.temp_max,
                main: weather[0].main,
                low: main.temp_min,
                temp: main.temp,
                icon: weather[0].icon,
                city: city.name
            }
        },
        computed: {
            ...mapState(['weatherData']),
        },
        async created() {
            await this.$store.dispatch("loadWeather");
        },
        methods: {},
        components: {
            Header,
            DescriptionList
        }
    }
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

	/*Vars */
	:root {
		--main-bg-color: #4800de;
		--hover-bg-color: #6d3fde;
		--main-color: #b4de4c;
		--secondary-color: #b4de4c;
	}

	html {
		font-size: 16px;
	}

	body {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		background-color: var(--main-bg-color);
	}

	#app {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 100vh;
	}
</style>
