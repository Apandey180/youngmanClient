import apiClient from './apiclient';
import { defaults } from 'chart.js';

export default{
    checkPincode(shippingDetails){
        return apiClient.post('api/addorder',shippingDetails);
      },
}
