import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.scss'
})
export class CategoriesFormComponent {
  name!: string;

  // at server data to save this use

  router = inject(Router)

  route = inject(ActivatedRoute);

  CategoryService = inject(CategoryService)


  // 

  
  id!: string;

  isEdit = false

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log('Category ID:', id);

    if(id) {

      this.isEdit = true

      this.CategoryService.getCategoryById(id).subscribe((result: any) => {
        console.log("result" , result);
        this.name = result.name;

        console.log("name ==>" , this.name)
      });
      

    }
  }
  add() {
    console.log(this.name)

    this.CategoryService.addCategories(this.name).subscribe((result: any) => {
      alert("Category Added")
      this.router.navigateByUrl("/admin/category")
    })
  }

  update(){

    let id = this.route.snapshot.params['id'];

    console.log("asdasdda" ,this.name)

    // console.log("asdasdda_id" ,this.id)

    this.CategoryService.updateCategories(id , this.name).subscribe((result: any) => {
      alert("Category updated")
      this.router.navigateByUrl("/admin/category")
    })
  }
}
