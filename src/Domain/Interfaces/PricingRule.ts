import { IProduct } from "./Product";

export interface IPricingRule {
  apply(products: IProduct[]): IProduct[];
}
