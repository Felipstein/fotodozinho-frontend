import { PrintPrice } from '../types/PrintPrice';
import { api } from './api';

class PrintPriceService {

  async getPrintPrices(): Promise<PrintPrice[]> {
    const printPrices = await api.get('/print-prices');

    return printPrices;
  }

}

const printPriceService = new PrintPriceService();

export { printPriceService };
