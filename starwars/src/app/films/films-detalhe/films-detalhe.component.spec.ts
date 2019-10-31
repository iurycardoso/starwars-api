import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsDetalheComponent } from './films-detalhe.component';


describe('FilmsDetalheComponent', () => {
  let component: FilmsDetalheComponent;
  let fixture: ComponentFixture<FilmsDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsDetalheComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
