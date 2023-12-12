import { Component, Input } from '@angular/core';
import { CardPricingComponent } from './card-pricing/card-pricing.component';
import { CardLabelComponent } from './card-label/card-label.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardPricingComponent, CardLabelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string = ""
  @Input()
  gameType: string = "XPTO | PS4"
  @Input()
  gamePrice: string = "R$ 399,90"

  constructor() { }
}
