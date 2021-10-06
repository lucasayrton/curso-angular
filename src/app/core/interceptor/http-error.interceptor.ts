import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1), // Tolerância a falhas, caso a requisição dê erro ele irá realizar ela novamente e na segunda falha entrar no código abaixo
      catchError((error: HttpErrorResponse) => {
        console.log('error: ', error);
        window.alert('erro');
        return throwError('erro');
      })
    );
  }
}
