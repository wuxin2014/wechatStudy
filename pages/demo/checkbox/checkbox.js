// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { id: 1, name: 'USA', value: '美国' },
      { id: 2, name: 'CHN', value: '中国', checked: true },
      { id: 3, name: 'BRA', value: '巴西' },
      { id: 4, name: 'JPN', value: '日本' },
      { id: 5, name: 'ENG', value: '英国' },
      { id: 6, name: 'TUR', value: '法国' },
    ],
    ids: [],
    isAllCheck: false
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    const items = this.data.items;
    const length = items.length;
    let ids = [];
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < e.detail.value.length; j++) {
        if (items[i].name === e.detail.value[j]) {
          ids.push(items[i].id);
          break;
        }
      }
    }
    this.setData({ids});
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

  sureOk: function() {
    if (this.data.ids.length > 0) {
      console.log('hahah', this.data.ids);
    } else {
      console.log('hahah', '请选择');
    }
  },

  checkedAll: function() {
    let isCheckAll; 
    let checkedValue;
    let ids;

    if (!this.data.isAllCheck) {
      isCheckAll = true;
      checkedValue = true;
      ids = this.data.items.map((item) => {
        return item.id;
      });
    } else {
      isCheckAll = false;
      checkedValue = false;
      ids = [];
    }

    const items = this.data.items.map((item) => {
      item.checked = checkedValue;
      return item;
    });

    console.log('hahah', items);
    this.setData({items, ids, isAllCheck: isCheckAll});
  }
})