import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //selectedUser?: User;
  users: User[] = [];


  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  /*onSelect(user: User): void {
    this.selectedUser = user;
    this.messageService.add(`UserComponent: Selected user id=${user.id}`);
  }*/

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  add(firstname: string, lastname: string, email: string): void {
    firstname = firstname.trim();
    lastname = lastname.trim();
    email = email.trim();

    if (!firstname) { return; }
    this.userService.addUser({ firstname, lastname, email } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}
