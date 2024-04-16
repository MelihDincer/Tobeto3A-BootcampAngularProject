import { NgModule } from "@angular/core";
// import { FilterModelPipe } from "./pipes/filter-model-pipe.pipe";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
// import { MenubarModule } from "primeng/menubar";
// import { FilterBrandPipe } from "./pipes/filter-brand-pipe.pipe";

@NgModule({
    declarations:[NavbarComponent, FooterComponent],
    exports:[NavbarComponent,FooterComponent],
    imports:[CommonModule, RouterModule]

})
export class SharedModule{}