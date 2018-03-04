import { Component, OnInit } from '@angular/core';
import {Shoes} from '../../shoes';
import {ShoesService} from '../../shared-service/shoes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shoes-form',
  templateUrl: './shoes-form.component.html',
  styleUrls: ['./shoes-form.component.css']
})
export class ShoesFormComponent implements OnInit {
  private shoes:Shoes;
  constructor(private _shoesService:ShoesService, private _router:Router) { }

  ngOnInit() {
    this.shoes=this._shoesService.getter();
  }
  processForm(){
    if(this.shoes.id==undefined){
      this._shoesService.addShoes(this.shoes).subscribe((shoes)=>{
        console.log(shoes);
        this._router.navigate(['/']);
      }, (error)=> {
        console.log(error);
      });
    } else {
      this._shoesService.updateShoes(this.shoes).subscribe((shoes)=>{
            console.log(shoes);
          }, (error)=>{
            console.log(error);
            this._router.navigate(['/']);
          });
    }
  }

}
