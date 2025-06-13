import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VissionComponent } from './components/vission/vission.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path:'',pathMatch:'full', redirectTo:'home'},
    {
        path: 'about', component: AboutUsComponent,
        children: [
            // { path:'', component:VissionComponent},
            { path:'',pathMatch:'full', redirectTo:'vission'},
            { path: 'vission', component: VissionComponent },
            { path: 'values', component: ValuesComponent },
        ]
    },
    { path: 'products', component: ProductsComponent },
    { path: 'details/:id', component:DetailsComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];
