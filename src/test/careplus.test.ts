import { CareplusService } from '../services/careplusService';

describe('CareplusService', () => {
  let careplusService: CareplusService;

  beforeEach(() => {
    careplusService = new CareplusService();
  });

  it('should create an order', async () => {
    const payload = {
      carePlusProduct: 'Antibiotics Test',
      carePlusQuantity: 2,
      carePlusClientInfo: {
        carePlusClientName: 'Jane Smith Test',
        carePlusClientAddress: '456 Elm Street Test',
        carePlusClientCity: 'Townville Test',
        carePlusClientState: 'State Test',
        carePlusClientZipcode: '54321 Test',
        carePlusClientCountry: 'Country Test',
      },
    };
    const order = await careplusService.createOrder(payload);
    expect(order).toBeDefined();
    expect(order).toHaveProperty('carePlusProduct', payload.carePlusProduct);
  });

  it('should get all orders', async () => {
    const orders = await careplusService.getAllOrders();
    expect(orders).toBeDefined();
    expect(Array.isArray(orders)).toBe(true);
  });

  it('should get order by ID', async () => {
    const careplusId = '1692334621931';
    const order = await careplusService.getOrderById(careplusId);
    expect(order).toBeDefined();
    expect(order).toHaveProperty('carePlusId', careplusId);
  });
});
