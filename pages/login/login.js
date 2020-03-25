// pages/login/login.js
const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userimg: '',
    phoneNumber: '',
    password: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindGetUserInfo: function (event) {
    //console.log(event.detail.userInfo)
    let userInfo = event.detail.userInfo
    if(!this.logged&&userInfo){
      db.collection('users').add({
        data:{
          userPhoto: userInfo.avatarUrl,
          nickName :userInfo.nickName,
          links :0,
          time : new Date(),
          phoneNumber: '',
        }
      }).then((res)=>{
        db.collection('users').doc(res._id).get().then((res)=>{
          app.userInfo = Object.assign(app.userInfo,res.data)
          console.log(app.userInfo.userPhoto)
          var pages = getCurrentPages();
          var currPage = pages[pages.length - 1];
          var prevPage = pages[pages.length - 2];
          prevPage.setData({
            userPhoto : app.userInfo.userPhoto,
            nickName : app.userInfo.nickName,
            logged:true,
          })
          wx.navigateBack();
        })
      });
    }

  }
})