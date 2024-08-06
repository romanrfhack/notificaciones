import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationBarComponent } from './notification-bar.component';


@NgModule({
  declarations: [
    NotificationBarComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    NotificationBarComponent
  ],
})
export class SharedModule {}
