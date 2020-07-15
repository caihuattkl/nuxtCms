import request from "@/utils/request";
import axios from "axios";

/**
 *新增成员列表
 *
 * @export
 * @param {*} params
 * @returns
 */
export function plantformAdd(data) {
  return request({
    url: "/plantform/plantformAdd",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *供应商列表
 *
 * @export
 * @param {*} data
 * @returns
 */
export function plantformList(data) {
  return request({
    url: "/plantform/plantformList",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *供应商修改
 *
 * @export
 * @param {*} data
 * @returns
 */
export function plantformUpdate(data) {
  return request({
    url: "/plantform/plantformUpdate",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *
 *供应商修改
 * @export
 * @param {*} data
 * @returns
 */
export function plantformStatusUpdate(data) {
  return request({
    url: "/plantform/plantformStatusUpdate",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *
 *报表查询
 * @export
 * @param {*} data
 * @returns
 */
export function plantformReport(data) {
  return request({
    url: "/plantform/plantformReport",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *
 *订单列表查询
 * @export
 * @param {*} data
 * @returns
 */
export function orderList(data) {
  return request({ url: "/order/query/list", method: "post", data, isLoading: true });
}

/**
 *
 *订单列表页面 获取支付宝云闪付在线金主数量
 * @export
 * @param {*} data
 * @returns
 */
export function nodeSize(data) {
  return request({
    url: "/plantform/plantformNodeSize",
    method: "post",
    data
  });
}

/**
 *
 *服务器节点信息
 * @export
 * @param {*} data
 * @returns
 */
export function plantformNodeList(data) {
  return request({
    url: "/plantform/plantformNodeList",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *
 *设置ip白名单ip
 * @export
 * @param {*} data
 * @returns
 */
export function ipAllow(data) {
  return request({
    url: "/plantform/ipAllow",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *
 *ip白名单ip列表
 * @export
 * @param {*} data
 * @returns
 */
export function ipList(data) {
  return request({
    url: "/plantform/ipList",
    method: "post",
    data,
    isLoading: true
  });
}

/**
 *
 *重置谷歌验证码
 * @export
 * @param {*} params
 * @returns
 */
export const googleCloseOperate = data => request({ url: "/plantform/googleCloseOperate", method: "post", data, isLoading: true });
// 订单列表统计分开
export const orderAllListAnalyse = data => request({ url: "/order/v1/orderAllListAnalyse", method: "post", data });
// 获取经销商列表
export const platformlist = data => request({ url: "/order/query/platformlist", method: "post", data });
