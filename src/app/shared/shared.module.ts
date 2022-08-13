import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PaginationModule } from "ngx-bootstrap";
import { LazyLoadImageModule } from "ng-lazyload-image";
// Components
import { FakeImageComponent } from "./components/fake-image/fake-image.component";
import { ProductThumbnailComponent } from "./components/product-thumbnail/product-thumbnail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { QuantityInputComponent } from "./components/quantity-input/quantity-input.component";
import { FieldErrorDisplayComponent } from "./components/field-error-display/field-error-display.component";
// Directives
import { DigitOnlyDirective } from "./directives/digit-only.directive";
import { VideoRecordComponent } from "./components/video-record/video-record.component";
import { ObjRenderComponent } from "./components/obj-render/obj-render.component";
import { RenderObjComponent } from "./components/render-obj/render-obj.component";

@NgModule({
  declarations: [
    // Components
    FakeImageComponent,
    ProductThumbnailComponent,
    ProductListComponent,
    DropdownComponent,
    QuantityInputComponent,
    FieldErrorDisplayComponent,
    // Directives
    DigitOnlyDirective,
    VideoRecordComponent,
    ObjRenderComponent,
    RenderObjComponent,
  ],
  imports: [BrowserModule, PaginationModule.forRoot(), LazyLoadImageModule],
  exports: [
    // Components

    FakeImageComponent,
    VideoRecordComponent,
    ProductThumbnailComponent,
    ProductListComponent,
    DropdownComponent,
    QuantityInputComponent,
    FieldErrorDisplayComponent,
    // Directives
    DigitOnlyDirective,
    ObjRenderComponent,
    RenderObjComponent,
  ],
})
export class SharedModule {}
