import request from "@/config/axiosConfig";

/**
 * 获取新闻频道分类接口
 * @export
 * @param {*} data
 * @returns
 */
export const getNewsClass = (data = {}) => request({ url: "/v1/news_class/item",method: "POST",data});
