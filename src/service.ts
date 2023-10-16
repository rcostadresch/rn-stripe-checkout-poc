import { AxiosResponse } from 'axios';
import { api } from 'api';

const upsertGatewayAccount = async (): Promise<AxiosResponse> =>
  api.post('users/upsert-gateway-account');

const upsertGatewayCustomer = async (): Promise<AxiosResponse> =>
  api.post('users/upsert-gateway-customer');

const upsertGatewayProduct = async (): Promise<AxiosResponse> =>
  api.post('products/upsert-gateway-product');

const Service = {
  upsertGatewayAccount,
  upsertGatewayCustomer,
  upsertGatewayProduct,
};

export { Service };
