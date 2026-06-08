import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MenuLateral } from "../../componentes/menu-lateral/menu-lateral";
import { MenuSuperior } from "../../componentes/menu-superior/menu-superior";

@Component({
  selector: 'app-administracion-maqueta',
  imports: [RouterOutlet, MenuLateral, MenuSuperior],
  templateUrl: './administracion-maqueta.html',
  styleUrl: './administracion-maqueta.css',
})
export class AdministracionMaqueta {

}
