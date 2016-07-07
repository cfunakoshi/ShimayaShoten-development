///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { provide } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeService } from "./home/home.service";
import { ContentService } from "./content/content.service";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";

bootstrap(AppComponent, [HomeService, ContentService, AuthService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);