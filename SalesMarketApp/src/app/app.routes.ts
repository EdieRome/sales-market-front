import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ItemsComponent } from './components/items/items.component';
import { StoresComponent } from './components/stores/stores.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'Items', component: ItemsComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'users', component: UsersComponent }
];

