import { QuickcareOrderPayload } from '../models/order';
import axios from 'axios';
import { config } from '../config';

export class QuickcareService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.baseUrl;
  }

  // To create order of Quickcare
  async createOrder(payload: QuickcareOrderPayload): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/quickcare/orders`,
      payload
    );
    return response.data;
  }

  // To get all Data of Quickcare
  async getAllOrders(): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/quickcare/orders`);
    return response.data;
  }

  // To get data from orderId of Quickcare
  async getOrderById(orderId: string): Promise<any> {
    const response = await axios.get(
      `${this.baseUrl}/quickcare/orders/${orderId}`
    );
    return response.data;
  }
}
