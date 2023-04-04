import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'pt-sidemenu',
  templateUrl: './pt-sidemenu.component.html',
  styleUrls: ['./pt-sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PtSidemenuComponent {
  menuItems: String[] = [
    "Menu Item 1",
    "Menu Item 2",
    "Menu Item 3"
  ]
}
