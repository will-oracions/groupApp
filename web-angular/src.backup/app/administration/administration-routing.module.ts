import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: ApplicationComponent, children: [
        {path: '', redirectTo: "bord", pathMatch: "full"},

        {path: 'bord', component: DashboardComponent},

        { path: 'communes',
            loadChildren:() =>import('./communes/communes.module')
            .then(mod=>mod.CommunesModule)},
            { path: 'menage',
            loadChildren:() =>import('./menage/menage.module')
            .then(mod=>mod.MenageModule)},
            { path: 'personnes',
            loadChildren:() =>import('./personnes/personnes.module')
            .then(mod=>mod.PersonnesModule)},
            { path: 'quartiers',
            loadChildren:() =>import('./quartiers/quartiers.module')
            .then(mod=>mod.QuartiersModule)},
            { path: 'residences',
            loadChildren:() =>import('./residences/residences.module')
            .then(mod=>mod.ResidencesModule)},
            { path: 'roles',
            loadChildren:() =>import('./role/role.module')
            .then(mod=>mod.RoleModule)},
            { path: 'utilisateur',
            loadChildren:() =>import('./utilisateur/utilisateur.module')
            .then(mod=>mod.UtilisateurModule)},
            { path: 'vulnerabilite',
            loadChildren:() =>import('./vulnerabilite/vulnerabilite.module')
            .then(mod=>mod.VulnerabiliteModule)},
         
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
