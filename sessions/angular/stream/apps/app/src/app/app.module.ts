import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { DasboardCanAvtivate } from './dashboard/dashboard.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { TokenInterceptor } from './core/services/http/token-interceptor.service';
import { ResponseMapperInterceptor } from './core/services/http/response-mapper-interceptor.service';
@NgModule({
  declarations: [AppComponent, DashboardComponent, LoginComponent, HomeComponent, OverviewComponent],
  imports: [BrowserModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'overview/:id',
            component: OverviewComponent
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          }
        ],
        canActivate: [DasboardCanAvtivate]
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseMapperInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
