import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router:Router,private route:ActivatedRoute){}
  isDirty=true
  ngOnInit(){

  }
  onRouteChange(params:any){
    this.router.navigate([params],{relativeTo:this.route})
  }
}
