import { MedicoComponent } from './medico.component';
import {TestBed, ComponentFixture} from '@angular/core/testing';

describe('Medico component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent
      ]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('', () => {

  });
});