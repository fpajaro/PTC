import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { PagedResponse } from './pagedResponse';

const API_URL = 'http://localhost:8080/api/products/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<PagedResponse> {
    return this.http.get<PagedResponse>(API_URL);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + id.toString());
  }

  addProduct(entity: Product): Observable<Product> {
    return this.http.post<Product>(API_URL, entity, httpOptions);
  }

  updateProduct(entity: Product): Observable<any> {
    return this.http.put(API_URL, entity, httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(API_URL + id.toString(), httpOptions);
  }
}
