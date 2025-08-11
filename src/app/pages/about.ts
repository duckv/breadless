import { Component } from "@angular/core";
import { PlaceholderPageComponent } from "../components/placeholder-page";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [PlaceholderPageComponent],
  template: `<app-placeholder-page
    pageTitle="About Us"
  ></app-placeholder-page>`,
})
export class AboutComponent {}
