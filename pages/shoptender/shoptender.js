//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    mun:1
  },
  active1:function(e){
    var that = this
    that.setData({
      mun: 1
    })
  },
  active2: function (e) {
    var that = this
    that.setData({
      mun: 2
    })
  },
  active3: function (e) {
    var that = this
    that.setData({
      mun: 3
    })
  },
  active4: function (e) {
    var that = this
    that.setData({
      mun: 4
    })
  },
  active5: function (e) {
    var that = this
    that.setData({
      mun: 5
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
