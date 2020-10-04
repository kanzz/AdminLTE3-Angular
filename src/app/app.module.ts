import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarMainComponent }          from './components/adminlte/navbar/navbar-main/navbar-main.component';
import { NavbarLeftLinksComponent }     from './components/adminlte/navbar/navbar-left-links/navbar-left-links.component';
import { NavbarSearchFormComponent }    from './components/adminlte/navbar/navbar-search-form/navbar-search-form.component';
import { NavbarRightLinksComponent }    from './components/adminlte/navbar/navbar-right-links/navbar-right-links.component';
import { SidebarMainComponent }         from './components/adminlte/sidebar/sidebar-main/sidebar-main.component';
import { SidebarBrandLogoComponent }    from './components/adminlte/sidebar/sidebar-brand-logo/sidebar-brand-logo.component';
import { SidebarMenuComponent }         from './components/adminlte/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarMenuUserinfoComponent } from './components/adminlte/sidebar/sidebar-menu-userinfo/sidebar-menu-userinfo.component';
import { FooterMainComponent }          from './components/adminlte/footer/footer-main/footer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    NavbarLeftLinksComponent,
    NavbarSearchFormComponent,
    NavbarRightLinksComponent,
    SidebarMainComponent,
    SidebarBrandLogoComponent,
    SidebarMenuComponent,
    SidebarMenuUserinfoComponent,
    FooterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
