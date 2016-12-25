import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



/* application router settings */
import { AppRoutingModule} from './app.routing';

/* global components */
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { ListComponent } from './article/dept/list/list.component';
import { AppendComponent } from './article/dept/append/append.component';
import { ModifyComponent } from './article/dept/modify/modify.component';
import { DeleteComponent } from './article/dept/delete/delete.component';

import { NotFoundComponent } from './not-found.component';
import { HeaderContentComponent } from './header-content/header-content.component'; 
import { FooterContentComponent } from './footer-content/footer-content.component';

@NgModule({
  imports: [
    BrowserModule, CommonModule, FormsModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderContentComponent, FooterContentComponent,
    AppComponent, IntroComponent, NotFoundComponent,
    ListComponent, AppendComponent, ModifyComponent, DeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }