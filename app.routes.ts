import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { authGuardGuard } from './auth-guard.guard';
import { CreateComponent } from './admin/create/create.component';
import { ViewComponent } from './admin/view/view.component';
import { childGuard } from './child.guard';




export const routes: Routes = [

    {
    path:'admin',
    canActivate:[authGuardGuard],
    children:[
        {
            path:'',
            component:AdminComponent
        },
        {
            path:'',
            canActivate:[childGuard],
            children:[
                {path:'create',component:CreateComponent},
                {path:'view',component:ViewComponent}
            ]
        }
    ]
},
    
];

export class AppRoutingModule{}