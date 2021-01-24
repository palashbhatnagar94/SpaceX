import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterOption } from '../../model/program.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterYear = [2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  selectedYear = -1;
  isSuccessfulLaunch = -1;
  isSuccesfulLanding = -1;

  @Output() getProgramsWithFilters = new EventEmitter<FilterOption>();
  
  constructor() { }

  ngOnInit(): void {
  }

  applyYear(index: number) {
    this.selectedYear = index;
    this.getProgramsWithFilter();
  }

  applyLaunch(launch: number) {
    this.isSuccessfulLaunch = launch;
    this.getProgramsWithFilter();
  }

  applyLand(landing: number) {
    this.isSuccesfulLanding = landing;
    this.getProgramsWithFilter();
  }

  getProgramsWithFilter() {
    console.log('emit', this.selectedYear, this.isSuccessfulLaunch, this.isSuccesfulLanding);
    this.getProgramsWithFilters.emit({
      'year': this.filterYear[this.selectedYear],
      'launch': this.isSuccessfulLaunch === 1,
      'land': this.isSuccesfulLanding === 1
    });
  }
}
