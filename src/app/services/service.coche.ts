import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Coche } from "../models/coche";

@Injectable()
export class ServiceCoches{

    constructor(
        private _http: HttpClient
    ){}

    async getCochesAsync(): Promise<Coche[]>{
        let request = "api/Coches";
        let url = environment.apicoches + request;
        
                return firstValueFrom(
                    this._http.get<Coche[]>(url)
                ) 
    }


    async findCochesAsync(idcoche: number): Promise<Coche>{
        let request = "api/coches/findcoche/" + idcoche;
        let url = environment.apicoches + request;
        return firstValueFrom(
            this._http.get<Coche>(url)
        )

    }
}   