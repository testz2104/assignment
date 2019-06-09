import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersService } from './services/orders.service';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    DashboardComponent,
    OrdersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'home', 
        component: HomeComponent
      },
      {
        path: 'dashboard/:username', 
        component: DashboardComponent,
        children: [
          {path: 'orders', component: OrdersComponent},
          {path: 'users', component: UsersComponent},
        ]
      }
    ])
  ],
  providers: [
    HttpClient,
    DataService,
    OrdersService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
