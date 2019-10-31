import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListaComponent } from './films/films-lista/films-lista.component';
import { SharedService } from './films/shared/shared.service';
import { MenuComponent } from './menu/menu.component';
import { FilmsDetalheComponent } from './films/films-detalhe/films-detalhe.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilmsListaComponent,
    FilmsDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
