import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.css']
})
export class Detail1Component implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe(params => {
      this.id = params["id"];
    });
  }

}
