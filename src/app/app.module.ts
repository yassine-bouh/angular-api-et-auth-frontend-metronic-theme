import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
//import { NgxPaginationModule } from 'ngx-pagination';
//import { HttpClientModule } from 'angular/common/http';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { TestComponent } from './modules/gestion_tests/test/test.component';
import { AxeComponent } from './modules/gestion_tests/axe/axe.component';
import { CategorieComponent } from './modules/gestion_tests/categorie/categorie.component';
import { ReponseComponent } from './modules/gestion_tests/reponse/reponse.component';
import { QuestionComponent } from './modules/gestion_tests/question/question.component';
import { PoidsComponent } from './modules/gestion_tests/poids/poids.component';
import { CoachComponent } from './modules/coach/coach.component';
import { LevelComponent } from './modules/level/level.component';
import { JobComponent } from './modules/gestion_structure/job/job.component';
import { DegreesComponent } from './modules/gestion_structure/degrees/degrees.component';
import { FamilyJobComponent } from './modules/gestion_structure/family-job/family-job.component';
import { FormationComponent } from './modules/gestion_structure/formation/formation.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { ProgramComponent } from './modules/Gestion_partenaires/program/program.component';
import { PartenaireComponent } from './modules/Gestion_partenaires/partenaire/partenaire.component';
import { InstitutionComponent } from './modules/institution/institution.component';
import { UtilisateurComponent } from './modules/gestion_utilisateur_roles/utilisateur/utilisateur.component';
import { RoleComponent } from './modules/gestion_utilisateur_roles/role/role.component';
import { AaaRoutingModule } from './modules/gestion_tests/aaa/aaa-routing.module';
import { AaaModule } from './modules/gestion_tests/aaa/aaa.module';

// #fake-end#
/*
import:[
BrowserModule,
BrowserAnimationsModule,
HttpClientModule
]
 authentification
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

const oktaConfig = {
  issuer: '{YourIssuerURL}',
  redirectUri: 'http://localhost:4200/degree',
  clientId: '{yourClientId}'
};*/
function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AxeComponent,
    CategorieComponent,
    ReponseComponent,
    QuestionComponent,
    PoidsComponent,
    CoachComponent,
    LevelComponent,
    JobComponent,
    DegreesComponent,
    FamilyJobComponent,
    FormationComponent,
    SubscriptionComponent,
    InvoiceComponent,
    ProgramComponent,
    PartenaireComponent,
    InstitutionComponent,
    UtilisateurComponent,
    RoleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule, FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    AaaRoutingModule,
    AaaModule,
    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
