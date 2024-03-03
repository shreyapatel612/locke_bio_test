import { HealthmartOrderPayload } from '../models/order';
import axios from 'axios';
import { config } from '../config';

export class HealthmartService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.baseUrl;
  }

  // To create order of Healthmart
  async createOrder(payload: HealthmartOrderPayload): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/healthmart/orders`,
      payload
    );
    return response.data;
  }

  // To get all Data of Healthmart
  async getAllOrders(): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/healthmart/orders`);
    return response.data;
  }

  // To get data from orderId of Healthmart
  async getOrderById(orderId: string): Promise<any> {
    const response = await axios.get(
      `${this.baseUrl}/healthmart/orders/${orderId}`
    );
    return response.data;
  }
}
