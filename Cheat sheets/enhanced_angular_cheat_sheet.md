# Angular Comprehensive Cheat Sheet with Explanations

## Table of Contents
1. [Angular CLI](#angular-cli)
2. [Project Structure](#project-structure)
3. [Components](#components)
4. [Templates & Data Binding](#templates--data-binding)
5. [Directives](#directives)
6. [Services & Dependency Injection](#services--dependency-injection)
7. [Routing](#routing)
8. [Forms](#forms)
9. [HTTP Client](#http-client)
10. [Observables & RxJS](#observables--rxjs)
11. [Pipes](#pipes)
12. [Lifecycle Hooks](#lifecycle-hooks)
13. [Modules](#modules)
14. [Testing](#testing)
15. [Performance & Optimization](#performance--optimization)

---

## Angular CLI

**What it is:** Angular CLI is a command-line interface tool that helps you initialize, develop, scaffold, and maintain Angular applications. It automates many repetitive tasks and follows Angular best practices.

### Installation
```bash
npm install -g @angular/cli
```

### Common Commands
```bash
# Create new project
ng new my-app
ng new my-app --routing --style=scss

# Generate components, services, etc.
ng generate component my-component
ng g c my-component --skip-tests
ng g service my-service
ng g module my-module --routing
ng g directive my-directive
ng g pipe my-pipe
ng g guard my-guard
ng g interface my-interface
ng g class my-class

# Build & Serve
ng serve                    # Development server
ng serve --open            # Open browser automatically
ng serve --port 4200       # Custom port
ng build                   # Production build
ng build --prod            # Optimized production build
ng test                    # Run unit tests
ng e2e                     # Run end-to-end tests

# Add packages
ng add @angular/material
ng add @angular/pwa

# Update
ng update
ng update @angular/core @angular/cli
```

**How it works:** The CLI uses schematics (code generation templates) to create consistent file structures and boilerplate code. When you run `ng generate`, it creates files following Angular conventions and automatically updates module imports.

---

## Project Structure

**What it is:** Angular follows a specific folder structure that organizes your application into logical modules and components. This structure promotes maintainability and scalability.

```
src/
├── app/
│   ├── components/        # Reusable UI components
│   ├── services/         # Business logic and data services
│   ├── models/          # TypeScript interfaces and classes
│   ├── guards/          # Route protection logic
│   ├── pipes/           # Data transformation functions
│   ├── app.component.ts  # Root component
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.module.ts     # Root module - bootstraps the app
│   └── app-routing.module.ts # Main routing configuration
├── assets/              # Static files (images, fonts, etc.)
├── environments/        # Environment-specific configurations
├── index.html          # Main HTML file
├── main.ts            # Application entry point
├── styles.scss        # Global styles
└── polyfills.ts       # Browser compatibility shims
```

**How it works:** Angular uses a hierarchical structure where the root module (`app.module.ts`) bootstraps the entire application. Components are organized into feature modules, and services provide shared functionality across the app.

---

## Components

**What it is:** Components are the building blocks of Angular applications. Each component controls a part of the screen (called a view) and contains the logic to support that view.

### Component Decorator
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',        // HTML tag name
  templateUrl: './my-component.component.html',  // External template
  styleUrls: ['./my-component.component.scss'],  // Component-specific styles
  // Or inline
  template: `<h1>{{title}}</h1>`,     // Inline template
  styles: [`h1 { color: red; }`]      // Inline styles
})
export class MyComponent {
  title = 'Hello World';
  
  // Input property - receives data from parent
  @Input() data: string = '';
  
  // Output event - sends data to parent
  @Output() dataChange = new EventEmitter<string>();
  
  // Methods
  onClick() {
    this.dataChange.emit('new value');
  }
}
```

**How it works:** The `@Component` decorator tells Angular that this class is a component. The selector defines the HTML tag, template defines the view, and the class contains the component logic. Angular creates instances of components and manages their lifecycle.

### Component Communication
```typescript
// Parent to Child - Input
@Input() parentData: string; // Child receives data from parent

// Child to Parent - Output
@Output() childEvent = new EventEmitter<any>(); // Child sends events to parent

// ViewChild - Access child component
@ViewChild(ChildComponent) child!: ChildComponent; // Parent can call child methods

// ContentChild - Access projected content
@ContentChild(SomeDirective) content!: SomeDirective; // Access content passed via ng-content
```

**How it works:** Angular uses a unidirectional data flow. Data flows down through `@Input()` properties, and events flow up through `@Output()` EventEmitters. `@ViewChild` and `@ContentChild` provide direct access to child components or projected content.

---

## Templates & Data Binding

**What it is:** Templates are HTML with Angular markup that define how components should be rendered. Data binding connects the component's data and methods to the template.

### Interpolation
```html
<h1>{{title}}</h1>               <!-- String interpolation -->
<p>{{user.name}}</p>             <!-- Object property -->
<div>{{getTotal()}}</div>        <!-- Method call -->
```

**How it works:** Interpolation (`{{ }}`) evaluates expressions and converts them to strings. Angular updates the DOM automatically when the underlying data changes.

### Property Binding
```html
<img [src]="imageUrl" [alt]="imageAlt">          <!-- Attribute binding -->
<button [disabled]="isDisabled">Click me</button> <!-- Property binding -->
<div [class.active]="isActive">Content</div>     <!-- CSS class binding -->
<div [style.color]="textColor">Colored text</div> <!-- Style binding -->
```

**How it works:** Property binding (`[property]="expression"`) sets element properties dynamically. Angular evaluates the expression and updates the property when the expression's value changes.

### Event Binding
```html
<button (click)="onClick()">Click</button>                    <!-- Click event -->
<input (input)="onInput($event)" (keyup.enter)="onEnter()">  <!-- Input events -->
<form (submit)="onSubmit($event)">                           <!-- Form submission -->
```

**How it works:** Event binding (`(event)="handler()"`) listens to DOM events and calls component methods. The `$event` object contains information about the event.

### Two-Way Binding
```html
<input [(ngModel)]="username">
<!-- Equivalent to: -->
<input [ngModel]="username" (ngModelChange)="username = $event">
```

**How it works:** Two-way binding (`[(ngModel)]`) combines property binding and event binding. It updates the property when the input changes and updates the input when the property changes.

### Template Reference Variables
```html
<input #nameInput type="text">                    <!-- Template reference -->
<button (click)="onClick(nameInput.value)">Submit</button>  <!-- Use reference -->
```

**How it works:** Template reference variables (`#variableName`) create a reference to DOM elements or Angular components that can be used elsewhere in the template.

---

## Directives

**What it is:** Directives are classes that add additional behavior to elements in Angular templates. There are three types: components (directives with templates), structural directives (change DOM layout), and attribute directives (change element appearance/behavior).

### Structural Directives (Legacy Syntax)
```html
<!-- *ngIf - Conditionally includes/excludes element -->
<div *ngIf="isVisible">Visible content</div>
<div *ngIf="user; else noUser">Welcome {{user.name}}</div>
<ng-template #noUser>Please log in</ng-template>

<!-- *ngFor - Repeats element for each item -->
<li *ngFor="let item of items; let i = index; let first = first">
  {{i}}: {{item.name}}
</li>

<!-- *ngSwitch - Switches between multiple views -->
<div [ngSwitch]="status">
  <p *ngSwitchCase="'loading'">Loading...</p>
  <p *ngSwitchCase="'error'">Error occurred</p>
  <p *ngSwitchDefault>Default content</p>
</div>
```

### New Control Flow Syntax (Angular 17+)
```html
<!-- @if - Conditionally includes/excludes element -->
@if (isVisible) {
  <div>Visible content</div>
}

@if (user) {
  <div>Welcome {{user.name}}</div>
} @else {
  <div>Please log in</div>
}

<!-- @for - Repeats element for each item -->
@for (item of items; track item.id) {
  <li>{{$index}}: {{item.name}}</li>
} @empty {
  <li>No items found</li>
}

<!-- Available variables in @for -->
@for (item of items; track item.id) {
  <li>
    Index: {{$index}}        <!-- Current index -->
    Count: {{$count}}        <!-- Total count -->
    First: {{$first}}        <!-- Is first item -->
    Last: {{$last}}          <!-- Is last item -->
    Even: {{$even}}          <!-- Is even index -->
    Odd: {{$odd}}            <!-- Is odd index -->
    Item: {{item.name}}
  </li>
}

<!-- @switch - Switches between multiple views -->
@switch (status) {
  @case ('loading') {
    <p>Loading...</p>
  }
  @case ('error') {
    <p>Error occurred</p>
  }
  @case ('success') {
    <p>Data loaded successfully</p>
  }
  @default {
    <p>Default content</p>
  }
}
```

**How it works:** 
- **Legacy syntax:** Structural directives modify the DOM structure by adding or removing elements. The asterisk (`*`) is syntactic sugar that Angular transforms into `<ng-template>` elements.
- **New control flow:** Angular 17+ introduces a new block-based syntax that's more intuitive and performant. The `@if`, `@for`, and `@switch` blocks provide better type safety and developer experience.

**Key differences:**
- **@for requires track:** Unlike `*ngFor`, the `@for` block requires a `track` expression for better performance
- **@empty block:** The `@for` block supports an optional `@empty` block for when collections are empty
- **Better type safety:** The new syntax provides better TypeScript integration and error checking
- **Improved performance:** The new control flow syntax is optimized for better runtime performance

### Attribute Directives
```html
<!-- ngClass - Conditionally applies CSS classes -->
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
<div [ngClass]="cssClasses">

<!-- ngStyle - Conditionally applies inline styles -->
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">

<!-- Built-in directives -->
<form #myForm="ngForm">
<input [(ngModel)]="name" name="name" required>
```

**How it works:** Attribute directives change the appearance or behavior of existing elements without changing the DOM structure.

### Custom Directive
```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // Attribute selector
})
export class HighlightDirective {
  @Input() appHighlight = ''; // Input property

  constructor(private el: ElementRef) {} // Inject element reference

  @HostListener('mouseenter') onMouseEnter() {  // Listen to host events
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

**How it works:** Custom directives use the `@Directive` decorator. `ElementRef` provides access to the host element, and `@HostListener` listens to events on the host element.

### Migration Notes
- Both syntaxes can coexist in the same application during migration
- The new control flow syntax is the recommended approach for new projects
- Existing `*ngIf`, `*ngFor`, and `*ngSwitch` will continue to work but consider migrating for better performance and developer experience
- Angular provides automated migration tools to help convert from the legacy syntax to the new control flow syntax

---

## Services & Dependency Injection

**What it is:** Services are classes that encapsulate business logic, data access, or other functionality that can be shared across components. Dependency Injection is Angular's system for providing services to components that need them.

### Service Creation
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Makes service a singleton across the entire app
})
export class DataService {
  constructor(private http: HttpClient) {} // Dependency injection

  getData() {
    return this.http.get<any[]>('/api/data');
  }
}
```

**How it works:** The `@Injectable` decorator marks a class as available for dependency injection. `providedIn: 'root'` makes it a singleton. Angular's injector creates and manages service instances.

### Injection
```typescript
// In component
constructor(private dataService: DataService) {} // Service injected automatically

// Multiple injection tokens
constructor(
  private dataService: DataService,
  private router: Router,
  @Inject(API_URL) private apiUrl: string // Custom injection token
) {}
```

**How it works:** Angular's dependency injector analyzes constructor parameters and provides the required services automatically. Custom tokens can be used for configuration values.

### Providers
```typescript
// In module
providers: [
  DataService,  // Class provider
  { provide: API_URL, useValue: 'https://api.example.com' },  // Value provider
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Multi-provider
]

// In component (component-level provider)
@Component({
  //...
  providers: [DataService] // Creates new instance for this component tree
})
```

**How it works:** Providers tell Angular how to create services. Different provider types (class, value, factory) serve different purposes. Component-level providers create separate instances.

---

## Routing

**What it is:** Angular Router enables navigation between different views/components in a single-page application. It maps URL paths to components and manages the browser's history.

### Route Configuration
```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },    // Default redirect
  { path: 'home', component: HomeComponent },              // Simple route
  { path: 'users/:id', component: UserComponent },         // Route with parameter
  { path: 'users/:id/profile', component: ProfileComponent }, // Nested route
  
  // Lazy loading - loads module only when route is accessed
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard] // Route guard
  },
  
  // Wildcard route - must be last
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure router at root level
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**How it works:** Routes map URL segments to components. The router evaluates routes in order and renders the first match. Lazy loading splits the app into chunks loaded on demand.

### Router Navigation
```typescript
import { Router, ActivatedRoute } from '@angular/router';

constructor(
  private router: Router,        // For navigation
  private route: ActivatedRoute  // For reading route info
) {}

// Programmatic navigation
this.router.navigate(['/users', userId]);                    // Absolute navigation
this.router.navigate(['../sibling'], { relativeTo: this.route }); // Relative navigation
this.router.navigateByUrl('/users/123');                    // URL-based navigation

// Get route parameters
this.route.params.subscribe(params => {
  const id = params['id']; // Read route parameter
});

// Get query parameters
this.route.queryParams.subscribe(params => {
  const search = params['search']; // Read query parameter
});
```

**How it works:** Router service handles navigation, while ActivatedRoute provides information about the active route. Route parameters and query parameters are observables that emit when the route changes.

### Template Router Links
```html
<a routerLink="/home">Home</a>                              <!-- Static link -->
<a [routerLink]="['/users', user.id]">User Profile</a>     <!-- Dynamic link -->
<a routerLink="/users" [queryParams]="{search: 'john'}">Search Users</a> <!-- With query params -->

<!-- Router outlet - where routed components are displayed -->
<router-outlet></router-outlet>

<!-- Active link styling -->
<a routerLink="/home" routerLinkActive="active">Home</a>    <!-- Adds 'active' class when route is active -->
```

**How it works:** `routerLink` creates navigation links without page refresh. `router-outlet` is where the router displays the component for the current route. `routerLinkActive` adds CSS classes to active links.

### Route Guards
```typescript
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    // Check if user can access this route
    return this.authService.isAuthenticated();
  }
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {
    // Check if user can leave this route (e.g., unsaved changes)
    return component.canDeactivate();
  }
}
```

**How it works:** Route guards are services that control access to routes. They return true/false or observables/promises that resolve to boolean values. Different guard types control different aspects of navigation.

---

## Forms

**What it is:** Angular provides two approaches for handling forms: Template-driven forms (easier, template-heavy) and Reactive forms (more powerful, component-heavy). Both provide validation, data binding, and form state management.

### Template-Driven Forms
```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <input 
    name="username"              <!-- Name attribute required -->
    [(ngModel)]="user.username"  <!-- Two-way data binding -->
    required                     <!-- HTML5 validation -->
    minlength="3"               <!-- Custom validation -->
    #username="ngModel">        <!-- Template reference to form control -->
  
  <!-- Display validation errors -->
  <div *ngIf="username.invalid && username.touched">
    <small *ngIf="username.errors?.['required']">Username required</small>
    <small *ngIf="username.errors?.['minlength']">Min 3 characters</small>
  </div>
  
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

**How it works:** Template-driven forms use directives like `ngModel` and `ngForm`. Angular automatically creates form controls based on template directives. Form state and validation are managed in the template.

### Reactive Forms
```typescript
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

export class UserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]], // Control with validators
      email: ['', [Validators.required, Validators.email]],
      profile: this.fb.group({  // Nested form group
        firstName: [''],
        lastName: ['']
      }),
      hobbies: this.fb.array([]) // Dynamic form array
    });
  }

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
```

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <input formControlName="username">              <!-- Form control binding -->
  
  <div formGroupName="profile">                   <!-- Nested form group -->
    <input formControlName="firstName" placeholder="First Name">
    <input formControlName="lastName" placeholder="Last Name">
  </div>
  
  <div formArrayName="hobbies">                   <!-- Form array -->
    <div *ngFor="let hobby of hobbies.controls; let i = index">
      <input [formControlName]="i">
    </div>
  </div>
  
  <button type="button" (click)="addHobby()">Add Hobby</button>
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

**How it works:** Reactive forms define the form structure in the component class using FormBuilder. The template uses directives to bind to the form model. This approach provides more control and is better for complex forms.

### Custom Validators
```typescript
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isValid = /* your validation logic */;
    return isValid ? null : {'customError': {value: control.value}};
  };
}

// Usage
this.userForm = this.fb.group({
  username: ['', [Validators.required, customValidator()]]
});
```

**How it works:** Custom validators are functions that return null for valid values or an error object for invalid values. They can be synchronous or asynchronous (return observables/promises).

---

## HTTP Client

**What it is:** Angular's HTTP client is a service for making HTTP requests to backend APIs. It's built on RxJS observables and provides features like interceptors, error handling, and request/response transformation.

### Setup
```typescript
// app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule] // Import HTTP client module
})
```

**How it works:** HttpClientModule provides the HttpClient service and related functionality. It must be imported in your app module or feature module.

### Service Implementation
```typescript
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  // GET request - retrieve data
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  // GET with parameters
  getUserById(id: number): Observable<User> {
    const params = new HttpParams().set('include', 'profile');
    return this.http.get<User>(`${this.baseUrl}/users/${id}`, { params });
  }

  // POST request - create data
  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(`${this.baseUrl}/users`, user, { headers });
  }

  // PUT request - update data
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${id}`, user);
  }

  // DELETE request - remove data
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    throw error;
  }
}
```

**How it works:** HttpClient methods return observables that emit the response data. You can configure headers, parameters, and other options. The generic type parameter (`<User[]>`) provides type safety.

### HTTP Interceptors
```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.getAuthToken();
    // Clone the request and add authorization header
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next.handle(authReq); // Pass to next interceptor or HTTP backend
  }
}

// Register in module
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
```

**How it works:** Interceptors sit between your application and the backend. They can modify outgoing requests and incoming responses. Multiple interceptors form a chain, each calling `next.handle()` to continue.

---

## Observables & RxJS

**What it is:** Observables are a way to handle asynchronous data streams. RxJS (Reactive Extensions for JavaScript) provides operators to work with observables for complex async operations.

### Common Operators
```typescript
import { Observable, of, from } from 'rxjs';
import { map, filter, catchError, switchMap, mergeMap, debounceTime } from 'rxjs/operators';

// Basic usage - transform and handle errors
this.dataService.getUsers()
  .pipe(
    map(users => users.filter(user => user.active)), // Transform data
    catchError(error => of([])) // Handle errors by returning empty array
  )
  .subscribe(users => {
    this.users = users;
  });

// Chaining operators - search with debounce
this.searchControl.valueChanges
  .pipe(
    debounceTime(300),    // Wait 300ms after user stops typing
    switchMap(term => this.searchService.search(term)) // Cancel previous, start new search
  )
  .subscribe(results => {
    this.searchResults = results;
  });
```

**How it works:** Observables emit values over time. Operators transform these values in a pipeline using the `pipe()` method. Each operator returns a new observable, allowing you to chain operations.

### Subject Types
```typescript
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// Subject - no initial value, only emits to current subscribers
private messageSubject = new Subject<string>();

// BehaviorSubject - has initial value, new subscribers get current value
private userSubject = new BehaviorSubject<User | null>(null);

// ReplaySubject - replays N previous values to new subscribers
private historySubject = new ReplaySubject<string>(3);

// AsyncSubject - only emits the last value when complete
private finalSubject = new AsyncSubject<string>();
```

**How it works:** Subjects are observables that can also act as observers (they can emit values). Different subject types have different behaviors for handling subscribers and previous values.

---

## Pipes

**What it is:** Pipes are functions that transform displayed values in templates. They take input data and return formatted output, like formatting dates or currencies.

### Built-in Pipes
```html
<!-- String pipes -->
{{ text | uppercase }}          <!-- HELLO WORLD -->
{{ text | lowercase }}          <!-- hello world -->
{{ text | titlecase }}         <!-- Hello World -->

<!-- Number pipes -->
{{ number | number:'1.2-3' }}           <!-- Format: minimum.minimum-maximum digits -->
{{ price | currency:'USD':'symbol':'1.2-2' }}  <!-- $123.45 -->
{{ percentage | percent }}               <!-- 45% -->

<!-- Date pipes -->
{{ date | date:'short' }}       <!-- 1/1/23, 12:00 PM -->
{{ date | date:'yyyy-MM-dd' }}  <!-- 2023-01-01 -->
{{ date | date:'fullDate' }}    <!-- Sunday, January 1, 2023 -->

<!-- Other pipes -->
{{ data | json }}               <!-- Pretty-print JSON -->
{{ items | slice:1:5 }}        <!-- Array slice -->
{{ text | slice:0:100 }}       <!-- String slice -->

<!-- Async pipe - automatically subscribes/unsubscribes -->
{{ observable$ | async }}
{{ promise | async }}
```

**How it works:** Pipes use the `|` symbol in templates. They're pure functions that take a value and parameters, returning a transformed value. Angular updates the display when input values change.

### Custom Pipe
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true // Default - pipe is pure (no side effects)
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50, trail: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

// Usage
{{ longText | truncate:100:'...' }}
```

**How it works:** Custom pipes implement `PipeTransform` interface. Pure pipes are cached and only re-run when inputs change. Impure pipes run on every change detection cycle.

---

## Lifecycle Hooks

**What it is:** Lifecycle hooks are methods that Angular calls at specific moments in a component's lifecycle, from creation to destruction. They allow you to tap into key moments and perform custom logic.

```typescript
import { 
  OnInit, OnDestroy, OnChanges, 
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked,
  SimpleChanges 
} from '@angular/core';

export class MyComponent implements OnInit, OnDestroy, OnChanges {
  
  // Called once after component initialization and first ngOnChanges
  ngOnInit() {
    console.log('Component initialized');
    // Initialize data, set up subscriptions
  }

  // Called when input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log('Input properties changed', changes);
    // React to input property changes
  }

  // Called after view initialization (after first ngAfterContentChecked)
  ngAfterViewInit() {
    console.log('View initialized');
    // Access ViewChild elements, initialize third-party libraries
  }

  // Called before component destruction
  ngOnDestroy() {
    console.log('Component destroyed');
    // Clean up subscriptions, intervals, event listeners
  }
}
```

**How it works:** Angular calls these methods automatically during the component lifecycle. The order is: constructor → ngOnChanges → ngOnInit → ngAfterContentInit → ngAfterViewInit → ngOnDestroy (when component is removed).

---

## Modules

**What it is:** Modules are containers that group related components, services, directives, and pipes. They help organize the application and enable features like lazy loading.

### Feature Module
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [    // Components, directives, pipes that belong to this module
    FeatureComponent,
    FeatureDirective,
    FeaturePipe
  ],
  imports: [        // Other modules this module depends on
    CommonModule,    // Provides ngIf, ngFor, etc.
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule
  ],
  providers: [      // Services available to this module
    FeatureService
  ],
  exports: [        // Components/directives/pipes available to importing modules
    FeatureComponent
  ]
})
export class FeatureModule { }
```

**How it works:** Modules define compilation contexts. Declarations are compiled together, imports bring in external functionality, providers define available services, and exports make declarations available to other modules.

### Shared Module
```typescript
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SharedComponent,
    SharedDirective,
    SharedPipe
  ],
  exports: [        // Re-export imported modules and own declarations
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponent,
    SharedDirective,
    SharedPipe
  ]
})
export class SharedModule { }
```

**How it works:** Shared modules consolidate commonly used functionality. They re-export both their own declarations and imported modules, making them available to any module that imports the shared module.

---

## Testing

**What it is:** Angular provides tools for unit testing (testing individual components/services) and integration testing. Tests ensure your code works correctly and prevent regressions.

### Component Testing
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent],  // Components to test
      imports: [FormsModule],       // Required modules
      providers: [MyService]        // Required services
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // Update the DOM
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain('Test Title');
  });
});
```

**How it works:** TestBed creates a testing module that mimics your app module. ComponentFixture wraps the component and provides methods to interact with it. `detectChanges()` triggers Angular's change detection to update the DOM.

### Service Testing
```typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Mock HTTP client
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    // Expect HTTP request and provide mock response
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers); // Provide mock data
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });
});
```

**How it works:** HttpClientTestingModule provides HttpTestingController to mock HTTP requests. You can verify that correct requests are made and provide mock responses for testing.

---

## Performance & Optimization

**What it is:** Angular provides several strategies to optimize application performance, including change detection optimization, lazy loading, and efficient rendering techniques.

### Change Detection Strategy
```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush, // Only check when inputs change or events occur
  template: `...`
})
export class OptimizedComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  updateData() {
    // Manually trigger change detection when needed
    this.cdr.detectChanges();
  }
}
```

**How it works:** OnPush strategy reduces change detection cycles by only checking the component when its inputs change, events occur, or you manually trigger detection. This significantly improves performance for large component trees.

### TrackBy Functions
```typescript
// Component
trackByFn(index: number, item: any) {
  return item.id; // Use unique identifier instead of object reference
}

// Template
<li *ngFor="let item of items; trackBy: trackByFn">
  {{item.name}}
</li>
```

**How it works:** TrackBy functions help Angular identify which items in a list have changed. Without trackBy, Angular re-renders all items when the array changes. With trackBy, it only updates changed items.

### Lazy Loading
```typescript
// Lazy load modules - code splitting
const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];
```

**How it works:** Lazy loading splits your application into chunks that are loaded only when needed. This reduces initial bundle size and improves startup performance.

### OnPush Optimization
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {
  @Input() data: any; // Use immutable data structures
  
  // Use observables with async pipe for reactive data
  data$ = this.dataService.getData();
}
```

**How it works:** OnPush components work best with immutable data and observables. The async pipe automatically triggers change detection when observables emit new values.

---

## Best Practices

### Code Organization
- **Use feature modules:** Group related functionality into separate modules for better organization and lazy loading
- **Implement lazy loading:** Load feature modules only when needed to reduce initial bundle size
- **Create shared modules:** Consolidate common components, directives, and pipes into shared modules
- **Use barrel exports (index.ts files):** Simplify imports by re-exporting from a single file

### Performance
- **Use OnPush change detection strategy:** Reduces unnecessary change detection cycles
- **Implement trackBy functions for ngFor:** Helps Angular efficiently update lists
- **Unsubscribe from observables in ngOnDestroy:** Prevents memory leaks
- **Use async pipe for observables in templates:** Automatically handles subscription/unsubscription

### Security
- **Sanitize user inputs:** Angular sanitizes by default, but be careful with innerHTML and bypassSecurityTrust methods
- **Use HTTPS:** Always use secure connections in production
- **Implement proper authentication:** Use tokens, guards, and secure storage
- **Validate data on both client and server:** Never trust client-side validation alone

### Development
- **Use TypeScript strictly:** Enable strict mode for better type safety
- **Follow Angular style guide:** Consistent code style improves maintainability
- **Write unit tests:** Ensure code quality and prevent regressions
- **Use linting tools (ESLint, Prettier):** Maintain code quality and consistency
- **Use environment files for configuration:** Separate development and production settings

---

## Common Patterns

### Unsubscribe Pattern
```typescript
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class MyComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$)) // Automatically unsubscribe when destroy$ emits
      .subscribe(data => {
        // Handle data
      });
  }

  ngOnDestroy() {
    this.destroy$.next();    // Emit value to trigger unsubscribe
    this.destroy$.complete(); // Complete the subject
  }
}
```

**How it works:** This pattern uses a subject that emits when the component is destroyed. `takeUntil` operator completes all subscriptions when the destroy subject emits, preventing memory leaks.

### Loading State Pattern
```typescript
export class MyComponent {
  loading = false;
  error: string | null = null;
  data: any[] = [];

  loadData() {
    this.loading = true;
    this.error = null;
    
    this.dataService.getData()
      .subscribe({
        next: (data) => {
          this.data = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load data';
          this.loading = false;
        }
      });
  }
}
```

**How it works:** This pattern manages loading states explicitly with boolean flags and error handling. It provides clear feedback to users about the application state and handles both success and error scenarios.

---

## Key Concepts Summary

**Angular Architecture:** Angular is built around components organized in modules, with services providing business logic and dependency injection managing dependencies.

**Data Flow:** Data flows down through inputs and up through outputs. Change detection keeps the view synchronized with the model.

**Reactive Programming:** Angular embraces reactive programming with RxJS observables for handling asynchronous operations.

**Modularity:** Features are organized into modules that can be lazy-loaded, improving performance and maintainability.

**Type Safety:** TypeScript provides compile-time type checking, reducing runtime errors and improving developer experience.

This comprehensive cheat sheet covers the essential Angular concepts with explanations of how each feature works. Keep it handy for quick reference during your Angular development!