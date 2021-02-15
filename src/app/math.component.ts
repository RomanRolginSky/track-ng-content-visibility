import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-math",
  template: `
    <div #trackMe>
      <div>From Ng Content</div>
    </div>
  `
})
export class MathComponent implements AfterViewInit {
  @ViewChild("trackMe")
  trackMeElement: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    console.log("Math view init");
    const observer = new MutationObserver(function(mutationsList) {
      console.log("callback that runs when observer is triggered");
      console.log(mutationsList);
    });

    observer.observe(this.trackMeElement.nativeElement, {
      subtree: true,
      childList: true
    });
  }
}
