import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDaruixComponent } from './lib-daruix.component';

describe('LibDaruixComponent', () => {
  let component: LibDaruixComponent;
  let fixture: ComponentFixture<LibDaruixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDaruixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDaruixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
