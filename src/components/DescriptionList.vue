<template>
	<ul class="description-list">
        <li class="description-list__item">
            <div class="item__content">
                <time class="item__time" datetime="">{{time}}</time>
                <WeatherSun class="item__icon" />
                <div class="item__temp">{{temp}}</div>
            </div>
        </li>
	</ul>
</template>

<script>
    import WeatherSun from "./icons/WeatherSun";

    export default {
        name: 'DescriptionList',
        props: {
            time: String,
            temp: String,
        },
        components: {
            WeatherSun
        }
    }
</script>

<style scoped>
    .description-list {
        display: flex;
        list-style: none;
        padding: 0;
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
