import request from "@/utils/request";
import axios from "axios";
let qs = require("qs");

/**
 *登录接口
 *
 * @export
 * @param {*} data
 * @returns
 */
export const loginByUsername = data => request({ url: "/account/login", method: "post", data, noExtend: 1 });

/**
 * 注销登录
 *
 * @export
 * @returns
 */
export const logout = data => request({ url: "/account/logout", method: "post", data });

/**
 * 获取用户信息
 *
 * @export
 * @param {*} token
 * @returns
 */
export const getUserInfo = token => request({ url: "/user/info", method: "get", params: { token } });
