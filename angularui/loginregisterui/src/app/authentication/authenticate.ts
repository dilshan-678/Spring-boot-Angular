import {RequestBuilder} from "../api/strict-http-response";
import {HttpClient, HttpContext, HttpResponse} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {StrictHttpResponse} from "../api/request-builder";
import {AuthenticationRequest} from "../model/authentication-request";
import {AuthenticationResponse} from "../model/authentication-response";

export interface Authenticate$Params{

  body:AuthenticationRequest
}


export function authenticate(http: HttpClient, rootUrl: string, params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
  const rb = new RequestBuilder(rootUrl, authenticate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthenticationResponse>;
    })
  );
}
authenticate.PATH = '/auth/authenticate';
