import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListListComponent } from './components/shopping-list-list/shopping-list-list.component';
import { ShoppingListFormComponent } from './components/shopping-list-form/shopping-list-form.component';
import { ShoppingListDetailComponent } from './components/shopping-list-detail/shopping-list-detail.component';

const routes: Routes = [
  { path: '', component: ShoppingListListComponent },
  { path: 'create', component: ShoppingListFormComponent },
  { path: ':itemId', component: ShoppingListDetailComponent },
  { path: ':itemId/edit', component: ShoppingListFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
