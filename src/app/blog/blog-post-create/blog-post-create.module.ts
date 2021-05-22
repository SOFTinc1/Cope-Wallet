import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostCreateRoutingModule } from './blog-post-create-routing.module';
import { BlogPostCreateComponent } from './blog-post-create.component';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';


@NgModule({
  declarations: [BlogPostCreateComponent],
  imports: [
    CommonModule,
    BlogPostCreateRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BlogPostCreateModule { }
