import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MakeCallComponent } from './call/make-call/make-call.component';
import { ReceiveCallComponent } from './call/receive-call/receive-call.component';
import { OngoingCallComponent } from './call/ongoing-call/ongoing-call.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForwardListComponent } from './forward-list/forward-list.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatsComponent,
    ChatInterfaceComponent,
    MakeCallComponent,
    ReceiveCallComponent,
    OngoingCallComponent,
    SidebarComponent,
    ForwardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
