import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Laboratorio } from '../model/laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  private url = "http://localhost:3000/laboratorio";

  constructor(private _httpClient: HttpClient) {  }

  getLaboratorios(): Observable<Laboratorio[]>{

    return this._httpClient.get<Laboratorio[]>(this.url);

  }

  save(laboratorio: Laboratorio):Observable<Laboratorio[]>{

        return this._httpClient.post<Laboratorio[]>(this.url, laboratorio);

  }

  update(id:string, laboratorio: Laboratorio):Observable<Laboratorio[]>{

    const urlUpdate = `${this.url}/${id}`;

    return this._httpClient.put<Laboratorio[]>(urlUpdate, laboratorio);

  }


  delete(id:string):Observable<Laboratorio[]>{

    const urlDelete = `${this.url}/${id}`;

    return this._httpClient.delete<Laboratorio[]>(urlDelete);

  }
}
