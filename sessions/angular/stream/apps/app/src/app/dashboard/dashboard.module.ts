import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { DasboardCanAvtivate } from './dashboard.guard';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BgColorModule } from '../shared/directives/bg-color.module';
import { FilterPipeModule } from '../shared/pipes/filter-pipe/filter-pipe.module';
import { MyIfModule } from '../shared/directives/my-if/my-if-module';
import { StreamSelectModule } from '../shared/components/stream-select/stream-select.module';
import { MathToken, MyMathFns, PI } from './PI-token';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    BgColorModule,
    FilterPipeModule,
    MatSnackBarModule,
    MyIfModule,
    StreamSelectModule,
    RouterModule.forChild([{
      path: '',
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
    }])
  ],
  declarations: [DashboardComponent, HomeComponent, OverviewComponent],
  providers: [
    {
      provide: PI,
      useValue: 3.14
    },
    {
      provide: MathToken,
      useClass: MyMathFns
    }
  ]
})
export class DashboardModule {

}
