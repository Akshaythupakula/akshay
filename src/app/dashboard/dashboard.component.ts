import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  para='0'
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
paragraph(eventType: string){
  if(eventType=='1')
  {
    this.para='1'
    this.none='none'
  }else if(eventType=='2'){
    this.para='2'
    
  }
  else{
    this.para='3'
  }
  

}
mobile(){
  this.mobile1=true
}
expanded(){
this.expand1=true
}



}


