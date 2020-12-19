import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RequirementPhaseComponent } from './requirement-phase/requirement-phase.component';
import { ProjectCharterDocumentComponent } from './project-charter-document/project-charter-document.component';
import { SoftwareDesignDocumentComponent } from './software-design-document/software-design-document.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AllfileComponent } from './allfile/allfile.component';
import { DetailAndEditeComponent } from './detail-and-edite/detail-and-edite.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    RequirementPhaseComponent,
    ProjectCharterDocumentComponent,
    SoftwareDesignDocumentComponent,
    SideBarComponent,
    AllfileComponent,
    DetailAndEditeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
