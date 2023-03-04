import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { delay } from '../utils/delay';

interface Settings {
  baseURL: string;
  delayMS?: number;
}

export class API {

  readonly axiosInstance: AxiosInstance;
  delayMS?: number;

  constructor({ baseURL, delayMS }: Settings) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    this.delayMS = delayMS;

    this.axiosInstance.interceptors.request.use(async (config) => {
      if(this.delayMS && !isNaN(this.delayMS)) {
        await delay(this.delayMS);
      }

      return config;
    });
  }

  async get<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.get(endpoint, config);

    return response.data;
  }

  async delete<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.delete(endpoint, config);

    return response.data;
  }

  async head<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.head(endpoint, config);

    return response.data;
  }

  async options<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.options(endpoint, config);

    return response.data;
  }

  async post<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.post(endpoint, data, config);

    return response.data;
  }

  async put<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.put(endpoint, data, config);

    return response.data;
  }

  async patch<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.patch(endpoint, data, config);

    return response.data;
  }

  async postForm<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.postForm(endpoint, data, config);

    return response.data;
  }

  async putForm<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.putForm(endpoint, data, config);

    return response.data;
  }

  async patchForm<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    const response = await this.axiosInstance.patchForm(endpoint, data, config);

    return response.data;
  }


}

export const api = new API({
  baseURL: 'http://localhost:3333',
  // delayMS: 1500,
});
