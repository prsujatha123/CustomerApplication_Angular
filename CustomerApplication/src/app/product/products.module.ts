import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
  RouterModule,SharedModule,
    RouterModule.forChild([{path:'products', component:ProductListComponent},
    {path:'products/:id', canActivate:[ProductDetailsGuard],component:ProductDetailsComponent}])
  ],
  declarations: [ProductListComponent,
                ProductDetailsComponent,
              ConvertToSpacesPipe],
       exports:[RouterModule]     
})
export class ProductsModule { }
