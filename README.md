# React Performance
##### Or how to keep your Components from ALWAYS re-rendering

&nbsp;

## This blog post has been written MANY times before
* [React Docs](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)
* [Smashing Magazine](https://www.smashingmagazine.com/2020/07/methods-performance-react-apps/)
* [Dmitri Pavlutin](https://dmitripavlutin.com/use-react-memo-wisely/) 

But this one is right here in front of you. Hopefully this discussion will either solidify your knowledge of these topics or introduce you to them so that when you find out you need to optimize your application you know where to start. 

&nbsp;

Things we will cover:

* [React.memo / React.PureComponent ](https://nodejs.org)
* [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
* [useCallback](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
* [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
* [React Profiler Dev Tool](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)


Other things that help with performance:

* Code Splitting 
* Lazy Loading
* Web workers or service workers
* Server Side Rendering

&nbsp;

>"Users enjoy fast and responsive user interfaces (UI). A UI response delay of fewer than 100 milliseconds feels instant to the user but a delay between 100 and 300 milliseconds is already perceptible." 
>
> -- <cite>Benjamin Franklin</cite>- Dmitri Pavlutin

&nbsp;

## React Performance

React is so fast generally so the discussion of React performance is one of those things that you don't want to pre-optimize. However, once you run into a problem, you kinda have to fix it before you can ship any code. Implementing these tools poorly, which I have done, can cause some weird bugs. So here is a cheat sheet to get you started. 

&nbsp;

## The Tools

Let's talk about the tools you have to fix a performance problem. 

### React Profiler Dev Tool

Once you have the React Dev Tools extension installed in your browser you can open the dev tools and navigate to the Profiler tab. This is a tool that we can use to see how long each component takes to render and why that component is rendering. Use the gear symbol to turn on the following settings:

Things to Turn on in Profiler settings 
1. Record why each component rendered while profiling.
2. Highlight updates when components render. (optional)

### React.memo()

React.memo() - not to be confused with the `useMemo` hook which we will talk about later - is a function that returns a component. The component is 'memoized' - think 'cached' if memoized trips you up - and the next time the component is asked to rerender, it first does a [SHALLOW comparison](https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js) between the previous and next props. If they are the same the component will not rerender and will instead use the 'memoized' component. 

React.memo() takes two arguments. The first is the component you want to memoize and the second is an optional callback function that will replace the default shallow comparison function. This is where you could implement an _.isEqual deep comparison from lodash or if you are confident that it won't be more of a performance hit than it is worth - you could use JSON.stringify to check the equality of the previous and next props. This second argument is very similar to the lifecycle method `shouldComponentUpdate(prev, next)` but for function components. 

### useCallback

The second argument of Reat.memo() is especially helpful if your props objects are objects but if you are passing functions as props you have another tool to control how React.memo works: `useCallback`. Usually you run into a problem comparing two functions as props because on the parent components render it creates two different versions of the same function in memory and when it compares them it says - 'NOPE! Different functions! RERENDER!"

The useCallback function takes two arguments - an inline function and an array of dependancies.  Once you wrap a function in useCallback, it will return the EXACT SAME function from memory unless one of the dependancies change. 

Tips:
- You will often have to use `React.memo()` on a child component and `useCallback()` on the parent component to see a change in the child components rerendering functionality
- REMEMBER the `useCallback()` function needs a dependancy array, like `useEffect()`, in order to be effective at all! I have forgot many times. 

&nbsp;

## But most importantly: The structure of your application.

### useReducer

`useReducer` isn't usually listed as one of the hooks that you will need to use in order to make your React application performant but we need to leverage this tool because `useState` is giving us a brand new callback function everytime the application is called so we cannot effectively apply `useCallback`.

`useReducer` takes two arguments: a reducer function and the current state, and returns a dispatch function (which will never change!! - that is what we need!) and the new state. 

&nbsp;

### And don't forget: useMemo

`useMemo` takes a callback function and a dependancies array and only returns the product of the function. `useMemo` returns the value while useCallback returns a function. It will only rerun if one of the dependancies change.

### Gotchas with useContext and rerenders

You can definitely use these perfomance optimizations with the Context API but there are a couple of gotchas. First, the profiler currently has a bug that says "The Parent component has updated" is the reason for a component updating because of context changing. This is because it is the default message. Second, the component will always update if the value that you are pulling in from context changes. You have to think about the structure of your app and where you pull in the context and which components are heavy in rerendering. [This article](https://lifesaver.codes/answer/preventing-rerenders-with-react-memo-and-usecontext-hook) gives some options about how to get around the issue, but ultimatly it is up to you to figure out a design that works for your application.  