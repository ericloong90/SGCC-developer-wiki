<div style="text-align: center;">
  <img src="assets/react-icon.png" width="150px" />
  <h2>React Hooks</h2>
</div>

### What is React Hook?
React lib older than 16.8 requires you to create a class that returns a React component if you wish to use `componentDidMount` or `this.state`. With React hooks, you no longer need to do this anymore. All you need to do is...

1. Create a function that returns a React component.
2. import methods such as `useState` to peruse `this.state` directly in the function.
3. Voila! No class needed.

**BEFORE:**
```
import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { end: '!' };
  }

  render() {
    return <h1>Hello world{this.state.end}</h1>;
  }
}

export default Component;

```

**AFTER:**
```
import React, { useState } from 'react';

const Component = () => {
  const [end, setEnd] = useState('!');

  return <h1>Hello world{end}</h1>;
};

export default Component;
```

Here are some of the hooks we used in `sgccwebsitev2.git` project.

### 1. useState

Basically `this.state`. This is how you use it.

```
import React, { useState } from 'react';

const Hello = () => {
  const [world, setWorld] = useState('');

  console.log(world); // returns ''
  setWorld('world');
  console.log(world); // returns 'world'

  return <div>{world}</div>;
}

export default Hello;
```

Let's begin dissecting the code!

- `const [world, setWorld] = useState('');`
  `useState` returns 2 items when destructured like this, a getter and a setter. You can name the getter however you want, but people usually add `set` to the setter. E.g. `setWorld`.
    
  You need to add a default value as well, so when you first get the state, it will return the default value. The default value set here is an empty string `''`.

- `setWorld('world');`
  To set the state that you named `world`, use `setWorld` and pass in the value you wish for it to have.

### 2. useEffect

useEffect is the equivalent of `componentDidMount`, `componentWillUnmount`, etc. This is how you use it:

```
import React, { useEffect } from 'react';

const Hello = () => {

}
```

## Hooks Caveats

When developing the site, we realized there's some quirks we need to be aware of regarding hooks.

1. You can only use hooks in a function that returns a React component. Adding hooks in a function that only runs in a React component when called is okay. 