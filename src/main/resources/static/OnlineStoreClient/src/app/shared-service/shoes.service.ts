import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Shoes} from '../shoes';

@Injectable()
export class ShoesService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private shoes:Shoes;
  constructor(private _http:Http) { }

  getShoes(){
    return this._http.get(this.baseUrl+'/shoes', this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  deleteShoes(id:Number){
      return this._http.delete(this.baseUrl+'/shoes/'+id, this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);
  }

  addShoes(shoes:Shoes){
        return this._http.post(this.baseUrl+'/shoes', JSON.stringify(shoes), this.options).map((response:Response)=>response.json())
          .catch(this.errorHandler);
  }

 updateShoes(shoes:Shoes){
        return this._http.put(this.baseUrl+'/shoes', JSON.stringify(shoes), this.options).map((response:Response)=>response.json())
          .catch(this.errorHandler);
  }
  errorHandler(error:Response){
      return Observable.throw(error||"SERVER ERROR");
  }

  setter(shoes:Shoes){
    this.shoes=shoes;
  }
  getter(){
    return this.shoes;
  }

}
