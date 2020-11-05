import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPostComponent } from './players-post.component';

describe('PlayersPostComponent', () => {
  let component: PlayersPostComponent;
  let fixture: ComponentFixture<PlayersPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
