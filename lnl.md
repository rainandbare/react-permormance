# React Performance
##### Or how to keep your Components from ALWAYS re-rendering
## This blog post has been written MANY times before
* [here](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)
* [here](https://www.smashingmagazine.com/2020/07/methods-performance-react-apps/)
* [here](https://dmitripavlutin.com/use-react-memo-wisely/) 

But this one is right in front of you. Hopefully this discussion will either solidify your knowledge of these topics or introduce you to them so that when you find out you need to optimize your application you know where to start. 

Things we will cover:

* [React.memo / React.PureComponent ](https://nodejs.org)
* [shouldComponentUpdate](https://www.npmjs.com/package/markdown-it)
* [useCallback](/docs/editor/tasks)
* [useMemo](/docs/editor/tasks)
* React Tools Performance Tool

Other things that help with performance:

* Code Splitting 
* Lazy Loading
* Web workers or service workers


## When to start optimizing you application

## Think about seperation of parent and child information
  - Context vs passing props
  - 
## 

"Users enjoy fast and responsive user interfaces (UI). A UI response delay of fewer than 100 milliseconds feels instant to the user but a delay between 100 and 300 milliseconds is already perceptible."

- Dmitri Pavlutin

Turn on Profiler settings 
1. Record why each component rendered while profiling.
2.  Highlight updates when components render. (optional)