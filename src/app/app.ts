import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCard, Header, Skills, Footer],
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

    proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];
message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
