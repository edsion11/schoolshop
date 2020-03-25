// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '注册 / 登录',
    userte: '新用户登录送999元现金红包',
    nickName: 'username',
    usertext: '欢迎您！',
    logged: false,
    userPhoto: '../../static/touxiang.svg',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  toLogin: function () {
    /* this.setData({
      logged: false,
      loggedin: true
    }) */
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },
  navToDingdan:function(){
    wx.navigateTo({
      url: '/pages/dingdan/dingdan',
    })
  },
  navToNotice: function () {
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },
  navToSettings: function () {
    wx.navigateTo({
      url: '/pages/settings/settings',
    })
  },
  navToFankui: function () {
    wx.navigateTo({
      url: '/pages/fankui/fankui',
    })
  },
})