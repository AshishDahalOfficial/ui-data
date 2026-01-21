import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  experienceHighlights = [
    'Optimized promotional spend to improve campaign ROI by 22% and boost prescription lift.',
    'Delivered 17% growth in new prescriptions by tuning physician engagement strategies.',
    'Shifted portfolio focus to SSRIs, driving 14% YoY revenue growth in the segment.',
    'Built demand forecasting models with 85%+ accuracy to cut emergency replenishment costs by 10%.',
    'Automated data pipelines across 1M+ records, reducing reporting turnaround by 40%.'
  ];

  skills = [
    {
      title: 'Programming & Data',
      items: ['Python (Pandas, NumPy, scikit-learn)', 'SQL', 'Excel (Advanced)']
    },
    {
      title: 'Visualization & BI',
      items: ['Power BI', 'Tableau', 'Dashboard Design', 'KPI Reporting']
    },
    {
      title: 'Analytics Techniques',
      items: [
        'ROI Analysis',
        'Prescription Analytics',
        'Cohort Analysis',
        'Time-Series Forecasting',
        'Regression Modeling'
      ]
    }
  ];

  projects = [
    {
      title: 'Healthcare Analytics Capstone',
      timeframe: 'Jan 2024 - Aug 2026',
      details: [
        'Analyzed 500k+ patient and prescription records to identify treatment trends.',
        'Quantified adherence uplift of 25% for SSRIs and delivered evidence-based recommendations.',
        'Built Power BI and Tableau dashboards to support non-technical stakeholders.'
      ]
    },
    {
      title: 'Pharmaceutical Market & ROI Analytics',
      timeframe: 'Apr 2018 - Nov 2023',
      details: [
        'Linked promotional spend to prescription lift to improve campaign efficiency by 22%.',
        'Estimated 8-10% CAGR for high-priority therapeutic segments using time-series analysis.',
        'Identified engagement strategies that increased new prescriptions by 17%.'
      ]
    },
    {
      title: 'Cloud-Based Healthcare Data Engineering',
      timeframe: 'Sep 2025 - Dec 2025',
      details: [
        'Designed AWS pipeline with S3, Lambda, and Python to process 1M+ records.',
        'Optimized MongoDB indexing and aggregations to improve query performance by 30%.',
        'Delivered near real-time insights through Power BI integration.'
      ]
    }
  ];

  ngAfterViewInit(): void {
    this.renderImpactChart();
    this.renderGrowthChart();
  }

  private renderImpactChart(): void {
    const canvas = document.getElementById('impactChart') as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['ROI Lift', 'NRx Growth', 'SSRI Revenue', 'Forecast Accuracy', 'Adherence Lift'],
        datasets: [
          {
            label: 'Impact (%)',
            data: [22, 17, 14, 85, 25],
            backgroundColor: '#2563eb'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `${value}%`
            }
          }
        }
      }
    });
  }

  private renderGrowthChart(): void {
    const canvas = document.getElementById('growthChart') as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Targeted Therapy Segments',
            data: [8, 8.5, 9, 9.5, 10],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Overall Pharma Market',
            data: [4, 4.2, 4.4, 4.6, 5],
            borderColor: '#94a3b8',
            backgroundColor: 'rgba(148, 163, 184, 0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: (value) => `${value}%`
            }
          }
        }
      }
    });
  }
}
