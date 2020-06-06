import PORT from './host.config'
import axiosApi from './axios'


const defaultApi = {
    // 通用接口，获取作业数据、报告数据
    getHomeworkData: async (params = null) => {
        const url = `${PORT.BASE_URL_ZMLEARN}/gateway/zhangmen-client-hw/api/share/getReportByCode?code=${params.code}&role=${params.role}`
        const res = await axiosApi.ajax_post(url, params)
        return res
    }
}

const combinApi = Object.assign(
    {}, 
    defaultApi, 
)

export default combinApi