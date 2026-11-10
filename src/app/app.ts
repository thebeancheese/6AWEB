import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Vince Raiezen Cruzada';
  location = 'Angeles City, Pampanga';
  email = 'vmcruzada@example.com';
  phone = '09XX XXX XXXX';

  profile = 'I am a third year student interested in web development. I enjoy learning new technologies and building useful applications. I am not well-versed with designing, but I am still learning. ';

  skills = [
    'HTML and CSS',
    'PHP',
    'Node.js and Express.js',
    'JavaScript',
    'TypeScript',
    'Angular',
    'MySQL and MongoDB',
    'Flutter and Dart'
  ];

  technicals = [
    'Frontend Development',
    'Backend Development',
    'Database Management'
  ];
  message = 'Test this out!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
