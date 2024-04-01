import { TestBed } from '@angular/core/testing';

import { ValidatorCountService } from './validator-count.service';

describe('ValidatorCountService', () => {
  let service: ValidatorCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Перевірка число дорівнює 3", ()=>{
    let a = 3;
    let r = service.validate_count(a);
    expect(r).toBe(true);
  });
  it("Перевірка число дорівнює 2", ()=>{
    let a = 2;
    let r = service.validate_count(a);
    expect(r).toBe(false);
  });
});
