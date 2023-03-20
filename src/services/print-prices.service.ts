import { PrintPrice } from '../types/PrintPrice';
import { api } from './api.service';

export class PrintPriceService {

  static async getPrintPrices(): Promise<PrintPrice[]> {
    const printPrices = await api.get('/print-prices');

    return printPrices;
  }

}
