import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRankingsComponent } from './dashboard-rankings.component';

describe('DashboardRankingsComponent', () => {
  let component: DashboardRankingsComponent;
  let fixture: ComponentFixture<DashboardRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRankingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
