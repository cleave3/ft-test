# FT Professional - Full Stack Engineer Contractor - Technical Test

## Prerequisites

Running this project requires [Node.js](https://nodejs.org/en/) 14.x or greater, and [npm](https://www.npmjs.com/).

### Getting started

1. Clone this repository to your machine.
1. Install the dependencies with `npm install`.
1. Run tests with `npm test`
1. Start the app with `npm start`. Any changes you make will be automatically updated.
1. Visit <http://localhost:3000/jsx> to view site

#### Points Address in this submission

##### 1. Test

Added 2 test:

- Test Asset component render. <a href="./test/Asset.spec.js">Asset.spec.js</a>
- Test for jsx render

#### 2. Error Handling

Handled error from API call

#### 3. Responsive Design

The design is responsive accross all device types. Just like the behavior on ft.com, the number items displayed reduces depending on available space on the screen.

#### 4. Not be reliant on client-side frameworks (i.e. Angular, React) or libraries like jQuery

Only pure JSX was used without additional client-side libraries

#### 5. Use Origami Components

`@financial-times/o-colors` was installed and used in project.

```scss
@import "@financial-times/o-colors/main";

body {
    ...
    background-color: oColorsByUsecase("page", "background"); // used for background color
    ...
}
```

// o-grid-container used to center items just like on ft.com

```jsx
<div className="asset-container o-grid-container"> 
    ....
</div>
```

#### 6. Have a similar look and feel as ft.com

- Unlike the design, the asset dayChangePercent value are bordered just like on ft.com
- Items are also aligned to the center to capture the look on ft.com
- The design is responsive accross all device types. Just like the behavior on ft.com, the number items displayed reduces depending on available space on the screen.

#### 7. Perform well over 3G networks

I simulated a 3G Network, tested and works fine
