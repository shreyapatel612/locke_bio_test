import { Request, Response } from 'express';
import { PharmacyService } from '../services/pharmacyService';

export class PharmacyController {
  private pharmacyService: PharmacyService;

  constructor() {
    this.pharmacyService = new PharmacyService();
  }

  // To get all Data of Pharmacy
  async getAllPharmacy(req: Request, res: Response) {
    try {
      const orders = await this.pharmacyService.getAllPharmacy();
      res.json({ message: 'Success', data: orders });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
