import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterOption } from '../model/program.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getProgramList(): Observable<object> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getProgramWithFilters(filters: FilterOption): Observable<object> {
    if (filters.land && filters.launch && filters.year && filters.year !== -1) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=' + filters.year);
    } else if (filters.land && filters.launch) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true');
    } else if (filters.launch) {      
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true');
    } else {
      return of([]);
    }
  }
}
