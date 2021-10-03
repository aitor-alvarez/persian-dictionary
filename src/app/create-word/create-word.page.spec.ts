import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateWordPage } from './create-word.page';

describe('CreateWordPage', () => {
  let component: CreateWordPage;
  let fixture: ComponentFixture<CreateWordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
