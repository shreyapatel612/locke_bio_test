import { CareplusOrderPayload } from '../models/order';
import { config } from '../config';
import axios from 'axios';

export class CareplusService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.baseUrl;
  }

  // To create order of Careplus
  async createOrder(payload: CareplusOrderPayload): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/careplus/orders`,
      payload
    );
    return response.data;
  }

  // To get all Data of Careplus
  async getAllOrders(): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/careplus/orders`);
    return response.data;
  }

  // To get data from orderId of Careplus
  async getOrderById(orderId: string): Promise<any> {
    const response = await axios.get(
      `${this.baseUrl}/careplus/orders/${orderId}`
    );
    return response.data;
  }
}
