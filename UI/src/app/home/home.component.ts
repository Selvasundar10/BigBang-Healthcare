import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.animateText('0101', 488888, 500000 , 4000);
    this.animateText('0102', 0, 333, 4000);
    this.animateText('0103', 0, 30000, 4000);
  }

  animateText(id: string, initVal: number, lastVal: number, duration: number) {
    const obj = document.getElementById(id);
    if (obj) {
      let startTime: number | null = null; // Declare the type explicitly
      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      };
      window.requestAnimationFrame(step);
    }
  }
}  