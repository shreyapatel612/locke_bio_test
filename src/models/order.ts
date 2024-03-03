export interface HealthmartOrderPayload {
  healthMartProduct: string;
  healthMartQuantity: number;
  healthMartCustomerInfo: {
    healthMartCustName: string;
    healthMartCustAddress: string;
    healthMartCustCity: string;
    healthMartCustState: string;
    healthMartCustZipcode: string;
    healthMartCustCountry: string;
  };
}

export interface CareplusOrderPayload {
  carePlusProduct: string;
  carePlusQuantity: number;
  carePlusClientInfo: {
    carePlusClientName: string;
    carePlusClientAddress: string;
    carePlusClientCity: string;
    carePlusClientState: string;
    carePlusClientZipcode: string;
    carePlusClientCountry: string;
  };
}

export interface QuickcareOrderPayload {
  quickCareProduct: string;
  quickCareQuantity: number;
  quickCareUserData: {
    quickCareUserName: string;
    quickCareUserAddress: string;
    quickCareUserCity: string;
    quickCareUserState: string;
    quickCareUserZipcode: string;
    quickCareUserCountry: string;
  };
}
