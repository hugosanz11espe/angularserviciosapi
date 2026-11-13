import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Persona } from "../models/persona";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersonas { 
    constructor (
        private _http: HttpClient
    ){}

    async getPersonasAsync(): Promise<Persona[]>{
        let request = "api/personas";
        let url = environment.apipersonas + request
        return firstValueFrom(
            this._http.get<Persona[]>(url)
        )
    }
    
    async findPersonasAsync(id: number): Promise<Persona>{
        let request = "api/personas/" + id;
        let url = environment.apipersonas + request;
        return firstValueFrom(
            this._http.get<Persona>(url)
        )
    }
}