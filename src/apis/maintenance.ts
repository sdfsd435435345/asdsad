import { getS3MaintenanceApiUrl } from '@/constants/maintenance'
import { MarkcoinRequest } from '@/plugins/request'
import axios from 'axios'

export const getMaintenanceConfigFromS3: MarkcoinRequest = () => {
  return axios.request({
    baseURL: getS3MaintenanceApiUrl(),
    method: 'GET',
  })
}
