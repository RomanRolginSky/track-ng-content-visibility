import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "template-provider",
  template: `
    <ng-template #template
      ><div>Template Provider: <ng-content></ng-content></div
    ></ng-template>
  `
})
export class TemplateProviderComponent {
  @ViewChild("template", { static: true })
  template: TemplateRef<unknown>;
}
