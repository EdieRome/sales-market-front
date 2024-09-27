import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  data: User[] = [];
  newUser: User = {
    name: '',
    age: 0,
    email: ''
  };

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    });
  }

  create() {
    this.service.add(this.newUser).subscribe(data => {
      this.getAll();
    });
  }

}
