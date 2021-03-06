import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  AppStatus = new Promise((resolve,reject) =>{
    setInterval( () => {
      resolve('Stable');
    } ,2000)
  }
  )
  servers = [
    {
      instanceType : "medium",
      name : 'Production',
      status : 'stable',
      started : new Date()
    },
    {
      instanceType : "large",
      name : 'User Database',
      status : 'stable',
      started : new Date()
    },
    {
      instanceType : "small",
      name : 'Development Server',
      status : 'offline',
      started : new Date()
    },
    {
      instanceType : "small",
      name : 'Testing Server',
      status : 'stable',
      started : new Date()
    }
  ];

  filterStatus='';

  getStatusClasses(server: {instanceType:string, name:string, status:string, started:Date}){
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    }
  }

  onAddServer(){
    this.servers.push({
      instanceType : 'small',
      name:'New Added Server',
      status: 'stable',
      started : new Date()
    })
  }
}
