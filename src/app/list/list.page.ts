import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  // itemsVariables = this.cardService.optionsVariables;
	// itemsInterface = this.cardService.optionsInterface;
	// icons = this.cardService.icons;
	items = this.cardService.items;
	isCheckboxChecked = false;

  constructor(private cardService: CardService,
							private router: Router) { }

  ngOnInit() {
  }

	onSelect(item) {
		this.cardService.setSelection(item);
		if (!this.isCheckboxChecked)
			this.router.navigate(["/home"]);
	}

	checkboxClicked(e) {
		this.isCheckboxChecked = e.currentTarget.checked;
		console.log(this.isCheckboxChecked);
	}
}
