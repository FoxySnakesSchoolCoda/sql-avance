import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [AboutComponent, TermsComponent, PrivacyComponent, SupportComponent],
  imports: [CommonModule, StaticRoutingModule],
})
export class StaticModule {}
