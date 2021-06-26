import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullScreenOverlayModule } from '@shared/components/full-screen-overlay/full-screen-overlay.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './core/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    FullScreenOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
