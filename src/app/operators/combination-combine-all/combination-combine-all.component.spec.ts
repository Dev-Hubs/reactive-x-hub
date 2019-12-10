import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationCombineAllComponent } from './combination-combine-all.component';

describe('CombinationCombineAllComponent', () => {
  let component: CombinationCombineAllComponent;
  let fixture: ComponentFixture<CombinationCombineAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationCombineAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationCombineAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
