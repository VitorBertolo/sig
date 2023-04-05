import { AddCoursesComponent } from './components/courses/add-courses/add-courses.component';
import { ServicesListComponent } from './components/services/services-list/services-list.component';
import { EditServicesComponent } from './components/services/edit-services/edit-services.component';
import { AddServicesComponent } from './components/services/add-services/add-services.component';
import { EditClientsComponent } from './components/clients/edit-clients/edit-clients.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { AddClientsComponent } from './components/clients/add-clients/add-clients.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddUsersComponent } from './components/users/add-users/add-users.component';
import { EquipimentsCrudComponent } from './pages/equipiments-crud/equipiments-crud.component';
import { ContractsCrudComponent } from './pages/contracts-crud/contracts-crud.component';
import { UsersCrudComponent } from './pages/users-crud/users-crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { ClientsCrudComponent } from './pages/clients-crud/clients-crud.component';
import { CoursesCrudComponent } from './pages/courses-crud/courses-crud.component';
import { LibraryComponent } from './pages/library/library.component';
import { ParametersComponent } from './pages/parameters/parameters.component';
import { ServicesCrudComponent } from './pages/services-crud/services-crud.component';
import { PrintListCoursesComponent } from './components/courses/print-list-courses/print-list-courses.component';
import { StartComponent } from './pages/start/start.component';
import { AddEquipimentsComponent } from './components/equipiments/add-equipiments/add-equipiments.component';
import { EquipimentsListComponent } from './components/equipiments/equipiments-list/equipiments-list.component';
import { EditEquipimentsComponent } from './components/equipiments/edit-equipiments/edit-equipiments.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "services",
    component: ServicesCrudComponent
  },
  {
    path: "clients",
    component: ClientsCrudComponent
  },
  {
    path: "courses",
    component: CoursesCrudComponent
  },
  {
    path: "parameters",
    component: ParametersComponent
  },
  {
    path: "library",
    component: LibraryComponent
  },
  {
    path: "budget",
    component: BudgetComponent
  },
  {
    path: "users",
    component: UsersCrudComponent
  },
  {
    path: "contracts",
    component: ContractsCrudComponent
  },
  {
    path: "equipiments",
    component: EquipimentsCrudComponent 
  },
  { 
    path: "register-users", 
    component: AddUsersComponent
  },
  { 
    path: "view-users", 
    component: UsersListComponent
  },
  { path: "edit-users/:id", 
    component: EditUsersComponent
  },
  { 
    path: "register-clients", 
    component: AddClientsComponent
  },
  { 
    path: "view-clients", 
    component: ClientsListComponent
  },
  { path: "edit-clients/:id", 
    component: EditClientsComponent
  },
  { 
    path: "register-services", 
    component: AddServicesComponent
  },
  { 
    path: "view-services", 
    component: ServicesListComponent
  },
  { path: "edit-services/:id", 
    component: EditServicesComponent
  },
  { 
    path: "register-courses", 
    component: AddCoursesComponent
  },
  {
    path: "print-list-courses/:id",
    component: PrintListCoursesComponent
  },
  {
    path: "register-equipiment",
    component: AddEquipimentsComponent
  },
  {
    path: "view-equipiments",
    component: EquipimentsListComponent
  },
  {
    path: "edit-equipiments/:id",
    component: EditEquipimentsComponent
  }
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }