import { DropdownItem } from "./universal.interface";

export interface CarouselInfo {
  title: string;
  description: string;
  img: string;
  button: {
    display: boolean;
    content?: string;
    href?: string;
  };
}

export interface MenuInfo {
  name: string;
  hasChildren: boolean;
  redirect?: string;
  children?: MenuInfo[];
}

export interface ProductInfo {
  id: string;
  name: string;
  description: string;
  detail: string;
  category: string;
  img: string;
  gallery?: string[];
  onSale: boolean;
  costPrice: string;
  salePrice?: string;
  options?: DropdownItem[];
  inStock: boolean;
}

export interface CategoryInfo {
  name: string;
  redirect: string;
  count?: number;
  products?: ProductInfo[];
}

export interface ShoppingCartItem {
  product: ProductInfo;
  quantity: number;
  option: DropdownItem;
}

export interface OrderInfo {
  items?: ShoppingCartItem[];
  totalPrice?: number;
  customerInfo?: CustomerInfo;
  paymentInfo?: PaymentInfo;
  deliveryInfo?: DeliveryInfo;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface PaymentInfo {
  holderName: string;
  cardNumber: number;
  expiredDate: string;
  cvc: number;
}

export interface DeliveryInfo {
  recipientName: string;
  recipientNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}
// product in specific catagorey it will be from type shirt or tshort or blous
class ProductType{
  productTypeId:number;
  productCatagorey:string; // shirt or blouse ..
  measurements:ShirtM;
}
export interface ShirtM {
  chest: number;
  waist: number;
  seat: number;
  bicep: number;
  shirtLength: number;
  shoulderWidth: number;
  sleeveLength: number;
  cuffCircumference: number;
  collarSize: number;
}
export interface linearMeasurements{
  sleeveLength:number;
  totalHight:number;
  sholderToWaistFront:number;
  sholderToWaistBack:number;
}
export interface bodyMeasuerments {
  bust: number;
  waist: number;
  hip: number;
  backWaist: number;
  frontWaist: number;
  hightBust: number;
  highHip: number;
  skirtLength: number;
  inseam: number;

  thigh: number;
  ankle: number;
  outseam: number;
  neck: number;
}
export enum types {
  shirt,
  jeans,
}