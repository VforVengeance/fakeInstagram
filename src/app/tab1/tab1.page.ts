import { Component, OnInit } from '@angular/core';
import { InstagramService, Post, Comment } from '../instagram.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public posts: Post[] = [];
  public post: Post; 
  public author: string;
  
  constructor(public instaService: InstagramService, public route: ActivatedRoute, public toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.author = this.instaService.getAuthor();
    
    this.instaService.all().then(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }
  
  like(id: number) {
    this.author = this.instaService.getAuthor();
    this.instaService.addLike(id, this.author).then(() => {
      this.presentToast('Your like have been sent.');
      this.loadChatAndMessages();
    });
  }

  loadChatAndMessages() {
    console.log('#loadChatAndMessages');
    if (this.instaService) {
      this.instaService.all().then(response => {
        this.posts = response;
        console.log(this.posts);
      });
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



}
