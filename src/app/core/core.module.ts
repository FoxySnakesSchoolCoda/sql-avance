import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [MainLayoutComponent, AuthLayoutComponent],
})
export class CoreModule {}
