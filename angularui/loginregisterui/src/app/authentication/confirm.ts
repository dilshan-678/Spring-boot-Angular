import {HttpClient, HttpContext, HttpResponse} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {RequestBuilder} from "../api/strict-http-response";
import {StrictHttpResponse} from "../api/request-builder";

export interface Confirm$Params {
  token: string;
}

export function confirm(http: HttpClient, rootUrl: string, params: Confirm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, confirm.PATH, 'get');
  if (params) {
    rb.query('token', params.token, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

confirm.PATH = '/auth/activate-account';
