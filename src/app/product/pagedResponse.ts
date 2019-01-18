import { Product } from './product';

export class PagedResponse {
    public constructor(init?: Partial<PagedResponse>) {
      Object.assign(this, init);
    }

    content: Product[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
  }
