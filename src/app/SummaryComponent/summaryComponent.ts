import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {SummaryComponentService} from './summaryComponentService';
import  data from './userDetails.json';
@Component({
  selector: 'summary',
  templateUrl: './summaryComponent.html',
  styleUrls: ['./summaryComponent.css'],
  providers: [SummaryComponentService]
})
export class SummaryComponent implements OnInit{
  skill : any ;
  source : any ;
  city : any ;
  summary = [];

  constructor (private router: Router,private activatedRoute: ActivatedRoute, private dataservice : SummaryComponentService){

  }

  getSummaryData(skill,source,city){
    for(var i=0;i<data.length;i++){
      if(data[i].skill.toUpperCase() == skill.toUpperCase()  && data[i].source.toUpperCase()  == this.source.toUpperCase()  && data[i].city.toUpperCase()  == city.toUpperCase() ){
        this.summary = data[i].users;
      }
    }

  }


    ngOnInit():void{
      this.activatedRoute.params.forEach((params: Params) => {
            this.skill = params['skill'];
            this.source = params['source'];
            this.city = params['city'];
            console.log(JSON.stringify(data));
            this.getSummaryData(this.skill,this.source,this.city);
        });
    }
}
