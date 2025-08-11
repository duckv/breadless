import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home";
import { MenuComponent } from "./pages/menu";
import { AboutComponent } from "./pages/about";
import { CateringComponent } from "./pages/catering";
import { ContactComponent } from "./pages/contact";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "menu", component: MenuComponent },
  { path: "about", component: AboutComponent },
  { path: "catering", component: CateringComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "" },
];
