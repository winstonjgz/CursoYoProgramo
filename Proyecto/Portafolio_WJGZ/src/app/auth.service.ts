import { Injectable } from '@angular/core';
// abajo escribimos el codigo presentado en el curso
import{ HttpClientModule, HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //api = 'https://localhost:3000/api';
  //token;
  uri = 'http://localhost:3000/api'; //la url que corresponda
  token;

  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string){
    this.http.post(this.uri + 'authenticate', {email: email, password: password})
    .subscribe((resp: any)=>{
      this.router.navigate(['profile']);
      Localstorage.setItem('auth_token', resp.token);

    })
  }



  //constructor() { }
}

logout(){
  localStorage.removeItem('token');
}

public get logIn(): boolean {
  return(localStorage.getItem('token') !==null);
   
}
