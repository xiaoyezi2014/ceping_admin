/**
 * 动态插入css
 */
import MD5 from 'js-md5'

export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}
/**
 * 设置浏览器头部标题
 */
export const setTitle = function(title) {
  title = title ? `${title}` : 'NxAdmin'
  window.document.title = title + '-nxAdmin'
}

export const getSignMd5 = function (jsonObject) {
  jsonObject['version'] = '1.0'
  var sign = jsonSort(jsonObject)
  var stringSignTemp = sign+'&key=RueC2wpXXDYLFGvL9aYambq2fUSZknkB'
  console.log('待加密的字符串是：'+stringSignTemp)
  return MD5(stringSignTemp).toUpperCase()
};

export const formatDateToString = function (date) {
  if (date) {
    date = new Date()
  }
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  if (month < 10) month = "0" + month
  if (day < 10) day = "0" + day
  return year + month + day
}

function jsonSort(jsonObj) {
  let arr=[];
  for(var key in jsonObj){
    if(jsonObj[key].toString().length>0){
      arr.push(key)
    }
  }
  arr.sort();
  let str='';
  for(var i in arr){
    if(jsonObj[arr[i]].toString().length>0){

      str +=arr[i]+"="+jsonObj[arr[i]]+"&"
    }
  }
  return str.substr(0,str.length-1)
}

/**
 *
 * @returns {string}
 * @param time
 */
export const showHelloTime = (time) => {
    let time_format = '';
    if (time == undefined) {
        time = new Date();
    }
    let hr = time.getHours();
    if ((hr >= 0) && (hr <= 4))
        time_format = "深夜了，注意身体，";
    if ((hr >= 4) && (hr < 7))
        time_format = "清晨好， ";
    if ((hr >= 7) && (hr < 12))
        time_format = "早安，";
    if ((hr >= 12) && (hr <= 13))
        time_format = "午饭时间到了，";
    if ((hr >= 13) && (hr <= 17))
        time_format = "下午好，";
    if ((hr >= 17) && (hr <= 18))
        time_format = "进入傍晚了，";
    if ((hr >= 18) && (hr <= 20))
        time_format = "吃过晚饭了吗，";
    if ((hr >= 20) && (hr <= 24))
        time_format = "在加班吗？辛苦了，";
    return time_format
};
