import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      name: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 90, icon: 'fab fa-aws' },
        { name: 'Azure', level: 85, icon: 'fab fa-microsoft' },
        { name: 'Kubernetes', level: 90, icon: 'fas fa-dharmachakra' },
        { name: 'Docker', level: 95, icon: 'fab fa-docker' },
        { name: 'Terraform', level: 85, icon: 'fas fa-cubes' }
      ]
    },
    {
      name: 'DevOps Tools',
      skills: [
        { name: 'Ansible', level: 85, icon: 'fas fa-cogs' },
        { name: 'Jenkins', level: 80, icon: 'fab fa-jenkins' },
        { name: 'ArgoCD', level: 85, icon: 'fas fa-code-branch' },
        { name: 'GitLab CI', level: 80, icon: 'fab fa-gitlab' },
        { name: 'Prometheus', level: 75, icon: 'fas fa-tachometer-alt' }
      ]
    },
    {
      name: 'Programming & Scripting',
      skills: [
        { name: 'Bash', level: 90, icon: 'fas fa-terminal' },
        { name: 'Python', level: 80, icon: 'fab fa-python' },
        { name: 'PowerShell', level: 85, icon: 'fab fa-windows' },
        { name: 'YAML', level: 90, icon: 'fas fa-file-code' },
        { name: 'HCL', level: 80, icon: 'fas fa-file-alt' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component logic if needed
  }
}
