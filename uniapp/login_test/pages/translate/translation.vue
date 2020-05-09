<template>
    <view>
        <view class="uni-title uni-common-pl">翻译</view>
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-left">
                    当前语言
                </view>
                <view class="uni-list-cell-db">
                    <picker @change="bindPickerChange" :value="index" :range="array">
                        <view class="uni-input">{{array[index]}}</view>
                    </picker>
                </view>
            </view>
        </view>

        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-left">
                    目标语言
                </view>
                <view class="uni-list-cell-db">
                    <picker @change="bindLanguageChange" :value="index_into" :range="array_into">
                        <view class="uni-input">{{array_into[index_into]}}</view>
                    </picker>
                </view>
            </view>
        </view>
		
		<button type="primary" size="mini" @click="upload()">翻译</button>
		
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>{{remarks}}</text>
			</view>
		</view>

    </view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
	    data() {
	        return {
				remarks: '我，无所不知',
	            title: 'picker',
	            array: ['中文', 'English'],
				array_encode:['zh-CHS', 'en'],
	            index: 0,
	            array_into:['中文','English'],
				array_into_encode:['zh-CHS', 'en'],
				index_into: 0
	        }
	    },
	    computed: {
	    },
	    methods: {
			upload(){
				uni.request({
					url:"http://127.0.0.1:8000/translate/",
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
	        bindPickerChange: function(e) {
	            console.log('picker发送选择改变，携带值为', e.target.value)
	            this.index = e.target.value
	        },
	        bindLanguageChange: function(e) {
	            this.index_into = e.target.value
	        }
	    }
	}
</script>

<style>

</style>
