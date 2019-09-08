import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private reservationUrl = environment.baseUrl + 'reservations/';

  constructor(public httpClient: HttpClient) { }

  getUserReservations() {
    return this.httpClient.get<any[]>(this.reservationUrl, {
      observe: 'response',
      headers: new HttpHeaders({'Authorization': sessionStorage.getItem('Authorization')})
    });
  }

  getAllUsersReservations(data) {
    const usersRVTurl = this.reservationUrl + data;
    return this.httpClient.get<any[]>(usersRVTurl, {
      observe: 'response',
      headers: new HttpHeaders({'Authorization': sessionStorage.getItem('Authorization')})
    });
  }

  setReservation(courtid, rsvdatetime) {
    const data = {
      'courtid': courtid,
      'rsvdatetime': rsvdatetime,
    };

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', sessionStorage.getItem('Authorization'));

    return this.httpClient.post(this.reservationUrl, data, {
      headers: headers,
    });
  }

  deleteReservation(id) {
    const deleteRsvUrl = this.reservationUrl + id;
    return this.httpClient.delete(deleteRsvUrl, {
      observe: 'response',
      headers: new HttpHeaders({'Authorization': sessionStorage.getItem('Authorization')})
    });
  }
}
