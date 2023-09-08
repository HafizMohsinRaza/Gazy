import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nitrogen-chart',
  templateUrl: './nitrogen-chart.component.html',
  styleUrls: ['./nitrogen-chart.component.css'],
})
export class NitrogenChartComponent {
  saving = 'Saving in INR';
  gas = 'Gas Consumption in NM3';
  activeButton: string = 'saving'; 

  showSavingChart() {
    this.activeButton = 'saving';
  }

  showGasChart() {
    this.activeButton = 'gas';
  }

  gasChart = [
    { label: 'Month 1', amount: '1750', value: 48 },
    { label: 'Month 2', amount: '3150', value: 52 },
    { label: 'Month 3', amount: '8150', value: 56 },
    { label: 'Month 4', amount: '13150', value: 60 },
    { label: 'Month 5', amount: '18150', value: 64 },
    { label: 'Month 6', amount: '23150', value: 68 },
    { label: 'Month 7', amount: '28150', value: 72 },
    { label: 'Month 8', amount: '33150', value: 76 },
    { label: 'Month 9', amount: '38150', value: 80 },
    { label: 'Month 10', amount: '43150', value: 84 },
    { label: 'Month 11', amount: '48150', value: 88 },
    { label: 'Month 12', amount: '53150', value: 92 },
  ];
  savingChart = [
    { label: 'Month 1', amount: '₹ 19,250', value: 48 },
    { label: 'Month 2', amount: '₹ 34,650', value: 52 },
    { label: 'Month 3', amount: '₹ 89,750', value: 56 },
    { label: 'Month 4', amount: '₹ 1,44,650', value: 60 },
    { label: 'Month 5', amount: '₹ 1,99,850', value: 64 },
    { label: 'Month 6', amount: '₹ 2,54,650', value: 68 },
    { label: 'Month 7', amount: '₹ 3,09,650', value: 72 },
    { label: 'Month 8', amount: '₹ 3,64,650', value: 76 },
    { label: 'Month 9', amount: '₹ 4,19,650', value: 80 },
    { label: 'Month 10', amount: '₹ 4,74,650', value: 84 },
    { label: 'Month 11', amount: '₹ 5,29,650', value: 88 },
    { label: 'Month 12', amount: '₹ 5,84,650', value: 92 },
  ];
}
