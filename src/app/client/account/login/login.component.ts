import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import supabase from 'src/app/supabase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailSent:boolean
  email:string
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailControl: ['', [Validators.required]],
      passwordControl: ['', [Validators.required]],
     
    })
    }



    async signIn():Promise<void>{
      const { error } = await supabase.auth.signInWithPassword({
        email: this.loginForm.controls["emailControl"].value,
        password: this.loginForm.controls["passwordControl"].value,
      })
      console.log(error);
      
    }
    async resetPassword():Promise<void>{
      if(this.loginForm.controls["emailControl"].value){
        this.email=this.loginForm.controls["emailControl"].value
        
        const { error } = await supabase.auth.resetPasswordForEmail(this.email,{redirectTo:"http://localhost:4200/site/account/reset"})
        this.emailSent= true
        alert("email sent")
        console.log(error);

      }
      else {
        this.emailSent = false
        alert("enter your email !! ")
    }
  }
  
}
