import { Component } from '@angular/core';
import { MatchListService } from 'src/app/services/match-list.service';

@Component({
  selector: 'app-latest-matches',
  templateUrl: './latest-matches.component.html',
  styleUrls: ['./latest-matches.component.css']
})
export class LatestMatchesComponent {
  totalData: any;
  liveMatches: any;
  liveData:any = [];
  totalLiveData:any
  matchType:any;
  // response:any;
  response: any = [{
    "typeMatches": [
      {
        "matchType": "International",
        "seriesMatches": [
          {
            "seriesAdWrapper": {
              "seriesId": 6652,
              "seriesName": "Pakistan tour of Sri Lanka, 2023",
              "matches": [
                {
                  "matchInfo": {
                    "matchId": 73638,
                    "seriesId": 6652,
                    "seriesName": "Pakistan tour of Sri Lanka, 2023",
                    "matchDesc": "2nd Test",
                    "matchFormat": "TEST",
                    "startDate": "1690173000000",
                    "endDate": "1690543800000",
                    "state": "Stumps",
                    "status": "Day 2: Stumps - Pakistan lead by 12 runs",
                    "team1": {
                      "teamId": 5,
                      "teamName": "Sri Lanka",
                      "teamSName": "SL",
                      "imageId": 172119
                    },
                    "team2": {
                      "teamId": 3,
                      "teamName": "Pakistan",
                      "teamSName": "PAK",
                      "imageId": 172116
                    },
                    "venueInfo": {
                      "id": 14,
                      "ground": "Sinhalese Sports Club",
                      "city": "Colombo",
                      "timezone": "+05:30",
                      "latitude": "6.905929",
                      "longitude": "79.869403"
                    },
                    "currBatTeamId": 3,
                    "seriesStartDt": "1689033600000",
                    "seriesEndDt": "1690675200000",
                    "isTimeAnnounced": true,
                    "stateTitle": "Stumps"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 166,
                        "wickets": 10,
                        "overs": 48.4
                      }
                    },
                    "team2Score": {
                      "inngs1": {
                        "inningsId": 2,
                        "runs": 178,
                        "wickets": 2,
                        "overs": 38.3
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "adDetail": {
              "name": "native_matches",
              "layout": "native_large",
              "position": 1
            }
          },
          {
            "seriesAdWrapper": {
              "seriesId": 6333,
              "seriesName": "ICC Mens T20 World Cup Europe Qualifier 2023",
              "matches": [
                {
                  "matchInfo": {
                    "matchId": 70877,
                    "seriesId": 6333,
                    "seriesName": "ICC Mens T20 World Cup Europe Qualifier 2023",
                    "matchDesc": "14th Match",
                    "matchFormat": "T20",
                    "startDate": "1690277400000",
                    "endDate": "1690290000000",
                    "state": "Toss",
                    "status": "Austria opt to bowl",
                    "team1": {
                      "teamId": 23,
                      "teamName": "Scotland",
                      "teamSName": "SCO",
                      "imageId": 172137
                    },
                    "team2": {
                      "teamId": 532,
                      "teamName": "Austria",
                      "teamSName": "AUT",
                      "imageId": 172583
                    },
                    "venueInfo": {
                      "id": 1580,
                      "ground": "Goldenacre",
                      "city": "Edinburgh",
                      "timezone": "+01:00",
                      "latitude": "55.960766",
                      "longitude": "-3.213116"
                    },
                    "seriesStartDt": "1689811200000",
                    "seriesEndDt": "1690675200000",
                    "isTimeAnnounced": true,
                    "stateTitle": "Toss"
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 70873,
                    "seriesId": 6333,
                    "seriesName": "ICC Mens T20 World Cup Europe Qualifier 2023",
                    "matchDesc": "13th Match",
                    "matchFormat": "T20",
                    "startDate": "1690277400000",
                    "endDate": "1690290000000",
                    "state": "Toss",
                    "status": "Denmark opt to bowl",
                    "team1": {
                      "teamId": 527,
                      "teamName": "Italy",
                      "teamSName": "ITA",
                      "imageId": 172577
                    },
                    "team2": {
                      "teamId": 185,
                      "teamName": "Denmark",
                      "teamSName": "DEN",
                      "imageId": 172245
                    },
                    "venueInfo": {
                      "id": 138,
                      "ground": "Grange Cricket Club",
                      "city": "Edinburgh",
                      "timezone": "+01:00",
                      "latitude": "55.960766",
                      "longitude": "-3.213116"
                    },
                    "seriesStartDt": "1689811200000",
                    "seriesEndDt": "1690675200000",
                    "isTimeAnnounced": true,
                    "stateTitle": "Toss"
                  }
                }
              ]
            }
          },
          {
            "seriesAdWrapper": {
              "seriesId": 6340,
              "seriesName": "ICC Mens T20 World Cup East Asia Pacific Qualifier 2023",
              "matches": [
                {
                  "matchInfo": {
                    "matchId": 70943,
                    "seriesId": 6340,
                    "seriesName": "ICC Mens T20 World Cup East Asia Pacific Qualifier 2023",
                    "matchDesc": "6th Match",
                    "matchFormat": "T20",
                    "startDate": "1690255800000",
                    "endDate": "1690268400000",
                    "state": "Complete",
                    "status": "Papua New Guinea won by 6 wkts",
                    "team1": {
                      "teamId": 547,
                      "teamName": "Japan",
                      "teamSName": "JPN",
                      "imageId": 248418
                    },
                    "team2": {
                      "teamId": 287,
                      "teamName": "Papua New Guinea",
                      "teamSName": "PNG",
                      "imageId": 172336
                    },
                    "venueInfo": {
                      "id": 460,
                      "ground": "Amini Park",
                      "city": "Port Moresby",
                      "timezone": "+10:00",
                      "latitude": "-9.4795932",
                      "longitude": "147.146818"
                    },
                    "currBatTeamId": 287,
                    "seriesStartDt": "1689984000000",
                    "seriesEndDt": "1690761600000",
                    "isTimeAnnounced": true,
                    "stateTitle": "PNG Won"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 87,
                        "wickets": 8,
                        "overs": 19.6
                      }
                    },
                    "team2Score": {
                      "inngs1": {
                        "inningsId": 2,
                        "runs": 92,
                        "wickets": 4,
                        "overs": 15.1
                      }
                    }
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 70940,
                    "seriesId": 6340,
                    "seriesName": "ICC Mens T20 World Cup East Asia Pacific Qualifier 2023",
                    "matchDesc": "5th Match",
                    "matchFormat": "T20",
                    "startDate": "1690241400000",
                    "endDate": "1690254000000",
                    "state": "Complete",
                    "status": "Philippines won by 6 wkts",
                    "team1": {
                      "teamId": 300,
                      "teamName": "Vanuatu",
                      "teamSName": "VAN",
                      "imageId": 172349
                    },
                    "team2": {
                      "teamId": 538,
                      "teamName": "Philippines",
                      "teamSName": "PHI",
                      "imageId": 172589
                    },
                    "venueInfo": {
                      "id": 460,
                      "ground": "Amini Park",
                      "city": "Port Moresby",
                      "timezone": "+10:00",
                      "latitude": "-9.4795932",
                      "longitude": "147.146818"
                    },
                    "currBatTeamId": 538,
                    "seriesStartDt": "1689984000000",
                    "seriesEndDt": "1690761600000",
                    "isTimeAnnounced": true,
                    "stateTitle": "PHI Won"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 97,
                        "wickets": 10,
                        "overs": 19.3
                      }
                    },
                    "team2Score": {
                      "inngs1": {
                        "inningsId": 2,
                        "runs": 98,
                        "wickets": 4,
                        "overs": 17.4
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "matchType": "Domestic",
        "seriesMatches": [
          {
            "seriesAdWrapper": {
              "seriesId": 5129,
              "seriesName": "County Championship Division Two 2023",
              "matches": [
                {
                  "matchInfo": {
                    "matchId": 59806,
                    "seriesId": 5129,
                    "seriesName": "County Championship Division Two 2023",
                    "matchDesc": "County Div 2",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 146,
                      "teamName": "Yorkshire",
                      "teamSName": "YORKS",
                      "imageId": 172213
                    },
                    "team2": {
                      "teamId": 141,
                      "teamName": "Durham",
                      "teamSName": "DUR",
                      "imageId": 172208
                    },
                    "venueInfo": {
                      "id": 220,
                      "ground": "North Marine Road Ground",
                      "city": "Scarborough",
                      "timezone": "+01:00",
                      "latitude": "54.288277",
                      "longitude": "-0.40539"
                    },
                    "currBatTeamId": 146,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 34,
                        "overs": 6.6
                      }
                    },
                    "team2Score": {}
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 59799,
                    "seriesId": 5129,
                    "seriesName": "County Championship Division Two 2023",
                    "matchDesc": "County Div 2",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 149,
                      "teamName": "Glamorgan",
                      "teamSName": "GLAM",
                      "imageId": 172216
                    },
                    "team2": {
                      "teamId": 144,
                      "teamName": "Derbyshire",
                      "teamSName": "DERBY",
                      "imageId": 172211
                    },
                    "venueInfo": {
                      "id": 226,
                      "ground": "County Ground",
                      "city": "Derby",
                      "timezone": "+01:00",
                      "latitude": "52.927517",
                      "longitude": "-1.461188"
                    },
                    "currBatTeamId": 149,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 32,
                        "wickets": 1,
                        "overs": 6.4
                      }
                    },
                    "team2Score": {}
                  }
                }
              ]
            }
          },
          {
            "seriesAdWrapper": {
              "seriesId": 5127,
              "seriesName": "County Championship Division One 2023",
              "matches": [
                {
                  "matchInfo": {
                    "matchId": 59496,
                    "seriesId": 5127,
                    "seriesName": "County Championship Division One 2023",
                    "matchDesc": "County Div 1",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 139,
                      "teamName": "Nottinghamshire",
                      "teamSName": "NOTTS",
                      "imageId": 172206
                    },
                    "team2": {
                      "teamId": 150,
                      "teamName": "Kent",
                      "teamSName": "KENT",
                      "imageId": 172217
                    },
                    "venueInfo": {
                      "id": 18,
                      "ground": "Trent Bridge",
                      "city": "Nottingham",
                      "timezone": "+01:00",
                      "latitude": "52.936884",
                      "longitude": "-1.132230"
                    },
                    "currBatTeamId": 139,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 7,
                        "overs": 6.6
                      }
                    },
                    "team2Score": {}
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 59484,
                    "seriesId": 5127,
                    "seriesName": "County Championship Division One 2023",
                    "matchDesc": "County Div 1",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 140,
                      "teamName": "Warwickshire",
                      "teamSName": "WARKS",
                      "imageId": 172207
                    },
                    "team2": {
                      "teamId": 74,
                      "teamName": "Middlesex",
                      "teamSName": "MDX",
                      "imageId": 172170
                    },
                    "venueInfo": {
                      "id": 20,
                      "ground": "Edgbaston",
                      "city": "Birmingham",
                      "timezone": "+01:00",
                      "latitude": "52.455774",
                      "longitude": "-1.902624"
                    },
                    "currBatTeamId": 140,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 18,
                        "wickets": 5,
                        "overs": 5.2
                      }
                    },
                    "team2Score": {}
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 59503,
                    "seriesId": 5127,
                    "seriesName": "County Championship Division One 2023",
                    "matchDesc": "County Div 1",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 119,
                      "teamName": "Somerset",
                      "teamSName": "SOM",
                      "imageId": 172199
                    },
                    "team2": {
                      "teamId": 148,
                      "teamName": "Surrey",
                      "teamSName": "SUR",
                      "imageId": 172215
                    },
                    "venueInfo": {
                      "id": 223,
                      "ground": "The Cooper Associates County Ground",
                      "city": "Taunton",
                      "timezone": "+01:00",
                      "latitude": "51.018913",
                      "longitude": "3.100894"
                    },
                    "currBatTeamId": 119,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 22,
                        "wickets": 1,
                        "overs": 7.5
                      }
                    },
                    "team2Score": {}
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 59491,
                    "seriesId": 5127,
                    "seriesName": "County Championship Division One 2023",
                    "matchDesc": "County Div 1",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 142,
                      "teamName": "Northamptonshire",
                      "teamSName": "NHNTS",
                      "imageId": 172209
                    },
                    "team2": {
                      "teamId": 143,
                      "teamName": "Lancashire",
                      "teamSName": "LANCS",
                      "imageId": 172210
                    },
                    "venueInfo": {
                      "id": 65,
                      "ground": "Emirates Old Trafford",
                      "city": "Manchester",
                      "timezone": "+01:00",
                      "latitude": "53.463066",
                      "longitude": "-2.291301"
                    },
                    "currBatTeamId": 142,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 22,
                        "overs": 7.5
                      }
                    },
                    "team2Score": {}
                  }
                },
                {
                  "matchInfo": {
                    "matchId": 59477,
                    "seriesId": 5127,
                    "seriesName": "County Championship Division One 2023",
                    "matchDesc": "County Div 1",
                    "matchFormat": "TEST",
                    "startDate": "1690279200000",
                    "endDate": "1690563600000",
                    "state": "In Progress",
                    "status": "Day 1: 1st Session",
                    "team1": {
                      "teamId": 153,
                      "teamName": "Hampshire",
                      "teamSName": "HAM",
                      "imageId": 172220
                    },
                    "team2": {
                      "teamId": 152,
                      "teamName": "Essex",
                      "teamSName": "ESS",
                      "imageId": 172219
                    },
                    "venueInfo": {
                      "id": 21,
                      "ground": "The Rose Bowl",
                      "city": "Southampton",
                      "timezone": "+01:00",
                      "latitude": "50.924131",
                      "longitude": "-1.322163"
                    },
                    "currBatTeamId": 153,
                    "seriesStartDt": "1680739200000",
                    "seriesEndDt": "1696118400000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 20,
                        "wickets": 1,
                        "overs": 5.6
                      }
                    },
                    "team2Score": {}
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "matchType": "Women",
        "seriesMatches": [
          {
            "seriesAdWrapper": {
              "seriesId": 6144,
              "seriesName": "Australia Women tour of Ireland, 2023",
              "matches": [
                {
                  "matchInfo": {
                    "matchId": 68763,
                    "seriesId": 6144,
                    "seriesName": "Australia Women tour of Ireland, 2023",
                    "matchDesc": "2nd ODI (ICC Championship Match)",
                    "matchFormat": "ODI",
                    "startDate": "1690278300000",
                    "endDate": "1690307100000",
                    "state": "In Progress",
                    "status": "Ireland Women opt to bowl",
                    "team1": {
                      "teamId": 100,
                      "teamName": "Australia Women",
                      "teamSName": "AUSW",
                      "imageId": 172192
                    },
                    "team2": {
                      "teamId": 189,
                      "teamName": "Ireland Women",
                      "teamSName": "IREW",
                      "imageId": 172249
                    },
                    "venueInfo": {
                      "id": 137,
                      "ground": "Castle Avenue",
                      "city": "Dublin",
                      "timezone": "+01:00",
                      "latitude": "53.368091",
                      "longitude": "-6.207111"
                    },
                    "currBatTeamId": 100,
                    "seriesStartDt": "1690070400000",
                    "seriesEndDt": "1690675200000",
                    "isTimeAnnounced": true,
                    "stateTitle": "In Progress"
                  },
                  "matchScore": {
                    "team1Score": {
                      "inngs1": {
                        "inningsId": 1,
                        "runs": 58,
                        "wickets": 2,
                        "overs": 10.2
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    ],
    "filters": {
      "matchType": [
        "International",
        "League",
        "Domestic",
        "Women"
      ]
    },
    "appIndex": {
      "seoTitle": "Live Cricket Score - Scorecard and Match Results",
      "webURL": "www.cricbuzz.com/live-cricket-scores/"
    },
    "responseLastUpdated": "1690281143"
  }];

  
  constructor(public matchListService: MatchListService) { }
  ngOnInit(): void {

    //  this.matchListService.getLiveData().subscribe(response => {                          //Final
      // this.response = response                                                         //Final
      this.response = this.response[0]        
      this.totalLiveData = this.getLiveMatches()
      console.log(this.totalLiveData)
    // });                                                                                //Final
  }

  getLiveMatches(){
    let concatenatedArray:any[] = new Array();
    if(this.response['typeMatches']){
      for (let i = 0; i < this.response['typeMatches'].length; i++) {
        const eachMatch = this.response['typeMatches'][i]['seriesMatches'];
        for (let j = 0; j < eachMatch.length; j++) {
          if(eachMatch[j]['seriesAdWrapper']){
            // this.liveData = [...this.liveData, ...eachMatch[j]['seriesAdWrapper']]  
            // console.log(eachMatch[j]['seriesAdWrapper'])
            concatenatedArray = concatenatedArray.concat(eachMatch[j]['seriesAdWrapper']);
            // console.log(concatenatedArray)
          }
        }
      }
    }
    // console.log(concatenatedArray)
    return concatenatedArray.slice(0, 6);
  }


}
