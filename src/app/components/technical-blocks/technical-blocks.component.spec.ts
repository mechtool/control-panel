import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBlocksComponent } from './technical-blocks.component';

describe('TechnicalBlocksComponent', () => {
  let component: TechnicalBlocksComponent;
  let fixture: ComponentFixture<TechnicalBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalBlocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
