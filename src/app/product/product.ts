export class Product {
  public constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }

  id: number;
  name: string;
  introDate: Date;
  price: number;
  url: string;
  categoryId: number;
}
