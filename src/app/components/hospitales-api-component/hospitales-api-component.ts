import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Hospital } from '../../models/hospitales';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-hospitales-api-component',
  standalone: false,
  styleUrl: './hospitales-api-component.css',
  templateUrl: './hospitales-api-component.html',
})
export class HospitalesApiComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  hospital!: Hospital
  arrayhospitales: Hospital[] = [];


    constructor(
      private _service: ServiceHospitales,
      private _cdr: ChangeDetectorRef 
    ) {}

    async cargarHospital(): Promise<void> {
      this.arrayhospitales = await this._service.getHospitalesAsync();
      this._cdr.detectChanges();
    }

    async buscarHospital(): Promise<void> {
      let idhospital = parseInt(this.cajaid.nativeElement.value)
      this.hospital = await this._service.findHospitalesAsync(idhospital);
      this._cdr.detectChanges();
    }
}
