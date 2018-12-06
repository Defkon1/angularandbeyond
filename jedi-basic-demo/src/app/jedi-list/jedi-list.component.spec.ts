import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediListComponent } from './jedi-list.component';

describe('JediComponent', () => {
  let component: JediListComponent;
  let fixture: ComponentFixture<JediListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
