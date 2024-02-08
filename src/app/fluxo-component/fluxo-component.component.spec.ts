import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoComponentComponent } from './fluxo-component.component';

describe('FluxoComponentComponent', () => {
  let component: FluxoComponentComponent;
  let fixture: ComponentFixture<FluxoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluxoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FluxoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
