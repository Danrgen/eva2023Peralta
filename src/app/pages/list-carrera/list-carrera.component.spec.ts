import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarreraComponent } from './list-carrera.component';

describe('ListCarreraComponent', () => {
  let component: ListCarreraComponent;
  let fixture: ComponentFixture<ListCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCarreraComponent]
    });
    fixture = TestBed.createComponent(ListCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
