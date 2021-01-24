import { Component, OnInit } from '@angular/core';
import { FilterOption, Programs } from '../../model/program.model';
import { ProgramService } from '../../service/program.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  programList: Programs[];
  loader = true;

  constructor(public programService: ProgramService) { }

  ngOnInit(): void {
    this.programService.getProgramList().subscribe(res => {      
      this.programList = res;
      this.loader = false
    },
    (err) => {
      this.loader = false;
    });
  }

  getProgramsWithFilter(filters: FilterOption) {
    if(filters.year > 0 && (!filters.land || !filters.launch)) {
      alert('To apply year select land and launch as true. You can also select Launch as true only or with land true');
      return;
    }
    console.log('filters', filters);    
    this.loader = true;
    this.programService.getProgramWithFilters(filters).subscribe(res => {
      this.programList = res;
      this.loader = false;
    }, 
    (err) => {
      console.error(err);
      this.loader = false;
    });
  }

}
