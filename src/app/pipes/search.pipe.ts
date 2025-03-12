import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false // Optional: If you want the pipe to update dynamically
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], name: string): any[] {
    if (!products || !Array.isArray(products)) return []; // Check if products is valid
    if (!name) return products; // If name is empty, return all products

    return products.filter((item) => 
      item.strCategory?.toLowerCase().includes(name.toLowerCase())
    );
  }
}
