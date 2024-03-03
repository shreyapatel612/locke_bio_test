import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { HealthmartController } from './controllers/healthmartController';
import { CareplusController } from './controllers/careplusController';
import { QuickcareController } from './controllers/quickcareController';
import { PharmacyController } from './controllers/pharmacy.controller';

const app = express();
app.use(express.json());
dotenv.config();

const healthMartController = new HealthmartController();
const careplusController = new CareplusController();
const quickcareController = new QuickcareController();
const pharmacyController = new PharmacyController();

app.get('/', (req, res) => {
  res.send('listening');
});

// Pharmacy Routes
app.get('/pharmacy', (req: Request, res: Response) =>
  pharmacyController.getAllPharmacy(req, res)
);

// Healthmart Routes
app.post('/healthmart/orders', (req: Request, res: Response) =>
  healthMartController.createOrder(req, res)
);
app.get('/healthmart/orders', (req: Request, res: Response) =>
  healthMartController.getAllOrders(req, res)
);
app.get('/healthmart/orders/:orderId', (req: Request, res: Response) =>
  healthMartController.getOrderById(req, res)
);

// Careplus Routes
app.post('/careplus/orders', (req: Request, res: Response) =>
  careplusController.createOrder(req, res)
);
app.get('/careplus/orders', (req: Request, res: Response) =>
  careplusController.getAllOrders(req, res)
);
app.get('/careplus/orders/:orderId', (req: Request, res: Response) =>
  careplusController.getOrderById(req, res)
);

// Quickcare Routes
app.post('/quickcare/orders', (req: Request, res: Response) =>
  quickcareController.createOrder(req, res)
);
app.get('/quickcare/orders', (req: Request, res: Response) =>
  quickcareController.getAllOrders(req, res)
);
app.get('/quickcare/orders/:orderId', (req: Request, res: Response) =>
  quickcareController.getOrderById(req, res)
);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
