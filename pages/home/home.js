/*
 * @Author: Stevie
 * @Date: 2021-08-05 16:56:47
 * @LastEditTime: 2021-08-06 13:55:15
 * @LastEditors: Stevie
 * @Description:
 */
// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: 'Stevie',
    welcomeText: '欢迎你',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('object :>> ')
    this.setData({ welcomeText: '欢迎' })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('this :>> ', this)
  },

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
})
