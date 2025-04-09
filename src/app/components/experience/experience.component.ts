import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Quipu GmbH',
      period: 'November 2024 to Present',
      current: true,
      responsibilities: [
        'Automated Azure infrastructure deployments with Terraform, improving efficiency for AKS clusters, ACR, and managed services',
        'Implemented Infrastructure as Code (IaC) practices ensuring scalable, secure cloud architecture',
        'Deployed Datadog monitoring across Windows VMs, SQL databases, and AKS using Ansible',
        'Built automated pipelines for consistent monitoring agent deployment across all systems'
      ]
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Raiffeisen Bank Kosova (Raiffeisen Tech)',
      period: 'January 2023 to November 2024',
      responsibilities: [
        'Architected a container platform (Cortex) for hybrid cloud workloads meeting strict banking requirements',
        'Led DevPortal implementation using Backstage, unifying the development lifecycle with improved UX',
        'Optimized CI/CD with ArgoCD and ArgoWorkflow, enhancing deployment efficiency',
        'Managed certificate infrastructure within Kong API Gateway for secure web services',
        'Maintained OpenShift (OKD) on AWS, improving platform scalability and performance',
        'Automated infrastructure with Ansible playbooks and custom libraries'
      ]
    },
    {
      title: 'Application Administrator',
      company: 'Quipu GmbH',
      period: 'May 2022 to January 2023 (8 months)',
      responsibilities: [
        'Administered .NET applications across banking systems',
        'Automated release cycles for critical banking applications with MySQL integration',
        'Developed automation scripts (PowerShell, Python, Batch) for banking workflows',
        'Managed Apache and Tomcat services for high availability',
        'Supported banking software deployment throughout release cycles'
      ]
    },
    {
      title: 'Unix System Administrator',
      company: 'TEB Sh.a',
      period: 'Feb 2021 to May 2022 (1yr 4months)',
      responsibilities: [
        'Managed Linux/Unix servers on RedHat for secure banking operations',
        'Implemented monitoring with Grafana and Zabbix across Windows and Linux environments',
        'Optimized MariaDB (MySQL) databases for performance',
        'Automated workflows with Bash scripting to enhance efficiency'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component logic if needed
  }
}
