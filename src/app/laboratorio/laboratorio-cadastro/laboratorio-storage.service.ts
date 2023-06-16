import { Laboratorio } from './../../model/laboratorio';
import { WebStorage } from './../../utils/web-storage';
import { Constants } from 'src/app/utils/constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LaboratorioStorageService {
    laboratorios!: Laboratorio[];

    constructor() {
        this.laboratorios = WebStorage.get(Constants.LABORATORIO_KEY);
    }

    save(lab: Laboratorio) {
        this.laboratorios = WebStorage.get(Constants.LABORATORIO_KEY);
        this.laboratorios.push(lab);
        WebStorage.set(Constants.LABORATORIO_KEY, this.laboratorios);
      }

    update(lab: Laboratorio) {
        this.laboratorios = WebStorage.get(Constants.LABORATORIO_KEY);
        this.delete(lab);
        this.save(lab);
      }

      delete(lab: Laboratorio): boolean {
        this.laboratorios = WebStorage.get(Constants.LABORATORIO_KEY);
        var newLabs: Laboratorio[] = [];
        this.laboratorios.forEach(u => {
          if (u.id != lab.id){
            newLabs.push(u);
          }
        });
        WebStorage.set(Constants.LABORATORIO_KEY, newLabs);
        return true;
      }

      isExist(value: string): boolean {
        this.laboratorios = WebStorage.get(Constants.LABORATORIO_KEY);
        for (let u of this.laboratorios) {
          if (u.id?.valueOf() == value?.valueOf()) {
            return true;
          }
        }
        return false;
      }

      getLabotorios(): Laboratorio[] {
        this.laboratorios = WebStorage.get(Constants.LABORATORIO_KEY);
        return this.laboratorios;
      }
}
