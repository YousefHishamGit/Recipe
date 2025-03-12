import { Component, inject, OnInit } from '@angular/core';
import { RecService } from '../../../service/rec.service';
import { CardComponent } from "../../card/card/card.component";

@Component({
  selector: 'app-nav-bar',
  imports: [CardComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  mealList:any;
  name:string="";
  private readonly recService =inject(RecService);

  ngOnInit(): void {  
    this.getList();
    
  }

  getList():void{
    this.recService.getList().subscribe({
      next:(res)=>{
        this.mealList=res;
      }
    })   
  }

  searchCat(cat:string=''):void{
    this.name=cat;
  }


}
