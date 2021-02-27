import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Higiène',         icon:'nc-single-02',       class: '' },
    { path: '/icons',         title: 'Interception',             icon:'nc-satisfied',    class: '' },
    { path: '/maps',          title: 'Orthocaps',              icon:'nc-air-baloon',      class: '' },
    { path: '/notifications', title: 'Multibagues',     icon:'nc-button-play',    class: '' },
    { path: '/user',          title: 'Orthocaps',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Chirurgie',        icon:'nc-air-baloon',    class: '' },
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
