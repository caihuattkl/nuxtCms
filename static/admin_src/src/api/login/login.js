import request from "@/utils/request";
import axios from "axios";

/**
 *登录接口,获取用户信息
 *
 * @export
 * @param {*} data
 * @returns
 */
export const login = data => request({ url: "/v2/users/login", method: "post", data });

/**
 * 注销登录
 *
 * @export
 * @returns
 */
export const logout = data => request({ url: "/account/logout", method: "post", data });
