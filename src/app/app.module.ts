import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialExampleModule } from './modules/material.module';
import { AvatarListComponent } from './components/avatar-list/avatar-list.component';

@NgModule({
  declarations: [AppComponent, BalanceComponent, MainComponent, AvatarListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
