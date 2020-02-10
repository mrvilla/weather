<template>
	<header class="header">
		<div class="header__content-desc">
			<WeatherIcon class="header__icon" :icon="icon"></WeatherIcon>
			<div class="header__description-content">
				<div class="description__content">
					<div class="content__main">{{main}}</div>
					<div class="content__temp-level">{{Math.floor(high)}}º/{{Math.floor(low)}}º</div>
				</div>
				<div class="overline__temp">{{Math.floor(temp)}}º</div>
			</div>
		</div>

		<div class="header__overline">
			<div class="overline__city">{{city}}</div>
			<time class="overline__date" datetime="">{{todayDate()}}</time>
		</div>
	</header>
</template>

<script>
    import WeatherIcon from "./WeatherIcon";

    export default {
        name: 'Header',
        props: [
            'main',
            'high',
            'low',
            'temp',
            'city',
            'date',
            'icon'
        ],
        components: {
            WeatherIcon
        },
        methods: {
            todayDate(today) {
                today = new Date();
                const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return week[today.getDay()] + ', ' + today.getDate() + ' ' + months[today.getMonth()];
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.overline__temp,
	.overline__date {
		color: var(--main-color);
	}

	.overline__date {
		font-size: 5vw;
	}

	.overline__temp {
		font-size: 13vw;
	}

	.description__content,
	.overline__city {
		font-size: 3vw;
		color: var(--secondary-color);
	}

	.header__icon {
		width: 17vw;
	}

	.description__content {
		display: flex;
		justify-content: space-between;
	}

	.header {
		text-transform: capitalize;
		display: flex;
		align-items: stretch;
		justify-content: space-evenly;
	}

	.header__content-desc {
		display: flex;
		justify-content: space-between;
		width: 48vw;
	}

	.header__description-content {
		display: flex;
		flex-direction: column;
	}

	.header__overline {
		width: 29vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
