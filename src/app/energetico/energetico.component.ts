import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-energetico',
  templateUrl: './energetico.component.html',
  styleUrls: ['./energetico.component.css']
})
export class EnergeticoComponent {


  pessoas: number = 0;
  computadores: number = 0;
  computadores1: number = 0;
  conta1: number = 0;
  tv: number = 0;
  tv1: number = 0;
  conta2: number = 0;
  lavar: number = 0;
  conta3: number = 0;
  secar: number = 0;
  conta4: number = 0;
  tarifa: number = 0;
  resultado: number =0;


  calcular() {
    this.conta1 = this.computadores * this.computadores1 / 1000


  }


//parte do bootstlap
  closeResult: string | undefined;

	constructor(private offcanvasService: NgbOffcanvas) {}

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}
}
