import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    scroll(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
  
  
}