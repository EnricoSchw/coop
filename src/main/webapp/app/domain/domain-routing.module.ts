import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'editor',
        loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),
        data: {
          pageTitle: 'editor.home.title',
        },
      },
    ]),
  ],
})
export class DomainRoutingModule {}
