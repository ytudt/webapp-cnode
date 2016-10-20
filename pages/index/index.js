/*
 * @Author: Administrator
 * @Date:   2016-10-20 17:06:23
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-10-20 18:00:47
 */

'use strict';
// Douban API 操作
const config = require('../../config/index.js')

// 创建一个页面对象用于控制页面的逻辑
Page({
    data: {
        title: '我是首页',
        articles: []
    },

    onLoad(params) {
      let that=this;
      console.log('indexonLoad');
        wx.request({
            // url: config.serverUrl+'/topics',
            url:'https://cnodejs.org/api/v1/topics',
            data: {
                page: 1,
                tab: 'share',
                limt:10,
                mdrender:'true'
            },
            // header: {
            //     'Content-Type': 'application/json'
            // },
            success: function(res) {
              that.setData({
                articles:res.data.data
              });
                // console.log(res.data)
                console.log(res.data.data)
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
