To Start this project dev should have
- node environment.
- Angular CLI
- GIT

Steps to run project
1. Clone the project URL: run command git clone https://github.com/palashbhatnagar94/SpaceX.git
2. Go inside project folder: cd SpaceX
3. Install dependencies: npm install
4. Start server: ng serve.

Approach Used :- 
MVVM Approach is used: Model is created and mapped with response which
is used to creat view on HTML.

App Component :-
    - Dashboard Component :- 
        -> Filter Component: Apply filter and pass them to dashboard to call Program Service.
        -> Cards Component: Take program list from parent and show them as cards having program details.

    - Program Service: Service used to fetch program list with or without filters.

    - Program.model.ts: Model designed to map response from api. 

# Sapient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build which is deployed on URL: https://spacex-demo-7fca5.web.app/ . 