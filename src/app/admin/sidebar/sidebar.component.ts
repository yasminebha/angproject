import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  result=false;
  constructor() {
  
  }

  ngOnInit(): void {
  }
  onClick():boolean{
    this.result= true
    return this.result


  }

}
