import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatchListService } from 'src/app/services/match-list.service';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';

@Component({
  selector: 'app-ranking-modal',
  templateUrl: './ranking-modal.component.html',
  styleUrls: ['./ranking-modal.component.css']
})
export class RankingModalComponent {
  constructor(public sharedDataServiceService: SharedDataServiceService,public matchListService: MatchListService) { }
  @Output() close = new EventEmitter<void>();
  
  response:any;
  rankData:any;
  getFormatType:any = this.sharedDataServiceService.getFormatType();
  getPlayerType:any = this.sharedDataServiceService.getPlayerType();
  // response:any = [{
  //   "rank": [
  //     {
  //       "id": "6326",
  //       "rank": "1",
  //       "name": "Kane Williamson",
  //       "country": "New Zealand",
  //       "rating": "883",
  //       "difference": 1,
  //       "points": "883",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Up",
  //       "faceImageId": "244826",
  //       "countryId": "13",
  //       "avg": "54.89"
  //     },
  //     {
  //       "id": "8497",
  //       "rank": "2",
  //       "name": "Travis Head",
  //       "country": "Australia",
  //       "rating": "874",
  //       "difference": 2,
  //       "points": "874",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Up",
  //       "faceImageId": "332908",
  //       "countryId": "4",
  //       "avg": "46.08"
  //     },
  //     {
  //       "id": "8359",
  //       "rank": "3",
  //       "name": "Babar Azam",
  //       "country": "Pakistan",
  //       "rating": "862",
  //       "difference": 2,
  //       "points": "862",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Up",
  //       "faceImageId": "244936",
  //       "countryId": "3",
  //       "avg": "47.86"
  //     },
  //     {
  //       "id": "2250",
  //       "rank": "4",
  //       "name": "Steven Smith",
  //       "country": "Australia",
  //       "rating": "855",
  //       "difference": 2,
  //       "points": "855",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Up",
  //       "faceImageId": "332907",
  //       "countryId": "4",
  //       "avg": "58.57"
  //     },
  //     {
  //       "id": "10182",
  //       "rank": "5",
  //       "name": "Marnus Labuschagne",
  //       "country": "Australia",
  //       "rating": "849",
  //       "difference": -2,
  //       "points": "849",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Down",
  //       "faceImageId": "332906",
  //       "countryId": "4",
  //       "avg": "54.59"
  //     },
  //     {
  //       "id": "8019",
  //       "rank": "6",
  //       "name": "Joe Root",
  //       "country": "England",
  //       "rating": "842",
  //       "difference": -5,
  //       "points": "842",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Down",
  //       "faceImageId": "170942",
  //       "countryId": "9",
  //       "avg": "50.31"
  //     },
  //     {
  //       "id": "6635",
  //       "rank": "7",
  //       "name": "Usman Khawaja",
  //       "country": "Australia",
  //       "rating": "824",
  //       "points": "824",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Flat",
  //       "faceImageId": "332905",
  //       "countryId": "4",
  //       "avg": "46.97"
  //     },
  //     {
  //       "id": "10713",
  //       "rank": "8",
  //       "name": "Daryl Mitchell",
  //       "country": "New Zealand",
  //       "rating": "792",
  //       "points": "792",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Flat",
  //       "faceImageId": "244813",
  //       "countryId": "13",
  //       "avg": "57.22"
  //     },
  //     {
  //       "id": "7952",
  //       "rank": "9",
  //       "name": "Dimuth Karunaratne",
  //       "country": "Sri Lanka",
  //       "rating": "780",
  //       "points": "780",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "Flat",
  //       "faceImageId": "170700",
  //       "countryId": "5",
  //       "avg": "41.08"
  //     },
  //     {
  //       "id": "576",
  //       "rank": "10",
  //       "name": "Rohit Sharma",
  //       "country": "India",
  //       "rating": "751",
  //       "points": "751",
  //       "lastUpdatedOn": "2023-07-26",
  //       "trend": "New",
  //       "faceImageId": "332888",
  //       "countryId": "2",
  //       "avg": "46.54"
  //     }
  //   ],
  //   "appIndex": {
  //     "seoTitle": "ICC Cricket Rankings - Top 100 Batter | Cricbuzz.com",
  //     "webURL": "www.cricbuzz.com/cricket-stats/icc-rankings"
  //   }
  // }];

  ngOnInit(): void {
      this.getFormatType = this.getFormatType;
      this.getPlayerType = this.getPlayerType;
      this.matchListService.getRanking(this.getFormatType, this.getPlayerType).subscribe(response => {                          //Final
      this.response = response    
      this.getRankData()
      this.rankData = this.response['rank']   
        // this.totalLiveData = this.getLiveMatches()
        console.log(this.rankData)
    });   
  }

  getRankData(){
    console.log(this.response)
    for (let i = 0; i < this.response['rank'].length; i++) {
      this.matchListService.getImageById(this.response['rank'][i]['faceImageId']).subscribe(
            (image) => {
              this.response['rank'][i]['image'] = this.getImageUrl(image);
            },
            (error) => {
              console.error('Error fetching image:', error);
            }
          );  
     
    }
  }

  getImageId(imageId: any){
    this.matchListService.getImageById(imageId).subscribe(
        (image) => {
          console.log(image)
          return this.getImageUrl(image);
        },
        (error) => {
          console.error('Error fetching image:', error);
        }
      );  
  }

  getImageUrl(image: any): any {
    if (image) {
      return URL.createObjectURL(image);
    }
    return null;
  }

  // console.log(selectedRankingType)
  onClose() {
    this.close.emit();
  }
}
