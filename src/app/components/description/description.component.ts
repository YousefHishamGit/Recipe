import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecService } from '../../service/rec.service';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly recService = inject(RecService);

  mealId!:string;
  mealData:any

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params => {
      this.mealId = params.get('id') || ''; // Get `name` from the route
      console.log(this.mealId);
      
    });
    this.getItem(this.mealId);
  }


  getItem(id:string):void{
    this.recService.getSpecificData(id).subscribe({
      next:(res)=>{
        this.mealData=res.meals[0];
        console.log(this.mealData.strIngredient1);
        
        
        
        
      }
    })
  }
}
