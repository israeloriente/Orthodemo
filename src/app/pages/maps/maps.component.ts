import { Component,ViewChild } from '@angular/core';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent {
    @ViewChild('videoPlayer') videoplayer: any;
    name = 'Video events';
    videoSource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
    public startedPlay: boolean = false;
    public show: boolean = false;
  
    scroll(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
    
    pauseVideo(videoplayer) {
        videoplayer.nativeElement.play();
        // this.startedPlay = true;
        // if(this.startedPlay == true)
        // {
        setTimeout(() => {
            videoplayer.nativeElement.pause();
            if (videoplayer.nativeElement.paused) {
                this.show = !this.show;
            }
        }, 5000);
        // }
    }
  
    closebutton(videoplayer) {
        this.show = !this.show;
        videoplayer.nativeElement.play();
    }
}  
