import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:any = new Date(); 
    var dateDifference =Math.abs(value - today )
    const secondsInAnHour= 3600; 

    var dateDifferenceSeconds=dateDifference*0.001; 

    var dateCounter = Math.round(dateDifferenceSeconds/secondsInAnHour);

    if (dateCounter >= 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
