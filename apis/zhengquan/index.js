import request from "@/config/axiosConfig";

/**
 *获取上证创业板等指数点位数据,数据来源新浪
 *
 * @export
 * @param {*} data
 * @returns
 */
export const getSinaSZList = data =>
  request({
    url:
      "https://hq.sinajs.cn/rn=1593671040453&list=s_sh000001,s_sz399001,s_sh000300,s_sz399415,s_sz399006",
    method: "get"
  });
