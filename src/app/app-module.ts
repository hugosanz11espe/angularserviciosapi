import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ServiceComics } from './services/service.comics';
import { ClientesComponent } from './components/clientes-component/clientes-component';
import { ServiceClientes } from './services/service.clientes';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, ComicsComponent, ClientesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ServiceComics,ServiceClientes, provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
