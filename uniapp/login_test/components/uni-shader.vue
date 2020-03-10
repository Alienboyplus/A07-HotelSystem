<template>
	<view class="container">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		z-index: 9999999999;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.7);
		box-sizing: border-box;
	}
</style>
