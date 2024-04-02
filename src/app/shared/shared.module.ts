import { NgModule } from "@angular/core";
// import { FilterModelPipe } from "./pipes/filter-model-pipe.pipe";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
// import { MenubarModule } from "primeng/menubar";
// import { FilterBrandPipe } from "./pipes/filter-brand-pipe.pipe";

@NgModule({
    declarations:[NavbarComponent],
    exports:[NavbarComponent],
    imports:[CommonModule]

})
export class SharedModule{}