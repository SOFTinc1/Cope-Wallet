import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/register', pathMatch: 'full' },

  { path: '',
    loadChildren: () => import ('./auth/register/register.module')
      .then(m => m.RegisterModule)
  },
  { path: 'wallet',
    loadChildren: () => import ('./landing/landing.module')
      .then(m => m.LandingModule)
  },
  { path: 'blog',
    loadChildren: () => import ('./blog/blog.module')
      .then(m => m.BlogModule)
  },
  { path: 'login',
    loadChildren: () => import ('./auth/login/login.module')
      .then(m => m.LoginModule)
  },
  { path: 'dashboard',
    loadChildren: () => import ('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  { path: 'trade',
    loadChildren: () => import ('./trade/trade.module')
      .then(m => m.TradeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
