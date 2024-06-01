import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.page.html',
  styleUrls: ['./game-over.page.scss'],
})
export class GameOverPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  async goHome(){
    this.router.navigate(['home']);
  }
  async playAgain(){
    this.router.navigate(['levels']);
  }
  

}
