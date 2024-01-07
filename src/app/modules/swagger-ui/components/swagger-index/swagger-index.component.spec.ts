import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerIndexComponent } from './swagger-index.component';

describe('SwaggerIndexComponent', () => {
  let component: SwaggerIndexComponent;
  let fixture: ComponentFixture<SwaggerIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwaggerIndexComponent]
    });
    fixture = TestBed.createComponent(SwaggerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
