import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  menuOpen = false;
  @ViewChild('cursorGlow') cursorGlow!: ElementRef<HTMLDivElement>;
  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLElement>>;

  contactForm: FormGroup;
  statusMessage: string = '';
  private formspreeUrl = 'https://formspree.io/f/mldpeeld';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  ngAfterViewInit(): void {
    // IntersectionObserver for section animations
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

    // Cursor glow follow
    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.cursorGlow) {
        this.cursorGlow.nativeElement.style.left = e.clientX + 'px';
        this.cursorGlow.nativeElement.style.top = e.clientY + 'px';
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({ 'Accept': 'application/json' });
      this.http.post(this.formspreeUrl, this.contactForm.value, { headers })
        .subscribe({
          next: () => {
            this.statusMessage = 'Message sent successfully!';
            this.contactForm.reset();
          },
          error: () => {
            this.statusMessage = 'Failed to send message. Try again later.';
          }
        });
    }
  }
}
