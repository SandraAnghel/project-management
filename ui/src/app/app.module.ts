import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AccordionComponent } from './bootstrap-components/accordion/accordion.component';
import { AlertsComponent } from './bootstrap-components/alerts/alerts.component';
import { BadgeComponent } from './bootstrap-components/badge/badge.component';
import { BreadcrumbsComponent } from './bootstrap-components/breadcrumbs/breadcrumbs.component';
import { ButtonGroupComponent } from './bootstrap-components/button-group/button-group.component';
import { ButtonsComponent } from './bootstrap-components/buttons/buttons.component';
import { CardComponent } from './bootstrap-components/card/card.component';
import { CarouselComponent } from './bootstrap-components/carousel/carousel.component';
import { CloseButtonComponent } from './bootstrap-components/close-button/close-button.component';
import { CollapseComponent } from './bootstrap-components/collapse/collapse.component';
import { DropdownsComponent } from './bootstrap-components/dropdowns/dropdowns.component';
import { ListGroupComponent } from './bootstrap-components/list-group/list-group.component';
import { ModalComponent } from './bootstrap-components/modal/modal.component';
import { NavbarComponent } from './bootstrap-components/navbar/navbar.component';
import { NavsTabsComponent } from './bootstrap-components/navs-tabs/navs-tabs.component';
import { OffcanvasComponent } from './bootstrap-components/offcanvas/offcanvas.component';
import { PaginationComponent } from './bootstrap-components/pagination/pagination.component';
import { PlaceholdersComponent } from './bootstrap-components/placeholders/placeholders.component';
import { PopoversComponent } from './bootstrap-components/popovers/popovers.component';
import { ProgressComponent } from './bootstrap-components/progress/progress.component';
import { ScrollspyComponent } from './bootstrap-components/scrollspy/scrollspy.component';
import { SpinnersComponent } from './bootstrap-components/spinners/spinners.component';
import { ToastsComponent } from './bootstrap-components/toasts/toasts.component';
import { TooltipsComponent } from './bootstrap-components/tooltips/tooltips.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BoardComponent,
    TeamComponent,
    HomeComponent,
    AccordionComponent,
    AlertsComponent,
    BadgeComponent,
    BreadcrumbsComponent,
    ButtonGroupComponent,
    ButtonsComponent,
    CardComponent,
    CarouselComponent,
    CloseButtonComponent,
    CollapseComponent,
    DropdownsComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    NavsTabsComponent,
    OffcanvasComponent,
    PaginationComponent,
    PlaceholdersComponent,
    PopoversComponent,
    ProgressComponent,
    ScrollspyComponent,
    SpinnersComponent,
    ToastsComponent,
    TooltipsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
