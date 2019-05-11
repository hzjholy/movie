// api接口数据
/*
https://douban.uieee.com/v2/movie/search?q=搜索内容
*/
var API_URL = 'https://douban.uieee.com/v2/movie/search'


Page({
  data: {
  	movies: []
  },
  search:function(e){
  	// 聚焦判断
  	if(!e.detail.value){
  		// 没有搜索内容就不会执行搜索操作
  		return
  	}
  	wx.showToast({
  		title:"内容加载中...",
  		icon: "loading",
  		duration: 10000
  	})
  	var that = this
  	wx.request({
  		url: API_URL + "?q=" + e.detail.value,
  		data: {},
  		header:{
				"Content-Type":"json" // 默认值
		},
		success:function(res){
			// console.log(res.data)
			wx.showToast()
			that.setData({
				movies: res.data.subjects
			})
		}
  	})
  }
})
