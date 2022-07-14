
import axios from 'axios';

import { Config } from '../../config/config.interface';
import { getCurrentConfig } from '../../config/testcafe-config';
const config: Config = getCurrentConfig();
// import {config.env?.url} from
/**
  * Check if the given string is a valid link.
**/
const axiosInstance = () => axios.create({ baseURL: baseApiUrl });

export const sandboxAxiosInstance = (sandbox: string) =>
    axios.create({ baseURL: config.env?.url, headers: { sandbox } });

export const authedAxiosInstance = (sandbox: string, token: string) =>
    axios.create({
        baseURL: config.env?.url,
        headers: {
            Authorization: `Bearer ${token}`,
            sandbox
        }
    });


