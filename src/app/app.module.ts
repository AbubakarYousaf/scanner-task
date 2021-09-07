import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AppComponent } from './app.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailComponent } from './pages/product/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
