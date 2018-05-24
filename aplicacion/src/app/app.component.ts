import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lis:any;
  name:string='';
  constructor(private service:ServiceService){}

  ngOnInit(){
    this.service.getLi().subscribe((res:any) => {
      console.log(res);
      this.lis = res;
    });
  }

  loadName($name:string){
    this.name = $name;
  }

}
