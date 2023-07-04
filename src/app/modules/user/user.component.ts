import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor (public dialog: MatDialog){

  }
  ngOnInit(): void {

  }
  onEdit(){
    const food={
      width:'50%'

    }
   const dial=this.dialog.open(FormComponent,food)

  }

}
