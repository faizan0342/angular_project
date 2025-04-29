import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {inject,  Injectable } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-categories',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule , MatButtonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  categoryService=inject(CategoryService)

  constructor() {

    console.log("this" , this)

 this.categoryService.getCategories().subscribe((result: any) => {
  this.dataSource = new MatTableDataSource(result);
});

    // this.categoryService().getCategories().subscribe((result : any) {
    //   console.log("====>" ,result)
    // })

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([] as any);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletes(id : string){
    // console.log("delete __ id" , id)

    this.categoryService.deleteCategories(id).subscribe((result : any) => {
      alert("Category Deleted")

      console.log("===> " , this.dataSource.data)

      this.dataSource.data = this.dataSource.data.filter(item => item._id !== id);
    })
  }
}
