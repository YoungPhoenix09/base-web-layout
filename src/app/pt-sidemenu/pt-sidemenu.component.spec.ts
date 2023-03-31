import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PtSidemenuComponent } from './pt-sidemenu.component'

describe('PtSidemenuComponent', () => {
  let component: PtSidemenuComponent
  let fixture: ComponentFixture<PtSidemenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtSidemenuComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(PtSidemenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
