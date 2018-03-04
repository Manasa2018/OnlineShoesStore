import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshoesComponent } from './listshoes.component';

describe('ListshoesComponent', () => {
  let component: ListshoesComponent;
  let fixture: ComponentFixture<ListshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
