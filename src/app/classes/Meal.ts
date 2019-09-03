import { ImageSnippet } from './Image'
import { Label } from './Label';

export class Meal {

path:ImageSnippet;
labels:Label[];
hour:Date;
constructor(path:ImageSnippet,hour:Date,categories:Label[]){
  this.hour=hour;
this.path=path;
 let i=0;
for(i=0;i<categories.length;i++)
this.labels[i]=categories[i];
}
  }
  