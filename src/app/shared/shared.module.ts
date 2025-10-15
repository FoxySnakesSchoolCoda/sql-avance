import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [FormInputComponent, ModalComponent, CardComponent, LoaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormInputComponent, ModalComponent, CardComponent, LoaderComponent, ReactiveFormsModule],
})
export class SharedModule {}
