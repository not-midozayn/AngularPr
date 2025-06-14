# Angular Services Reference Guide for Fullstack Developers

## Core HTTP Services

### 1. HttpClient
**Purpose**: Provides a simplified API for HTTP communication with backend services. It replaced the older Http service and offers better type safety, interceptors, and observables.

• **get()**: Performs HTTP GET request to retrieve data from server
  - Parameters: `url: string`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.get<User[]>('/api/users')`

• **post()**: Performs HTTP POST request to send data to server
  - Parameters: `url: string`, `body: any`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.post<User>('/api/users', userData)`

• **put()**: Performs HTTP PUT request to update existing resource
  - Parameters: `url: string`, `body: any`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.put<User>('/api/users/1', updatedUser)`

• **delete()**: Performs HTTP DELETE request to remove resource
  - Parameters: `url: string`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.delete('/api/users/1')`

• **patch()**: Performs HTTP PATCH request for partial updates
  - Parameters: `url: string`, `body: any`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.patch('/api/users/1', { name: 'New Name' })`

• **request()**: Generic method for any HTTP request
  - Parameters: `method: string`, `url: string`, `options?: HttpOptions`
  - Returns: `Observable<T>`
  - Example: `this.http.request('GET', '/api/users')`

### 2. HttpHeaders
**Purpose**: Creates and manipulates HTTP headers for requests. Essential for setting content types, authorization tokens, and custom headers.

• **set()**: Sets a header value
  - Parameters: `name: string`, `value: string`
  - Returns: `HttpHeaders`
  - Example: `headers.set('Content-Type', 'application/json')`

• **append()**: Adds a new value to existing header
  - Parameters: `name: string`, `value: string`
  - Returns: `HttpHeaders`
  - Example: `headers.append('Accept', 'text/plain')`

• **delete()**: Removes a header
  - Parameters: `name: string`
  - Returns: `HttpHeaders`
  - Example: `headers.delete('Authorization')`

• **get()**: Retrieves header value
  - Parameters: `name: string`
  - Returns: `string | null`
  - Example: `const token = headers.get('Authorization')`

• **has()**: Checks if header exists
  - Parameters: `name: string`
  - Returns: `boolean`
  - Example: `if (headers.has('Content-Type'))`

### 3. HttpParams
**Purpose**: Constructs URL query parameters in a type-safe way. Handles encoding and formatting of query strings.

• **set()**: Sets a parameter value
  - Parameters: `param: string`, `value: string`
  - Returns: `HttpParams`
  - Example: `params.set('page', '1')`

• **append()**: Adds parameter value to existing parameter
  - Parameters: `param: string`, `value: string`
  - Returns: `HttpParams`
  - Example: `params.append('tags', 'angular')`

• **delete()**: Removes a parameter
  - Parameters: `param: string`
  - Returns: `HttpParams`
  - Example: `params.delete('filter')`

• **get()**: Gets parameter value
  - Parameters: `param: string`
  - Returns: `string | null`
  - Example: `const page = params.get('page')`

• **toString()**: Converts to query string
  - Parameters: None
  - Returns: `string`
  - Example: `const queryString = params.toString()`

## Routing Services

### 4. Router
**Purpose**: Provides navigation and URL manipulation capabilities. Core service for single-page application routing and programmatic navigation.

• **navigate()**: Navigates to a route using an array of route segments
  - Parameters: `commands: any[]`, `extras?: NavigationExtras`
  - Returns: `Promise<boolean>`
  - Example: `this.router.navigate(['/users', userId])`

• **navigateByUrl()**: Navigates using absolute URL
  - Parameters: `url: string`, `extras?: NavigationExtras`
  - Returns: `Promise<boolean>`
  - Example: `this.router.navigateByUrl('/dashboard')`

• **createUrlTree()**: Creates URL tree from route segments
  - Parameters: `commands: any[]`, `extras?: NavigationExtras`
  - Returns: `UrlTree`
  - Example: `const urlTree = this.router.createUrlTree(['/users'])`

• **serializeUrl()**: Converts URL tree to string
  - Parameters: `url: UrlTree`
  - Returns: `string`
  - Example: `const url = this.router.serializeUrl(urlTree)`

• **parseUrl()**: Parses URL string into URL tree
  - Parameters: `url: string`
  - Returns: `UrlTree`
  - Example: `const tree = this.router.parseUrl('/users/123')`

### 5. ActivatedRoute
**Purpose**: Provides information about the active route, including parameters, query parameters, and route data. Essential for component initialization based on route.

• **paramMap**: Observable of route parameters
  - Parameters: None (property)
  - Returns: `Observable<ParamMap>`
  - Example: `this.route.paramMap.subscribe(params => params.get('id'))`

• **queryParamMap**: Observable of query parameters
  - Parameters: None (property)
  - Returns: `Observable<ParamMap>`
  - Example: `this.route.queryParamMap.subscribe(params => params.get('search'))`

• **data**: Observable of route data
  - Parameters: None (property)
  - Returns: `Observable<Data>`
  - Example: `this.route.data.subscribe(data => data.user)`

• **url**: Observable of URL segments
  - Parameters: None (property)
  - Returns: `Observable<UrlSegment[]>`
  - Example: `this.route.url.subscribe(segments => segments[0].path)`

• **fragment**: Observable of URL fragment
  - Parameters: None (property)
  - Returns: `Observable<string>`
  - Example: `this.route.fragment.subscribe(fragment => fragment)`

### 6. Location
**Purpose**: Provides interaction with browser's URL and history. Allows manipulation of browser history without full page reloads.

• **back()**: Navigates back in browser history
  - Parameters: None
  - Returns: `void`
  - Example: `this.location.back()`

• **forward()**: Navigates forward in browser history
  - Parameters: None
  - Returns: `void`
  - Example: `this.location.forward()`

• **go()**: Navigates to specific position in history
  - Parameters: `relativePosition: number`
  - Returns: `void`
  - Example: `this.location.go(-2)`

• **replaceState()**: Replaces current state in history
  - Parameters: `path: string`, `query?: string`, `state?: any`
  - Returns: `void`
  - Example: `this.location.replaceState('/new-path')`

• **path()**: Gets current path
  - Parameters: `includeHash?: boolean`
  - Returns: `string`
  - Example: `const currentPath = this.location.path()`

## Form Services

### 7. FormBuilder
**Purpose**: Provides convenient methods for creating reactive form controls, groups, and arrays. Simplifies form creation with less boilerplate code.

• **control()**: Creates a FormControl
  - Parameters: `formState?: any`, `validators?: ValidatorFn | ValidatorFn[]`
  - Returns: `FormControl`
  - Example: `this.fb.control('', Validators.required)`

• **group()**: Creates a FormGroup
  - Parameters: `controlsConfig: object`, `options?: object`
  - Returns: `FormGroup`
  - Example: `this.fb.group({ name: ['', Validators.required] })`

• **array()**: Creates a FormArray
  - Parameters: `controlsConfig: any[]`, `validators?: ValidatorFn | ValidatorFn[]`
  - Returns: `FormArray`
  - Example: `this.fb.array([this.fb.control('')])`

### 8. Validators
**Purpose**: Provides built-in validation functions for reactive forms. Ensures data integrity and user input validation.

• **required**: Validates that control has a value
  - Parameters: `control: AbstractControl`
  - Returns: `ValidationErrors | null`
  - Example: `Validators.required`

• **minLength()**: Validates minimum string length
  - Parameters: `minLength: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.minLength(3)`

• **maxLength()**: Validates maximum string length
  - Parameters: `maxLength: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.maxLength(50)`

• **email**: Validates email format
  - Parameters: `control: AbstractControl`
  - Returns: `ValidationErrors | null`
  - Example: `Validators.email`

• **pattern()**: Validates against regex pattern
  - Parameters: `pattern: string | RegExp`
  - Returns: `ValidatorFn`
  - Example: `Validators.pattern(/^[0-9]+$/)`

• **min()**: Validates minimum numeric value
  - Parameters: `min: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.min(18)`

• **max()**: Validates maximum numeric value
  - Parameters: `max: number`
  - Returns: `ValidatorFn`
  - Example: `Validators.max(65)`

• **compose()**: Combines multiple validators
  - Parameters: `validators: ValidatorFn[]`
  - Returns: `ValidatorFn`
  - Example: `Validators.compose([Validators.required, Validators.email])`

## Dependency Injection Services

### 9. Injector
**Purpose**: Core dependency injection service that resolves and provides instances of services. Used for dynamic service resolution and testing.

• **get()**: Retrieves service instance
  - Parameters: `token: any`, `notFoundValue?: any`
  - Returns: `any`
  - Example: `const service = this.injector.get(MyService)`

• **create()**: Creates child injector
  - Parameters: `providers: Provider[]`, `parent?: Injector`
  - Returns: `Injector`
  - Example: `const childInjector = Injector.create({ providers: [] })`

### 10. ElementRef
**Purpose**: Provides access to the native DOM element. Used when direct DOM manipulation is necessary, though should be used sparingly.

• **nativeElement**: Reference to native DOM element
  - Parameters: None (property)
  - Returns: `any`
  - Example: `this.elementRef.nativeElement.focus()`

### 11. Renderer2
**Purpose**: Provides safe methods for DOM manipulation. Preferred over direct DOM access for security and cross-platform compatibility.

• **createElement()**: Creates DOM element
  - Parameters: `name: string`, `namespace?: string`
  - Returns: `any`
  - Example: `const div = this.renderer.createElement('div')`

• **createText()**: Creates text node
  - Parameters: `value: string`
  - Returns: `any`
  - Example: `const text = this.renderer.createText('Hello')`

• **appendChild()**: Appends child element
  - Parameters: `parent: any`, `newChild: any`
  - Returns: `void`
  - Example: `this.renderer.appendChild(parent, child)`

• **removeChild()**: Removes child element
  - Parameters: `parent: any`, `oldChild: any`
  - Returns: `void`
  - Example: `this.renderer.removeChild(parent, child)`

• **setAttribute()**: Sets element attribute
  - Parameters: `el: any`, `name: string`, `value: string`
  - Returns: `void`
  - Example: `this.renderer.setAttribute(el, 'class', 'active')`

• **removeAttribute()**: Removes element attribute
  - Parameters: `el: any`, `name: string`
  - Returns: `void`
  - Example: `this.renderer.removeAttribute(el, 'disabled')`

• **addClass()**: Adds CSS class
  - Parameters: `el: any`, `name: string`
  - Returns: `void`
  - Example: `this.renderer.addClass(el, 'highlight')`

• **removeClass()**: Removes CSS class
  - Parameters: `el: any`, `name: string`
  - Returns: `void`
  - Example: `this.renderer.removeClass(el, 'active')`

• **setStyle()**: Sets element style
  - Parameters: `el: any`, `style: string`, `value: any`
  - Returns: `void`
  - Example: `this.renderer.setStyle(el, 'color', 'red')`

• **removeStyle()**: Removes element style
  - Parameters: `el: any`, `style: string`
  - Returns: `void`
  - Example: `this.renderer.removeStyle(el, 'color')`

• **listen()**: Adds event listener
  - Parameters: `target: any`, `eventName: string`, `callback: Function`
  - Returns: `Function` (unlisten function)
  - Example: `const unlisten = this.renderer.listen(el, 'click', () => {})`

## Change Detection Services

### 12. ChangeDetectorRef
**Purpose**: Controls change detection for a component. Allows manual triggering of change detection and optimization of performance.

• **detectChanges()**: Triggers change detection for component
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.detectChanges()`

• **markForCheck()**: Marks component for check in next change detection cycle
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.markForCheck()`

• **detach()**: Detaches component from change detection tree
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.detach()`

• **reattach()**: Reattaches component to change detection tree
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.reattach()`

• **checkNoChanges()**: Checks that no changes occurred (dev mode only)
  - Parameters: None
  - Returns: `void`
  - Example: `this.cdr.checkNoChanges()`

### 13. ApplicationRef
**Purpose**: Provides access to the Angular application instance. Used for bootstrapping, change detection control, and application lifecycle management.

• **bootstrap()**: Bootstraps component
  - Parameters: `componentOrFactory: ComponentFactory<C> | Type<C>`
  - Returns: `ComponentRef<C>`
  - Example: `this.appRef.bootstrap(AppComponent)`

• **tick()**: Triggers change detection across entire application
  - Parameters: None
  - Returns: `void`
  - Example: `this.appRef.tick()`

• **attachView()**: Attaches view to application
  - Parameters: `viewRef: ViewRef`
  - Returns: `void`
  - Example: `this.appRef.attachView(viewRef)`

• **detachView()**: Detaches view from application
  - Parameters: `viewRef: ViewRef`
  - Returns: `void`
  - Example: `this.appRef.detachView(viewRef)`

## Component Services

### 14. ViewContainerRef
**Purpose**: Represents a container where views can be attached. Essential for dynamic component creation and structural directives.

• **createComponent()**: Creates component dynamically
  - Parameters: `componentFactory: ComponentFactory<C>`
  - Returns: `ComponentRef<C>`
  - Example: `const compRef = this.vcr.createComponent(factory)`

• **createEmbeddedView()**: Creates embedded view from template
  - Parameters: `templateRef: TemplateRef<C>`, `context?: C`
  - Returns: `EmbeddedViewRef<C>`
  - Example: `const viewRef = this.vcr.createEmbeddedView(template)`

• **insert()**: Inserts view at specific index
  - Parameters: `viewRef: ViewRef`, `index?: number`
  - Returns: `ViewRef`
  - Example: `this.vcr.insert(viewRef, 0)`

• **move()**: Moves view to different position
  - Parameters: `viewRef: ViewRef`, `currentIndex: number`
  - Returns: `ViewRef`
  - Example: `this.vcr.move(viewRef, 2)`

• **remove()**: Removes view at index
  - Parameters: `index?: number`
  - Returns: `void`
  - Example: `this.vcr.remove(0)`

• **clear()**: Removes all views
  - Parameters: None
  - Returns: `void`
  - Example: `this.vcr.clear()`

### 15. ComponentFactoryResolver
**Purpose**: Resolves component factories for dynamic component creation. Required for creating components programmatically.

• **resolveComponentFactory()**: Resolves factory for component
  - Parameters: `component: Type<T>`
  - Returns: `ComponentFactory<T>`
  - Example: `const factory = this.resolver.resolveComponentFactory(MyComponent)`

### 16. TemplateRef
**Purpose**: Represents an embedded template that can be used to instantiate embedded views. Used with structural directives and dynamic content.

• **createEmbeddedView()**: Creates view from template
  - Parameters: `context?: any`
  - Returns: `EmbeddedViewRef<any>`
  - Example: `const view = this.templateRef.createEmbeddedView(context)`

• **elementRef**: Gets element reference
  - Parameters: None (property)
  - Returns: `ElementRef`
  - Example: `const element = this.templateRef.elementRef`

## Platform Services

### 17. PlatformLocation
**Purpose**: Provides low-level access to browser location API. Abstracts platform-specific location implementations.

• **getBaseHrefFromDOM()**: Gets base href from DOM
  - Parameters: None
  - Returns: `string`
  - Example: `const baseHref = this.platformLocation.getBaseHrefFromDOM()`

• **onPopState()**: Listens to popstate events
  - Parameters: `fn: LocationChangeListener`
  - Returns: `void`
  - Example: `this.platformLocation.onPopState(() => {})`

• **onHashChange()**: Listens to hashchange events
  - Parameters: `fn: LocationChangeListener`
  - Returns: `void`
  - Example: `this.platformLocation.onHashChange(() => {})`

• **pathname**: Current pathname
  - Parameters: None (property)
  - Returns: `string`
  - Example: `const path = this.platformLocation.pathname`

• **search**: Current search string
  - Parameters: None (property)
  - Returns: `string`
  - Example: `const search = this.platformLocation.search`

• **hash**: Current hash
  - Parameters: None (property)
  - Returns: `string`
  - Example: `const hash = this.platformLocation.hash`

### 18. DOCUMENT
**Purpose**: Injection token for the document object. Provides safe access to the document in different platforms.

• Direct access to document methods and properties
  - Parameters: Varies by method
  - Returns: Varies by method
  - Example: `this.document.getElementById('myElement')`

### 19. Platform
**Purpose**: Provides information about the current platform (browser, server, mobile, etc.). Used for platform-specific code execution.

• **isBrowser**: Checks if running in browser
  - Parameters: None (property)
  - Returns: `boolean`
  - Example: `if (this.platform.isBrowser)`

• **isServer**: Checks if running on server
  - Parameters: None (property)
  - Returns: `boolean`
  - Example: `if (this.platform.isServer)`

## Animation Services

### 20. AnimationBuilder
**Purpose**: Programmatically creates animations. Allows dynamic animation creation and control outside of component animations.

• **build()**: Builds animation from metadata
  - Parameters: `animation: AnimationMetadata | AnimationMetadata[]`
  - Returns: `AnimationFactory`
  - Example: `const factory = this.builder.build([style({opacity: 0})])`

### 21. AnimationPlayer
**Purpose**: Controls animation playback. Provides methods to play, pause, and manipulate animations.

• **play()**: Starts animation
  - Parameters: None
  - Returns: `void`
  - Example: `player.play()`

• **pause()**: Pauses animation
  - Parameters: None
  - Returns: `void`
  - Example: `player.pause()`

• **reset()**: Resets animation to beginning
  - Parameters: None
  - Returns: `void`
  - Example: `player.reset()`

• **restart()**: Restarts animation from beginning
  - Parameters: None
  - Returns: `void`
  - Example: `player.restart()`

• **finish()**: Completes animation immediately
  - Parameters: None
  - Returns: `void`
  - Example: `player.finish()`

• **destroy()**: Destroys animation player
  - Parameters: None
  - Returns: `void`
  - Example: `player.destroy()`

• **onDone()**: Callback when animation completes
  - Parameters: `fn: () => void`
  - Returns: `void`
  - Example: `player.onDone(() => console.log('Done'))`

• **onStart()**: Callback when animation starts
  - Parameters: `fn: () => void`
  - Returns: `void`
  - Example: `player.onStart(() => console.log('Started'))`

## Testing Services

### 22. TestBed
**Purpose**: Configures and creates testing module for unit tests. Primary service for Angular testing setup and dependency injection in tests.

• **configureTestingModule()**: Configures testing module
  - Parameters: `moduleDef: TestModuleMetadata`
  - Returns: `TestBedStatic`
  - Example: `TestBed.configureTestingModule({ declarations: [Component] })`

• **createComponent()**: Creates component for testing
  - Parameters: `component: Type<T>`
  - Returns: `ComponentFixture<T>`
  - Example: `const fixture = TestBed.createComponent(MyComponent)`

• **inject()**: Injects service in test
  - Parameters: `token: any`, `notFoundValue?: any`
  - Returns: `any`
  - Example: `const service = TestBed.inject(MyService)`

• **get()**: Gets service instance (deprecated, use inject)
  - Parameters: `token: any`, `notFoundValue?: any`
  - Returns: `any`
  - Example: `const service = TestBed.get(MyService)`

• **compileComponents()**: Compiles components asynchronously
  - Parameters: None
  - Returns: `Promise<any>`
  - Example: `await TestBed.compileComponents()`

### 23. ComponentFixture
**Purpose**: Wrapper around component instance for testing. Provides access to component, DOM, and change detection control.

• **detectChanges()**: Triggers change detection
  - Parameters: None
  - Returns: `void`
  - Example: `fixture.detectChanges()`

• **whenStable()**: Promise that resolves when stable
  - Parameters: None
  - Returns: `Promise<any>`
  - Example: `await fixture.whenStable()`

• **destroy()**: Destroys component
  - Parameters: None
  - Returns: `void`
  - Example: `fixture.destroy()`

• **componentInstance**: Component instance
  - Parameters: None (property)
  - Returns: `T`
  - Example: `const component = fixture.componentInstance`

• **debugElement**: Debug element wrapper
  - Parameters: None (property)
  - Returns: `DebugElement`
  - Example: `const debug = fixture.debugElement`

• **nativeElement**: Native DOM element
  - Parameters: None (property)
  - Returns: `any`
  - Example: `const element = fixture.nativeElement`

## Route Guards

### 24. CanActivate
**Purpose**: Interface for route activation guards. Determines if a route can be activated based on custom logic like authentication.

• **canActivate()**: Determines if route can be activated
  - Parameters: `route: ActivatedRouteSnapshot`, `state: RouterStateSnapshot`
  - Returns: `Observable<boolean> | Promise<boolean> | boolean`
  - Example: `canActivate(route, state) { return this.auth.isLoggedIn(); }`

### 25. CanDeactivate
**Purpose**: Interface for route deactivation guards. Prevents navigation away from route based on custom logic like unsaved changes.

• **canDeactivate()**: Determines if route can be deactivated
  - Parameters: `component: T`, `currentRoute: ActivatedRouteSnapshot`, `currentState: RouterStateSnapshot`, `nextState?: RouterStateSnapshot`
  - Returns: `Observable<boolean> | Promise<boolean> | boolean`
  - Example: `canDeactivate(component) { return component.canExit(); }`

### 26. CanLoad
**Purpose**: Interface for module loading guards. Controls whether a lazy-loaded module can be loaded.

• **canLoad()**: Determines if module can be loaded
  - Parameters: `route: Route`, `segments: UrlSegment[]`
  - Returns: `Observable<boolean> | Promise<boolean> | boolean`
  - Example: `canLoad(route) { return this.auth.hasPermission(route.data.role); }`

### 27. Resolve
**Purpose**: Interface for route data resolution. Pre-loads data before route activation to ensure component has required data.

• **resolve()**: Resolves data for route
  - Parameters: `route: ActivatedRouteSnapshot`, `state: RouterStateSnapshot`
  - Returns: `Observable<T> | Promise<T> | T`
  - Example: `resolve(route) { return this.api.getUser(route.params.id); }`

## HTTP Interceptors

### 28. HttpInterceptor
**Purpose**: Interface for HTTP request/response interception. Allows modification of HTTP requests and responses globally across the application.

• **intercept()**: Intercepts HTTP requests
  - Parameters: `req: HttpRequest<any>`, `next: HttpHandler`
  - Returns: `Observable<HttpEvent<any>>`
  - Example: `intercept(req, next) { return next.handle(req.clone({ setHeaders: { 'Auth': token } })); }`

## Angular CDK Services

### 29. Overlay
**Purpose**: Service for creating overlay panels. Used for modals, tooltips, dropdowns, and other floating content.

• **create()**: Creates overlay
  - Parameters: `config?: OverlayConfig`
  - Returns: `OverlayRef`
  - Example: `const overlayRef = this.overlay.create({ hasBackdrop: true })`

• **position()**: Gets position builder
  - Parameters: None
  - Returns: `OverlayPositionBuilder`
  - Example: `const position = this.overlay.position()`

### 30. BreakpointObserver
**Purpose**: Observes CSS breakpoint changes. Useful for responsive design and adaptive layouts.

• **observe()**: Observes breakpoint changes
  - Parameters: `value: string | string[]`
  - Returns: `Observable<BreakpointState>`
  - Example: `this.breakpoints.observe('(max-width: 768px)')`

• **isMatched()**: Checks if breakpoint matches
  - Parameters: `value: string | string[]`
  - Returns: `boolean`
  - Example: `const isMobile = this.breakpoints.isMatched('(max-width: 768px)')`

### 31. Portal
**Purpose**: Abstracts UI content that can be dynamically rendered. Used for flexible content projection and component portals.

• **attach()**: Attaches portal to outlet
  - Parameters: `portal: Portal<any>`
  - Returns: `any`
  - Example: `this.portalOutlet.attach(new ComponentPortal(MyComponent))`

• **detach()**: Detaches portal from outlet
  - Parameters: None
  - Returns: `any`
  - Example: `this.portalOutlet.detach()`

### 32. FocusTrap
**Purpose**: Traps focus within an element. Essential for accessibility in modals and dialogs.

• **trapFocus()**: Traps focus in element
  - Parameters: None
  - Returns: `void`
  - Example: `this.focusTrap.trapFocus()`

• **releaseFocus()**: Releases focus trap
  - Parameters: None
  - Returns: `void`
  - Example: `this.focusTrap.releaseFocus()`

## Custom Service Patterns

### 33. State Management Services
**Purpose**: Custom services for managing application state. Provides centralized state management without external libraries.

• **getState()**: Gets current state
  - Parameters: None
  - Returns: `Observable<T> | T`
  - Example: `this.stateService.getState()`

• **setState()**: Updates state
  - Parameters: `state: Partial<T>`
  - Returns: `void`
  - Example: `this.stateService.setState({ loading: true })`

• **reset()**: Resets state to initial
  - Parameters: None
  - Returns: `void`
  - Example: `this.stateService.reset()`

### 34. Cache Services
**Purpose**: Custom services for caching data. Improves performance by storing frequently accessed data in memory.

• **get()**: Gets cached data
  - Parameters: `key: string`
  - Returns: `T | null`
  - Example: `const data = this.cache.get('users')`

• **set()**: Sets cached data
  - Parameters: `key: string`, `value: T`, `ttl?: number`
  - Returns: `void`
  - Example: `this.cache.set('users', userData, 300000)`

• **remove()**: Removes cached data
  - Parameters: `key: string`
  - Returns: `void`
  - Example: `this.cache.remove('users')`

• **clear()**: Clears all cached data
  - Parameters: None
  - Returns: `void`
  - Example: `this.cache.clear()`

### 35. Notification Services
**Purpose**: Custom services for displaying notifications and alerts to users. Provides consistent notification experience.

• **show()**: Shows notification
  - Parameters: `message: string`, `type?: string`, `options?: NotificationOptions`
  - Returns: `void`
  - Example: `this.notification.show('Success!', 'success')`

• **error()**: Shows error notification
  - Parameters: `message: string`, `options?: NotificationOptions`
  - Returns: `void`
  - Example: `this.notification.error('Something went wrong')`

• **success()**: Shows success notification
  - Parameters: `message: string`, `options?: NotificationOptions`
  - Returns: `void`
  - Example: `this.notification.success('Data saved successfully')`

• **dismiss()**: Dismisses notification
  - Parameters: `id?: string`
  - Returns: `void`
  - Example: `this.notification.dismiss(notificationId)`