// pages/demo/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {id: 1, name: 'USA', value: '美国' },
      {id: 2, name: 'CHN', value: '中国', checked: 'true' },
      {id: 3, name: 'BRA', value: '巴西' },
      {id: 4,  name: 'JPN', value: '日本' },
      {id: 5, name: 'ENG', value: '英国' },
      {id: 6, name: 'TUR', value: '法国' },
    ]
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
  radioChange:  function(e) {
    console.log(e);
  }
})