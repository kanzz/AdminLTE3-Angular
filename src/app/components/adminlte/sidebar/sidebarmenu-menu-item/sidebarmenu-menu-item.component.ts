import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../../services/menu.service';

@Component({
  selector: 'app-sidebarmenu-menu-item',
  templateUrl: './sidebarmenu-menu-item.component.html',
  styleUrls: ['./sidebarmenu-menu-item.component.css']
})
export class SidebarmenuMenuItemComponent implements OnInit {

  @Input() menuItem:MenuItem;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
