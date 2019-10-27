import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../servicios/auth.service";
import { ModalController } from "@ionic/angular";
import { ActionSheetController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.page.html',
  styleUrls: ['./expediente.page.scss'],
})
export class ExpedientePage implements OnInit {

  constructor(
    //public authservice : AuthService, 
    public actionSheetController: ActionSheetController,
    private modal : ModalController, public router:Router){}


 /* Onlogout(){
    this.authservice.logout();
  }*/

  ngOnInit(){
  }

  abrirINFO(){
    this.router.navigate(['/info-exp']);
  }
  abrirNC(){
    this.router.navigate(['/info-nc']);
}
  abrirF(){
  this.router.navigate(['/foto']);
}
abrirES(){
  this.router.navigate(['/estatus-exp']);
}


}
