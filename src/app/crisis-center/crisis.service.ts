import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService {
  getCrises() { return Observable.of(CRISES); }

  getCrisis(id: number | string) {
    return this.getCrises()
      // (+) before `id` turns the string into a number
      .map(crises => crises.find(crisis => crisis.id === +id));
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/