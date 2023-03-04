import axios, { AxiosInstance } from 'axios';
import { delay } from '../utils/delay';

interface Settings {
  baseURL: string;
  delayMS?: number;
}

export class API {

  readonly api: AxiosInstance;
  delayMS?: number;

  constructor({ baseURL, delayMS }: Settings) {
    this.api = axios.create({
      baseURL,
    });

    this.delayMS = delayMS;

    this.api.interceptors.request.use(async (config) => {
      if(this.delayMS && !isNaN(this.delayMS)) {
        await delay(this.delayMS);
      }

      return config;
    });
  }

}

export const api = new API({
  baseURL: 'http://localhost:3333',
  delayMS: 1500,
});
