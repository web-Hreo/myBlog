<template>
	<view>
		<!-- 广告栏 -->
		<view class="ad">泡面早报|知乎推出商品推荐榜单、阿里收购企业协调知乎推出商品推荐榜单、阿里收购企业协调知乎推出商品推荐榜单、阿里收购企业协调</view>

		<!-- 输入框 -->
		<view>
			<textarea v-model="nairong" class="input" placeholder="留言将由公众号筛选后显示,对所有人可见." />
			</view>
		
		<!-- 表情管理 -->
		<view>
			<image src="../../static/Smile.jpg" class="smile"></image>
			<view class="line"></view>
		</view>
		
		<!-- 留言按钮 -->
		<view>
			<button v-if="this.nairong.length == 0" type="button" class="word">留 言</button>
			<button @click="word()" v-else type="button" class="words">留 言</button>
		</view>
		
		<!-- 留言内容 -->
		<view class="text" v-if="this.showText">
			<text style="font-size: 14px;color: #888888;">我的留言</text>
			<view class="comment" v-for="(speech,index) in arrry" :key="index">
				<image src="../../static/9dc2cbe19ccdd0bef8d3f8a71973623.png" class="head"></image>
				<view class="commentBody">
					<span class="fontNmae">李玲</span>
					<span class="fontcontent">{{speech}}</span>
					<span class="delData" @click="delData(index)">删除</span>
				</view>
			</view>
			<!-- <view v-for = "fkg in datas">
				{{fkg[0]}}
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		mounted:function(){
			
			// 将本地存有的留言记录显示出来
			var l = JSON.parse(localStorage.getItem('accessToken')||'[]')
			this.arrry = l
			if(l.length == 0){
				this.showText = false
			}else{
				this.showText = true
			}
		},
		methods: {
			word(){
				// 显示聊天背景
				this.showText = true
				// 添加一天数据
				this.arrry.push(this.nairong);
				// 同步本地储存
				localStorage.setItem('accessToken',JSON.stringify(this.arrry))
				this.nairong = '';
				uni.showToast({
				    title: '已留言',
				    duration: 2000
				});
			},
			delData(index){
				// 移除一个数据
				this.arrry.splice(index,1)
				// 同步到本地储存
				localStorage.setItem('accessToken',JSON.stringify(this.arrry))
				// 控制聊天背景的颜色 显示or隐藏
				if(this.arrry.length == 0){
					this.showText = false
				}
			}
		},
		data: function() {
			return {
				ssdf:'',
				nairong:'',
				arrry:[],
				showText:false
			}
		}
	}
</script>

<style>
	.commentBody {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		/* margin-right: 5%; */
		padding-left: 4%;
	}
	
	.fontNmae {
		font-size: 12px;
		color: #A5A5A5;
	}
	
	.fontcontent {
		font-size: 12px;
		color: #333333;
	}
	.delData{
		font-size: 12px;
		color: #4496d5;
	}
	.head {
		width: 30px;
		height: 30px;
		float: left;
		/* margin-right: 4%; */
	}
	.comment {
		/* float: left; */
		width: 100%;
		background-color: f2f2f2;
		margin-top: 4%;
	}
	.text{
		min-height:200px;
		width: 100%;
		background-color: #f2f2f2;
		padding-top: 12px;
		padding-bottom: 12px;
		padding-left: 8px;
		padding-right: 8px;
		margin-top: 40px;
	}
	.ad{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 90%;
		margin-left: 5%;
		font-size: 14px;
		color:#A5A5A5;
		margin-top: 5%;
		border-bottom: 1px solid #C8C7CC;
		padding-bottom: 2%;
	}
	.input{
		width: 90%;
		height: 80px;
		margin-left: 5%;
		margin-top: 4%;
		font-size: 15px;
	}
	.smile{
		width: 16px;
		height: 16px;
		margin-left: 5%;
	}
	.line{
		width: 90%;
		margin-left: 5%;
		height: 1px;
		background-color: #C8C7CC;
	}
	.word{
		background-color:#C0C0C0;
		width: 40%;
		height: 30px;
		font-size: 15px;
		text-align: center;
		color: #999999;
		line-height: 30px;
		border-radius: 4px;
		margin-top: 6%;
	}
	.words{
		background-color: #07c160;
		width: 40%;
		height: 30px;
		font-size: 15px;
		text-align: center;
		color: #ffffff;
		line-height: 30px;
		border-radius: 4px;
		margin-top: 6%;
	}
</style>
