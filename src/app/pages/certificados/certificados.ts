import { Component } from '@angular/core';
import { SecondaryBottom } from "../../components/secondary-bottom/secondary-bottom";
import { ItemCertificado } from '../../components/item-certificado/item-certificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryBottom, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
