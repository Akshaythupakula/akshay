import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  para='0'
  para1='0'
  para2='0'
none=''
mobile1=false
expand1=false

isNavbarCollapsed = false;

toggleNavbar() {
  this.isNavbarCollapsed = !this.isNavbarCollapsed;
}

nav(){
  this.isNavbarCollapsed = false;
}
paragraph(){
this.para='1'
this.none='true'
  }

paragraph1(){
  this.para1='1'
} 
paragraph2(){
  this.para2='1'
}



mobile(){
  this.mobile1=true
}
expanded(){
this.expand1=true
}
back(){
  this.mobile1=false
}


isVisible: boolean = false;

@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const skills = document.querySelector('.skills');
  if (!skills) return; 
  const triggerBottom = window.innerHeight * 0.8; // Adjust as needed

  const skillsTop = skills.getBoundingClientRect().top;

  if (skillsTop < triggerBottom) {
    this.isVisible = true;
  } else {
    this.isVisible = false;
  }
}

}
