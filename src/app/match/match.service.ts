import { Injectable } from '@angular/core';
import { Match } from './match';

import { MATCHES } from '../mock-data';

@Injectable()
export class MatchService {
  _matches: Match[] = MATCHES;

  get matches(): Match[] {
    return this._matches;
  }
}
