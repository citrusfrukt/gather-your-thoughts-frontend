import { LabelsProvider } from '../../providers/labels/labels';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-labels-show',
  templateUrl: 'labels-show.html',
})
export class LabelsShowPage {
  labelId :any;
  labelName: any;
  thoughts :any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private labelsProvider: LabelsProvider
  ) {
    if (this.navParams.get('id')) {
      this.labelId = this.navParams.get('id');
    }
    
    if (this.navParams.get('name')) {
      this.labelName = this.navParams.get('name');
    }

    this.labelsProvider.getLabelThoughts(this.labelId).subscribe(({ data }) => {
      this.thoughts = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabelsShowPage');
  }

}