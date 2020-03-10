<template>
	<text :class="['icon icon-'+type]" :style="{color:color,'font-size':fontSize}" @tap="onClick()"></text>
</template>

<script>
	import "./i-icon.css"
	export default {
		props: {
			/**
			 * 图标类型
			 */
			type: String,
			/**
			 * 图标颜色
			 */
			color: String,
			/**
			 * 图标大小
			 */
			size: {
				type: [Number, String],
				default: 24
			}
		},
		computed: {
			fontSize() {
				var _size = Number(this.size)
				_size = isNaN(_size) ? 24 : _size
				return `${_size}px`
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>
