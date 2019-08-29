import { TestBed } from '@angular/core/testing';

import { LibDaruixService } from './lib-daruix.service';

describe('LibDaruixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibDaruixService = TestBed.get(LibDaruixService);
    expect(service).toBeTruthy();
  });
});
