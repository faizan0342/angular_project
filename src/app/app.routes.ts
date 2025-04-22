import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoriesFormComponent } from './components/manage/categories-form/categories-form.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin/category', component: CategoriesComponent },
    { path: 'admin/category/add', component: CategoriesFormComponent},
    { path: 'admin/category/:id', component: CategoriesFormComponent}
   
];
