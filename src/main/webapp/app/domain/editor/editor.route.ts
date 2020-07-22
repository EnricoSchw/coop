import { Route } from '@angular/router';

import { EditorComponent } from './editor.component';

export const editorsRoute: Route = {
  path: '',
  component: EditorComponent,
  data: {
    pageTitle: 'editor.title',
  },
};
