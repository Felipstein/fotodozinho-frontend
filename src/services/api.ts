import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { APIError } from '../errors/APIError';
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
    try {
      const response = await this.axiosInstance.get(endpoint, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async delete<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.delete(endpoint, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async head<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.head(endpoint, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async options<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.options(endpoint, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async post<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.post(endpoint, data, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async put<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.put(endpoint, data, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async patch<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.patch(endpoint, data, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async postForm<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.postForm(endpoint, data, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async putForm<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.putForm(endpoint, data, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  async patchForm<T = any, R = AxiosResponse<T>, D = any>(endpoint: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await this.axiosInstance.patchForm(endpoint, data, config);

      return response.data;
    } catch (err: Error | AxiosError | unknown) {
      throw this.buildError(err);
    }
  }

  private buildError(err: Error | AxiosError | unknown) {
    if(err instanceof AxiosError && err.response) {
      return new APIError(err.response?.data.message || 'Um erro ocorreu dentro dos nossos servidores. Por favor, tente novamente mais tarde.', err.status || 500);
    }

    return new Error('Um erro ocorreu na sua aplicação, por favor, tente novamente. Caso o erro persistir, tente mais tarde ou entre em contato conosco.');
  }

}

export const api = new API({
  baseURL: 'http://localhost:3333',
  // delayMS: 1500,
});
