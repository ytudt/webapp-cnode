/*
 * @Author: Administrator
 * @Date:   2016-10-20 17:06:23
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-10-20 21:50:12
 */

'use strict';

const config = require('../../config/index.js')

// 创建一个页面对象用于控制页面的逻辑
Page({
    data: {
        title: '我是首页',
        hiddenLoading:false,
        articles: []
    },
    showDetail(event){
      // event.stopPropagation()
      console.log('dianji');
      console.log(event.target);
      console.log(event.target.dataset);
    },

    onLoad(params) {
      let that=this;
      console.log('indexonLoad');
      console.log(config.serverUrl+'topics');
        wx.request({
            // url: config.serverUrl+'/topics',
            url:config.serverUrl+'topics',
            data: {
                page: 1,
                tab: 'job',
                limt:5,
                mdrender:'true'
            },
            // header: {
            //     'Content-Type': 'application/json'
            // },
            success: function(res) {
              that.setData({
                articles:res.data.data,
                hiddenLoading:true
              });
                // console.log(res.data)
                // console.log(res.data.data)
            },
            fail:function(){
              console.log('fail');
            }

        })
    },

    onReady() {
        //wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
    }
})
