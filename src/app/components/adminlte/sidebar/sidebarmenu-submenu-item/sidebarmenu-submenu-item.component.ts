import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../services/menu.service';

@Component({
  selector: 'app-sidebarmenu-submenu-item',
  templateUrl: './sidebarmenu-submenu-item.component.html',
  styleUrls: ['./sidebarmenu-submenu-item.component.css']
})
export class SidebarmenuSubmenuItemComponent implements OnInit {

  @Input() ItemSubMenu:SubMenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
