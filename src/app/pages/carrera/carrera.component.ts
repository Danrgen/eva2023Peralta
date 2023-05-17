import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera'
import { CarreraService } from 'src/app/service/carrera.service';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent {

  carrera: any = new Carrera();

  constructor(private carreraService: CarreraService,
    private router: Router) {
      console.log('hola')
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.carrera = new Carrera()
        this.carrera = params['nombre']
      }
      this.carreraService.setComponet(this)
    }


  guardar() {
    if (this.carreraService.update(this.carrera.nombre, this.carrera)){
      console.log('actualizado')
      this.carrera = new Carrera()
    }else{
      this.carreraService.save(this.carrera)
      this.carrera = new Carrera()
      
    }
}
}
