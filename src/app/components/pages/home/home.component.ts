import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  country:any;
  category:any;
  name:any;
  constructor(private router:Router) { 

  }
  countries = [
    {name: 'United States', code: 'us'},
    {name: 'France', code: 'fr'},
    {name: 'Egypt', code: 'eg'},
    {name: 'Japan', code: 'jp'},
  ];
  categories = [
    {name: 'politics'},
    {name: 'sports'},
    {name: 'general'},
    {name: 'technology'},
  ];

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate([`/home/${this.category.name}/${this.country.code}`]);
  }

}