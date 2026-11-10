import { Injectable } from "@angular/core";
import { Comic } from "../models/comics";

@Injectable()
export class ServiceComics {
    async getComicsAsync(): Promise<Comic[]> {
        let path = "documents/comics.json"
        let response = await fetch(path);
        let datos = await response.json();
        let arraycomics: Comic[] = [];
        for (let elem of datos){
            let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
            arraycomics.push(comic);
        }
        return arraycomics;
    }




    getSaludo(): string {
        return "Keloke mi segundo creadol, polke el primero e' papa dio'";
    }

    getComic(): Comic {
        let comic = new Comic("Stop sign,¿What stop sign?",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDYYHPuvnMoXx0TK336EG6kogBJRI75HgOi8IwUQYxigdUzF1K8WJaCkl&s=10",
            "Im telling u"
        )
        return comic;
    }
}