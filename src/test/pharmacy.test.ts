import { PharmacyService } from '../services/pharmacyService';

describe('PharmacyService', () => {
  let pharmacyService: PharmacyService;

  beforeEach(() => {
    pharmacyService = new PharmacyService();
  });

  it('should get all pharmacy', async () => {
    const orders = await pharmacyService.getAllPharmacy();
    expect(orders).toBeDefined();
    expect(Array.isArray(orders)).toBe(true);
  });
});
