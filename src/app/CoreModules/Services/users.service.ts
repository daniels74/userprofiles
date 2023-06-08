import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersSub$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSub$.asObservable();

  constructor(private http: HttpClient) { }

  // https://reqres.in/api/users
  usersCall() : void {
    this.users$ = this.http.get("https://reqres.in/api/users").pipe(
      map((users:any) => {
        console.log("User: ", users.data);
        return users.data;
      })
    )
  }
}
