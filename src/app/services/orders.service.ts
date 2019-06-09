import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdersService extends DataService {

  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/photos', http);
  }


}
