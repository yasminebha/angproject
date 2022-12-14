import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import supabase from 'src/app/supabase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstNameControl: ['', [Validators.required]],
      lastNameControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required]],
      passwordControl: ['', [Validators.required]],
    })

  }
  async signUp(): Promise<void> {
    const { error, data: { session, user } } = await supabase.auth.signUp({
      email: this.registerForm.controls["emailControl"].value,
      password: this.registerForm.controls["passwordControl"].value,
      options: {
        data: {
          first_name: this.registerForm.controls["firstNameControl"].value,
          last_name: this.registerForm.controls["lastNameControl"].value
        }
      }
    })
    console.log(error, session, user);


  }


}
