import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroDisplayComponentComponent } from './astro-display-component.component';

describe('AstroDisplayComponentComponent', () => {
  let component: AstroDisplayComponentComponent;
  let fixture: ComponentFixture<AstroDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstroDisplayComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AstroDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
