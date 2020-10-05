import PORT from './host.config'
import axiosApi from './axios'


const defaultApi = {
    getHomeworkData: async (params = null) => {
        const url = ``
        const res = await axiosApi.ajax_post(url, params)
        return res
    }
}

const combinApi = Object.assign(
    {}, 
    defaultApi, 
)

export default combinApi