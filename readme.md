# react.js coding challenge

Dear candidate,

Thank you for accepting our invitation to this coding challenge, which we only send
out to candidates that look very promising! So, congratulations!

## Your tasks
- read these instructions carefully
- this project contains the boilerplate for a simple react app. Extend the code
  to render two links: "HOME" and "MODELER" as part of a `Navigation` component.
- use `react-router` to implement the required routes: `/` to render `HomePage`
  and `/modeler` to render `ModelerPage`
- The `HomePage` component should simply render `<h1>Home</h1>`
- The `ModelerPage` component should render `<h1>Modeler</h1>` as well as an initialized modeler
  instance which is rendered into a container after the `<h1>`. By 'modeler' we refer to our
  popular JavaScript library bpmn.js (docs can be found here: https://github.com/bpmn-io/bpmn-js)
- Let us know when you are done by replying to our email in which we invited you to this challenge.
  Don't forget to include the link to your codesandbox project.

## Note
- your finished app should look like this: http://www.giphy.com/gifs/QmGWNIHVx6WxRqSDCc
- don't forget to save your changes by pressing above save button (or cmd+s), which will also 
  fork the project and generate a new project URL.
- there is no time limit as we generally don't believe that stress will lead to better results.
  However, it should take you less than 1 hour to complete this exercise.
- Run the tests in App.test.js for a basic validation of your work.
- We'll validate your submission by checking if your code is doing what it should do.
  We'll also inspect your style. So make sure your code is nicely structured, commented as needed
  and generally readable.

## Optional task
If you still have time left or want to show off and do something extra, include a third link
in the navigation which opens the OptionalPage (pages/OptionalPage.js).
- Make use of react, mobx and mobx-react to render a search input and a dynamic list of 
  items (use the items array as a reference).
- Use the input field to filter the list, query title and description to do a full-text
  search, hide elements in the list where neither title nor description contain the search
  term.
- An empty search input should always make the list show all items.
- If no title or description matched show an empty state (e.g.: no results found)

HAPPY CODING! :-)