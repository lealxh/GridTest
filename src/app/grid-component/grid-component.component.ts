import { GridServiceService } from './../grid-service.service';
import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent implements OnInit {

  Cars: any[];
  constructor(private svc: GridServiceService) { }

  ngOnInit() {
  this.Cars=new Array();
  this.svc.getCars().
  subscribe(
    x=>{
      this.Cars=x;
      console.log(x);
      });
  }

}
