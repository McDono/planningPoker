import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  itemsVariables = this.cardService.optionsVariables;
	itemsInterface = this.cardService.optionsInterface;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
		// console.log(this.items[0]);
		// var checkbox = document.getElementsByTagName("ion-checkbox")[0];
		// var path = "";
		// checkbox.addEventListener("ionChange", (e) => {
		// 	if (e.target.checked === true)
		// 		path = "/home";
		// 	else
		// 		path = "/list";
		// 	var list = document.getElementById("list");
		// 	//list.removeAttribute("routerLink");
		// 	list.setAttribute("routerLink", path);
		// 	console.log(list.getAttribute("routerLink"));
		// });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

	onSelect(item) {
		//console.log(item);
		this.cardService.setSelection(item);
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
