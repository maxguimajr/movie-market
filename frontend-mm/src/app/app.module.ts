import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/template/header/header.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './componets/template/nav/nav.component'
import { CardFilmComponent } from './componets/template/card-film/card-film.component';
import { ListFilmsComponent } from './views/list-films/list-films.component';
import { SelectButtonComponent } from './componets/template/select-button/select-button.component';
import { CheckoutComponent } from './views/checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardFilmComponent,
    ListFilmsComponent,
    SelectButtonComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
