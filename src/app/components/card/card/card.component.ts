import { SearchPipe } from './../../../pipes/search.pipe';
import { Meal } from './../../../service/i-meals';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { IMeals } from '../../../service/i-meals';
import { RecService } from '../../../service/rec.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink,SearchPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  meals!:Meal[]
  
  
  @Input() name!:string;

  private readonly recService = inject(RecService)
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getData();
  
}

  getData():void{
    this.recService.getData().subscribe({
     next:(res)=>{
      console.log(res);
      
      this.meals=res.meals;
     },
     error:(err)=>{
      console.log(err);
      
     }
    })
  }
}
