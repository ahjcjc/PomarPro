import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardUsuarioComponent } from './pages/usuario/card-usuario/card-usuario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CardUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }

