//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    scaleHeight:46,
    scaleWidth: 375,
    oldDistance:0
  },
  scaleimg: function (e){
    if (e.touches.length<1){
      return
    }
    var that = this
    var newDistance
    var xMove = e.touches[1].clientX - e.touches[0].clientX;
    var yMove = e.touches[1].clientY - e.touches[0].clientY;
    newDistance = Math.sqrt(xMove*xMove + yMove*yMove);
    var distanceDiff = (newDistance - that.data.oldDistance)
    var newScale = 1 + 0.005 * distanceDiff
    console.log(that.data.oldDistance)
    console.log(distanceDiff)
    console.log(newScale)
    that.setData({
      oldDistance: newDistance,
      scaleWidth: newScale * that.data.scaleWidth < 375 ? 375 : newScale * that.data.scaleWidth,
      scaleHeight: newScale * that.data.scaleHeight 
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
