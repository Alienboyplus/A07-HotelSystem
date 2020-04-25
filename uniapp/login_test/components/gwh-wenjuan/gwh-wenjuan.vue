<template>
	<view>
		<view v-if="type == 'select'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<radio-group class="columnDisplay">
				<view class="xuanxiang" v-for="(v,index) in value" :key="index" :data-value="v" @tap="select">
					<radio :checked="defaultValue.indexOf(v) >= 0"></radio>
					<view class="s">{{v}}</view>
				</view>
				
			</radio-group>
		</view>
		<view v-else-if="type == 'multi-select'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<checkbox-group class="columnDisplay">
				<view class="xuanxiang" v-for="(v,index) in value" :key="index"  :data-value="v" @tap="multiSelect">
					<checkbox :checked="defaultValue.indexOf(v) >= 0" :disabled="result.length == maxSelect && result.indexOf(v+'') < 0"></checkbox>
					<view class="s">{{v}}</view>
				</view>
				
			</checkbox-group>
		</view>
		<view v-else-if="type == 'boolean'" class="rowDisplay borderGrey">
			<view class="boolTitle">
				<view v-if="title.length != 0" class="title">{{title}}</view>
				<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			</view>
			<radio-group class="boolAction">
				<view>
					<view class="xuanxiang" data-value="true" @tap="select">
						<radio :checked="defaultValue.indexOf(true) >= 0 || value[0]==defaultValue"><view>{{this.value[0]?this.value[0]:'true'}}</view></radio>
					</view>
					<view class="xuanxiang" data-value="false" @tap="select">
						<radio :checked="defaultValue.indexOf(false) >= 0 || value[1]==defaultValue"><view>{{this.value[1]?this.value[1]:'false'}}</view></radio>
					</view>
				</view>
			</radio-group>
		</view>
		<view v-else-if="type == 'input'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<input v-model="result[0]" :placeholder="defaultValue==''?'请输入':defaultValue" @input="input" :maxlength="maxSelect>0?maxSelect:30" @confirm="input" @blur="input" />
		</view>
		<view v-else-if="type == 'textarea'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<textarea v-model="result[0]" :placeholder="defaultValue==''?'请输入':defaultValue" @input="input" :maxlength="maxSelect>0?maxSelect:200" @blur="input" @confirm="input" />
		</view>
		<view v-else-if="type == 'level'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<slider :min="value[0]" :max="value[1]" :step="value[2]?value[2]:1" v-model="result[0]?result[0]:value[0]" :value="result[0]" @change="slider" @changing="slider"></slider>
			<view class="rowDisplay">
				<view>{{value[0]}}</view>
				<input type="number" v-model="result[0]" @input="sliderChange" class="sliderInput" @confirm="sliderChange" @blur="sliderChange"></input>
				<view>{{value[1]}}</view>
			</view>
		</view>
		<view v-else-if="type == 'date'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<picker mode="date" :value="result[0]" @change="pickerDateSelect"><view class="datePicker">{{result[0]}}</view></picker>
		</view>
		<view v-else-if="type == 'time'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<picker mode="time" :value="result[0]" :start="value2[0]" :end="value2[1]" @change="pickerDateSelect"><view class="datePicker">{{result[0]}}</view></picker>
		</view>
		<view v-else-if="type == 'region'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<picker mode="multiSelector" :range="regionRange" :value="regionValue" @columnchange="pickerColumnChangeRegion" @change="pickerRegionSelect">
				<view class="datePicker">{{result[0]}}</view>
			</picker>
		</view>
		<view v-else-if="type == 'image'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<view class="imageContainer">
				<view v-for="(im,i) in result" :key="i" @longtap="imageMenu(i)" @tap="viewImage(i)">
					<image :src="im" class="imageBlock" mode="aspectFill"></image>
				</view>
				<view v-if="maxSelect > result.length || maxSelect == -1" class="imageBlock" @tap="addImage">
					<view>+</view>
				</view>
			</view>
		</view>
		<view v-else-if="type == 'phone'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<view class="rowDisplay">
				<input class="phone" v-model="result[0]" type="number" maxlength="11" placeholder="手机号" @input="input" @blur="input" @confirm="input" />
				<input class="code" v-model="result[1]" type="number" :maxlength="value2[0]" placeholder="验证码"  @input="input" @blur="input" @confirm="input" />
				<view class="sendButton bg-green" v-if="waitTime == 0" @tap="sendCode">发送验证码</view>
				<view class="sendButton bg-white" v-else>已发送({{waitTime}})</view>
			</view>
		</view>
		<view v-else-if="type == 'work'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<picker mode="multiSelector" :range="workRange" :value="workValue" @columnchange="pickerColumnChangeWork" @change="pickerWorkSelect">
				<view class="datePicker">{{result[0]}}</view>
			</picker>
		</view>
		<view v-else-if="type == 'university'" class="columnDisplay borderGrey">
			<view v-if="title.length != 0" class="title">{{title}}</view>
			<view v-if="subTitle.length != 0" class="subTitle">{{subTitle}}</view>
			<picker mode="multiSelector" :range="universityRange" :value="universityValue" @columnchange="pickerColumnChangeUniversity" @change="pickerUniversitySelect">
				<view class="datePicker">{{result[0]}}</view>
			</picker>
		</view>
		<!--view @tap="test">123</view-->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				result:[""],
				value2:[],
				init:false,
				regionRange:[[],[],[]],
				regionValue:[0,0,0],
				//加载区域
				regionJSON:{},
				//短信等待时间
				waitTime:0,
				//加载工作分类
				workJSON:{},
				workRange:[[],[]],
				workValue:[0,0],
				//加载学校分类
				universityJSON:{},
				universityRange:[[],[]],
				universityValue:[0,0],
				zoneList:[],
			}
		},
		mounted() {
			this.$set(this,'regionJSON',require('@/components/gwh-wenjuan/province.json'));
			this.$set(this,'workJSON',require('@/components/gwh-wenjuan/work.json'));
			this.$set(this,'universityJSON',require('@/components/gwh-wenjuan/university.json'));
			//console.log(this.type);
			if(this.type == "multi-select"){
				//console.log(this.defaultValue);
				if(typeof this.defaultValue == 'string'){
					//this.result[0] = this.defaultValue
					console.log(typeof this.defaultValue);
					this.$set(this.result,0,this.defaultValue)
				}
				else{
					this.result = this.defaultValue
					//console.log(typeof this.defaultValue)
					this.$set(this,'result',this.defaultValue)
				}
				//console.log(this.result)
			}
			else if(this.type == "level"){
				//console.log(this.defaultValue);
				if(typeof this.defaultValue == 'string' && !isNaN(parseInt(this.defaultValue)) &&
				parseInt(this.defaultValue) >= parseInt(this.value[0] + "") && 
				parseInt(this.defaultValue) <= parseInt(this.value[1] + "")
				){
					//console.log('default data is OK')
					this.$set(this.result,0,parseInt(this.defaultValue))
				}
				else{
					this.$set(this.result,0,parseInt(this.value[0]+""))
				}
				//console.log(this.result);
			}
			else if(this.type == 'date'){
				var date = new Date();
				if(this.defaultValue != undefined && this.defaultValue != null){
					date = new Date(this.defaultValue);
				}
				var dateString = date.getFullYear() + '-' + 
					((date.getMonth()+1) >= 10 ? (date.getMonth()+1) : ("0"+(date.getMonth()+1))) + '-' + 
					(date.getDate() >= 10 ? date.getDate() : ("0"+date.getDate()))
				this.$set(this.result,0,dateString);
				//console.log(this.result);
			}
			else if(this.type == 'time'){
				if(this.defaultValue != undefined && this.defaultValue != null){
					//console.log(this.defaultValue);
					var times = (this.defaultValue).split(':');
					if(times.length != 2 || isNaN(parseInt(times[0])) || isNaN(parseInt(times[1])) || 
					parseInt(times[0]) < 0 || parseInt(times[0]) > 23 || parseInt(times[1]) < 0 || parseInt(times[1]) > 59){
						var date = new Date();
						var hour = date.getHours() < 10 ? "0"+date.getHours():date.getHours();
						var minute = date.getMinutes() < 10 ? "0"+date.getMinutes():date.getMinutes();
						this.$set(this.result,0,hour+":"+minute);
						console.log(this.result)
					}
					else{
						this.$set(this.result,0,this.defaultValue);
						//console.log(this.result)
					}
				}
				else{
					var date = new Date();
					var hour = date.getHours() < 10 ? "0"+date.getHours():date.getHours();
					var minute = date.getMinutes() < 10 ? "0"+date.getMinutes():date.getMinutes();
					this.$set(this.result,0,hour+":"+minute);
					console.log(this.result)
				}
				if(this.value == undefined || this.value == null || this.value.length != 2){
					this.$set(this,'value2',['00:00','23:59'])
				}
				else{
					this.$set(this,'value2',this.value)
				}
				//console.log(this.value2);
				//console.log(this.result);
			}
			else if(this.type == 'region'){
				//console.log(this.regionJSON);
				//获取一级列表
				var province = this.regionJSON.province;
				var pRange = [];
				var p0 = null;
				for(var i in province){
					pRange.push(i);
					if(p0 == null){
						p0 = province[i];
					}
				}
				this.$set(this.regionRange,0,pRange);
				//获取初始的二级列表
				var cRange = [];
				var a0 = null;
				for(var i in p0){
					cRange.push(i);
					if(a0 == null){
						a0 = p0[i]
					}
				}
				this.$set(this.regionRange,1,cRange);
				//获取初始的三级列表
				this.$set(this.regionRange,1,a0);
				//console.log(this.regionRange);
				//初始化result0
				var regionString = this.regionRange[0][this.regionValue[0]]+'-'+
					this.regionRange[1][this.regionValue[1]];
				if(this.regionRange[2].length > 0){
					regionString += "-"+this.regionRange[2][this.regionValue[2]];
				}
				this.$set(this.result,0,regionString);
			}
			else if(this.type == "image"){
				this.$set(this,'result',this.result.splice(1,1));
				//console.log(this.result);
			}
			else if(this.type == 'phone'){
				var initValue = [];
				if(this.value != undefined && this.value != null && typeof this.value == 'object'){
					if(this.value.length > 0 && !isNaN(parseInt(this.value[0]))){
						//第一个参数是有几位验证码
						initValue.push(Math.max(parseInt(this.value[0]),2))
					}
					else{
						initValue.push(6)
					}
					if(this.value.length > 1 && !isNaN(parseInt(this.value[1]))){
						//第2个参数是等待时间S
						initValue.push(Math.max(parseInt(this.value[1]),1))
					}
					else{
						initValue.push(60)
					}
				}
				else{
					initValue.push(6)
					initValue.push(60)
				}
				this.$set(this,'value2',initValue);
				this.$set(this,'result',["",""]);
			}
			else if(this.type == 'work'){
				//console.log(this.workJSON);
				//获取一级列表
				var work = this.workJSON.work;
				var pRange = [];
				var p0 = null;
				for(var i in work){
					pRange.push(i);
					if(p0 == null){
						p0 = work[i];
					}
				}
				this.$set(this.workRange,0,pRange);
				//获取初始的二级列表
				this.$set(this.workRange,1,p0);
				//console.log(this.regionRange);
				//初始化result0
				var workString = this.workRange[0][this.workValue[0]]+'-'+
					this.workRange[1][this.workValue[1]];
				this.$set(this.result,0,workString);
			}
			else if(this.type == 'university'){
				var zone = this.universityJSON.zone;
				var zoneList = this.zoneList;
				var zoneRange = [];
				for(var i=0;i<zone.length;i++){
					zoneRange.push(zone[i].name)
					zoneList.push({
						id:zone[i].id,
						name:zone[i].name,
						schoolList:[]
					})
				}
				//console.log(zoneList);
				this.$set(this.universityRange,0,zoneRange);
				var school = this.universityJSON.university;
				//console.log(school)
				for(var i=0;i<school.length;i++){
					var asc = school[i];
					for(var j=0;j<zoneList.length;j++){
						if(zoneList[j].id == asc.zone){
							zoneList[j].schoolList.push(asc.name)
							break;
						}
					}
				}
				this.$set(this,'zoneList',zoneList);
				this.$set(this.universityRange,1,zoneList[0].schoolList);
				var universityString = this.universityRange[0][this.universityValue[0]]+'-'+
					this.universityRange[1][this.universityValue[1]];
				this.$set(this.result,0,universityString);
			}
		},
		methods:{
			select(e){
				console.log(e);
				this.$set(this.result,0,e.currentTarget.dataset.value);
				this.$emit('change',this.result);
			},
			multiSelect(e){
				//console.log(e);
				var value = e.currentTarget.dataset.value+"";
				var rs = this.result
				//console.log(this.result);
				var index = rs.map(String).indexOf(value)
				if(index>=0){
					rs.splice(index,1)
				}
				else if(this.maxSelect == -1 || rs.length < this.maxSelect){
					rs.push(value)
				}
				else{
					wx.showToast({
						title:'最多不超过：'+this.maxSelect,
						icon:'none'
					})
					
				}
				this.$set(this,'result',rs);
				//console.log(this.result);
				this.$emit('change',this.result);
			},
			input(e){
				//console.log(e);
				this.$nextTick(function(){
					this.$emit('change',this.result);
				})
			},
			slider(e){
				//console.log(e);
				this.$set(this.result,0,e.detail.value)
				this.result = this.result;
				this.$emit('change',this.result);
			},
			sliderClick(e){
				console.log(e);
			},
			sliderChange(){
				var result = this.result[0];
				if(result.length == 0) {
					this.$set(this.result,0,"");
					return;
				}
				result = parseInt(result+"");
				if(result < this.value[0]){
					this.$set(this.result,0,this.value[0])
				}
				else if(result > this.value[1]){
					this.$set(this.result,0,this.value[1])
				}
				else{
					this.$set(this.result,0,result);
				}
				console.log(this.result[0]);
				this.$emit('change',this.result);
			},
			pickerDateSelect(e){
				this.$set(this.result,0,e.detail.value);
				this.$emit('change',this.result);
			},
			pickerColumnChangeRegion(e){
				//console.log(e);
				//修改一级
				if(e.detail.column == 0){
					//更新2级
					//console.log(this.regionRange[0][e.detail.value])
					var newP = this.regionJSON.province[this.regionRange[0][e.detail.value]];
					//console.log(newP);
					var cRange = [];
					var a0 = null;
					for(var i in newP){
						cRange.push(i)
						if(a0 == null){
							a0 = newP[i]
						}
					}
					this.$set(this.regionValue,0,e.detail.value);
					this.$set(this.regionRange,1,cRange);
					this.$set(this.regionValue,1,0);
					//更新3级
					this.$set(this.regionRange,2,a0);
					this.$set(this.regionValue,2,0);
				}
				//修改2级
				else if(e.detail.column == 1){
					var newA = this.regionJSON.province[this.regionRange[0][this.regionValue[0]]][this.regionRange[1][e.detail.value]];
					this.$set(this.regionValue,1,e.detail.value);
					//更新3级
					this.$set(this.regionRange,2,newA);
					this.$set(this.regionValue,2,0);
				}
				else{
					this.$set(this.regionValue,2,e.detail.value);
				}
			},
			pickerColumnChangeWork(e){
				//console.log(e);
				//修改一级
				if(e.detail.column == 0){
					//更新2级
					//console.log(this.regionRange[0][e.detail.value])
					var newP = this.workJSON.work[this.workRange[0][e.detail.value]];
					//console.log(newP);
					this.$set(this.workValue,0,e.detail.value);
					this.$set(this.workRange,1,newP);
					this.$set(this.workValue,1,0);
				}
				else{
					this.$set(this.workValue,1,e.detail.value);
				}
			},
			pickerColumnChangeUniversity(e){
				//console.log(e);
				//修改一级
				if(e.detail.column == 0){
					//更新2级
					//console.log(this.regionRange[0][e.detail.value])
					var newP = this.zoneList[e.detail.value].schoolList;
					//console.log(newP);
					this.$set(this.universityValue,0,e.detail.value);
					this.$set(this.universityRange,1,newP);
					this.$set(this.universityValue,1,0);
				}
				else{
					this.$set(this.universityValue,1,e.detail.value);
				}
			},
			pickerRegionSelect(e){
				var regionString = this.regionRange[0][this.regionValue[0]]+'-'+
					this.regionRange[1][this.regionValue[1]];
				if(this.regionRange[2] != undefined && typeof this.regionRange == 'object' && this.regionRange[2].length > 0){
					regionString += "-"+this.regionRange[2][this.regionValue[2]];
				}
				this.$set(this.result,0,regionString);
				this.$emit('change',this.result);
			},
			pickerWorkSelect(e){
				var workString = this.workRange[0][this.workValue[0]]+'-'+
					this.workRange[1][this.workValue[1]];
				this.$set(this.result,0,workString);
				this.$emit('change',this.result);
			},
			pickerUniversitySelect(e){
				var universityString = this.universityRange[0][this.universityValue[0]]+'-'+
					this.universityRange[1][this.universityValue[1]];
				this.$set(this.result,0,universityString);
				this.$emit('change',this.result);
			},
			addImage(){
				var that = this;
				if(this.maxSelect > 0 && this.maxSelect <= this.result.length){
					uni.showToast({
						title:'图数('+this.result.length+'/'+this.maxSelect+'),不得插入',
						complete:function(res){
							that.$emit('change',that.result);
						}
					})
				}
				else{
					console.log(this.maxSelect);
					uni.chooseImage({
						count:this.maxSelect!=-1?(this.maxSelect-this.result.length):9,
						success:function(res){
							var newResult = [];
							for(var i=0;i<that.result.length;i++){
								newResult.push(that.result[i])
							}
							if(that.maxSelect > 0){
								for(var i=0;i<Math.min(that.maxSelect - that.result.length, res.tempFilePaths.length);i++){
									newResult.push(res.tempFilePaths[i])
								}
							}
							else{
								for(var i=0;i<res.tempFilePaths.length;i++){
									newResult.push(res.tempFilePaths[i])
								}
							}
							that.$set(that,'result',newResult);
							that.$emit('change',that.result);
						},
						fail:function(err){
							that.$emit('change',that.result);
						}
					})
				}
			},
			imageMenu(i){
				//console.log(i);
				var that = this;
				uni.showActionSheet({
					itemList:["向前移动","向后移动","替换图片","删除图片"],
					success:function(res){
						console.log(res.tapIndex);
						if(res.tapIndex == 0){
							//向前
							if(i > 0){
								var result = that.result;
								var img = result[i];
								result[i] = result[i-1];
								result[i-1] = img;
								var newResult = [];
								for(var j=0;j<result.length;j++){
									newResult.push(result[j]);
								}
								that.$set(that,'result',newResult);
								that.$emit('change',that.result);
							}
							else{
								uni.showToast({
									title:'无可替换',
									icon:'none',
									complete:function(res){
										that.$emit('change',that.result);
									}
								})
							}
						}
						else if(res.tapIndex == 1){
							//向后
							if(i < that.result.length - 1){
								var result = that.result;
								var img = result[i];
								result[i] = result[i+1];
								result[i+1] = img;
								var newResult = [];
								for(var j=0;j<result.length;j++){
									newResult.push(result[j]);
								}
								that.$set(that,'result',newResult);
								that.$emit('change',that.result);
							}
							else{
								uni.showToast({
									title:'无可替换',
									icon:'none',
									complete:function(res){
										that.$emit('change',that.result);
									}
								})
							}
						}
						else if(res.tapIndex == 2){
							uni.chooseImage({
								count:1,
								success:function(res){
									var result = that.result;
									//console.log(result);
									var newResult = [];
									for(var j=0;j<result.length;j++){
										if(i!=j){
											newResult.push(result[j]);
										}
										else{
											newResult.push(res.tempFilePaths[0])
										}
									}
									//console.log(newResult);
									that.$set(that,'result',newResult);
									/*that.$nextTick(()=>{
										console.log("refresh");
									});*/
									that.$emit('change',that.result);
								},
								fail:function(err){
									that.$emit('change',that.result);
								}
							})
						}
						else if(res.tapIndex == 3){
							uni.showModal({
								title:'消息',
								content:'您确认删除该图片吗？',
								success:(res)=>{
									if(res.confirm){
										var result = that.result;
										//console.log(result);
										var newResult = [];
										for(var j=0;j<result.length;j++){
											if(i!=j){
												newResult.push(result[j]);
											}
										}
										//console.log(newResult);
										that.$set(that,'result',newResult);
										//console.log(that.result);
										that.$emit('change',that.result);
									}
									else{
										that.$emit('change',that.result);
									}
								},
								fail:err=>{
									that.$emit('change',that.result);
								}
							})
						}
					}
				})
			},
			viewImage(i){
				uni.previewImage({
					urls:this.result,
					current:i
				})
			},
			sendCode(e){
				if(this.result[0].length == 11 && /^1[3456789]\d{9}$/.test(this.result[0])){
					this.$emit('send',this.result);
					this.$set(this,'waitTime',this.value2[1]);
					this.wait();
				}
				else{
					uni.showToast({
						title:'手机号错误',
						icon:'none'
					})
				}
			},
			wait(){
				if(this.waitTime > 0){
					setTimeout(()=>{
						this.$set(this,'waitTime',this.waitTime - 1);
						this.wait()
					},1000);
				}
			}
		},
		//name:'wenjuan',
		props:{
			type:{
				type:String,
				default:"select"
			},
			title:{
				type:String,
				default:""
			},
			subTitle:{
				type:String,
				default:""
			},
			value:{
				type:[String,Array],
				default:()=>{}
			},
			defaultValue:{
				type:[String,Array],
				default:()=>{}
			},
			maxSelect:{
				type:Number,
				default:-1
			}
		},
	}
</script>

<style scoped lang="scss">
	.columnDisplay{
		display: flex;
		flex-direction: column;
		margin-left: 2.5%;
		margin-right: 2.5%;
		width: 95%;
	}
	
	view{
		word-break: break-all;
	}
	
	.borderGrey{
		padding-bottom: 10upx;
		border-bottom: #ececec solid 1px;
		margin-bottom: 10upx;
	}
	
	.rowDisplay{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-left: 2.5%;
		margin-right: 2.5%;
		width: 95%;
		align-items: center;
	}
	
	.boolTitle{
		min-width: 50%;
		max-width: 70%;
		display: flex;
		flex-direction: column;
		word-break: break-all;
		
	}
	
	.boolAction view{
		display: flex;
		flex-direction: column;
		word-break: break-all;
	}
	
	.boolAction{
		max-width: 50%;
		min-width: 30%;
		display: flex;
		flex-direction: row-reverse;
	}
	
	.title{
		font-size: 35upx;
		// font-weight: bold;
		margin-bottom: 5upx;
		margin-top: 20upx;
	}
	
	.subTitle{
		font-size: 30upx;
		color: #a6a6a6;
		margin-bottom: 5upx;
	}
	
	input{
		background-color: #F8F8F8;
		padding-left: 10upx;
		padding-right: 10upx;
		padding-top: 10upx;
		padding-bottom: 10upx;
		font-size: 28upx;
	}
	
	textarea{
		background-color: #F8F8F8;
		padding-left: 2.5%;
		padding-right: 2.5%;
		padding-top: 10upx;
		padding-bottom: 10upx;
		width: 95%;
		max-lines: 5;
		min-height: 50upx;
		max-height: 150upx;
		display: flex;
	}
	
	.sliderInput{
		text-align: center;
		width: 30%;
	}
	
	.xuanxiang{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
	
	.xuanxiang .s{
		width:90%;
		word-break: break-all;
		font-size: 33upx;
		padding-top: 5upx;
	}
	
	.xuanxiang .s2{
		width:50%;
		word-break: break-all;
	}
	
	.datePicker{
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #F8F8F8;
		padding-left: 2.5%;
		padding-right: 2.5%;
		padding-top: 10upx;
		padding-bottom: 10upx;
		width: 95%;
	}
	
	.imageContainer{
		display: block;
		width: 95%;
		padding-left: 2.5%;
		padding-right: 2.5%;
		padding-top: 10upx;
		padding-bottom: 10upx;
	}
	
	.imageBlock{
		width: 21.6vw;
		margin-right: 0.4%;
		margin-left: 0.4%;
		margin-bottom: 0.4%;
		margin-top: 0.4%;
		display: flex;
		height: 21.6vw;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F1F1F1;
		float: left;
		line-height: 23%;
	}
	
	.phone{
		max-width:40%;
		background-color: #FFFFFF;
		border-bottom: 1px solid #C0C0C0;
	}
	
	.code{
		max-width:25%;
		text-align: center;
	}
	
	.sendButton{
		max-width: 25%;
		font-size: 25upx;
		text-align: center;
		padding-left: 15upx;
		padding-right: 15upx;
		padding-top: 15upx;
		padding-bottom: 15upx;
		border-radius: 10upx;
	}
	
	.bg-green{
		background-color: #4CD964;
		color: #FFFFFF;
	}
	
	.bg-white{
		background-color: #F8F8F8;
		color: #2C405A;
	}

	radio{
		transform: scale(0.7);
	}
</style>
