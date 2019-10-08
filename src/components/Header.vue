<template>
	<div class="header">
		<div class="header__content-desc">
			<WeatherSun class="header__icon"/>
			<div class="header__description-content">
				<div class="description__content">
					<div class="content__main">{{main}}</div>
					<div class="content__temp-level">{{level}}</div>
				</div>
				<div class="overline__temp">{{temp}}</div>
			</div>
		</div>

		<div class="header__overline">
			<div class="overline__city">{{city}}</div>
			<time class="overline__date" datetime="">{{date}}</time>
		</div>
	</div>
</template>

<script>
    import WeatherSun from "./icons/WeatherSun";
    import { mapState } from 'vuex'

    export default {
        name: 'Header',
        props: {
            main: String,
            level: String,
            temp: String,
            city: String,
            date: String,
        },
        components: {
            WeatherSun
        },
        mounted: function () {
            this.$store.dispatch('loadList')
        },
        computed: mapState([
            'list'
        ])
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
