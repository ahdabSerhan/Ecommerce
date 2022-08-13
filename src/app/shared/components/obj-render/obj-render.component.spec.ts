import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjRenderComponent } from './obj-render.component';

describe('ObjRenderComponent', () => {
  let component: ObjRenderComponent;
  let fixture: ComponentFixture<ObjRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
