import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  content: string = " ";
  value: string = " ";
  registerSt:boolean = false;
  loginSt:boolean = false;

  search() {
    this.content = this.value
  }
  onInput(event){
    this.value = event.target.value
  }
  register(){
    this.registerSt = !this.registerSt;
    this.loginSt = false;
  }

  login(){
    this.loginSt = !this.loginSt;
    this.registerSt = false;
  }


  houses=[
    {
      price:798,
      street:'naukova'
    },
    {
      price:798,
      street:'naukova'
    },
    {
      price:798,
      street:'naukova'
    },
    {
      price:798,
      street:'naukova'
    },]

}

