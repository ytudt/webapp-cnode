/*
 * @Author: Administrator
 * @Date:   2016-10-20 17:06:23
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-10-21 11:39:51
 */

'use strict';

const config = require('../../config/index.js')
const utils = require('../../utils/index.js')
console.log(utils);

// 创建一个页面对象用于控制页面的逻辑
Page({
    data: {
        title: '我是首页',
        hiddenLoading: false,
        articles: []
    },
    showDetail(event) {
        // event.stopPropagation()
        console.log('dianji');
        console.log(event);
        console.log(event.target.dataset.itemId);
        wx.navigateTo({
            url: '../detail/detail?id='+event.target.dataset.itemId
        })
    },

    onLoad(params) {
        let that = this;
        console.log('indexonLoad');
        console.log(config.serverUrl + 'topics');
        console.log(params);
        let title=params.title==undefined?'ask':params.title
        wx.request({
            // url: config.serverUrl+'/topics',
            url: config.serverUrl+'/topics' ,
            data: {
                page: 1,
                tab: title,
                limt: 5,
                mdrender: 'true'
            },
            // header: {
            //     'Content-Type': 'application/json'
            // },
            success: function(res) {
                for(let i=0;i<res.data.data.length;i++){
                    res.data.data[i].create_at=utils.formatTime(res.data.data[i].create_at);
                }
                that.setData({
                    articles: res.data.data,
                    hiddenLoading: true
                });
            },
            fail: function() {
                console.log('fail');
            }

        })
    },

    onReady() {
        //wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
    }
})
