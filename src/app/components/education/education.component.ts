import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  current?: boolean;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educations: Education[] = [
    {
      degree: 'Bachelors of Computer Science and Engineering',
      institution: 'UBT, Prishtina',
      period: '2021-Present',
      current: true
    },
    {
      degree: 'Bachelors of Engineering Technology',
      institution: 'KU Leuven, Leuven, Belgium',
      period: '2019-2021'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component logic if needed
  }
}
