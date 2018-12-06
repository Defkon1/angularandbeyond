import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediDetailComponent } from './jedi-detail.component';

describe('JediDetailComponent', () => {
  let component: JediDetailComponent;
  let fixture: ComponentFixture<JediDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
