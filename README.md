# Assignment Details

This is a web client that initially displays a list of persons from a mock address book. 

The user should be able to select a person from the list in order to see more details about that person.

Data for the assignment comes from the public API: https://randomuser.me/ (Documentation can be found at
https://randomuser.me/documentation).

# Features

* Address Book
    * Contact List
    * Contact Details

* Global Search

* Tech Impementation
    * Responsive Design
    * Side Sheet Portal
    * Infinite Scroll for Contact List

# Implementation Details

The application has 1 main route that is navigated to on app load

Application state is managed through a redux approach `state -> view/component -> action dispatch -> reducer updates state -> state changes are published`

![alt text](https://blog.openreplay.com/static/860c432725aeefb9c5b68be40a6acf69/d3b1c/img2.png)

I did not use ngrx

For each piece of the redux flow there is a class archetype found in the solution:

- "State" - States are POTSO's. Ex: `address-book.state.ts`
- "Reducer" - Reducers are wrapped into Injectable services. Ex: `address-book.state-service.ts`. These state services consume actions through a single `dispatch` function, modify state, and publish state updates to any subscribers.
- "View" - Views are the "smart" components of the application. These smart components are generally but not strictly the main `app.component.ts` or any component
loaded via route. These smart components inject and use the `~.state-service.ts` classes and listen for state updates. Other "non-smart/dumb" components' states are managed through Angular `@Inputs` and `@Outputs`.
- "Action" - Actions in this application are any class that implement the plain `action.interface.ts` interface. Carries intent and payload information to state services to be acted upon.

# Future Improvements

* Better state management of async observables
* Map route to display contact locations
* Menu for page navigation
* Loading Indicators
* Error handling
* Create/Edit/Remove Contacts
* Share Contacts

# Implementation Details

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
