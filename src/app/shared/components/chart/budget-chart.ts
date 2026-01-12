import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexLegend,
  ApexGrid,
  ApexTooltip,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-budget-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './budget-chart.html',
  styleUrls: ['./budget-chart.scss'],
})
export class BudgetChartComponent {

  series: ApexAxisChartSeries = [
    {
      name: 'مصروف',
      data: [420, 300, 400, 250, 300, 550, 540, 250, 150, 400, 300, 280],
    },
    {
      name: 'معتمد',
      data: [400, 300, 420, 130, 380, 600, 550, 300, 250, 380, 160, 450],
    },
  ];

  chart: ApexChart = {
    type: 'bar',
    height: 320,
    stacked: true,
    toolbar: { show: false },
    fontFamily: 'Cairo, sans-serif',
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      borderRadius: 6,
      columnWidth: '40%',
    },
  };

  colors: string[] = ['#cfe1ff', '#7aa2f7'];

  dataLabels: ApexDataLabels = {
    enabled: false,
  };

  xaxis: ApexXAxis = {
    categories: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    labels: {
      style: {
        fontSize: '12px',
      },
    },
  };

  yaxis: ApexYAxis = {
    labels: {
      formatter: (val) => Math.round(val).toString(),
    },
  };

  grid: ApexGrid = {
    borderColor: '#e5e7eb',
    strokeDashArray: 4,
  };

  legend: ApexLegend = {
    position: 'bottom',
    horizontalAlign: 'center',
  };

  tooltip: ApexTooltip = {
    y: {
      formatter: (val) => `${val.toLocaleString()} ر.ق`,
    },
  };
}
