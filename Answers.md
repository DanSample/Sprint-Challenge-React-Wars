# Answers

1.  What is React JS and what problems does it try and solve?
2.  
3.  React JS is a User interface component library developed by Facebook to build fast and              interactive user interfaces. In large scale applications and websites the DOM has to work           quickly to keep up with the high rates of changes. React solves this by using a concept called      the virtual DOM. A page rendered with React stores the state of the DOM tree. When changes are      made to the UI the 'old' DOM is checked against the virtual DOM and only the things that have       changed are affected. This keeps the DOM from having to fully refresh everything in the page        and only refresh the changes that have been made.

4.  What does it mean to _think_ in react?
5.  
    When building a React project you want to think about it in a few steps. First start with a mock up, then break the UI into a component hierarchy, next build a static version of your project in React, after that identify the minimal representation of the UI state, then identify where your state should live, finally add inverse data flow.

6.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Class/Stateful component is a React class component with state declared on it. A Functional/Presentational component do not know how to load or alter the data they render, they are a stateless component.

7.  Describe state.

    State is an object that represents the parts of the app that can change. It is like the heart of the React ecosystem.

8.  Describe props.

    Props are like the blood of the React ecosystem. They allow us to pass state data around to other components. Giving us the ability to have 'Reactive' applications.