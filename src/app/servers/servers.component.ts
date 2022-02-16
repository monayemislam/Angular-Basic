import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="No Server was created...!";
  serverName='';
  isServerCreated = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },3000)
  }

  ngOnInit(): void {
  }
  onServerCreated(){
    this.serverCreationStatus="Server is Created "+"and server name is : "+this.serverName;
    this.isServerCreated=true;
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
 