import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 12, firstname: 'Dr. Nice', lastname: 'Upper', email: 'niceupper@test.com' },
      { id: 13, firstname: 'Bombasto', lastname: 'Nico', email: 'bomba@test.com' },
      { id: 14, firstname: 'Celeritas', lastname: 'Canelitas', email: 'canelin@test.com' },
      { id: 15, firstname: 'Magneta', lastname: 'RigthRosa', email: 'rosader@test.com' },
      { id: 16, firstname: 'RubberMan',  lastname: 'ofSky', email: 'rubbman@test.com'},
      { id: 17, firstname: 'Dynama', lastname: 'Maitas', email: 'dinamita@test.com' },
      { id: 18, firstname: 'Dr. IQ', lastname: 'Upper', email: 'iq@test.com' },
      { id: 19, firstname: 'Magma', lastname: 'Prist', email: 'lavas@test.com' },
      { id: 20, firstname: 'Tornado', lastname: 'Pochino', email: 'tornado@test.com' }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}