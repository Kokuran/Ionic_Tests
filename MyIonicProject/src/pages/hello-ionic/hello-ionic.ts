import { Component } from '@angular/core';


import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public alerCtrl: AlertController) { }
 // constructor() {}
  
  doAlert() {

    let alert = this.alerCtrl.create({

      title: 'Serio ?!',

      message: 'Czy ty właśnie posłuchałeś się jakiegoś przycisku!? No brawo człowiek, steruje tobą maszyna. W takim tępię Matrixie, nadchodzę!',

      buttons: ['Ok']

    });

    alert.present()

  }
}
