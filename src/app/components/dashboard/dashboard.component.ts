import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';
import { MatchListService } from 'src/app/services/match-list.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  
  constructor(public matchListService: MatchListService) { }
  ngOnInit(): void {
  }

}
