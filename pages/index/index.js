//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tomy: function () {
    wx.navigateTo({
      url: '../my/my'
    })
  },
  torelease: function () {
    wx.navigateTo({
      url: '../releaseTender/releaseTender'
    })
  },
  formSubmit:function(e){
      console.log(e.detail.value)
  },
  chooselocation: function (e) {
    var that=this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          //百度地图经纬度反查路径
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&location= ' + latitude + ',' + longitude + '&output=json&pois=0',
          data: {}, 
          method: "get",
          header: { 'Content-Type': 'application/json' },
          success: function (ops) {
            that.setData({
              name: ops.data.result.addressComponent.city
            })
      }
        
    })
  }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.request({
          //百度地图经纬度反查路径
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&location= ' + latitude + ',' + longitude + '&output=json&pois=0',
          data: {},
          method: "get",
          header: { 'Content-Type': 'application/json' },
          success: function (ops) {
            that.setData({
              name: ops.data.result.addressComponent.city
            })
          }

        })
      }
    })
    }
})
