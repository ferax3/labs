import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Сума ряду за допомогою рекурсії значення x=0.1 y=0.995",()=>{
    let x=0.1;
    let y=0.995;
    let y1 = 1;
    service.getRecursion(x, -1, 1, y1);
    expect(y.toFixed(4)).toBe(service.yy.toFixed(4));
  });
});
