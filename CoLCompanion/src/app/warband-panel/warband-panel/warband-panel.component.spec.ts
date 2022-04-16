import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarbandPanelComponent } from './warband-panel.component';

describe('WarbandPanelComponent', () => {
  let component: WarbandPanelComponent;
  let fixture: ComponentFixture<WarbandPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarbandPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarbandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
