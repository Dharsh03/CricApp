import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  formatType: any = 'test';
  playerType: any;

  setFormatType(formatType:any){
    
    this.formatType = formatType
  }

  getFormatType() {
    if(this.formatType){
      return this.formatType
    }else{
      return 'test'
    }
      
  }

  setPlayerType(playerType:any){
    this.playerType = playerType
  }

  getPlayerType() {
    return this.playerType
  }
  constructor() {}

}
