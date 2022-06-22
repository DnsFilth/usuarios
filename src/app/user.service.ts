import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { Users } from './mock-users';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable <User[]> {
    const users = of(Users);
    this.messageService.add('UserService: fetched users');
    return users;
  }

  getUser(id: number): Observable<User> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const user = Users.find(h => h.id === id)!;
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(user);
  }
}
