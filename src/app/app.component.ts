import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  VERSION,
  ViewChild
} from "@angular/core";
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { TemplateProviderComponent } from "./template-provider.component";

@Component({
  selector: "my-app",
  template: `
    <template-provider #templateComponent>
      <app-math></app-math>
    </template-provider>

    Smth
    <ng-container *ngIf="(showHide | async)">
      <ng-container
        *ngTemplateOutlet="templateComponent.template"
      ></ng-container>
    </ng-container>
  `
})
export class AppComponent {
  @ViewChild("templateComponent")
  templateComponent: TemplateProviderComponent;

  showHide = interval(2000).pipe(map((v, i) => i % 2 === 0));
  template: TemplateRef<unknown>;

  // ngAfterViewInit() {
  // this.template = this.templateComponent.template;
  // }
}
