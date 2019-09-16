import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { SelectedCardPage } from '../selected-card/selected-card.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	cards = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

	constructor(public modalCtrl: ModalController) {}

	async onSelect(card) {
		const modal = await this.modalCtrl.create({
			component: SelectedCardPage,
			componentProps: { value: card }
		});
		return await modal.present();
	}

}
