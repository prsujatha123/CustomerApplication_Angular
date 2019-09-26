import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { from } from 'rxjs/observable/from';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string="Product Details"

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`${id}`
  }
  onBack(): void{
    console.log('on back method')
    this.router.navigate(['/products'])
  }

}
