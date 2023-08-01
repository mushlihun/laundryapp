import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post2.mode';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  post = {} as Post;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
   
  ) {}

  ngOnInit() {}

  async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("checkout").add(post);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to payment page
    this.navCtrl.navigateRoot("home2");
    }
  }
  
  formValidation(){
    if(!this.post.name){
      this.showToast("Enter name");
      return false;
    }

    if(!this.post.email){
      this.showToast("Enter email");
      return false;
    }
    if(!this.post.address){
      this.showToast("Enter address");
      return false;
    }

    if(!this.post.services){
      this.showToast("Enter services");
      return false;
    }

    if(!this.post.option){
      this.showToast("Enter option");
      return false;
    }

    if(!this.post.message){
      this.showToast("Enter message");
      return false;
    }

    if(!this.post.total){
      this.showToast("Enter total");
      return false;
    }


    

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }}
