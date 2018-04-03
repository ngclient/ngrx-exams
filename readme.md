### Project ngx-start
* Clone Project Or Create step by step

### Create Project

* Create App
```
ng new ngx-starter --skip-install --routing --style=scss

```

* Step 01.0 Start
Install Package npm

``` 
    npm install
```

* Step 01.1 Run 
```
    npm run start
```

* Step 2 Install Package
    * Install Pack Bootstrap 4
    ```
        npm install --save @ng-bootstrap/ng-bootstrap
    ```
    * Install Pack ngx-datatable-bootstrap4
    ```
        npm install --save ngx-datatable-bootstrap4 
    ```

    * Install Angular 2 in-memory-web-api
    ```
        npm i angular2-in-memory-web-api --save
    ```

    * Install package Bootstrap 4
    ```
        npm i bootstrap --save
    ```
    * Install package Fontawesome
    ```
        npm i font-awesome --save
    ```
    * Install package devextreme
    ```
        npm install --save devextreme@latest
```

* Step 3: Init Module

    * Create Auth module
    ```
        ng g module Auth --routing
    ```

    * Create Users Module
    ```
        ng g module Users --routing
    ```

    * Create Roles Module
    ```
        ng g module Roles --routing
    ```

    * Create Cores Module
    ```
        ng g module Cores
    ```

    * Create Shared Module
    ```
        ng g module Shared
    ```

* Step 4: Init Components

    * Create component User
    ```
        ng g component users/user --module=users
    ```
    * Create component user grid
    ```
        ng g component users/user-grid --module=users
    ```

    * Create component user form
    ```
        ng g component users/user-form --module=users
    ```

    * Create component Role
    ```
        ng g component roles/role --module=roles
    ```

    * Create component role list
    ```
        ng g component roles/role --module=roles
    ```
    * Create component role form
    ```
        ng g component roles/role-form --module=roles
    ```

    * Create component Login
    ```
        ng g component auth/login --module=auth
    ```
    * Create component Register
    ```
        ng g component auth/register --module=auth
    ```

* Step 5: Custom Structure Project

    * Forder shared
        * Remove Shared Models
        * components
        * layouts
        * mocks
        * models
        * services

    * Create Module shared/components
    ```
        ng g module shared/components --module
    ```
    * Create component headers for module component
    ```
        ng g component shared/components/headers
    ```

    * Create component sidebars for module component
    ```
        ng g component shared/components/sidebars
    ```
    * Create component page-content for module component
    ```
        ng g component shared/components/page-content
    ```

    * Create Module shared/layouts
    ```
        ng g module shared/layouts --module
    *```

    * Create component shared/layouts/layout
    ```
        ng g component shared/layouts/layout
    ```

    * Create user mock backend api
    * Create role mock backend api

* Step 6 Custom core Module
* Step 7 Custom component/module shared/components
* step 8 Custom componet/module shared/layouts

* step 9 config App
* Step 10 Run
```
    npm run start
```
