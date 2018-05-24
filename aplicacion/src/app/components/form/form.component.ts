import { Component, OnInit } from '@angular/core';
import * as sweetalert from 'sweetalert';

import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:any={
    name:"",
    lastName:"",
    cel:"",
    range:""
  }
  constructor(private service:ServiceService){}

  ngOnInit() {
  }

  validateData(){
    if(this.user.name != ""){
      if(this.user.lastName != ""){
        if(this.user.cel != ""){
          if(this.user.range != ""){
            this.service.getData(this.user).subscribe((res:any) => {
              console.log(res);
              swal("Exito!", "Tu informacion fe enviada con exito, estaremos en contacto contigo", "success");
              setTimeout(function(){
                window.location.href = window.location.href;
              },5000)
            });
          }else{
            swal("Ocourrio un error!", "Debes ingrsar tu rango de edad", "error");
          }
        }else{
          swal("Ocourrio un error!", "Debes ingrsar tu celular", "error");
        }
      }else{
        swal("Ocourrio un error!", "Debes ingrsar tu apellido", "error");
      }
    }else{
      swal("Ocourrio un error!", "Debes ingrsar tu nombre", "error");
    }
  }

}
