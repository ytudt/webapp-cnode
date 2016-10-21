/*
* @Author: Administrator
* @Date:   2016-10-20 20:32:56
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-21 11:32:48
*/

'use strict';
function FetchApi(){
  this.serverUrl='https://cnodejs.org/api/v1/';
}
// FetchApi.prototype.
exports.FetchApi=FetchApi;
function formatTime(date) {
  date=new Date(date)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
exports.formatTime=formatTime;