import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  abrirE(){
    this.router.navigate(['/inicio']);
  }



}
