import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexDataLabels,
  ApexGrid,
  ApexTooltip,
} from 'ng-apexcharts';

@Component({
  selector: 'app-contract-status-bar',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './contract-bar-status.html',
  styleUrls: ['./contract-bar-status.scss'],
})
export class ContractStatusBarComponent implements OnChanges {

  @Input() percentage = 0;

  series: ApexAxisChartSeries = [];
  colors: string[] = ['#54b6e7'];

  chart: ApexChart = {
    type: 'bar',
    height: 26,
    sparkline: { enabled: true },
    toolbar: { show: false },
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      barHeight: '40%',
      borderRadius: 6,
    },
  };

  xaxis: ApexXAxis = {
    min: 0,
    max: 100,
    labels: { show: false },
  };

  dataLabels: ApexDataLabels = { enabled: false };
  grid: ApexGrid = { show: false };
  tooltip: ApexTooltip = { enabled: false };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['percentage']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    this.series = [
      {
        name: 'progress',
        data: [this.percentage],
      },
    ];

    this.colors = [
      this.percentage < 30
        ? '#54b6e7'
        : this.percentage < 70
        ? '#f59e0b'
        : '#16a34a',
    ];
  }
}
