import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'new',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./blog-post-create/blog-post-create.module')
            .then(m => m.BlogPostCreateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
