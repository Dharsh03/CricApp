import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/types/shared';
import { HttpClientModule } from '@angular/common/http';
import { LatestMatchesComponent } from './components/latest-matches/latest-matches.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { DashboardRankingsComponent } from './components/dashboard-rankings/dashboard-rankings.component';
import { RankingModalComponent } from './components/ranking-modal/ranking-modal.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LatestMatchesComponent,
    NewsSectionComponent,
    DashboardRankingsComponent,
    RankingModalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
