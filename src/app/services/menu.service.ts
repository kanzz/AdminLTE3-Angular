import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  public menu:MenuItem[] = [];

  constructor() {
    
    let menuPaginas = this.generaMenuItem('fas fa-tachometer-alt','Paginas');
    menuPaginas.SubMenuItems.push({link:'pagina1',texto: 'Pagina 1'});
    menuPaginas.SubMenuItems.push({link:'pagina2',texto: 'Pagina 2'});
    this.guardaMenu(menuPaginas);

  }

  obtener ():MenuItem[] {
    return this.menu;
  }

  generaMenuItem (icono:string, texto:string, SubMenuItems:SubMenuItem[] = []):MenuItem {
    return {icono:icono,texto:texto,SubMenuItems:SubMenuItems}
  }

  guardaMenu(MenuItem:MenuItem):void 
  {
    this.menu.push(MenuItem);
  }

}

export interface MenuItem {
    icono:string;
    texto:string;
    SubMenuItems:SubMenuItem[];
}

export interface SubMenuItem {
  texto:string;
  link:string;
}
