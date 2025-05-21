import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
    joinDate: '2024-01-01'
  };

  constructor() { }
} 