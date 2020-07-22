import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { CoopSharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { editorsRoute } from 'app/domain/editor/editor.route';

@NgModule({
  declarations: [EditorComponent],
  imports: [CoopSharedModule, RouterModule.forChild([editorsRoute])],
})
export class EditorModule {}
