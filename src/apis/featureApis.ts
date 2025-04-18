import axios from 'axios';
import { aesDecrypt } from '../utility/index.utility';

export class FeatureApis {
    static async getFeatureList(referenceid: string) {
        const data = await axios.post(
            `https://routes.msg91.com/api/${referenceid}/widget`
            )
        return aesDecrypt(data?.data?.data?.ciphered)
    }
}