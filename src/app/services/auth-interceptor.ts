import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authSerive: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        if (req.url.includes('/api/user/login')) {
            return next.handle(req);
        }
        const authToken = this.authSerive.getToken();
        console.log("reached", authToken)
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        })
        console.log(authRequest, "Request")
        return next.handle(authRequest);
    }
}