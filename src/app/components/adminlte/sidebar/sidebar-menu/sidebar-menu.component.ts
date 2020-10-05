import { Component, OnInit } from '@angular/core';
import { MenuService, MenuItem } from '../../../../services/menu.service'

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})

export class SidebarMenuComponent implements OnInit {
  
  public menu:MenuItem[];

  constructor(private Menu:MenuService) { 
    this.menu = Menu.obtener();
  }

  ngOnInit(): void {
  }

}
