import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  // Grab all section elements with template reference #section
  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    const options: IntersectionObserverInit = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, options);

    this.sections.forEach((sec: ElementRef<HTMLElement>) => {
      observer.observe(sec.nativeElement);
    });
  }
}
