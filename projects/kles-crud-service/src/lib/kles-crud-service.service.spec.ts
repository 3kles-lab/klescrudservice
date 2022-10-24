import { TestBed } from '@angular/core/testing';

import { KlesCrudServiceService } from './kles-crud-service.service';

describe('KlesCrudServiceService', () => {
  let service: KlesCrudServiceService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlesCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
