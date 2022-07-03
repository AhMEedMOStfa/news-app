import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manchet',
  templateUrl: './manchet.component.html',
  styleUrls: ['./manchet.component.css']
})
export class ManchetComponent implements OnInit {

  @Input()manchetData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
