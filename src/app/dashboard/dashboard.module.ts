import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
        children: [
          {
            path: "home",
            loadChildren: () =>
              import("./home/home.module").then((res) => res.HomeModule),
          },
          {
            path: "",
            redirectTo: "home",
            pathMatch: "full",
          },
        ],
      },
    ]),
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class DashboardModule {}