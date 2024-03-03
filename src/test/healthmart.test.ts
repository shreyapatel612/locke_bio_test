import { HealthmartService } from '../services/healthmartService';

describe('HealthmartService', () => {
  let healthMartService: HealthmartService;

  beforeEach(() => {
    healthMartService = new HealthmartService();
  });

  it('should create an order', async () => {
    const payload = {
      healthMartProduct: 'Painkiller Test',
      healthMartQuantity: 3,
      healthMartCustomerInfo: {
        healthMartCustName: 'John Doe Test',
        healthMartCustAddress: '123 Main Street Test',
        healthMartCustCity: 'Cityville Test',
        healthMartCustState: 'State Test',
        healthMartCustZipcode: '12345 Test',
        healthMartCustCountry: 'Country Test',
      },
    };
    const order = await healthMartService.createOrder(payload);
    expect(order).toBeDefined();
    expect(order).toHaveProperty(
      'healthMartProduct',
      payload.healthMartProduct
    );
  });

  it('should get all orders', async () => {
    const orders = await healthMartService.getAllOrders();
    expect(orders).toBeDefined();
    expect(Array.isArray(orders)).toBe(true);
  });

  it('should get order by ID', async () => {
    const healthMartId = '1709326680343';
    const order = await healthMartService.getOrderById(healthMartId);
    expect(order).toBeDefined();
    expect(order).toHaveProperty('healthMartId', healthMartId);
  });
});
