# Angular Mini Calendar

## Description
This is an easy-to-use mini calendar for Angular. Use it in your custom datepickers or for a calendar on your home page.

## Installation

To install this component to an external project, follow the procedure:

1. __npm install mini-calendar --save__

2. Add __MiniCalendarModule__ to your __@NgModule__ like example below
    ```ts
    import { NgModule } from '@angular/core';
    import { MiniCalendarModule } from 'mini-calendar';

    @NgModule({
        imports: [ MiniCalendarModule ]
    })
    export class MyTestAppModule {}
    ```

3. Add this to your index.html in order to use Material Design Icons

```html
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css">
```

## Usage

Add it to your html like this
```html
  <mini-calendar></mini-calendar>
```
You then have the following options:

```
[(selectedDate)]     
    This will emit your selected date change as well as take 
    an input of a date like a 2-way data bind.

[showWeek]      
    Simply highlights the selected week instead of the day. 
    Value "selectedDate" will still return date picked not the whole week.

[mainColor]      
    Set default color for calendar. Defaults to #03a9f4.

[secondaryColor]      
    Set default color for selected dates color. Defaults to #ff5.
```
