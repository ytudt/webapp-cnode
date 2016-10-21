/*
* @Author: Administrator
* @Date:   2016-10-20 21:29:57
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-21 10:17:11
*/

'use strict';
/*
 * @Author: Administrator
 * @Date:   2016-10-20 17:06:23
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-10-21 10:09:43
 */

'use strict';

const config = require('../../config/index.js')

// 创建一个页面对象用于控制页面的逻辑
Page({
    data: {
        title: '我是首页',
        hiddenLoading: false,
        article: {}
    },
    showDetail(event) {
        // event.stopPropagation()
        console.log('dianji');
        console.log(event);
        console.log(event.target.dataset.itemId);
        wx.navigateTo({
            url: '../detail/detail?id='+itemId
        })
    },

    onLoad(params) {
        let that = this;
        console.log('detailLoad');
        console.log(params.id);
        wx.request({
            url: config.serverUrl + '/topic/'+params.id,
            data: {
                accesstoken:'1e3a52f2-7f9a-4cdd-9caf-77513a80315f'
            },
            success: function(res) {
                 console.log(res.data.data)
                   that.setData({
                    article: res.data.data,
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
