import { Component, OnInit } from '@angular/core';
import {CorreosService} from "../correos.service";

@Component({
  selector: 'app-envia-correo',
  templateUrl: './envia-correo.component.html',
  styleUrls: ['./envia-correo.component.css']
})
export class EnviaCorreoComponent implements OnInit {

  public apiCorreos: CorreosService

  constructor() { }

  ngOnInit() {
  }

  enviarCorreos(correos: string) {
    this.apiCorreos.enviarCorreo(correos);
    alert("CORREOS ENVIADOS");
  }

}
