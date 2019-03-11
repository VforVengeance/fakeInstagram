import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { InstagramService, Post } from '../instagram.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public post: Post = {
    author: "",
    image: "",
    message:""
  };
  constructor(public instaService: InstagramService, public toastController: ToastController) {
  }

  set() {
    this.instaService.newPost(this.post).then(() => {
      if(this.instaService.getAuthor()) {
        this.instaService.getAuthor()
      }
      this.presentToast('Post has been created');
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
