import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  country:any;
  category:any;
  name:any;
  homeCategory:string="everything";
  homeNews:any;
  homeArray:number[]=[1,2,3,4,5,6]
  constructor(private router:Router , private api:ApiPoliticsService) { 
    
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
    this.api.getWorldData(this.homeCategory).subscribe((world)=>{
     this.homeNews = world.articles;
     this.homeArray=[this.homeNews[10],this.homeNews[22],this.homeNews[30],this.homeNews[3],this.homeNews[4],this.homeNews[5],
     this.homeNews[24],this.homeNews[52],this.homeNews[33]]
    
 
    })
  }
  onSubmit(){
    this.router.navigate([`/home/${this.category.name}/${this.country.code}`]);
  
   
  }
  
 

}