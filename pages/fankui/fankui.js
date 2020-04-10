// pages/fankui/fankui.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    inputInfo: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  DateChange(e) {
    this.setData({
      date: e.detail.value,
    })
  },
  cons() {
    let that = this
    if (this.data.inputInfo == '') {
      wx.showToast({
        title: '请输入内容',
        image: '/static/wrong.png',
        duration: 4000,
      })
    } else {
      var _that = that
      wx.showToast({
        title: '是否提交',
        icon: 'success',
        success: function () {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 3000,
          })
          _that.data.inputInfo = ''
        },
      })
      that.setData({
        inputInfo: '',
      })
    }
  },
  adInputChange: function (e) {
    console.log(this.data.inputInfo)
    let that = this
    if (e.detail.value.length < 1) {
      that.setData({
        inputInfo: '',
      })
    } else {
      that.setData({
        inputInfo: e.detail.value,
      })
    }
  },
})
