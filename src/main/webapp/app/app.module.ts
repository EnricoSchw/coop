import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CoopSharedModule } from 'app/shared/shared.module';
import { CoopCoreModule } from 'app/core/core.module';
import { CoopAppRoutingModule } from './app-routing.module';
import { CoopHomeModule } from './home/home.module';
import { CoopEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CoopSharedModule,
    CoopCoreModule,
    CoopHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CoopEntityModule,
    CoopAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class CoopAppModule {}
