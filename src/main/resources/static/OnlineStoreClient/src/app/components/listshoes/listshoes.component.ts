import { Component, OnInit, Output } from '@angular/core';
import {ShoesService} from '../../shared-service/shoes.service';
import {Shoes} from '../../shoes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listshoes',
  templateUrl: './listshoes.component.html',
  styleUrls: ['./listshoes.component.css']
})
export class ListshoesComponent implements OnInit {
private shoes:Shoes[];
@Output()
private errorMessage;

  constructor(private _shoesService:ShoesService, private _router:Router) { }

  ngOnInit() {
    this._shoesService.getShoes().subscribe((shoes)=>{
      console.log(shoes);
      this.shoes=shoes;
    },(error)=>{
      console.log(error);
      this.errorMessage='Problem while loading page, please try again later.';
    })
  }

  deleteShoes(shoes){
    this._shoesService.deleteShoes(shoes.id).subscribe((shoes)=>{
    this.shoes.splice(this.shoes.indexOf(shoes),1);
  },(error)=>{
    console.log(error);
    this.errorMessage='Problem while loading page, please try again later.';
    });
  }

  updateShoes(shoes){
    this._shoesService.setter(shoes);
    this._router.navigate(['/op']);
  }

  addShoes(){
    let shoes = new Shoes();
    this._shoesService.setter(shoes);
    this._router.navigate(['/op']);
  }
}
