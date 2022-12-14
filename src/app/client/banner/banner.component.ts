import { Component, OnInit } from '@angular/core';

import supabase from 'src/app/supabase';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  isLoggedIn: boolean
  userName:string
  async ngOnInit() {

    const { data } = await supabase.auth.getUser()
    
    if (data.user) {
      this.isLoggedIn = true
      this.userName = data.user.user_metadata['first_name'];
    } else {
      this.isLoggedIn = false
    }

  }

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut()

    console.log(error);
  }

}



