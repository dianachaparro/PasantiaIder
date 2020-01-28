import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonLabel } from '@ionic/angular';
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email:string;
  password: string;

 constructor(private authService: AuthService, public router: Router) { }

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
