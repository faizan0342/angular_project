import { HttpClient } from '@angular/common/http';
import {inject,  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   http = inject(HttpClient)  // HttpClient we use api to call

    // if we are inject so we add inject appConfig.config file

  constructor() { }

  getCategories(){
    return this.http.get("http://localhost:3000/category")
  }

  getCategoryById(id:string){
    return this.http.get("http://localhost:3000/category/" + id);
  }

  addCategories(name:String){
    return this.http.post("http://localhost:3000/category" , {
      name : name
    })
  }

  updateCategories(id:String , name : string ){
    return this.http.put("http://localhost:3000/category/" + id , {
      name : name
    })
  }

  deleteCategories(id:String , name : string ){
    return this.http.put("http://localhost:3000/category/" + id , {
      name : name
    })
  }

}
