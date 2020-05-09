<template>
    <view>
        <view style="width: 80%; margin: auto; margin-bottom: 20px;">
			<xfl-select 
				:list="first_language"
				:clearable="false"
				:showItemNum="5" 
				:listShow="true"
				:isCanInput="true"  
				:style_Container="'height: 50px; font-size: 16px;'"
				:placeholder = "'placeholder'"
				:initValue="'请选择源语言'"
				:selectHideType="'hideAll'"
			>
			</xfl-select>
		</view>
		
		<view style="width: 80%; margin: auto; margin-bottom: 20px;">
			<xfl-select 
				:list="second_language"
				:clearable="false"
				:showItemNum="5" 
				:listShow="true"
				:isCanInput="true"  
				:style_Container="'height: 50px; font-size: 16px;'"
				:placeholder = "'placeholder'"
				:initValue="'请选择目标语言'"
				:selectHideType="'hideAll'"
			>
			</xfl-select>
		</view>
		
		<button type="primary" @click="upload()">翻译</button>
		
		<view class="text-box" scroll-y="true">
			<text>{{text}}</text>
		</view>

    </view>
</template>

<script>
	import xflSelect from '../../components/xfl-select/xfl-select.vue'; 
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
	    data() {
	        return {
				first_language: [       //要展示的数据
					{value: '请选择源语言', disabled: true},
					'English',
					'中文',
				],
				second_language: [       //要展示的数据
					{value: '请选择目标语言', disabled: true},
					'English',
					'中文',
				],
				text:'123'
			}
	    },
		components: { xflSelect },  //注册为子组件
	    methods: {
			upload(){
				uni.request({
					url:"http://39.106.209.123:8000/translate/",
					data:{
						input_text:this.remarks,
						language_from:this.array_encode[this.index],
						language_to:this.array_into_encode[this.index_into]
					},
					success: (res) => {
						console.log(res.data)
						var s = JSON.parse(res.data.rsp)
						console.log(s.translation)
					},
					fail: (res) => {
						console.log(res.data)
					},
					method:'POST'
				})
			},
			change({newVal, oldVal, index, orignItem}){ 
				console.log(newVal, oldVal, index, orignItem);
			}
	    }
	}
	
</script>

<style>
</style>

<!--
*插件链接：https://ext.dcloud.net.cn/plugin?id=518
-->
