import { Request, Response } from 'express';
import { CareplusService } from '../services/careplusService';

export class CareplusController {
  private careplusService: CareplusService;

  constructor() {
    this.careplusService = new CareplusService();
  }

  // To create order of Careplus
  async createOrder(req: Request, res: Response) {
    try {
      const order = await this.careplusService.createOrder(req.body);
      res.status(201).json({ message: 'Success', data: order });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // To get all Data of Careplus
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await this.careplusService.getAllOrders();
      res.json({ message: 'Success', data: orders });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // To get data from orderId of Careplus
  async getOrderById(req: Request, res: Response) {
    try {
      const order = await this.careplusService.getOrderById(req.params.orderId);
      if (order) {
        res.json({ message: 'Success', order });
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
