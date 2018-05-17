import { Component ,OnInit} from '@angular/core';
import { Router }            from '@angular/router';
import {SearchFilterComponentService} from './searchFilterComponentService';
import  data from './city.json';
@Component({
  selector: 'serch-filter',
  templateUrl: './searchFilterComponent.html',
  styleUrls: ['./searchFilterComponent.css'],
  providers: [SearchFilterComponentService]
})
export class SearchFilterComponent implements OnInit{
  cities = [];
  skills: string[] = ['Angular JS', 'Angular 2', 'JavaScript', 'HTML 5 and CSS 3',
    'Java ','J2EE','Typescript', 'C', 'c++',
    'C#'];
  sources :string[] = ['GIT','SVN','Naukri','Linkidin','Others','Times'];
 skill : any;
 city : any;
 source : any;
  constructor (private router: Router, private dataservice : SearchFilterComponentService){

  }

  searchSkill($event,value){this.skill = value;};
  searchSource($event,value){this.source = value;};
  searchCity($event,value){this.city = value;};
  search(){
    if(this.skill == undefined || this.source == undefined || this.city == undefined){
      alert("Please select all the sections");
    }else{
       this.router.navigate(['/summary',this.skill,this.source,this.city]);
    //  alert(this.skill+'/'+this.city+"/"+this.source);
    }

  }
  //console.log(JSON.stringify(this.item));

    ngOnInit():void{
  //  this.title = this.dataservice.getName();
    //console.log(JSON.stringify(data));
    for(var i=0;i<data.length;i++){
    //  console.log(JSON.stringify(data[0].city));
      this.cities.push(data[i].city);
    }

}
}
