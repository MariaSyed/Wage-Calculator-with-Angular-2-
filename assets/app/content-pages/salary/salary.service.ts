import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {WindowRef} from '../../WindowRef';

import { Salary } from "./salary.model";

@Injectable()
export class SalaryService {
    private salaries: Salary[] = [];
    domain: string;

    constructor(private http: Http, private winRef: WindowRef) {
      this.domain = winRef.domain + "/";
    }

    getSalaries() {
        // return this.salaries;
        return this.http.get(this.domain + 'salary')//should be changed after deploying the app
            .map((response: Response) => {
              return this.salaries = this.transformSalary(response.json().obj);
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }


    calculateSalaries(){
      return this.http.post(this.domain + 'salary',"")
        .map((response: Response) => {
          return this.salaries = this.transformSalary(response.json().obj);
        })
          .catch((error: Response) => Observable.throw(error.json()));
    }

    transformSalary(obj: Array<any>){
      const salaries = obj;
      let transformedSalaries: Salary[] = [];
      for (let salary of salaries) {
          transformedSalaries.push(new Salary(salary.name, salary.id, salary.salary, salary._id));
      }
      return transformedSalaries;
    }
}
