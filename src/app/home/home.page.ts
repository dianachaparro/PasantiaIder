import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ModalController } from "@ionic/angular";
import { ActionSheetController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email:string;
  password: string;

 constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/home']);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }

}
export class ResetPasswordComponent {
  auth: any;
  
  resetPassword(email: string) {
    this.auth.resetPassword(email)
  }

}
