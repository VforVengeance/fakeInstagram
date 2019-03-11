import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { InstagramService } from '../instagram.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public author: string;
  constructor(public instaService: InstagramService, public toastController: ToastController) {
  }

  ngOnInit() {
    this.author = this.instaService.getAuthor();
  }

  set() {
    this.instaService.setAuthor(this.author);
    this.presentToast('User has been setted');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
