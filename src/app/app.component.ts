import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url="https://api.genderize.io/?name=";
  name;
  gender;
  constructor(private http: HttpClient){

  }
  getData(){
    this.http.get(this.url+this.name).subscribe((data)=>{
      console.log(data);
      this.gender=data['gender'];
      
    })
  }
}
