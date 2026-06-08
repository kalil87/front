import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface datosInicio {
  usuario: string,
  clave: string
}

@Component({
  selector: 'iniciar-sesion',
  imports: [ReactiveFormsModule],
  templateUrl: './IniciarSesion.html',
  styleUrl: './iniciarSesion.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IniciarSesion {
  private ruta = inject(Router);
  private fb = inject(FormBuilder);
  formularioInicio!: FormGroup;

  constructor() {
    this.formularioInicio = this.fb.group<datosInicio>({
      'usuario': '',
      'clave': ''
    })
  }

  conectarse() {
    console.log("asd")
    this.ruta.navigate(['']);
  }
}
