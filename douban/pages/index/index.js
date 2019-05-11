// 获取豆瓣api数据
var API_URL = 'https://douban.uieee.com/v2/movie/top250'

Page({
	
	data:{
		// 存储电影数据
		movies: [],
		// 设置标题
		title: "加载中",
	},
	// 加载
	onLoad:function(){
		// 保存this实例
		var that = this
		// 页面一开始，出现加载中的提示
		// 界面--交互
		// 显示消息提示框 wx.showToast(Object object)
		wx.showToast({
			// title	string		是	提示的内容
			title: '请稍等......',
			// icon	string	'success'	否	图标
			/*
			success	显示成功图标，此时 title 文本最多显示 7 个汉字长度
			loading	显示加载图标，此时 title 文本最多显示 7 个汉字长度
			none	不显示图标，此时 title 文本最多可显示两行，1.9.0及以上版本支持
			*/
			icon: 'loading',
			// duration	number	1500	否	提示的延迟时间
			// 10000就是10s
			duration: 10000,
		});

		// 发起 HTTPS 网络请求
		wx.request({
			// url	string		是	开发者服务器接口地址
			url: API_URL,
			// data	string/object/ArrayBuffer		否	请求的参数
			data: {},
			/*
			header	Object		否	设置请求的 header，
			header 中不能设置 Referer
			content-type 默认为 application/json
			*/
			header:{
				"Content-Type":"json" // 默认值
			},
			// success	function		否	接口调用成功的回调函数
			success:function(res){
				// 隐藏消息提示框
				// wx.hideToast(Object object)
				wx.hideToast();
				console.log(res.data)
				// 数据存储于data
				var data = res.data
				// 修改数据
				that.setData({
					// 修改标题
					title: data.title,
					movies: data.subjects

				})
			}

		})
	},

	// tab跳转
	// toDetails:function(){
	// 	wx.switchTab({
	// 		url: "../movie/movie"
	// 	})
	// }
})
