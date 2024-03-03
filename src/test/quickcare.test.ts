import { QuickcareService } from '../services/quickcareService';

describe('QuickcareService', () => {
  let quickcareService: QuickcareService;

  beforeEach(() => {
    quickcareService = new QuickcareService();
  });

  it('should create an order', async () => {
    const payload = {
      quickCareProduct: 'Cold Medicine Test',
      quickCareQuantity: 1,
      quickCareUserData: {
        quickCareUserName: 'Alice Johnson Test',
        quickCareUserAddress: '789 Oak Avenue Test',
        quickCareUserCity: 'Villageville Test',
        quickCareUserState: 'State Test',
        quickCareUserZipcode: '98765 Test',
        quickCareUserCountry: 'Country Test',
      },
    };
    const order = await quickcareService.createOrder(payload);
    expect(order).toBeDefined();
    expect(order).toHaveProperty('quickCareProduct', payload.quickCareProduct);
  });

  it('should get all orders', async () => {
    const orders = await quickcareService.getAllOrders();
    expect(orders).toBeDefined();
    expect(Array.isArray(orders)).toBe(true);
  });

  it('should get order by ID', async () => {
    const quickCareId = '1692005574598';
    const order = await quickcareService.getOrderById(quickCareId);
    expect(order).toBeDefined();
    expect(order).toHaveProperty('quickCareId', quickCareId);
  });
});
