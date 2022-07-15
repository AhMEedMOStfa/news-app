var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","component":"HomeComponent"},{"path":"politics","component":"PoliticsComponent","canActivate":["AuthenticationGuard"]},{"path":"sports","component":"SportsComponent","canActivate":["AuthenticationGuard"]},{"path":"technology","component":"TechnologyComponent","canActivate":["AuthenticationGuard"]},{"path":"business","component":"BusinessComponent","canActivate":["AuthenticationGuard"]},{"path":"world","component":"WorldComponent"},{"path":"home/:category/:country","component":"CountryNewsComponent"},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","component":"LoginComponent"},{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegisterComponent"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"reading","component":"ReadingComponent","canActivate":["AuthenticationGuard"]},{"path":"**","component":"NotFoundComponent"}],"kind":"module"}]}