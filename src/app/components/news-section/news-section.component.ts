import { Component } from '@angular/core';
import { MatchListService } from 'src/app/services/match-list.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {
  totalData: any;
  liveMatches: any;
  liveData:any = [];
  totalLiveData:any
  matchType:any;
  topStories:any;
  image:any;
  // response:any;
  response: any = [{
    "storyList": [
      {
        "story": {
          "id": 127350,
          "hline": "Klaasen ton helps Orcas chase record MLC score",
          "intro": "Despite the loss, MI New York qualified for the playoffs of MLC 2023",
          "pubTime": "1690341854068",
          "source": "Cricbuzz",
          "storyType": "News",
          "imageId": 336982,
          "seoHeadline": "Klaasen ton helps Orcas chase record MLC score",
          "context": "Major League Cricket 2023",
          "coverImage": {
            "id": "336982",
            "caption": "Klaasen’s 44-ball 110* downed MI New York in their last league game of the inaugural season of MLC 2023.",
            "source": "Cricbuzz"
          }
        }
      },
      {
        "ad": {
          "name": "native_news_index",
          "layout": "native_large",
          "position": 1
        }
      },
      {
        "story": {
          "id": 127349,
          "hline": "Self belief is my greatest friend: Monank Patel living the American cricket dream",
          "intro": "The USA captain finally made an impression in MLC with a 44 from 29 against Washington Freedom",
          "pubTime": "1690338231628",
          "source": "Cricbuzz",
          "storyType": "Match Features",
          "imageId": 336981,
          "seoHeadline": "Self belief is my greatest friend: 'outsider' Monank Patel hits back at critics",
          "context": "MLC 2023",
          "coverImage": {
            "id": "336981",
            "caption": "Monank Patel had endured a poor run in the first three games of MLC 2023",
            "source": "Sportzpics"
          }
        }
      },
      {
        "story": {
          "id": 127348,
          "hline": "County Highlights: 22 wickets fall in Edgbaston on dramatic opening day",
          "intro": "The Essex-Hampshire contest saw 16 wickets being taken whereas 14 wickets fell in Taunton on a day dominated by bowlers",
          "pubTime": "1690310060722",
          "source": "Cricbuzz",
          "storyType": "Reports",
          "imageId": 336867,
          "seoHeadline": "County Highlights: 22 wickets fall in Edgbaston on dramatic opening day",
          "context": "County Championship",
          "coverImage": {
            "id": "336867",
            "caption": "Toby Roland-Jones triggered a dramatic Warwickshire collapse.",
            "source": "Getty"
          }
        }
      },
      {
        "story": {
          "id": 127347,
          "hline": "Munsey ton takes Scotland back to the top at Europe T20 Qualifier",
          "intro": "The Scotsman broke the national record for the highest T20 score with a 61-ball 132",
          "pubTime": "1690309677444",
          "source": "Cricbuzz",
          "storyType": "Reports",
          "imageId": 336866,
          "seoHeadline": "Munsey ton takes Scotland back to the top at Europe T20 Qualifier",
          "context": "Europe T20 Qualifier",
          "coverImage": {
            "id": "336866",
            "caption": "George Munsey broke the Scottish record for the highest T20 score with a 61-ball 132",
            "source": "Getty"
          }
        }
      },
      {
        "story": {
          "id": 127346,
          "hline": "Will India have a new captain for the Ireland series?",
          "intro": "Jasprit Bumrah, who is coming back from an injury, might miss out on the preparatory camp for the Asia Cup",
          "pubTime": "1690308551965",
          "source": "Cricbuzz",
          "storyType": "News",
          "imageId": 336865,
          "seoHeadline": "Will India have a new captain for the Ireland series?",
          "context": "India's jam-packed calendar",
          "coverImage": {
            "id": "336865",
            "caption": "Jasprit Bumrah, who is coming back from an injury, might miss out on the preparatory camp for the Asia Cup",
            "source": "Getty"
          }
        }
      },
      {
        "ad": {
          "name": "native_news_index_2",
          "layout": "native_large",
          "position": 5
        }
      },
      {
        "story": {
          "id": 127345,
          "hline": "BCCI forms subcommittees for World Cup venue supervision",
          "intro": "BCCI President Roger Binny will oversee Ahmedabad and Chennai, whereas secretary Jay Shah will oversee Delhi and Dharamsala ",
          "pubTime": "1690301943229",
          "source": "Cricbuzz",
          "storyType": "News",
          "isFeatured": true,
          "imageId": 336861,
          "seoHeadline": "BCCI announce subcommittees for World Cup venue supervision, infrastructure subsidies",
          "context": "ICC Cricket World Cup 2023",
          "coverImage": {
            "id": "336861",
            "caption": "BCCI President Roger Binny will oversee Ahmedabad and Chennai, whereas secretary Jay Shah will oversee Delhi and Dharamsala ",
            "source": "BCCI"
          }
        }
      },
      {
        "story": {
          "id": 127344,
          "hline": "Papua New Guinea go clear at EAP T20 Qualifier",
          "intro": "At the halfway stage the hosts have a two-point lead as well as a good net run-rate ",
          "pubTime": "1690301908381",
          "source": "Cricbuzz",
          "storyType": "Reports",
          "imageId": 336864,
          "seoHeadline": "Papua New Guinea go clear at EAP T20 Qualifier",
          "context": "T20 World Cup Regional Qualifiers",
          "coverImage": {
            "id": "336864",
            "caption": "PNG have surged ahead",
            "source": "Getty"
          }
        }
      },
      {
        "story": {
          "id": 127343,
          "hline": "India announce schedule to host Australia, Afghanistan, England ",
          "intro": "The home season fixtures sees Ranchi and Dharamsala amongst the venues that will host the Test matches early next year",
          "pubTime": "1690293414639",
          "source": "Cricbuzz",
          "storyType": "News",
          "imageId": 336860,
          "seoHeadline": "India announce home schedule fixtures including England Tests",
          "context": "India schedule",
          "coverImage": {
            "id": "336860",
            "caption": "Indore will host both Australia and Afghanistan",
            "source": "BCCI"
          }
        }
      },
      {
        "story": {
          "id": 127342,
          "hline": "Harmanpreet suspended for two games after code of conduct breach",
          "intro": "The Indian Women's skipper received a total of four demerit points for two separate breaches ",
          "pubTime": "1690291883743",
          "source": "Cricbuzz",
          "storyType": "News",
          "imageId": 336859,
          "seoHeadline": "Harmanpreet suspended for two games after code of conduct breach",
          "context": "ICC Sanctions",
          "coverImage": {
            "id": "336859",
            "caption": "Harmanpreet received two separate sanctions",
            "source": "AFP"
          }
        }
      },
      {
        "story": {
          "id": 127341,
          "hline": "Rain keeps a check on Pakistan's surge",
          "intro": "Only 10 overs of play were possible on Day 2 during which the visitors moved into the lead",
          "pubTime": "1690270332055",
          "source": "Cricbuzz",
          "storyType": "Reports",
          "imageId": 336858,
          "seoHeadline": "Rain keeps a check on Pakistan's surge",
          "context": "Pakistan tour of Sri Lanka, 2023",
          "coverImage": {
            "id": "336858",
            "caption": "Pakistan added 33 runs to their overnight tally to take a first-innings lead",
            "source": "AFP"
          }
        }
      }
    ],
    "lastUpdatedTime": "1690344185518",
    "appIndex": {
      "seoTitle": "Latest and breaking Cricket News - Cricbuzz | Cricbuzz.com",
      "webURL": "http://www.cricbuzz.com/cricket-news"
    }
  }];

  
  constructor(public matchListService: MatchListService) { }
  ngOnInit(): void {

     this.matchListService.getTopStories().subscribe(response => {                          //Final
      this.response = response        
      // this.response = this.response[0]      
      this.topStories = this.getTopStories()
      console.log(this.topStories)
    });                                                                                //Final
  }

  getTopStories(){
    let concatenatedArray:any[] = new Array();
    if(this.response['storyList']){
      // console.log('AAAAAAAAAAAAAA')
      for (let i = 0; i < this.response['storyList'].length; i++) {
        if(this.response['storyList'][i]['story']){
          this.matchListService.getImageById(this.response['storyList'][i]['story']['coverImage']['id']).subscribe(
            (image) => {
              this.response['storyList'][i]['story']['image'] = this.getImageUrl(image);
            },
            (error) => {
              console.error('Error fetching image:', error);
            }
          );  
          concatenatedArray = concatenatedArray.concat(this.response['storyList'][i]['story']);
        }
      }
    }
    return concatenatedArray.slice(0, 6);
  }

  getImageUrl(image: any): any {
    if (image) {
      return URL.createObjectURL(image);
    }
    return null;
  }

}
