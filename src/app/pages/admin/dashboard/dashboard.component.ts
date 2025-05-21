import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent {
  stats = {
    totalUsers: 1250,
    activeUsers: 980,
    newUsers: 45,
    totalRevenue: 125000
  };

  recentActivities = [
    {
      type: 'user_registration',
      user: 'John Doe',
      time: '2 hours ago',
      details: 'New user registration'
    },
    {
      type: 'payment',
      user: 'Jane Smith',
      time: '3 hours ago',
      details: 'Payment received: $500'
    },
    {
      type: 'support_ticket',
      user: 'Mike Johnson',
      time: '5 hours ago',
      details: 'New support ticket created'
    }
  ];

  constructor() { }
} 