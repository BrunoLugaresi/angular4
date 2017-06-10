import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BigBenService } from './bigben.service';
import { BigBenComponent } from './bigben.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BigBenComponent],
  providers: [BigBenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
