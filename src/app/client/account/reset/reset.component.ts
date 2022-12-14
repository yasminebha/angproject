import { Component } from '@angular/core';
import { FormControl,FormBuilder } from '@angular/forms';
import supabase from 'src/app/supabase';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  constructor() { }
  passwordControl=new FormControl('')
  ngOnInit(): void {

   
     
  }

async updatePwd():Promise<void>{
  const { error } = await supabase.auth
  .updateUser({ password: this.passwordControl.value })
  console.log(error);
  alert("password updated successfully!")
  
}
}
