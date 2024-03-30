import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MyHeaderComponent } from "./my-header.component";

@NgModule({
    declarations: [
        MyHeaderComponent
    ],
    exports: [
        MyHeaderComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MyHeaderModule {}