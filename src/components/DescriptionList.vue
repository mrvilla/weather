<template>
	<ul class="description-list">
		<li class="description-list__item" v-for="day in list" :key="day.id">
			<div class="item__content">
				<time class="item__time" datetime="">{{new Date(day.dt_txt).toLocaleTimeString('en-GB').slice(0,5)}}
				</time>
				<WeatherIcon class="item__icon" v-for="icon in day.weather" :key="icon.id" :icon="icon.icon"></WeatherIcon>
				<div class="item__temp">{{Math.floor(day.main.temp)}}º</div>
			</div>
		</li>
	</ul>
</template>

<script>
    import WeatherIcon from "./WeatherIcon";

    export default {
        name: 'DescriptionList',
        data() {
            return {
                list: this.$store.state.weatherData.list
            }
        },
        components: {
            WeatherIcon
        }
    }
</script>

<style scoped>
	.description-list {
		display: flex;
		list-style: none;
		align-items: center;
		overflow: auto;
		flex-flow: row nowrap;
		scroll-snap-type: x proximity;
	}

	.item__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3.2em 4.8em;
	}

	.item__content:hover {
		background-color: var(--hover-bg-color);
	}

	.item__time {
		font-size: 2.3vw;
		color: var(--secondary-color);
	}

	.item__temp {
		font-weight: bold;
		font-size: 3.7vw;
		color: var(--main-color);
	}

	.item__icon {
		width: 6.5vw;
		padding: 3.2em 0;
	}
</style>
