import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraService } from 'src/app/service/carrera.service';

@Component({
  selector: 'app-list-carrera',
  templateUrl: './list-carrera.component.html',
  styleUrls: ['./list-carrera.component.scss']
})
export class ListCarreraComponent {
  listadoCarreras: Carrera[];

  constructor(private carreraService: CarreraService,
      private router: Router) {
    this.listadoCarreras = carreraService.getList()
    console.log('listadoCarreras', this.listadoCarreras)
  }

  editar(carrera: Carrera){
    this.carreraService.updateContacto(carrera)
    let params: NavigationExtras = {
      queryParams: {
        nombre: carrera.nombre

      }
    }
  }

  editar1(carrera: Carrera) {
    let params: NavigationExtras = {
      queryParams: {
        nivel: carrera.nivel,
      },
    };

    this.router.navigate(["paginas/edit-carrera"], params);

    const inputNombre = document.getElementById('txtNombre') as HTMLInputElement;
    const inputNivel = document.getElementById('txtNivel') as HTMLInputElement;
    const inputKm = document.getElementById('txtKm') as HTMLInputElement;
  
    if (inputNombre && inputNivel && inputKm) {
      inputNombre.value = carrera.nombre;
      inputNivel.value = carrera.nivel;
      inputKm.value = carrera.km;
      carrera.nombre = inputNombre.value;
      carrera.nivel = inputNivel.value;
      carrera.km = inputKm.value;
  
      this.carreraService.update(carrera.nombre, carrera);
    }
  
    this.router.navigate(['list-paginas/listaCarreras']);
  }
  
  
  

  eliminar(carrera: Carrera) {
    this.carreraService.delete(carrera.nombre);
    this.listadoCarreras= this.carreraService.getList();
    
  }
  guardar1() {
    this.router.navigate(['list-paginas/listaCarreras']);
  }
  
}
