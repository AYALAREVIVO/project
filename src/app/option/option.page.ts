import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from "@ionic/angular";
import { ApiPictureProvider } from "../providers/api-picture/api-picture";
import { Label } from "../../app/classes/Label";
import { Observable } from "rxjs";
import { ImageSnippet } from "../../app/classes/Image";

@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  labels: Array<{ name: string; probability: number; wanted: boolean }>;
  image: string;
  counter: number;
  tags: any;
  loaded = false;
  ngOnInit() {
    this.labels = new Array<{
      name: string;
      probability: number;
      wanted: boolean;
    }>();
    // this.f1();
  }
  ionViewWillEnter() {
    // this.f1();
  }
  // ionViewLoaded() {
  // }
  // constructor(
  //   public navCtrl: NavController,
  //   public navParams: NavParams,
  //   public apPic: ApiPictureProvider
  // ) {
  //   this.labels = new Array<{
  //     name: string;
  //     probability: number;
  //     wanted: boolean;
  //   }>();
  //   this.image = ""; //need to be loaded from service
  //   this.f1(this.image);

  //   //need to be loaded from service
  //   // this.getLabels();
  //   this.labels = [];
  // }
  itemClicked(e): void {
    if (!e.checked) {
      this.counter--;
    } else {
      if (this.counter < 10) this.counter++;
    }
    console.log(e.value);
    console.log(this.counter);
    console.log(this.labels);
  }
  value = "";

  addedLabel(e): void {
    console.log(e);
    this.labels.push({
      name: e,
      probability: 1,
      wanted: true
    });
    this.counter = this.counter + 1;
    console.log(this.counter);
    this.value = "";
    console.log(this.labels);
  }

  // resolveAfter2Seconds(path: string) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(
  //         this.apPic.GetLabels(path).then(data => {
  //           this.tags = data;
  //           console.log(this.tags);
  //           this.loaded = true;
  //         })
  //       );
  //     }, 4000);
  //   });
  // }
  // loadedLabels: Label[];

  // async f1(path: string) {
  //   var x = await this.resolveAfter2Seconds(path);
  //   this.loadedLabels = this.tags as Label[];
  //   let i = 0;
  //   for (; i < this.loadedLabels.length; i++) {
  //     this.labels.push({
  //       name: this.loadedLabels[i].Name,
  //       probability: this.loadedLabels[i].Probability,
  //       wanted: true
  //     });
  //   }
  //   this.counter = i + 1;
  // }
  // selectedFile: ImageSnippet;
  // processFile($event): void {
  //   const file: File = $event.target.files[0];
  //   const reader = new FileReader();
  //   var preview;
  //   reader.addEventListener("load", (event: any) => {
  //     preview = document.getElementById("preview");
  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.selectedFile.pending = true;
   
  //     preview.src = reader.result;
  //   });

  //   reader.readAsDataURL(file);
  // }
 
  ionViewDidLoad() {
    console.log("ionViewDidLoad OptionsPage");
  }

}
