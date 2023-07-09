import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('sidebarCollapse') sidebarCollapse!: ElementRef;

  ngAfterViewInit() {
    this.sidebarCollapse.nativeElement.addEventListener('click', () => {
      this.sidebar.nativeElement.classList.toggle('active');
      this.sidebarCollapse.nativeElement.classList.toggle('active');
    });
  }
}