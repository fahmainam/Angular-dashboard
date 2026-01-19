import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, shareReplay } from 'rxjs';


@Component({
  selector: 'app-user-list',
template: `
<div class="row mb-4">
  <!-- <div class="col-md-3">
    <ul *ngIf="users.length; else empty">
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    <ng-template #empty>
      <p>No users found</p>
    </ng-template>
  </div>
  <div class="col-md-3">
    <input [(ngModel)]="name" />
    <p>Hello {{ name }}</p>
  </div>
  <div class="col-md-3">
    <p>form validation</p>
    <input formControlName="email">
    <div *ngIf="form.controls.email.invalid">
      Invalid email
    </div>
    <input formControlName="password">
    <div *ngIf="form.controls.password.invalid">
      Invalid password
    </div>
  </div> -->
  <div class="col-md-3">
    <ul *ngIf="(users$ | async)?.length; else noUsers">
      <li *ngFor="let user of users$ | async">
        {{ user.name }}
      </li>
    </ul>
    <ng-template #noUsers>
      <p>No API users found</p>
    </ng-template>
  </div>
</div>
`,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule]
  
})
export class UserListComponent {

  // users: string[] = ['Ali', 'John', 'Sara'];


  // name: string = '';


  // form = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required),
  // });



  users$: Observable<User[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(shareReplay(1));
  }
}

interface User {
  name: string;

 

}
