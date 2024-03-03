import { Request, Response } from 'express';
import { HealthmartService } from '../services/healthmartService';

export class HealthmartController {
  private healthmartService: HealthmartService;

  constructor() {
    this.healthmartService = new HealthmartService();
  }

  // To create order of Healthmart
  async createOrder(req: Request, res: Response) {
    try {
      const order = await this.healthmartService.createOrder(req.body);
      res.status(201).json({ message: 'Success', data: order });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // To get all Data of Healthmart
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await this.healthmartService.getAllOrders();
      res.json({ message: 'Success', data: orders });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // To get data from orderId of Healthmart
  async getOrderById(req: Request, res: Response) {
    try {
      const order = await this.healthmartService.getOrderById(
        req.params.orderId
      );
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
