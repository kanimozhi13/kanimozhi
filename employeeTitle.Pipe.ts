import { PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

import{Pipe} from '@angular/core';

@Pipe({
    name:'employeeTitlePipe'
})

export class employeeTitlePipe implements PipeTransform{
    transform(value:string,gender:string):string{
        if(gender.toLowerCase()== 'male')
           return "Mr."+ value;
        else
          return "Miss." + value;
    }

}