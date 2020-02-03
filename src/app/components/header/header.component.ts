import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  ngOnInit(): void {}

  logoutUser() {
    this.logout.emit();
  }
}
