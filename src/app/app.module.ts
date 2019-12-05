import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from './cds';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './contato/list/list.component';
import { EditComponent } from './contato/edit/edit.component';



@NgModule({
  declarations:[
    AppComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CdsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {  }
