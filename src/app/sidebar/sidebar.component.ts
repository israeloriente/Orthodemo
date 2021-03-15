import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/higiene',     title: 'Hygiène',         icon:'nc-single-02',       class: '' },
    { path: '/icons',         title: 'Interception',             icon:'nc-palette',    class: '' },
    { path: '/notifications', title: 'Multibagues',     icon:'nc-vector',    class: '' },
    { path: '/maps',          title: 'Orthup',              icon:'nc-air-baloon',      class: '' },
    { path: '/contention',    title: 'Contention',        icon:'nc-trophy', class: '' },
    { path: '/table',         title: 'Chirurgie',        icon:'nc-ambulance',    class: '' },
    { path: '/typography',    title: 'Dents de sagesse',        icon:'nc-app', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
