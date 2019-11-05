import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[mario]'
})
export class MarioDirective {
  private sound;

  private marioData = {
    song: 'https://www.myinstants.com/media/sounds/untitled_3.mp3',
    image: 'https://upload.wikimedia.org/wikipedia/he/a/a9/MarioNSMBUDeluxe.png',
    color: '#E52521'
  };


  constructor(private el: ElementRef) {
    this.sound = new Audio(this.marioData.song);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.sound.play();
    this.addImage();
    this.changeColor(this.marioData.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.sound.pause();
    this.sound.currentTime = 0;
    this.removeImage();
    this.changeColor(null);
  }

  private addImage() {
    let img = document.createElement("img");
    const el = this.el.nativeElement;
    img.id = 'mario-img';
    img.src = this.marioData.image;
    img.style.cssText = `width: 100px;
                        display: block`;
    el.parentNode.insertBefore(img, el.nextSibling);
  }


  private removeImage() {
    document.getElementById("mario-img").remove();
  }

  private changeColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}