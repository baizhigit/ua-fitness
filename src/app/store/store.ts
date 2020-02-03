import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

// models
import { User } from '../models/user.model';

export interface State {
  user: User;
  // meals: Meal[];
  // selected: any;
  // list: any;
  // schedule: ScheduleItem[];
  // date: Date;
  // workouts: Workout[];
  [key: string]: any;
}

const state: State = {
  user: undefined
  // meals: undefined,
  // selected: undefined,
  // list: undefined,
  // schedule: undefined,
  // date: undefined,
  // workouts: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
