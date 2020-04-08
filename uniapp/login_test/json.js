const tabList = [{
	name: '关注',
	id: '1',
}, {
	name: '推荐',
	id: '2'
}, {
	name: '体育',
	id: '3'
}, {
	name: '热点',
	id: '4'
}, {
	name: '财经',
	id: '5'
}, {
	name: '娱乐',
	id: '6'
}, {
	name: '军事',
	id: '7'
}, {
	name: '历史',
	id: '8'
}, {
	name: '本地',
	id: '9'
}];
const newsList = [{
		id: 1,
		title: '人间最美四月天，让我们逃离人山人海，住进美宿，登山赏花看海!',
		author: '中国旅游新闻网',
		images: [
			'https://i.loli.net/2020/04/08/E8mpid1bSZjD7Or.png',
			'https://i.loli.net/2020/04/08/n9U8u4TaX5lt3gh.png',
			'https://i.loli.net/2020/04/08/LUvjTuiHeJoCPgR.png',
		],
		time: '2020-04-05',
		type: 3,
	},

	{
		id: 2,
		title: '华住抗疫尽显“一不怕苦,二不怕死”的英雄本色',
		author: '华住集团',
		images: ['https://i.loli.net/2020/04/08/i3rzxwQd2R9BmtE.jpg'],
		time: '2020-04-05',
		type: 1,
	},
	{
		id: 3,
		title: '国际认证!半边山下民宿学院获伦敦国际杰出建筑设计铂金大奖',
		author: '旅新网',
		images: [
			'https://i.loli.net/2020/04/08/gCjrTAYLO6DZWqh.jpg',
			'https://i.loli.net/2020/04/08/baGF4y8dfTMkl5h.png',
			'https://i.loli.net/2020/04/08/oAfGqnhKUSdNmsy.jpg',
		],
		time: '2020-04-04',
		type: 3,
	},
	{
		id: 4,
		title: '万达酒店及度假村携手华夏航空 打造专属“春天航班” 温暖复工之旅',
		author: '万达集团',
		images: [
			'https://i.loli.net/2020/04/08/c8yioB1KluUfnzG.jpg'
		],
		videoSrc: 'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4',
		time: '2020-04-04',
		type: 2,
	},
	{
		id: 5,
		title: '自由呼吸 烂漫春光 万达美华系列酒店已开启全年住宿福利',
		images: ['https://i.loli.net/2020/04/08/feZbm3jsupUkVa6.jpg'],
		videoSrc: 'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4',
		time: '2020-04-04',
		type: 3,
	},
	{
		id: 6,
		title: '复苏时期，用户思维助力7天酒店抓住机遇',
		author: '北国网',
		images: [],
		time: '2020-04-04',
		type: 3,
	},
	{
		id: 7,
		title: '盘点：民宿设计常用的室内装修风格(上)',
		author: '民宿设计',
		images: [
			'https://i.loli.net/2020/04/08/sJR5fK3TZCzLQ7V.png',
			'https://i.loli.net/2020/04/08/Hglw5AzBirpo7eq.png',
			'https://i.loli.net/2020/04/08/bucJFBWdOiRUQvq.jpg',
		],
		time: '2020-04-04',
		type: 3,
	},
	{
		id: 8,
		title: '中山利和威斯汀酒店采用罗格朗RCU客房控制系统',
		images: [
			'https://i.loli.net/2020/04/08/qCVoFYXDlnvB2uf.png',
			'https://i.loli.net/2020/04/08/VOrHzLcRgSvB9pY.png',
			'https://i.loli.net/2020/04/08/G8rfwSDPkY3V6nv.png',
		],
		time: '2020-04-04',
		type: 3,
	},
]
const evaList = [{
		src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
		nickname: 'Ranth Allngal',
		time: '09-20 12:54',
		zan: '54',
		content: '这样子的民宿我也想去住。'
	},
	{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
		nickname: 'Ranth Allngal',
		time: '09-20 12:54',
		zan: '54',
		content: '我和楼上有一样的想法。'
	}
]

export default {
	tabList,
	newsList,
	evaList
}
