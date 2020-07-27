import request from "@/utils/request";
import axios from "axios";

/**
 *获取资讯分类
 * @param {*} data
 * @returns
 */
export const queryReportClass = data => request({ url: "/v2/reports/report_class", method: "post", data });

/**
 *获取报告列表
 * @param {*} data
 * @returns
 */
export const queryReportList = data => request({ url: "/v2/reports/report_list", method: "post", data });
