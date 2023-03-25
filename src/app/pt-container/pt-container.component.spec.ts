import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PtContainerComponent } from './pt-container.component'

describe('PtContainerComponent', () => {
  let component: PtContainerComponent
  let fixture: ComponentFixture<PtContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtContainerComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(PtContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
