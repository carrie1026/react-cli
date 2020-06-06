// 格式化时间戳
export function formatDate(time) {
    // 判断后台给的时间类型
    let _type = Object.prototype.toString.call(time), _time
    if(_type === '[object String]'){
        _time = new Date(parseInt(time)) // string类型(long + 毫秒)
    }else{
        _time = new Date(time) // 整型(毫秒)
    }
    let year = _time.getFullYear(),
        month = _time.getMonth()>8? (_time.getMonth()+1) : "0"+(_time.getMonth()+1),
        date = _time.getDate()>9? _time.getDate() : "0" + _time.getDate(),
        hour = _time.getHours()>9? _time.getHours() : "0" + _time.getHours(),
        minute = _time.getMinutes()>9? _time.getMinutes() : "0" + _time.getMinutes(),
        second = _time.getSeconds()>9? _time.getSeconds() : "0" + _time.getSeconds();

    return `${year}/${month}/${date} ${hour}:${minute}:${second}`
}

/**
   * 格式化时间
   */
export function formatterTime(time) {
    if (!time) return 0;
    const hours = parseInt((time % (1000 * 60 * 60) / (60 * 60 * 1000)));
    const minutes = parseInt((time % (1000 * 60 * 60) / (60 * 1000)));
    const secondes = parseInt((time % 1000 * 60) / 1000);
    if(hours){
        return `${hours}小时${minutes}分${secondes}秒`;
    }else{
        return `${minutes}分${secondes}秒`;
    }
}

export function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}

export function getClientVersion() {
    try {
      if (window.nw && window.nw.App) return `xp${window.nw.App.manifest.version}`;
      else {
        const { remote } = window.require('electron');
        return remote.app.getVersion();
      }
    } catch (e) {
      return '0.0.0';
      // console.log(e);
    }
}

export const getEnv = () => {
    const host = window.location.host;
    switch (host) {
        case 'chat.zmlearn.com':
            return 'prod';
        case 'chat.uat.zmops.cc':
            return 'uat';
        case 'x-chat-test.zmlearn.com':
            return 'fat';
        case 'x-chat-dev.zmlearn.com':
            return 'fat';
        default:
            return 'fat';
    }
}

// 作业根据questionType分类 - 单选/填空...
export function sortByType(data) {
    // 划分题型大类
    const questionObj = {};
    const questionList = [];
    data.homeworkLessonQuestionDTOList && data.homeworkLessonQuestionDTOList.forEach((item) => {
        questionObj[item.questionOutputDTO.questionType] = questionObj[item.questionOutputDTO.questionType] || [];
        questionObj[item.questionOutputDTO.questionType].push(item);
    });
    const questions = Object.keys(questionObj);
    questions.forEach(item => {
        let score = 0;
        questionObj[item].forEach(subItem => {
            score += subItem.score;
        });
        questionList.push({
            questionType: item,
            totalScore: score,
            size: questionObj[item].length,
            questionList: questionObj[item]
        });
    });
    return questionList;
}

export function toChinesNum(num) {
    const changeNum = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
    const unit = ["", "十", "百", "千", "万"];
    num = parseInt(num);
    const getWan = (temp) => {
      const strArr = temp.toString().split("").reverse();
      let newNum = "";
      for (let i = 0; i < strArr.length; i++) {
        if (i === 0) { //个位数
          newNum += changeNum[strArr[i]];
        } else {
          if (i === 1 && strArr[i] === '1') {
            newNum += unit[i] + '';
            break;
          }
          newNum += unit[i] + (strArr[i] === 1 ? '' : changeNum[strArr[i]]);
        }
      }
      return newNum.split('').reverse().join('');
    }
    return getWan(num);
  }
