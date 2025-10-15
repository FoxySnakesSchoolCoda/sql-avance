import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ShoppingListListComponent } from './components/shopping-list-list/shopping-list-list.component';
import { ShoppingListDetailComponent } from './components/shopping-list-detail/shopping-list-detail.component';
import { ShoppingListFormComponent } from './components/shopping-list-form/shopping-list-form.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
  declarations: [
    ShoppingListListComponent,
    ShoppingListDetailComponent,
    ShoppingListFormComponent,
  ],
  imports: [CommonModule, SharedModule, ShoppingListRoutingModule],
})
export class ShoppingListModule {}
