import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";
import { Certificate } from "./pages/certificate/certificate";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, Certificados, CertificadoForm, Certificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
}
