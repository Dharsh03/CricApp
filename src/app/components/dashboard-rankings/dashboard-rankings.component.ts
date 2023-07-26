import { Component } from '@angular/core';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-dashboard-rankings',
  templateUrl: './dashboard-rankings.component.html',
  styleUrls: ['./dashboard-rankings.component.css']
})
export class DashboardRankingsComponent {
  formatType:any = 'test';
  teamImage:any = 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/05/05/e88fd7c3-9e06-4357-be66-7585accf2699/Australia-Ashes.jpg';
  battingImage:any = 'https://c.ndtvimg.com/2022-06/t9b31t4o_joe-root-afp_625x300_04_June_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605';
  bowlingImage:any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtI4ZwVaywWMrt5sNnsloKtPMS9UFQ2lM1Vl2t6erV_iNWrqjcr3d9qyo8L9pn_Q1IeI&usqp=CAU';
  allRoundImage:any = 'https://img.cricketworld.com/images/f-077949/2020-07-20t172905z_1910144520_rc25xh9k9jaw_rtrmadp_3_cricket-test-eng-win.jpg';
  isModalOpen = false;

  openModal(value: string) {
    this.isModalOpen = true;   
    this.sharedDataServiceService.setPlayerType(value)
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  constructor(public sharedDataServiceService: SharedDataServiceService) {}

  onRankingChange(event: Event): void {
    var formatType = (event.target as HTMLSelectElement).value;
    
    this.sharedDataServiceService.setFormatType(formatType)
    if(formatType == 'odi'){
      this.teamImage = 'https://images.thequint.com/thequint%2F2019-12%2F9eb1895b-3428-4e21-9995-bbb3b9abaae9%2FAP19026288993127.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200';
      this.battingImage = 'https://www.sportsadda.com/static-assets/waf-images/58/1f/7c/16-9/vYLlw3Warf.jpg?v=1.3&w=420%20420w'
      this.bowlingImage = 'https://cdn.dmcl.biz/media/image/91889/o/Trent%20Boult.jpg';
      this.allRoundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgAu2YV-fNH3kpRG25ZmtR8RDnXaQfYs5Fg&usqp=CAU';
    }else if (formatType == 't20'){
      this.teamImage = 'https://images.hindustantimes.com/img/2022/09/14/1600x900/india-xi-wc-getty_1663172178897_1663172201882_1663172201882.jpg';
      this.battingImage = 'https://static.toiimg.com/thumb/msid-95941951,width-1070,height-580,imgsize-58942,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'
      this.bowlingImage = 'https://staticg.sportskeeda.com/editor/2021/06/befd5-16229849087663-800.jpg';
      this.allRoundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxlMpQzLsScsoIIQ2VIzIhu12D3Qz2VPh3A&usqp=CAU'; 
    }else{
      this.teamImage = 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/05/05/e88fd7c3-9e06-4357-be66-7585accf2699/Australia-Ashes.jpg';
      this.battingImage = 'https://c.ndtvimg.com/2022-06/t9b31t4o_joe-root-afp_625x300_04_June_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605';
      this.bowlingImage =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtI4ZwVaywWMrt5sNnsloKtPMS9UFQ2lM1Vl2t6erV_iNWrqjcr3d9qyo8L9pn_Q1IeI&usqp=CAU';
      this.allRoundImage =  'https://img.cricketworld.com/images/f-077949/2020-07-20t172905z_1910144520_rc25xh9k9jaw_rtrmadp_3_cricket-test-eng-win.jpg';
    }
    this.formatType = formatType
  }

}

