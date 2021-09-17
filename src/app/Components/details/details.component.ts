import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number | any;
  bikeDetails:any;
  subscription:any;

  constructor(private bikeService:ProductsService,
    private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id");
    // this.bikeDetails = this.bikeService.getProductById(this.id);   
    console.log("inside ngOnInit()");
    
    this.subscription = this.route.params.subscribe(params => {
      this.id = params["id"];   
      this.bikeDetails = this.bikeService.getProductById(this.id);   
    });
  }
  goHome() {
    this.router.navigate([""]);
  }
  goProducts() {
    this.router.navigate(["/product"]);
  }
}
