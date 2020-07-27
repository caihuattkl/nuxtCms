import request from "@/utils/request";
import axios from "axios";


/**
 *获取头条
 * @param {*} data
 * @returns
 */
export const queryHeadline = data => request({ url: "/v2/headlines/get_headline", method: "post", data });

/**
 *新增设置
 * @param {*} data
 * @returns
 */
export const addHeadline = data => request({ url: "/v2/headlines/set_headline", method: "post", data });
