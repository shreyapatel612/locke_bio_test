import { Request, Response } from 'express';
import { QuickcareService } from '../services/quickcareService';

export class QuickcareController {
  private quickcareService: QuickcareService;

  constructor() {
    this.quickcareService = new QuickcareService();
  }

  // To create order of Quickcare
  async createOrder(req: Request, res: Response) {
    try {
      const order = await this.quickcareService.createOrder(req.body);
      res.status(201).json({ message: 'Success', data: order });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // To get all Data of Quickcare
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await this.quickcareService.getAllOrders();
      res.json({ message: 'Success', data: orders });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // To get data from orderId of Quickcare
  async getOrderById(req: Request, res: Response) {
    try {
      const order = await this.quickcareService.getOrderById(
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
