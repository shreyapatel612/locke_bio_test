import axios from 'axios';
import { config } from '../config';
import { Pharmacy } from '../models/pharmacy';

export class PharmacyService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.baseUrl;
  }

  // To get all Data of Pharmacy
  async getAllPharmacy(): Promise<Pharmacy> {
    const response = await axios.get<Pharmacy>(`${this.baseUrl}/pharmacy`);
    return response.data;
  }
}
