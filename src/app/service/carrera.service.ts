import { Injectable } from '@angular/core';
import { Carrera } from '../domain/carrera';
import { CarreraComponent } from '../pages/carrera/carrera.component';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  carreras: Carrera[] = [];
  comp: any;

  setComponet(comp: CarreraComponent){
    this.comp = comp
  }

  updateContacto(contacto: Carrera){
    this.comp.contacto = contacto
  }

  save(carrera: Carrera){

    this.carreras.push({ ...carrera });
    console.log(this.carreras);
    
  }

  getList(){
    return this.carreras;
  }

  delete(nombre: string){
    const index =this.carreras.findIndex(Carrera => Carrera.nombre=== nombre);
    if(index !==-1){
      this.carreras.splice(index, 1);
    }
  }

  update(nivel: string, contactoActualizado: Carrera){
    const index =this.carreras.findIndex(Carrera => Carrera.nivel=== nivel);
    if(index !==-1){
      this.carreras[index]= contactoActualizado;
      return true;
    }
      return false;
  }

  getContactoCedula(nombre: string): Carrera | undefined{
    return this.carreras.find(Carrera => Carrera.km === nombre);
  }
}
