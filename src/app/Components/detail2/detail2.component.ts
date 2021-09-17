import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe(params => {
      this.id = params["id"];
    });
  }

}
