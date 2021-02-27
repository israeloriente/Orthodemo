import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentionComponent } from './contention.component';

describe('ContentionComponent', () => {
  let component: ContentionComponent;
  let fixture: ComponentFixture<ContentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
