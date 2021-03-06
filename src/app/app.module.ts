import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgxElectronModule } from 'ngx-electron';
import { HigieneComponent } from './pages/higiene/higiene.component';
import { ContentionComponent } from './pages/contention/contention.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HigieneComponent,
    ContentionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxElectronModule,
    RouterModule.forRoot(AppRoutes,{
    useHash: true,
    relativeLinkResolution: 'legacy'
}),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
