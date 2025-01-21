import axios from 'axios';
import { Cat } from '../types';

export default class Loader {
  baseUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(ApiKey: string, limit:string) {
    this.baseUrl = `${this.baseUrl}?limit=${limit}&api_key=${ApiKey}`;
  }

  async get():Promise<Cat[]> {
    try {
      const response = await axios.get(this.baseUrl, {});
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
}