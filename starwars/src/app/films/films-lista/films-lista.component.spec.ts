import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListaComponent } from './films-lista.component';

describe('FilmsListaComponent', () => {
  let component: FilmsListaComponent;
  let fixture: ComponentFixture<FilmsListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
