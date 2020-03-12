<template>
	<loginComponents></loginComponents>
</template>

<script>
	import login from '@/components/loginComponents.vue'
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		components:{
			'loginComponents' : login
		}
	}
</script>

<style>

</style>
