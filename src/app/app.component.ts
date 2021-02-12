import {
  AfterViewInit,
  Component,
  TemplateRef,
  VERSION,
  ViewChild
} from "@angular/core";
import { TemplateProviderComponent } from "./template-provider.component";

@Component({
  selector: "my-app",
  template: `
    <template-provider #templateComponent>
      <div>From Template</div>
    </template-provider>

    Smth
    <ng-container *ngTemplateOutlet="template"></ng-container>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("templateComponent")
  templateComponent: TemplateProviderComponent;

  template: TemplateRef<unknown>;

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.templateComponent.template);
      this.template = this.templateComponent.template;
    }, 1000);
  }
}
