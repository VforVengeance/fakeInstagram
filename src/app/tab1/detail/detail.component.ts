import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post, Comment, InstagramService } from 'src/app/instagram.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public post: Post;
  public author: string;
  public comment: Comment = {
    message: '',
    author: ''
  };

  constructor(public instaService: InstagramService, public route: ActivatedRoute, public toastController: ToastController) {}

  ngOnInit() {
    this.loadChatAndMessages();
    this.comment.author = this.instaService.getAuthor();

  }



  send() {
    if (!this.comment.author) {
      this.presentToast('Set Author in settings');
    } else {
      this.instaService.addComment(this.post.id, this.comment).then(() => {
        this.comment.message = ''; // reset dell'input
        this.presentToast('Your message have been sent.');
        this.loadChatAndMessages();
      });
    }
  }



  loadChatAndMessages() {
    console.log('#loadChatAndMessages');
    if (this.instaService) {
      this.instaService.getById(this.route.snapshot.params.id).then(response => {
        this.post = response;
      });
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


}
