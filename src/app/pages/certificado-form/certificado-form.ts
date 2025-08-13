import { Component } from '@angular/core';
import { SecondaryBottom } from '../../components/secondary-bottom/secondary-bottom';
import { PrimaryBottom } from "../../components/primary-bottom/primary-bottom";

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryBottom, PrimaryBottom],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
