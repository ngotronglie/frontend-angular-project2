import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SettingsComponent {
  settings = {
    notifications: {
      email: true,
      push: false,
      marketing: false
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showActivity: true
    },
    preferences: {
      language: 'en',
      theme: 'light',
      timezone: 'UTC'
    }
  };

  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' }
  ];

  themes = [
    { code: 'light', name: 'Light' },
    { code: 'dark', name: 'Dark' },
    { code: 'system', name: 'System Default' }
  ];

  timezones = [
    { code: 'UTC', name: 'UTC' },
    { code: 'EST', name: 'Eastern Time' },
    { code: 'PST', name: 'Pacific Time' }
  ];

  constructor() { }

  saveSettings() {
    // TODO: Implement settings save functionality
    console.log('Saving settings:', this.settings);
  }
} 