import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
	cards = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  constructor() { }
}
