import Vue from "vue";
import md5 from "md5";
/* 工具类 */
class Tools {
  /** 格式化字符串到json */
  stringToJson(data) {
    return JSON.parse(data ? data.replace(/([\u4e00-\u9fa5\w]+)/g, '"$1"') : {});
  }
  /** 格式化时间 */
  dateFormat(date, formatStr = "YYYY-MM-DD HH:mm:ss") {
    let format = formatStr;
    if (!date) {
      return "";
    }
    let dateObj = date;
    if (typeof date === "string") {
      dateObj = new Date(date.replace(/-/g, "/"));
    } else if (typeof date === "number") {
      dateObj = new Date(date);
    } else if (date && date instanceof Date) {
      dateObj = date;
    } else {
      return date;
    }
    const o = {
      "M+": dateObj.getMonth() + 1,
      "D+": dateObj.getDate(),
      "h+": dateObj.getHours() % 12 === 0 ? 12 : dateObj.getHours() % 12,
      "H+": dateObj.getHours(),
      "m+": dateObj.getMinutes(),
      "s+": dateObj.getSeconds(),
      "q+": Math.floor((dateObj.getMonth() + 3) / 3),
      S: dateObj.getMilliseconds()
    };
    const week = {
      0: "\u65e5",
      1: "\u4e00",
      2: "\u4e8c",
      3: "\u4e09",
      4: "\u56db",
      5: "\u4e94",
      6: "\u516d"
    };
    if (/(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[`${dateObj.getDay()}`]);
    }
    for (const k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  }
  /**
   * 睡眠多少秒
   * @param timeout 单位毫秒
   * @param returnVal 返回值
   */
  sleep(timeout, returnVal = true) {
    return new Promise(resolve => setTimeout(() => resolve(returnVal), timeout || 1000));
  }
  /**
   * 数组去重
   * @param arr 要去重的数组
   * @param returnVal 返回值去重后的数组
   */
  uniqueArray(array = []) {
    return array.filter((element, index, self) => self.indexOf(element) === index);
  }
  /**
   * 获取url参数
   */
  getUrlObject() {
    if (!location.search.slice(1)) return {};
    return JSON.parse(
      '{"' +
        decodeURIComponent(location.search.slice(1))
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
  }

  /* md5加密 */

  md5(str) {
    return md5(str);
  }
}

Vue.prototype.$tool = new Tools();
