/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertsService } from './alerts.service';

describe('AlertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsService]
    });
  });

  it('should ...', inject([AlertsService], (service: AlertsService) => {
    expect(service).toBeTruthy();
  }));
});
