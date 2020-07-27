import request from "@/utils/request";
import axios from "axios";

/**
 *获取资讯分类
 * @param {*} data
 * @returns
 */
export const queryNewsClass = data => request({ url: "/v1/sqlites/channel_news", method: "post", data });

/**
 *获取资讯
 * @param {*} data
 * @returns
 */
export const queryNews = data => request({ url: "/v2/news/list", method: "post", data });

/**
 *新增资讯
 * @param {*} data
 * @returns
 */
export const addNews = data => request({ url: "/v2/news/add_news", method: "post", data });

/**
 *编辑资讯
 * @param {*} data
 * @returns
 */
export const editNews = data => request({ url: "/v2/sqlites/edit_news", method: "post", data });

/**
 *获取资讯详细信息
 * @param {*} data
 * @returns
 */
export const newsDetail = data => request({ url: "/v2/sqlites/news/detail", method: "post", data });
