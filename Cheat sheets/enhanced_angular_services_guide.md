# Angular Services Reference Guide for Fullstack Developers

## Core HTTP Services

### 1. HttpClient
**Purpose**: Provides a simplified API for HTTP communication with backend services. It replaced the older Http service and offers better type safety, interceptors, and observables. **Use this service when you need to communicate with REST APIs, fetch data from external services, send form data to servers, upload files, or integrate with any backend system.**

• **get()**: Performs HTTP GET request to retrieve data from server
  - **Use this method when**: You need to fetch user profiles, load product catalogs, retrieve dashboard data, get configuration settings, fetch search results, or pull any read-only data from your backend
  - Parameters: `url: string`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.get<User[]>('/api/users')`

• **post()**: Performs HTTP POST request to send data to server
  - **Use this method when**: You need to create new user accounts, submit contact forms, save new blog posts, register users, send login credentials, create new records, or submit any form data that creates new resources
  - Parameters: `url: string`, `body: any`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.post<User>('/api/users', userData)`

• **put()**: Performs HTTP PUT request to update existing resource
  - **Use this method when**: You need to update user profiles completely, replace entire documents, update product information, modify settings, or perform full resource replacement operations
  - Parameters: `url: string`, `body: any`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.put<User>('/api/users/1', updatedUser)`

• **delete()**: Performs HTTP DELETE request to remove resource
  - **Use this method when**: You need to delete user accounts, remove blog posts, cancel orders, delete uploaded files, remove items from catalogs, or permanently remove any resources from your system
  - Parameters: `url: string`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.delete('/api/users/1')`

• **patch()**: Performs HTTP PATCH request for partial updates
  - **Use this method when**: You need to update only specific fields like changing a user's email, updating a status flag, modifying a single property, or making small incremental changes without replacing the entire resource
  - Parameters: `url: string`, `body: any`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.patch('/api/users/1', { name: 'New Name' })`

• **request()**: Generic method for any HTTP request
  - **Use this method when**: You need custom HTTP methods, want to handle complex request configurations, need fine-grained control over the request, or are working with non-standard REST APIs that require specific HTTP verbs
  - Parameters: `method: string`, `url: string`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.request('GET', '/api/users')`

### 2. HttpHeaders
**Purpose**: Creates and manipulates HTTP headers for requests. Essential for setting content types, authorization tokens, and custom headers. **Use this service when you need to authenticate API requests, set content types for file uploads, add custom headers for tracking, implement CORS handling, or communicate specific metadata to your backend.**

• **set()**: Sets a header value
  - **Use this method when**: You need to add authentication tokens, set content types for JSON/XML data, add API keys, set custom headers for tracking user sessions, or replace existing header values completely
  - Parameters: `name: string`, `value: string`
  - Returns: `HttpHeaders`
  - Example: `headers.set('Content-Type', 'application/json')`

• **append()**: Adds a new value to existing header
  - **Use this method when**: You need to add multiple values to the same header (like Accept types), append additional authentication methods, or add supplementary header information without replacing existing values
  - Parameters: `name: string`, `value: string`
  - Returns: `HttpHeaders`
  - Example: `headers.append('Accept', 'text/plain')`

• **delete()**: Removes a header
  - **Use this method when**: You need to remove sensitive information before logging requests, clear authentication headers for public endpoints, remove debugging headers in production, or clean up headers before caching
  - Parameters: `name: string`
  - Returns: `HttpHeaders`
  - Example: `headers.delete('Authorization')`

• **get()**: Retrieves header value
  - **Use this method when**: You need to check if authentication tokens exist, validate content types in responses, read custom headers from the server, debug header issues, or implement conditional logic based on header values
  - Parameters: `name: string`
  - Returns: `string | null`
  - Example: `const token = headers.get('Authorization')`

• **has()**: Checks if header exists
  - **Use this method when**: You need to verify authentication headers are present before making requests, check if required headers exist, implement conditional header logic, or validate request configurations
  - Parameters: `name: string`
  - Returns: `boolean`
  - Example: `if (headers.has('Content-Type'))`

### 3. HttpParams
**Purpose**: Constructs URL query parameters in a type-safe way. Handles encoding and formatting of query strings. **Use this service when you need to implement search functionality, pagination, filtering, sorting, passing configuration options to APIs, or building complex query strings for data retrieval.**

• **set()**: Sets a parameter value
  - **Use this method when**: You need to set pagination page numbers, define search terms, set filter criteria, specify sort orders, or replace existing parameter values in API calls
  - Parameters: `param: string`, `value: string`
  - Returns: `HttpParams`
  - Example: `params.set('page', '1')`

• **append()**: Adds parameter value to existing parameter
  - **Use this method when**: You need to add multiple filter values (like tags or categories), append additional search terms, add multiple sort criteria, or build complex query parameters with multiple values
  - Parameters: `param: string`, `value: string`
  - Returns: `HttpParams`
  - Example: `params.append('tags', 'angular')`

• **delete()**: Removes a parameter
  - **Use this method when**: You need to remove filter criteria, clear search terms, reset pagination parameters, or clean up URL parameters for cleaner URLs
  - Parameters: `param: string`
  - Returns: `HttpParams`
  - Example: `params.delete('filter')`

• **get()**: Gets parameter value
  - **Use this method when**: You need to read current page numbers, check active filters, validate search terms, or debug query parameter issues in your application
  - Parameters: `param: string`
  - Returns: `string | null`
  - Example: `const page = params.get('page')`

• **toString()**: Converts to query string
  - **Use this method when**: You need to manually construct URLs, debug query parameters, log request URLs, cache URL strings, or integrate with non-Angular HTTP libraries
  - Parameters: None
  - Returns: `string`
  - Example: `const queryString = params.toString()`

## Routing Services

### 4. Router
**Purpose**: Provides navigation and URL manipulation capabilities. Core service for single-page application routing and programmatic navigation. **Use this service when you need to navigate between pages after form submissions, redirect users after authentication, navigate based on user permissions, implement breadcrumb navigation, or handle deep linking in your application.**

• **navigate()**: Navigates to a route using an array of route segments
  - **Use this method when**: You need to navigate to user detail pages with IDs, go to specific product pages, navigate after successful form submissions, implement programmatic navigation based on user actions, or redirect users after authentication
  - Parameters: `commands: any[]`, `extras?: NavigationExtras`
  - Returns: `Promise<boolean>`
  - Example: `this.router.navigate(['/users', userId])`

• **navigateByUrl()**: Navigates using absolute URL
  - **Use this method when**: You need to redirect to external routes, navigate to absolute paths, handle deep links, redirect after logout, or navigate to completely different sections of your application
  - Parameters: `url: string`, `extras?: NavigationExtras`
  - Returns: `Promise<boolean>`
  - Example: `this.router.navigateByUrl('/dashboard')`

• **createUrlTree()**: Creates URL tree from route segments
  - **Use this method when**: You need to build URLs for href attributes, generate shareable links, create navigation URLs programmatically, or construct complex URLs with query parameters and fragments
  - Parameters: `commands: any[]`, `extras?: NavigationExtras`
  - Returns: `UrlTree`
  - Example: `const urlTree = this.router.createUrlTree(['/users'])`

• **serializeUrl()**: Converts URL tree to string
  - **Use this method when**: You need to generate shareable URLs, create bookmark links, log navigation URLs, send URLs via email, or integrate with external URL management systems
  - Parameters: `url: UrlTree`
  - Returns: `string`
  - Example: `const url = this.router.serializeUrl(urlTree)`

• **parseUrl()**: Parses URL string into URL tree
  - **Use this method when**: You need to analyze incoming URLs, validate route structures, extract route parameters from URLs, implement custom route handling, or debug routing issues
  - Parameters: `url: string`
  - Returns: `UrlTree`
  - Example: `const tree = this.router.parseUrl('/users/123')`

### 5. ActivatedRoute
**Purpose**: Provides information about the active route, including parameters, query parameters, and route data. Essential for component initialization based on route. **Use this service when you need to load data based on URL parameters, implement search functionality with query parameters, handle route-specific data, or build components that respond to URL changes.**

• **paramMap**: Observable of route parameters
  - **Use this property when**: You need to load user profiles based on user ID in URL, display product details based on product ID, implement edit forms with record IDs, or handle any route-specific data loading
  - Parameters: None (property)
  - Returns: `Observable<ParamMap>`
  - Example: `this.route.paramMap.subscribe(params => params.get('id'))`

• **queryParamMap**: Observable of query parameters
  - **Use this property when**: You need to implement search functionality, handle pagination parameters, manage filter states, track analytics parameters, or maintain application state through URL query parameters
  - Parameters: None (property)
  - Returns: `Observable<ParamMap>`
  - Example: `this.route.queryParamMap.subscribe(params => params.get('search'))`

• **data**: Observable of route data
  - **Use this property when**: You need to access pre-loaded data from route resolvers, handle static route configuration data, implement role-based content display, or use data passed through route definitions
  - Parameters: None (property)
  - Returns: `Observable<Data>`
  - Example: `this.route.data.subscribe(data => data.user)`

• **url**: Observable of URL segments
  - **Use this property when**: You need to implement breadcrumb navigation, track current page analytics, build dynamic navigation menus, or handle complex nested routing scenarios
  - Parameters: None (property)
  - Returns: `Observable<UrlSegment[]>`
  - Example: `this.route.url.subscribe(segments => segments[0].path)`

• **fragment**: Observable of URL fragment
  - **Use this property when**: You need to scroll to specific page sections, handle anchor navigation, implement single-page documentation with sections, or manage in-page navigation features
  - Parameters: None (property)
  - Returns: `Observable<string>`
  - Example: `this.route.fragment.subscribe(fragment => fragment)`

### 6. Location
**Purpose**: Provides interaction with browser's URL and history. Allows manipulation of browser history without full page reloads. **Use this service when you need to implement custom back buttons, manage browser history in single-page apps, handle URL changes without navigation, or build wizard-like interfaces with history management.**

• **back()**: Navigates back in browser history
  - **Use this method when**: You need to implement custom back buttons, cancel operations and return to previous pages, provide navigation in modal dialogs, or handle form cancellation with proper history management
  - Parameters: None
  - Returns: `void`
  - Example: `this.location.back()`

• **forward()**: Navigates forward in browser history
  - **Use this method when**: You need to implement custom forward buttons, restore user navigation after going back, build custom navigation controls, or handle complex navigation flows
  - Parameters: None
  - Returns: `void`
  - Example: `this.location.forward()`

• **go()**: Navigates to specific position in history
  - **Use this method when**: You need to jump multiple steps back in navigation, implement breadcrumb navigation that skips intermediate steps, or handle complex wizard navigation with history jumping
  - Parameters: `relativePosition: number`
  - Returns: `void`
  - Example: `this.location.go(-2)`

• **replaceState()**: Replaces current state in history
  - **Use this method when**: You need to update URLs without adding history entries, clean up temporary URL parameters, implement stepper interfaces, or prevent back button issues in workflows
  - Parameters: `path: string`, `query?: string`, `state?: any`
  - Returns: `void`
  - Example: `this.location.replaceState('/new-path')`

• **path()**: Gets current path
  - **Use this method when**: You need to implement analytics tracking, validate current routes, build dynamic navigation logic, log user paths, or handle conditional logic based on current location
  - Parameters: `includeHash?: boolean`
  - Returns: `string`
  - Example: `const currentPath = this.location.path()`

## Form Services

### 7. FormBuilder
**Purpose**: Provides convenient methods for creating reactive form controls, groups, and arrays. Simplifies form creation with less boilerplate code. **Use this service when you need to create user registration forms, build dynamic forms, implement form validation, create survey forms, or build any complex form interfaces with reactive programming patterns.**

• **control()**: Creates a FormControl
  - **Use this method when**: You need to create individual input fields, implement custom form controls, build reusable form components, add dynamic form fields, or create standalone form inputs with validation
  - Parameters: `formState?: any`, `validators?: ValidatorFn | ValidatorFn[]`
  - Returns: `FormControl`
  - Example: `this.fb.control('', Validators.required)`

• **group()**: Creates a FormGroup
  - **Use this method when**: You need to create user registration forms, build contact forms, implement settings pages, create login forms, or group related form fields together with shared validation logic
  - Parameters: `controlsConfig: object`, `options?: object`
  - Returns: `FormGroup`
  - Example: `this.fb.group({ name: ['', Validators.required] })`

• **array()**: Creates a FormArray
  - **Use this method when**: You need to create dynamic lists of form fields, implement tag input systems, build survey forms with variable questions, create address lists, or handle any scenario with repeating form elements
  - Parameters: `controlsConfig: any[]`, `validators?: ValidatorFn | ValidatorFn[]`
  - Returns: `FormArray`
  - Example: `this.fb.array([this.fb.control('')])`

### 8. Validators
**Purpose**: Provides built-in validation functions for reactive forms. Ensures data integrity and user input validation. **Use this service when you need to validate user input, ensure data quality, implement business rules, provide user feedback, or prevent invalid data submission to your backend.**

• **required**: Validates that control has a value
  - **Use this validator when**: You need to ensure users fill in mandatory fields like name, email, passwords, terms acceptance, or any critical form data that cannot be empty
  - Parameters: `control: AbstractControl`
  - Returns: `ValidationErrors | null`
  - Example: `Validators.required`

• **minLength()**: Validates minimum string length
  - **Use this validator when**: You need to enforce password security requirements, ensure meaningful comments, validate proper names, ensure search terms are substantial, or implement minimum content requirements
  - Parameters: `minLength: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.minLength(3)`

• **maxLength()**: Validates maximum string length
  - **Use this validator when**: You need to limit tweet-like messages, enforce database field constraints, prevent spam submissions, limit comment lengths, or ensure data fits database schema requirements
  - Parameters: `maxLength: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.maxLength(50)`

• **email**: Validates email format
  - **Use this validator when**: You need to validate email addresses for user registration, contact forms, newsletter subscriptions, login forms, or any email-based communication features
  - Parameters: `control: AbstractControl`
  - Returns: `ValidationErrors | null`
  - Example: `Validators.email`

• **pattern()**: Validates against regex pattern
  - **Use this validator when**: You need to validate phone numbers, postal codes, credit card numbers, social security numbers, custom formats, or any specific text patterns required by your business logic
  - Parameters: `pattern: string | RegExp`
  - Returns: `ValidatorFn`
  - Example: `Validators.pattern(/^[0-9]+$/)`

• **min()**: Validates minimum numeric value
  - **Use this validator when**: You need to enforce age restrictions, validate quantities, ensure positive numbers, set minimum prices, or implement business rules with numeric constraints
  - Parameters: `min: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.min(18)`

• **max()**: Validates maximum numeric value
  - **Use this validator when**: You need to limit age ranges, restrict quantities, enforce maximum prices, limit numeric inputs, or implement upper bounds in your business logic
  - Parameters: `max: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.max(65)`

• **compose()**: Combines multiple validators
  - **Use this validator when**: You need to apply multiple validation rules to the same field, create complex validation logic, combine built-in and custom validators, or implement comprehensive field validation
  - Parameters: `validators: ValidatorFn[]`
  - Returns: `ValidatorFn`
  - Example: `Validators.compose([Validators.required, Validators.email])`

## Dependency Injection Services

### 9. Injector
**Purpose**: Core dependency injection service that resolves and provides instances of services. Used for dynamic service resolution and testing. **Use this service when you need to resolve services dynamically, implement factory patterns, create plugin architectures, handle conditional service injection, or build testing utilities.**

• **get()**: Retrieves service instance
  - **Use this method when**: You need to resolve services at runtime, implement conditional service loading, create factory services, handle optional dependencies, or build dynamic plugin systems
  - Parameters: `token: any`, `notFoundValue?: any`
  - Returns: `any`
  - Example: `const service = this.injector.get(MyService)`

• **create()**: Creates child injector
  - **Use this method when**: You need to create isolated service scopes, implement feature modules with specific dependencies, create testing environments, or build micro-frontend architectures
  - Parameters: `providers: Provider[]`, `parent?: Injector`
  - Returns: `Injector`
  - Example: `const childInjector = Injector.create({ providers: [] })`

### 10. ElementRef
**Purpose**: Provides access to the native DOM element. Used when direct DOM manipulation is necessary, though should be used sparingly. **Use this service when you need to integrate third-party libraries, implement custom directives, focus elements programmatically, or perform DOM operations that Angular doesn't provide built-in solutions for.**

• **nativeElement**: Reference to native DOM element
  - **Use this property when**: You need to focus inputs after validation errors, integrate jQuery plugins, implement custom scroll behaviors, measure element dimensions, or interact with non-Angular JavaScript libraries
  - Parameters: None (property)
  - Returns: `any`
  - Example: `this.elementRef.nativeElement.focus()`

### 11. Renderer2
**Purpose**: Provides safe methods for DOM manipulation. Preferred over direct DOM access for security and cross-platform compatibility. **Use this service when you need to manipulate DOM elements safely, create dynamic content, implement custom directives, handle server-side rendering, or build platform-agnostic DOM operations.**

• **createElement()**: Creates DOM element
  - **Use this method when**: You need to build dynamic UI components, create custom overlays, implement drag-and-drop interfaces, generate dynamic content, or build components that create DOM elements programmatically
  - Parameters: `name: string`, `namespace?: string`
  - Returns: `any`
  - Example: `const div = this.renderer.createElement('div')`

• **createText()**: Creates text node
  - **Use this method when**: You need to create dynamic text content, build custom text rendering, implement text manipulation features, or create DOM text nodes safely
  - Parameters: `value: string`
  - Returns: `any`
  - Example: `const text = this.renderer.createText('Hello')`

• **appendChild()**: Appends child element
  - **Use this method when**: You need to build dynamic layouts, create custom components, implement drag-and-drop functionality, add elements to containers, or build dynamic DOM structures
  - Parameters: `parent: any`, `newChild: any`
  - Returns: `void`
  - Example: `this.renderer.appendChild(parent, child)`

• **removeChild()**: Removes child element
  - **Use this method when**: You need to clean up dynamic content, implement element removal animations, handle component destruction, or remove elements from the DOM safely
  - Parameters: `parent: any`, `oldChild: any`
  - Returns: `void`
  - Example: `this.renderer.removeChild(parent, child)`

• **setAttribute()**: Sets element attribute
  - **Use this method when**: You need to set accessibility attributes, update data attributes, configure element properties, implement custom attributes, or handle dynamic attribute assignment
  - Parameters: `el: any`, `name: string`, `value: string`
  - Returns: `void`
  - Example: `this.renderer.setAttribute(el, 'class', 'active')`

• **removeAttribute()**: Removes element attribute
  - **Use this method when**: You need to clean up temporary attributes, remove disabled states, clear data attributes, handle dynamic attribute removal, or reset element properties
  - Parameters: `el: any`, `name: string`
  - Returns: `void`
  - Example: `this.renderer.removeAttribute(el, 'disabled')`

• **addClass()**: Adds CSS class
  - **Use this method when**: You need to implement dynamic styling, show/hide elements, add hover effects, implement state-based styling, or apply conditional CSS classes
  - Parameters: `el: any`, `name: string`
  - Returns: `void`
  - Example: `this.renderer.addClass(el, 'highlight')`

• **removeClass()**: Removes CSS class
  - **Use this method when**: You need to remove temporary styling, clear error states, reset element appearance, handle dynamic class removal, or clean up CSS classes
  - Parameters: `el: any`, `name: string`
  - Returns: `void`
  - Example: `this.renderer.removeClass(el, 'active')`

• **setStyle()**: Sets element style
  - **Use this method when**: You need to implement dynamic animations, adjust element dimensions, apply conditional styling, handle responsive adjustments, or set inline styles programmatically
  - Parameters: `el: any`, `style: string`, `value: any`
  - Returns: `void`
  - Example: `this.renderer.setStyle(el, 'color', 'red')`

• **removeStyle()**: Removes element style
  - **Use this method when**: You need to reset element styles, clear temporary styling, remove inline styles, handle style cleanup, or restore default styling
  - Parameters: `el: any`, `style: string`
  - Returns: `void`
  - Example: `this.renderer.removeStyle(el, 'color')`

• **listen()**: Adds event listener
  - **Use this method when**: You need to handle custom events, implement event delegation, listen to non-Angular events, build custom interactions, or integrate with third-party event systems
  - Parameters: `target: any`, `eventName: string`, `callback: Function`
  - Returns: `Function` (unlisten function)
  - Example: `const unlisten = this.renderer.listen(el, 'click', () => {})`

## Change Detection Services

### 12. ChangeDetectorRef
**Purpose**: Controls change detection for a component. Allows manual triggering of change detection and optimization of performance. **Use this service when you need to optimize performance in large applications, handle asynchronous operations, implement OnPush change detection strategies, or manually control when Angular checks for changes.**

• **detectChanges()**: Triggers change detection for component
  - **Use this method when**: You need to update UI after asynchronous operations, force updates after manual data changes, refresh components after external library modifications, or handle immediate UI updates
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.detectChanges()`

• **markForCheck()**: Marks component for check in next change detection cycle
  - **Use this method when**: You're using OnPush change detection and need to schedule updates, handling observable data changes, implementing efficient update patterns, or optimizing performance-critical components
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.markForCheck()`

• **detach()**: Detaches component from change detection tree
  - **Use this method when**: You need to optimize performance in rarely-updated components, implement manual update control, handle components with expensive rendering, or pause updates temporarily
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.detach()`

• **reattach()**: Reattaches component to change detection tree
  - **Use this method when**: You need to resume automatic updates after detaching, restore normal change detection behavior, re-enable component updates after optimization periods
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.reattach()`

• **checkNoChanges()**: Checks that no changes occurred (dev mode only)
  - **Use this method when**: You need to debug change detection issues, verify component stability, test change detection optimization, or ensure proper update patterns in development
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.checkNoChanges()`

### 13. ApplicationRef
**Purpose**: Provides access to the Angular application instance. Used for bootstrapping, change detection control, and application lifecycle management. **Use this service when you need to control the entire application lifecycle, implement custom bootstrapping, manage global change detection, or integrate Angular with non-Angular code.**

• **bootstrap()**: Bootstraps component
  - **Use this method when**: You need to dynamically bootstrap components, implement micro-frontend architectures, create multiple app instances, or handle custom application initialization
  - Parameters: `componentOrFactory: ComponentFactory<C> | Type<C>`
  - Returns: `ComponentRef<C>`
  - Example: `this.appRef.bootstrap(AppComponent)`

• **tick()**: Triggers change detection across entire application
  - **Use this method when**: You need to force global UI updates, integrate with external libraries that modify data, handle asynchronous operations that bypass Angular's zone, or implement custom change detection cycles
  - Parameters: None
  - Returns: `void`
  - Example: `this.appRef.tick()`

• **attachView()**: Attaches view to application
  - **Use this method when**: You need to add dynamically created views, implement custom view management, integrate with external rendering systems, or manage view lifecycles manually
  - Parameters: `viewRef: ViewRef`
  - Returns: `void`
  - Example: `this.appRef.attachView(viewRef)`

• **detachView()**: Detaches view from application
  - **Use this method when**: You need to remove views without destroying them, implement view pooling, manage memory usage, or handle custom view lifecycle management
  - Parameters: `viewRef: ViewRef`
  - Returns: `void`
  - Example: `this.appRef.detachView(viewRef)`

## Component Services

### 14. ViewContainerRef
**Purpose**: Represents a container where views can be attached. Essential for dynamic component creation and structural directives. **Use this service when you need to create modal dialogs, implement dynamic forms, build plugin systems, create wizard interfaces, or load components based on user configuration.**

• **createComponent()**: Creates component dynamically
  - **Use this method when**: You need to create modal popups, load components based on user permissions, implement dashboard widgets, create dynamic forms, or build plugin architectures
  - Parameters: `componentFactory: ComponentFactory<C>`
  - Returns: `ComponentRef<C>`
  - Example: `const compRef = this.vcr.createComponent(factory)`

• **createEmbeddedView()**: Creates embedded view from template
  - **Use this method when**: You need to repeat template content, implement custom structural directives, create dynamic lists, build template-based widgets, or handle conditional template rendering
  - Parameters: `templateRef: TemplateRef<C>`, `context?: C`
  - Returns: `EmbeddedViewRef<C>`
  - Example: `const viewRef = this.vcr.createEmbeddedView(template)`

• **insert()**: Inserts view at specific index
  - **Use this method when**: You need to implement drag-and-drop reordering, insert content at specific positions, manage dynamic content order, or handle list manipulation with precise positioning
  - Parameters: `viewRef: ViewRef`, `index?: number`
  - Returns: `ViewRef`
  - Example: `this.vcr.insert(viewRef, 0)`

• **move()**: Moves view to different position
  - **Use this method when**: You need to implement sortable lists, reorder dynamic content, handle drag-and-drop functionality, or manage content positioning dynamically
  - Parameters: `viewRef: ViewRef`, `currentIndex: number`
  - Returns: `ViewRef`
  - Example: `this.vcr.move(viewRef, 2)`

• **remove()**: Removes view at index
  - **Use this method when**: You need to delete list items, close modal dialogs, remove dynamic content, handle cleanup operations, or manage view lifecycle
  - Parameters: `index?: number`
  - Returns: `void`
  - Example: `this.vcr.remove(0)`

• **clear()**: Removes all views
  - **Use this method when**: You need to reset dynamic content, clear all modal dialogs, refresh container contents, handle bulk cleanup, or prepare containers for new content
  - Parameters: None
  - Returns: `void`
  - Example: `this.vcr.clear()`

### 15. ComponentFactoryResolver
**Purpose**: Resolves component factories for dynamic component creation. Required for creating components programmatically. **Use this service when you need to create components at runtime, build plugin systems, implement dynamic content loading, create modal services, or handle component creation based on configuration.**

• **resolveComponentFactory()**: Resolves factory for component
  - **Use this method when**: You need to create components dynamically, implement factory patterns, build plugin architectures, create modal services, or handle runtime component instantiation
  - Parameters: `component: Type<T>`
  - Returns: `ComponentFactory<T>`
  - Example: `const factory = this.resolver.resolveComponentFactory(MyComponent)`

### 16. TemplateRef
**Purpose**: Represents an embedded template that can be used to instantiate embedded views. Used with structural directives and dynamic content. **Use this service when you need to create reusable templates, implement custom structural directives, build template-based components, or handle dynamic template rendering.**

• **createEmbeddedView()**: Creates view from template
  - **Use this method when**: You need to render templates with different contexts, implement custom ngFor-like directives, create template-based widgets, or handle conditional template rendering
  - Parameters: `context?: any`
  - Returns: `EmbeddedViewRef<any>`
  - Example: `const view = this.templateRef.createEmbeddedView(context)`

• **elementRef**: Gets element reference
  - **Use this property when**: You need to access the template's DOM element, implement template-based DOM manipulation, handle template positioning, or integrate with third-party libraries
  - Parameters: None (property)
  - Returns: `ElementRef`
  - Example: `const element = this.templateRef.elementRef`

## Platform Services

### 17. PlatformLocation
**Purpose**: Provides low-level access to browser location API. Abstracts platform-specific location implementations. **Use this service when you need to work directly with browser navigation events, build custom routing logic, handle deep linking, manage URL changes manually, or create location-aware components that need to respond to navigation without using Angular Router.**

• **getBaseHrefFromDOM()**: Gets base href from DOM
  - **Use this method when**: You need to determine the application's base URL for constructing absolute URLs, building dynamic links, configuring API endpoints relative to your app's deployment path, or handling applications deployed in subdirectories
  - Parameters: None
  - Returns: `string`
  - Example: `const baseHref = this.platformLocation.getBaseHrefFromDOM()`

• **onPopState()**: Listens to popstate events
  - **Use this method when**: You need to detect browser back/forward button clicks, implement custom navigation tracking, handle single-page application state changes, sync application state with browser history, or build analytics for navigation patterns
  - Parameters: `fn: LocationChangeListener`
  - Returns: `void`
  - Example: `this.platformLocation.onPopState(() => {})`

• **onHashChange()**: Listens to hashchange events
  - **Use this method when**: You're building hash-based routing, implementing smooth scrolling to page sections, creating tabbed interfaces with URL fragments, handling anchor link navigation, or building single-page apps with hash-based state management
  - Parameters: `fn: LocationChangeListener`
  - Returns: `void`
  - Example: `this.platformLocation.onHashChange(() => {})`

• **pathname**: Current pathname
  - **Use this property when**: You need to determine which page the user is on, implement page-specific logic, track user navigation for analytics, conditionally show/hide elements based on current path, or build breadcrumb navigation
  - Parameters: None (property)
  - Returns: `string`
  - Example: `const path = this.platformLocation.pathname`

• **search**: Current search string
  - **Use this property when**: You need to read URL query parameters manually, implement custom search functionality, track marketing campaign parameters, handle complex filtering systems, or parse URL parameters for API calls
  - Parameters: None (property)
  - Returns: `string`
  - Example: `const search = this.platformLocation.search`

• **hash**: Current hash
  - **Use this property when**: You need to scroll to specific page sections, implement tabbed navigation with URL fragments, handle anchor links programmatically, create deep-linkable single-page application states, or build interactive tutorials with step navigation
  - Parameters: None (property)
  - Returns: `string`
  - Example: `const hash = this.platformLocation.hash`

### 18. DOCUMENT
**Purpose**: Injection token for the document object. Provides safe access to the document in different platforms. **Use this service when you need to manipulate DOM elements directly, access browser APIs safely, work with third-party JavaScript libraries, implement custom event handling, or perform operations that require direct document access in a server-side rendering compatible way.**

• Direct access to document methods and properties
  - **Use this when**: You need to dynamically add/remove DOM elements, integrate third-party widgets, implement custom focus management, access browser APIs like localStorage, manipulate meta tags for SEO, or handle complex DOM operations that can't be done through Angular's template system
  - Parameters: Varies by method
  - Returns: Varies by method
  - Example: `this.document.getElementById('myElement')`

### 19. Platform
**Purpose**: Provides information about the current platform (browser, server, mobile, etc.). Used for platform-specific code execution. **Use this service when you need to write code that behaves differently in browser vs server environments, implement progressive enhancement, handle server-side rendering compatibility, or conditionally load platform-specific features.**

• **isBrowser**: Checks if running in browser
  - **Use this property when**: You need to access browser-only APIs like localStorage, implement client-side only features, conditionally load browser-specific code, handle DOM manipulation safely, or implement features that only work in the browser environment
  - Parameters: None (property)
  - Returns: `boolean`
  - Example: `if (this.platform.isBrowser)`

• **isServer**: Checks if running on server
  - **Use this property when**: You're implementing server-side rendering, need to skip browser-only code during SSR, handle SEO optimizations, implement different data fetching strategies for server vs client, or manage server-specific operations
  - Parameters: None (property)
  - Returns: `boolean`
  - Example: `if (this.platform.isServer)`

## Animation Services

### 20. AnimationBuilder
**Purpose**: Programmatically creates animations. Allows dynamic animation creation and control outside of component animations. **Use this service when you need to create animations dynamically based on user input, build complex interactive animations, animate elements based on runtime conditions, create reusable animation utilities, or implement animations that can't be defined statically in component metadata.**

• **build()**: Builds animation from metadata
  - **Use this method when**: You need to create loading animations based on data size, build interactive hover effects, animate chart transitions, create dynamic progress indicators, implement gesture-based animations, or build animations that change based on user preferences or application state
  - Parameters: `animation: AnimationMetadata | AnimationMetadata[]`
  - Returns: `AnimationFactory`
  - Example: `const factory = this.builder.build([style({opacity: 0})])`

### 21. AnimationPlayer
**Purpose**: Controls animation playback. Provides methods to play, pause, and manipulate animations. **Use this service when you need fine-grained control over animation timing, implement interactive animations that respond to user actions, create animation sequences, build animation-based games, or manage complex animation states.**

• **play()**: Starts animation
  - **Use this method when**: You need to trigger animations on user click, start loading animations, begin entrance animations for new content, initiate interactive element animations, or start timed animation sequences
  - Parameters: None
  - Returns: `void`
  - Example: `player.play()`

• **pause()**: Pauses animation
  - **Use this method when**: You need to implement pause/resume functionality for presentations, handle user interruptions gracefully, create interactive animation controls, implement hover-to-pause effects, or manage animation performance by pausing off-screen animations
  - Parameters: None
  - Returns: `void`
  - Example: `player.pause()`

• **reset()**: Resets animation to beginning
  - **Use this method when**: You need to restart animations from the beginning, implement replay functionality, reset element states after failed animations, create looping animations with custom timing, or handle animation error states
  - Parameters: None
  - Returns: `void`
  - Example: `player.reset()`

• **restart()**: Restarts animation from beginning
  - **Use this method when**: You need to replay animations on user request, implement retry mechanisms for failed states, create interactive demos with restart functionality, handle animation loops with custom logic, or reset and replay based on changing conditions
  - Parameters: None
  - Returns: `void`
  - Example: `player.restart()`

• **finish()**: Completes animation immediately
  - **Use this method when**: You need to skip to final animation state, implement fast-forward functionality, handle impatient users who want to skip animations, complete animations when navigating away from pages, or implement accessibility features for users who prefer reduced motion
  - Parameters: None
  - Returns: `void`
  - Example: `player.finish()`

• **destroy()**: Destroys animation player
  - **Use this method when**: You need to clean up animations to prevent memory leaks, remove animations when components are destroyed, implement proper cleanup in single-page applications, manage animation resources efficiently, or handle dynamic animation creation and removal
  - Parameters: None
  - Returns: `void`
  - Example: `player.destroy()`

• **onDone()**: Callback when animation completes
  - **Use this method when**: You need to chain animations together, trigger follow-up actions after animations complete, update UI state after transitions, implement animation-based workflows, or provide user feedback when long animations finish
  - Parameters: `fn: () => void`
  - Returns: `void`
  - Example: `player.onDone(() => console.log('Done'))`

• **onStart()**: Callback when animation starts
  - **Use this method when**: You need to disable UI interactions during animations, update loading states, trigger parallel animations, log animation events for analytics, or synchronize other operations with animation start
  - Parameters: `fn: () => void`
  - Returns: `void`
  - Example: `player.onStart(() => console.log('Started'))`

## Testing Services

### 22. TestBed
**Purpose**: Configures and creates testing module for unit tests. Primary service for Angular testing setup and dependency injection in tests. **Use this service when you're writing unit tests for Angular components, testing component interactions, mocking dependencies for isolated testing, setting up test environments, or creating comprehensive test suites for Angular applications.**

• **configureTestingModule()**: Configures testing module
  - **Use this method when**: You need to set up test dependencies, mock services for testing, configure test components, import required modules for tests, provide test-specific configurations, or create isolated test environments for component testing
  - Parameters: `moduleDef: TestModuleMetadata`
  - Returns: `TestBedStatic`
  - Example: `TestBed.configureTestingModule({ declarations: [Component] })`

• **createComponent()**: Creates component for testing
  - **Use this method when**: You need to test component rendering, verify component behavior, test user interactions, check component lifecycle hooks, validate template bindings, or create component instances for comprehensive testing
  - Parameters: `component: Type<T>`
  - Returns: `ComponentFixture<T>`
  - Example: `const fixture = TestBed.createComponent(MyComponent)`

• **inject()**: Injects service in test
  - **Use this method when**: You need to test service methods, mock service dependencies, verify service interactions, test service state changes, validate service behavior in isolation, or access services within your test methods
  - Parameters: `token: any`, `notFoundValue?: any`
  - Returns: `any`
  - Example: `const service = TestBed.inject(MyService)`

• **get()**: Gets service instance (deprecated, use inject)
  - **Use this method when**: Working with legacy test code that hasn't been updated to use the newer inject method, maintaining backward compatibility in existing test suites, or when dealing with older Angular versions
  - Parameters: `token: any`, `notFoundValue?: any`
  - Returns: `any`
  - Example: `const service = TestBed.get(MyService)`

• **compileComponents()**: Compiles components asynchronously
  - **Use this method when**: You're testing components with external templates, working with lazy-loaded modules in tests, testing components that have async template compilation, dealing with external stylesheets in tests, or ensuring all component templates are fully compiled before testing
  - Parameters: None
  - Returns: `Promise<any>`
  - Example: `await TestBed.compileComponents()`

### 23. ComponentFixture
**Purpose**: Wrapper around component instance for testing. Provides access to component, DOM, and change detection control. **Use this service when you need to test component rendering, trigger change detection manually, access component properties for testing, simulate user interactions, or verify DOM changes in your component tests.**

• **detectChanges()**: Triggers change detection
  - **Use this method when**: You need to update the DOM after changing component properties, test binding updates, verify template changes, simulate Angular's change detection cycle, or ensure your test assertions see the latest component state
  - Parameters: None
  - Returns: `void`
  - Example: `fixture.detectChanges()`

• **whenStable()**: Promise that resolves when stable
  - **Use this method when**: You're testing async operations, waiting for HTTP requests to complete, testing components with async validators, handling setTimeout/setInterval in tests, or ensuring all async operations finish before making assertions
  - Parameters: None
  - Returns: `Promise<any>`
  - Example: `await fixture.whenStable()`

• **destroy()**: Destroys component
  - **Use this method when**: You need to test component cleanup, verify ngOnDestroy behavior, test resource deallocation, simulate component removal, or ensure proper cleanup prevents memory leaks in your components
  - Parameters: None
  - Returns: `void`
  - Example: `fixture.destroy()`

• **componentInstance**: Component instance
  - **Use this property when**: You need to access component properties directly, test component methods, verify component state changes, set input properties for testing, or interact with the component programmatically in tests
  - Parameters: None (property)
  - Returns: `T`
  - Example: `const component = fixture.componentInstance`

• **debugElement**: Debug element wrapper
  - **Use this property when**: You need to query DOM elements in tests, simulate user events, access element properties, test directive behavior, navigate the component's DOM tree, or use Angular's testing utilities for element interaction
  - Parameters: None (property)
  - Returns: `DebugElement`
  - Example: `const debug = fixture.debugElement`

• **nativeElement**: Native DOM element
  - **Use this property when**: You need direct access to the actual DOM element, test native DOM properties, interact with third-party libraries that expect DOM elements, perform low-level DOM testing, or verify actual HTML output
  - Parameters: None (property)
  - Returns: `any`
  - Example: `const element = fixture.nativeElement`

## Route Guards

### 24. CanActivate
**Purpose**: Interface for route activation guards. Determines if a route can be activated based on custom logic like authentication. **Use this interface when you need to protect routes from unauthorized access, implement authentication checks, restrict access based on user roles, validate user permissions before route activation, or create conditional navigation based on application state.**

• **canActivate()**: Determines if route can be activated
  - **Use this method when**: You need to check if users are logged in before accessing protected pages, verify user roles for admin sections, validate user permissions for specific features, implement subscription-based access control, check if required data is available, or redirect users based on their authentication status
  - Parameters: `route: ActivatedRouteSnapshot`, `state: RouterStateSnapshot`
  - Returns: `Observable<boolean> | Promise<boolean> | boolean`
  - Example: `canActivate(route, state) { return this.auth.isLoggedIn(); }`

### 25. CanDeactivate
**Purpose**: Interface for route deactivation guards. Prevents navigation away from route based on custom logic like unsaved changes. **Use this interface when you need to prevent users from losing unsaved work, implement confirmation dialogs before navigation, save user progress automatically, warn about pending operations, or ensure data integrity when navigating away from forms.**

• **canDeactivate()**: Determines if route can be deactivated
  - **Use this method when**: You need to warn users about unsaved form changes, confirm navigation away from editing screens, prevent loss of work in progress, implement auto-save functionality, check for pending uploads or operations, or ensure users don't accidentally lose important data
  - Parameters: `component: T`, `currentRoute: ActivatedRouteSnapshot`, `currentState: RouterStateSnapshot`, `nextState?: RouterStateSnapshot`
  - Returns: `Observable<boolean> | Promise<boolean> | boolean`
  - Example: `canDeactivate(component) { return component.canExit(); }`

### 26. CanLoad
**Purpose**: Interface for module loading guards. Controls whether a lazy-loaded module can be loaded. **Use this interface when you need to prevent unauthorized access to entire feature modules, implement role-based module loading, control resource loading based on user permissions, implement subscription-based feature access, or optimize bundle loading based on user capabilities.**

• **canLoad()**: Determines if module can be loaded
  - **Use this method when**: You need to prevent loading admin modules for regular users, implement feature toggles that control module access, restrict premium features to paid users, prevent loading modules based on device capabilities, or implement conditional module loading based on user roles
  - Parameters: `route: Route`, `segments: UrlSegment[]`
  - Returns: `Observable<boolean> | Promise<boolean> | boolean`
  - Example: `canLoad(route) { return this.auth.hasPermission(route.data.role); }`

### 27. Resolve
**Purpose**: Interface for route data resolution. Pre-loads data before route activation to ensure component has required data. **Use this interface when you need to fetch data before components load, ensure components have required data available, optimize user experience by pre-loading content, handle data dependencies for route components, or implement loading states while fetching route data.**

• **resolve()**: Resolves data for route
  - **Use this method when**: You need to load user profiles before profile pages render, fetch product details before product pages load, get configuration data required by components, pre-load dropdown options for forms, ensure data dependencies are met, or implement smooth page transitions with pre-loaded content
  - Parameters: `route: ActivatedRouteSnapshot`, `state: RouterStateSnapshot`
  - Returns: `Observable<T> | Promise<T> | T`
  - Example: `resolve(route) { return this.api.getUser(route.params.id); }`

## HTTP Interceptors

### 28. HttpInterceptor
**Purpose**: Interface for HTTP request/response interception. Allows modification of HTTP requests and responses globally across the application. **Use this interface when you need to add authentication headers to all requests, implement global error handling, add loading indicators for HTTP calls, implement request/response logging, transform request/response data globally, or add retry logic for failed requests.**

• **intercept()**: Intercepts HTTP requests
  - **Use this method when**: You need to add authentication tokens to all API calls, implement global error handling for HTTP errors, add loading spinners during HTTP requests, log all API calls for debugging, transform request headers globally, implement request retry logic, or add custom headers required by your API
  - Parameters: `req: HttpRequest<any>`, `next: HttpHandler`
  - Returns: `Observable<HttpEvent<any>>`
  - Example: `intercept(req, next) { return next.handle(req.clone({ setHeaders: { 'Auth': token } })); }`

## Angular CDK Services

### 29. Overlay
**Purpose**: Service for creating overlay panels. Used for modals, tooltips, dropdowns, and other floating content. **Use this service when you need to create modal dialogs, implement custom tooltips, build dropdown menus, create floating panels, implement popover components, build complex UI overlays, or create context menus that appear above other content.**

• **create()**: Creates overlay
  - **Use this method when**: You need to display modal dialogs over existing content, create custom tooltips that appear on hover, build dropdown menus that float above other elements, implement context menus, create floating action buttons, or build any UI component that needs to appear above the normal document flow
  - Parameters: `config?: OverlayConfig`
  - Returns: `OverlayRef`
  - Example: `const overlayRef = this.overlay.create({ hasBackdrop: true })`

• **position()**: Gets position builder
  - **Use this method when**: You need to position overlays relative to trigger elements, implement smart positioning that adjusts based on viewport, create tooltips that appear above or below elements based on available space, build dropdowns that reposition themselves to stay visible, or implement complex overlay positioning logic
  - Parameters: None
  - Returns: `OverlayPositionBuilder`
  - Example: `const position = this.overlay.position()`

### 30. BreakpointObserver
**Purpose**: Observes CSS breakpoint changes. Useful for responsive design and adaptive layouts. **Use this service when you need to adapt component behavior based on screen size, implement responsive navigation menus, show/hide elements based on device size, load different content for mobile vs desktop, optimize performance by rendering different components for different screen sizes, or create adaptive user interfaces.**

• **observe()**: Observes breakpoint changes
  - **Use this method when**: You need to switch between mobile and desktop layouts, implement responsive navigation that changes based on screen size, show/hide sidebar components based on viewport width, load different image sizes for different devices, or adapt component behavior for tablet vs mobile vs desktop experiences
  - Parameters: `value: string | string[]`
  - Returns: `Observable<BreakpointState>`
  - Example: `this.breakpoints.observe('(max-width: 768px)')`

• **isMatched()**: Checks if breakpoint matches
  - **Use this method when**: You need to immediately check current breakpoint state, implement conditional rendering based on screen size, make one-time decisions about component initialization based on device size, or perform initial setup that depends on viewport dimensions
  - Parameters: `value: string | string[]`
  - Returns: `boolean`
  - Example: `const isMobile = this.breakpoints.isMatched('(max-width: 768px)')`

### 31. Portal
**Purpose**: Abstracts UI content that can be dynamically rendered. Used for flexible content projection and component portals. **Use this service when you need to dynamically render components in different locations, create reusable content that can be rendered anywhere, implement modal systems with dynamic content, build flexible layouts with interchangeable content areas, or create advanced component composition patterns.**

• **attach()**: Attaches portal to outlet
  - **Use this method when**: You need to dynamically render components in modal dialogs, create tabbed interfaces with dynamic content, implement dashboard widgets that can be moved between containers, build flexible layouts where content can be rearranged, or create advanced component composition systems
  - Parameters: `portal: Portal<any>`
  - Returns: `any`
  - Example: `this.portalOutlet.attach(new ComponentPortal(MyComponent))`

• **detach()**: Detaches portal from outlet
  - **Use this method when**: You need to remove dynamically rendered content, clean up components when they're no longer needed, implement component lifecycle management for dynamic content, handle memory cleanup for portal-based components, or switch between different portal contents
  - Parameters: None
  - Returns: `any`
  - Example: `this.portalOutlet.detach()`

### 32. FocusTrap
**Purpose**: Traps focus within an element. Essential for accessibility in modals and dialogs. **Use this service when you need to implement accessible modal dialogs, create keyboard-navigable dropdown menus, ensure focus stays within popup components, implement proper tab navigation for overlays, meet accessibility requirements for focus management, or create screen reader friendly interactive components.**

• **trapFocus()**: Traps focus in element
  - **Use this method when**: You open modal dialogs and need to keep focus within the modal, create accessible dropdown menus that can be navigated with keyboard, implement popup forms that maintain proper focus flow, ensure screen readers can navigate your overlays properly, or meet WCAG accessibility guidelines for focus management
  - Parameters: None
  - Returns: `void`
  - Example: `this.focusTrap.trapFocus()`

• **releaseFocus()**: Releases focus trap
  - **Use this method when**: You close modal dialogs and need to return focus to the triggering element, finish dropdown navigation and restore normal tab flow, clean up accessibility state when overlays are dismissed, ensure proper focus restoration for screen reader users, or implement proper cleanup for accessible interactive components
  - Parameters: None
  - Returns: `void`
  - Example: `this.focusTrap.releaseFocus()`

## Custom Service Patterns

### 33. State Management Services
**Purpose**: Custom services for managing application state. Provides centralized state management without external libraries. **Use these services when you need to share data between components, maintain application-wide state, implement undo/redo functionality, synchronize data across multiple views, cache user preferences, or create reactive applications that respond to state changes.**

• **getState()**: Gets current state
  - **Use this method when**: You need to access current application state in components, implement state-dependent logic, initialize components with current state values, create derived state calculations, debug application state, or provide state to templates for rendering
  - Parameters: None
  - Returns: `Observable<T> | T`
  - Example: `this.stateService.getState()`

• **setState()**: Updates state
  - **Use this method when**: You need to update user preferences, save form progress, update shopping cart contents, modify application settings, store user selections, trigger reactive updates across components, or implement state changes based on user actions
  - Parameters: `state: Partial<T>`
  - Returns: `void`
  - Example: `this.stateService.setState({ loading: true })`

• **reset()**: Resets state to initial
  - **Use this method when**: You need to implement logout functionality that clears user data, reset form states to defaults, clear temporary application state, implement "start over" functionality, handle error states that require state reset, or clean up state when users navigate away
  - Parameters: None
  - Returns: `void`
  - Example: `this.stateService.reset()`

### 34. Cache Services
**Purpose**: Custom services for caching data. Improves performance by storing frequently accessed data in memory. **Use these services when you need to improve application performance by avoiding redundant API calls, store frequently accessed data, implement offline functionality, reduce server load, cache user preferences, or create responsive applications that work well with slow network connections.**

• **get()**: Gets cached data
  - **Use this method when**: You need to retrieve user profiles that were previously loaded, access cached configuration data, get frequently requested product information, retrieve cached search results, access stored user preferences, or avoid making redundant API calls for the same data
  - Parameters: `key: string`
  - Returns: `T | null`
  - Example: `const data = this.cache.get('users')`

• **set()**: Sets cached data
  - **Use this method when**: You need to cache API responses to improve performance, store user preferences for quick access, cache search results for better user experience, store frequently accessed configuration data, implement offline functionality, or reduce server load by caching common requests
  - Parameters: `key: string`, `value: T`, `ttl?: number`
  - Returns: `void`
  - Example: `this.cache.set('users', userData, 300000)`

• **remove()**: Removes cached data
  - **Use this method when**: You need to invalidate outdated cache entries, remove sensitive data from cache, clear specific cache entries when data changes, implement cache invalidation strategies, handle data updates that require cache refresh, or clean up cache when user logs out
  - Parameters: `key: string`
  - Returns: `void`
  - Example: `this.cache.remove('users')`

• **clear()**: Clears all cached data
  - **Use this method when**: You need to implement logout functionality that clears all cached data, handle memory cleanup in single-page applications, clear cache when switching between different user accounts, implement "refresh all data" functionality, or handle error conditions that require complete cache invalidation
  - Parameters: None
  - Returns: `void`
  - Example: `this.cache.clear()`

### 35. Notification Services
**Purpose**: Custom services for displaying notifications and alerts to users. Provides consistent notification experience. **Use these services when you need to show success messages after form submissions, display error messages for failed operations, provide user feedback for long-running operations, show system status updates, implement toast notifications, or create consistent messaging throughout your application.**

• **show()**: Shows notification
  - **Use this method when**: You need to display general user messages, show custom notifications with specific styling, implement flexible notification system that supports different message types, display system status updates, show progress notifications, or create notifications with custom actions or buttons
  - Parameters: `message: string`, `type?: string`, `options?: NotificationOptions`
  - Returns: `void`
  - Example: `this.notification.show('Success!', 'success')`

• **error()**: Shows error notification
  - **Use this method when**: You need to display error messages for failed API calls, show validation errors from forms, notify users about system errors, display network connectivity issues, show permission denied messages, or provide clear error feedback for failed user actions
  - Parameters: `message: string`, `options?: NotificationOptions`
  - Returns: `void`
  - Example: `this.notification.error('Something went wrong')`

• **success()**: Shows success notification
  - **Use this method when**: You need to confirm successful form submissions, show completion messages for user actions, display success feedback for data saves, confirm successful file uploads, show achievement notifications, or provide positive reinforcement for completed tasks
  - Parameters: `message: string`, `options?: NotificationOptions`
  - Returns: `void`
  - Example: `this.notification.success('Data saved successfully')`

• **dismiss()**: Dismisses notification
  - **Use this method when**: You need to programmatically close notifications, implement auto-dismiss timers, allow users to manually close notifications, clear notifications when navigating to different pages, dismiss notifications after user acknowledges them, or clean up notifications when components are destroyed
  - Parameters: `id?: string`
  - Returns: `void`
  - Example: `this.notification.dismiss(notificationId)`