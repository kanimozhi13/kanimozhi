import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(pipeData, pipeModifer): any{

    return pipeData.filter(item =>{
      return ({
       item['firstName'].toLowerCase().includes(pipeModifer.toLowerCase()) || 
       item['preferredFullName'].toLowerCase().includes(pipeModifer.toLowerCase())
      })
    })
  }

  // transform(value:any , firstName: string): any {
  //   if(firstName === ""){
  //     return value
  //   }
  //   const empArr :any [] = [];
  //   var empName:string
  //   // let data = value.filter(res => return res.firstName);
  //   for(let i=0;i<value.length;i++){
  //     var name = value[i].firstName
  //     if( name.startsWith(value[i].firstName) == firstName)
  //      empArr.push(value[i]);
  //     // if(empName.startsWith(firstName)){
  //     //   empArr.push(value[i])
  //     // }
  //   }
  //   return empArr
  //       empArr.push(value[i])
  //   let empName:string = value[i].firstName;
  //    if(empName.startsWith(firstName)){
  //      empArr.push(value[i])
  //    }
  //    return empArr;
  //   }
  //   }
    
  // }

