import { TestBed } from '@angular/core/testing';

import { IsEqualCountsService } from './is-equal-counts.service';

describe('IsEqualCountsService', () => {
  let service: IsEqualCountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsEqualCountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Перевіряємо чи покаже істину, якщо введено 5 та 5", ()=>{
    let s = 5;
    let l = 5;
    let isequal = service.validate_is_equal_counts(s,l);
    expect(isequal).toBe(true);
  });
  it("Перевіряємо чи покаже хибу, якщо введено 5 та 7", ()=>{
    let s = 5;
    let l = 7;
    let isequal = service.validate_is_equal_counts(s,l);
    expect(isequal).toBe(false);
  });
});
