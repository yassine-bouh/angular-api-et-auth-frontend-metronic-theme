import { Routes } from '@angular/router';
import { Role } from '../modules/auth/models/Role';
import { AuthGuard } from '../modules/auth/services/auth.guard';
import { CoachComponent } from '../modules/coach/coach.component';
import { PartenaireComponent } from '../modules/Gestion_partenaires/partenaire/partenaire.component';
import { ProgramComponent } from '../modules/Gestion_partenaires/program/program.component';
import { DegreesComponent } from '../modules/gestion_structure/degrees/degrees.component';
import { FamilyJobComponent } from '../modules/gestion_structure/family-job/family-job.component';
import { FormationComponent } from '../modules/gestion_structure/formation/formation.component';
import { JobComponent } from '../modules/gestion_structure/job/job.component';
import { AaaComponent } from '../modules/gestion_tests/aaa/aaa.component';
import { AxeComponent } from '../modules/gestion_tests/axe/axe.component';
import { CategorieComponent } from '../modules/gestion_tests/categorie/categorie.component';
import { PoidsComponent } from '../modules/gestion_tests/poids/poids.component';
import { QuestionComponent } from '../modules/gestion_tests/question/question.component';
import { ReponseComponent } from '../modules/gestion_tests/reponse/reponse.component';
import { TestComponent } from '../modules/gestion_tests/test/test.component';
import { RoleComponent } from '../modules/gestion_utilisateur_roles/role/role.component';
import { UtilisateurComponent } from '../modules/gestion_utilisateur_roles/utilisateur/utilisateur.component';
import { InstitutionComponent } from '../modules/institution/institution.component';
import { InvoiceComponent } from '../modules/invoice/invoice.component';
import { LevelComponent } from '../modules/level/level.component';
import { SubscriptionComponent } from '../modules/subscription/subscription.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/gestionaaa',
    loadChildren: () =>
      import('../modules/gestion_tests/aaa/aaa.module').then((m) => m.AaaModule),
  },

  {
    path: 'crafted/Gestion_partenaires/partenaire',
    component: PartenaireComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },
  
  {
    path: 'crafted/Gestion_partenaires/program',
    component: ProgramComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },
  {
    path: 'crafted/gestion_utilisateur_roles/role',
    component: RoleComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },
  {
    path: 'crafted/gestion_utilisateur_roles/utilisateur',
    component: UtilisateurComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },
  {
    path: 'crafted/test',
    component: TestComponent,
     canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },{
    path: 'crafted/axe',
    component: AxeComponent,
     canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },{
    path: 'crafted/poids',
    component: PoidsComponent,
     canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },{
    path: 'crafted/categorie',
    component: CategorieComponent,
     canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },{
    path: 'crafted/question',
    component: QuestionComponent,
     canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },{
    path: 'crafted/reponse',
    component: ReponseComponent,
     canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] } 
  },
  {
    path: 'crafted/coach',
    component: CoachComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  }, 
  {
    path: 'crafted/level',
    component: LevelComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
  {
    path: 'crafted/job',
    component: JobComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
  {
    path: 'crafted/degree',
    component: DegreesComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
  
  {
    path: 'crafted/family_jobs',
    component: FamilyJobComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
  
  {
    path: 'crafted/formation',
    component: FormationComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
 
  {
    path: 'crafted/subscription',
    component: SubscriptionComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
 

 {
    path: 'crafted/parametre',
    loadChildren: () =>
      import('../modules/parametre/parametre.module').then((m) => m.ParametreModule),
  },
 
  {
    path: 'crafted/institution',
    component: InstitutionComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
  {
    path: 'crafted/invoice',
    component: InvoiceComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.AdminStructure] }
  },
 
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  }, 
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
