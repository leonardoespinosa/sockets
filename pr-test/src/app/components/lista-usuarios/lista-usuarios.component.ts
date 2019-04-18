import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  userActivesObs: Observable<any>;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.userActivesObs = this.chatService.getActiveUsers();
    this.chatService.emitActiveUsers();
  }

}
