import { Component, Input, Output, EventEmitter } from "@angular/core";



@Component({
  selector: "counter",

  styles: [
    `

    	.quantity-input {
    		display:flex; align-items:center;
    	}
    	.quantity-input .input-width {
    		width:50px;
    		border: 1px solid #bdbdbd;
    		padding-top: 5px;
    		
    	}
    	
    	ion-icon{
    		margin-left:0px;
    		height:20px;
   			padding-top: 3px;
   		    margin-top: 5px;
   		    color:#64c8dc;
    		
    	}
    	button{
    		background-color:SteelBlue;
        margin-left: 0px;
    	}
 	`
  ],

  template: `
  	  <span class="quantity-input" style="">
  			<input type="number" [(ngModel)]="counterValue" class="input-width"/> 
  			<button small (click)="submit($event)"><ion-icon name="refresh"></ion-icon></button>
  		</span>
	`
})
export class QuantityComponent {
  @Input() counterValue = 0;

  @Input() cookie = null;

  @Output() counterChange = new EventEmitter();

  submit(evt) {
    this.counterChange.emit({
      value: this.counterValue,
      cookie: this.cookie
    });
  }
}

//this one should be in you respected .html page

// <counter [counterValue]="myValue" (counterChange)="myValueChange($event);"></counter>

//this code should be in your respected .ts files

// myValueChange(ev) {
//   	console.log("Test");
//   	console.log(ev);
//   }

// 	public myValue:number =5;
