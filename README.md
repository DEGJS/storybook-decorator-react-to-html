# storybook-decorator-react-to-html
A [Storybook for HTML](https://storybook.js.org/docs/guides/guide-html/) decorator that converts a React component into a static HTML string. If you're wondering why you would ever want to do something like this, read the [React As An HTML Templating Engine](#react-as-an-html-templating-engine) section below.

## Install
```
npm install @degjs/storybook-decorator-react-to-html
```

## Usage
As a global decorator in `.storybook/preview.js` (recommended):
```js
import { addDecorator } from '@storybook/html';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

addDecorator(reactToHtml);
```
As a decorator within a story:
```js
import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
  decorators: [ reactToHtml ]
}
```
You can then create a component in React:
```js
import React from 'react';

function Button({children, isDisabled=false}) {
    return <button type="button" className="button" disabled={isDisabled}>{children}</button>;
}

export default Button;
```
And feed that React component directly into Storybook for HTML stories:
```js
import React from 'react';
import Button from './button';

export const defaultButton = () => <Button>Click Me</Button>;
export const disabledButton = () => <Button isDisabled={true}>Click Me</Button>;
```
## React As An HTML Templating Engine
React is a robust user interface library, but it can also function in a more limited capacity as a capable HTML templating engine. By outputting components created with React and JSX as static HTML, they can be fed directly into Storybook for HTML stories. The ReactDOMServer package includes a method that does just this: [renderToStaticMarkup](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup). The React to HTML decorator accepts a React component and utilizes the `renderToStaticMarkup` method to return an HTML string.
Writing HTML components in React provides many advantages, including the JSX syntax, props, composition, code reuse, and the full power of JavaScript itself. However, since these components are converted to static HTML, React runtime features such as state management and user interaction callbacks are not applicable.