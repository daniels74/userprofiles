import { Component, OnInit } from '@angular/core';
import { UsersService } from '../CoreModules/Services/users.service';
import { User } from '../CoreModules/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

users! : Observable<User[]>;

  constructor(private userService : UsersService){}

  ngOnInit(): void {
    this.userService.usersCall();

    this.users = this.userService.users$;
  }

  title = 'userprofiles';
}
