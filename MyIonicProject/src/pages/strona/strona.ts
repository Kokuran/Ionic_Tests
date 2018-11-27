import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
//import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-strona',
  templateUrl: 'strona.html'
})
export class StronaPage {

  myPhone:any;

  constructor(public alertCtrl: AlertController, private camera: Camera) { }
  
  doPrompt() {

    let prompt = this.alertCtrl.create({

      title: 'Data',

      message: "Serio, znów się na to nabrałeś? Weź wpisz kiedy chcesz bym przejął władzę bo idę na spotkanie",

      inputs: [

        {
          name: 'title',
          placeholder: 'Wpisz coś'
        },

      ],

      buttons: [

        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }

        },

        {

          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }

        }

      ]

    });

    prompt.present();

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myPhone = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
