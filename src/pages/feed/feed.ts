import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public username:string ="Ricardo Antunes";
  public birthdate:string="October 11 ,1994";
  public n1:number=20;
  public n2:number=10;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public addnumbers(n1,n2):void{
    alert(n1+n2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.addnumbers(this.n1,this.n2);
  }

}
