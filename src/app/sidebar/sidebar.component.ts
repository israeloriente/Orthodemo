import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Home',         icon:'nc-single-02',       class: '' },
    { path: '/icons',         title: 'Interception',             icon:'nc-satisfied',    class: '' },
    { path: '/maps',          title: 'Orthocaps',              icon:'nc-air-baloon',      class: '' },
    { path: '/notifications', title: 'Classe 3',     icon:'nc-button-play',    class: '' },
    { path: '/user',          title: 'Multibagues',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Orthocaps',        icon:'nc-air-baloon',    class: '' },
    { path: '/typography',    title: 'Contention',        icon:'nc-trophy', class: '' },
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
