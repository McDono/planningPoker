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

  constructor(private cardService: CardService,
							private router: Router) { }

  ngOnInit() {
		// var checkbox = document.getElementsByTagName("ion-checkbox")[0];
		// var path = "";
		// checkbox.addEventListener("ionChange", (e) => {
		// 	if (e.target.checked === true)
				// path = "/home";
				// this.router.navigate(["/home"]);
			// else
				// path = "/list";
				// this.router.navigate(["/list"]);
			// var list = document.getElementById("list");
			//list.removeAttribute("routerLink");
			// list.setAttribute("routerLink", path);
			// console.log(list.getAttribute("routerLink"));

		// });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

	onSelect(item) {
		//console.log(item);
		this.cardService.setSelection(item);
		var checkbox = document.getElementsByTagName("ion-checkbox")[0];
		if (checkbox.getAttribute("checked") === true)
			this.router.navigate(["/home"]);
			//----------------------------------I'M HERE--------------------
	}

	// selectRouter() {
	// 	return "/home";
	// }

	checkboxClicked() {
		// var checkbox = document.getElementsByTagName("ion-checkbox")[0];
		// var list = document.getElementById("list");
		// console.log(list);
		// var path = "";
		// if (checkbox.getAttribute("checked") === true)
		// 	path = "/home";
		// else
		// 	path = "/list";
		// console.log(path);
		// list.setAttribute("routerLink", path);
		// console.log(list.getAttribute("routerLink"));
	}
}
