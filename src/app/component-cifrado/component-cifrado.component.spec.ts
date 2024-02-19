import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCifradoComponent } from './component-cifrado.component';

describe('ComponentCifradoComponent', () => {
  let component: ComponentCifradoComponent;
  let fixture: ComponentFixture<ComponentCifradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCifradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCifradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
