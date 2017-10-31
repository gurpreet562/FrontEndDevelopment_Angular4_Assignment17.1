import {Component} from '@angular/core';

@Component({

selector: 'app-home',

template: `<h1>{{welcome}}</h1>

<table class="table">

<tr>

<th>#</th>

<th>Images URL</th>

<th>Name</th>

<th>Description</th>

<th>Rating</th>

<th>Release</th>

</tr>

<tr *ngFor="let game of games|slice:0:5 as topgames; index as i”">

<td>{{i + 1}}</td>
<td>  {{ topgames.length - i }}: { game.title }}</td>



<td>{{game.name}}</td>

<td>{{game.platform}</td>



<td>{{game.release}}</td>

</tr>

</table>`

})

export class HomeComponent {

welcome : string;

games : [{

images: string,

name : string,

description : string,

rating : string,

release : string

}];

constructor(){

this.welcome = "Display List using ngFor in Angular 2"

this.games = [{

name : "Deus Ex: Mankind Divided",

platform: " Xbox One, PS4, PC",

release : "August 23"

},

{

name : "Hue",

platform: " Xbox One, PS4, Vita, PC",

release : "August 23"

},

{

name: "The Huntsman: Winter's Curse",

platform: "PS4",

release : "August 23"

},

{

name : "The Huntsman: Winter's Curse",

platform: "PS4",

release : "August 23"

}]

};

};
