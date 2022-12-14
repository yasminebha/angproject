import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import supabase from './supabase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private readonly routerService: Router) {

  }

  async ngOnInit() {

    const { data } = await supabase.auth.getSession()

    if (!data?.session) {
      supabase.auth.onAuthStateChange((event, session) => {

        switch (event) {
          case "SIGNED_IN":
            this.routerService.navigate(["/site/home"],)
            break;
          case "SIGNED_OUT":
            this.routerService.navigate(["/site/home"],)
            break
        }
      })
    }

  }

}
