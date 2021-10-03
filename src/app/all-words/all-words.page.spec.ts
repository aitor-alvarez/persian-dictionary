import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllWordsPage } from './all-words.page';

describe('AllWordsPage', () => {
  let component: AllWordsPage;
  let fixture: ComponentFixture<AllWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
