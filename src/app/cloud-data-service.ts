import { inject, Injectable } from '@angular/core';
import { CloudData } from './model/CloudData';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudDataService {

  private cacheData: CloudData | null = null;
  private readonly http = inject(HttpClient);

  getCloudData(): Observable<CloudData> {
    if (this.cacheData) {
      return of(this.cacheData);
    }

    return this.http.get<CloudData>(environment.postsDb).pipe(
      tap(data => this.cacheData = data)
    );
  }
}
