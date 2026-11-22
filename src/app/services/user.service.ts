import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiurl = 'http://localhost:5000/user';

  constructor(private https: HttpClient) {}

  getUsers(): Observable<any> {
    return this.https.get(this.apiurl);
  }

  reigster(user: any): Observable<any> {
    return this.https.post(this.apiurl, user);
  }

  updateuser(user: any): Observable<any> {
    const url = `${this.apiurl}/${user.id}`;
    return this.https.put(url, user);
  }

  deleteuser(id: any): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.https.delete(url);
  }
}

// httpclient
