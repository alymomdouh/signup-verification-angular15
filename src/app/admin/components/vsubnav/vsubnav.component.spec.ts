import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsubnavComponent } from './vsubnav.component';

describe('VsubnavComponent', () => {
  let component: VsubnavComponent;
  let fixture: ComponentFixture<VsubnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VsubnavComponent]
    });
    fixture = TestBed.createComponent(VsubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
