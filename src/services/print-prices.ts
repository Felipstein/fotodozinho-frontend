import { PrintPrice } from '../types/PrintPrice';

class PrintPriceService {

  async getPrintPrices(): Promise<PrintPrice[]> {
    return [
      {
        id: Math.random().toString(),
        length: 'Polaroide',
        price: 5.5,
      },
      {
        id: Math.random().toString(),
        length: '10x15',
        price: 5,
      },
      {
        id: Math.random().toString(),
        length: '15x20',
        price: 10,
      },
      {
        id: Math.random().toString(),
        length: '15x21',
        price: 10,
      },
      {
        id: Math.random().toString(),
        length: '20x25',
        price: 12,
      },
      {
        id: Math.random().toString(),
        length: '20x30',
        price: 15,
      },
      {
        id: Math.random().toString(),
        length: '20x35',
        price: 15.5,
      },
      {
        id: Math.random().toString(),
        length: '25x38',
        price: 20,
      },
      {
        id: Math.random().toString(),
        length: '30x40',
        price: 25,
      },
      {
        id: Math.random().toString(),
        length: '30x60',
        price: 35,
      },
      {
        id: Math.random().toString(),
        length: '30x90',
        price: 50,
      },
      {
        id: Math.random().toString(),
        length: '50x70',
        price: 75,
      },
      {
        id: Math.random().toString(),
        length: '60x90',
        price: 100,
      },
    ];
  }

}

const printPriceService = new PrintPriceService();

export { printPriceService };
