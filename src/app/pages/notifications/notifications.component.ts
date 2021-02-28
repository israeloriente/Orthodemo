import { Component } from '@angular/core';

@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html',
    styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent{

    scroll(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}