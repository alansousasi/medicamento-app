import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Medicamento } from '../model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private url = "http://localhost:3000/medicamento";

  constructor(private _httpClient: HttpClient) {  }

  getMedicamentos(): Observable<Medicamento[]>{

    return this._httpClient.get<Medicamento[]>(this.url);

  }

  save(medicamento: Medicamento):Observable<Medicamento[]>{

        return this._httpClient.post<Medicamento[]>(this.url, medicamento);

  }

  update(id:string, medicamento: Medicamento):Observable<Medicamento[]>{

    const urlUpdate = `${this.url}/${id}`;

    return this._httpClient.put<Medicamento[]>(urlUpdate, medicamento);

  }


  delete(id:string):Observable<Medicamento[]>{

    const urlDelete = `${this.url}/${id}`;

    return this._httpClient.delete<Medicamento[]>(urlDelete);

  }
}
