// api接口数据
/*https://douban.uieee.com/v2/movie/subject/1295644*/
var API_URL = 'https://douban.uieee.com/v2/movie/subject/'

Page({
    data: {
    	movie: {}
    },
    onLoad: function(params) {
    	var that = this
        // 参数一：接受传入的参数,参数对象params
        // 获取参数id，从index传参
        // console.log(params)
        // url拼接
        // 请求
        wx.request({
            url: API_URL + params.id, 
            data: {
            },
            header: {
                "Content-Type":"json" // 默认值
            },
            success(res) {
                // console.log(res.data)
                that.setData({
                	movie: res.data
                })
            }
        })
    }
})