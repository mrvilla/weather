<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

	/*Vars */
	:root {
		--main-bg-color: #262a59;
		--hover-bg-color: #51557a;
		--main-color: #fff;
		--secondary-color: #a8aabd;
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
