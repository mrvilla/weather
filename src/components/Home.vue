<template>
	<div class="home">
		<Header main="clear" level="12º/2º" temp="10º" city="munich" date="thursday 28. march"/>
		<DescriptionList time="11:00" temp="20º"/>
	</div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import DescriptionList from "@/components/DescriptionList";

    export default {
        name: 'home',
        components: {
            Header,
            DescriptionList
        }
    }
</script>
<style scoped>

</style>

