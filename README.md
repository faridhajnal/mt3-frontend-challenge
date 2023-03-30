# MT3 Frontend Challenge

  
## App description

This is a single page application built with the angular framework. The objective of the application is for a user to be able to manage TODOs / tasks. The main features are the following:
- User can create new pending TODOs
- User can mark TODOs as done/completed
- User can delete TODOs.

  

## Technologies Used and why
  
  
 Latest version of angular (15) was used for developing this application. I chose this technology since it's the one I'm most familiar with. It supports Typescript out of the box, which allows the application to use the rich features of a typed language. It also provides a common application architecure pattern to be followed when creating your components and other type of files, which allow for better organization and a component-driven design and isolation.
 On top of that, the Angular Material UI framework was used, since it provides plenty of powerful custom components for common use cases on web apps (such as datepicker, selectors, tables). This allows for faster development time and implementation, but comes with the trade-off that they are not easily customizable when we talk about styling.
 Rxjs (which comes integrated into an angular application whenever you generate it via its CLI) was also used to follow a reactive programming pattern for the data that feeds the application, more on that in the _App features_ section

## App features Deep Dive

The user is presented with a minimal UI that has a square contained into another, just for wireframe purposes.

### Adding a new TODO
A static button with a "+" on it can be clicked for adding TODOs. The page initially has no elements, since only frontend technologies were used for the project and the local storage gets lost whenever the application is reloaded.
Whenever the user clicks the button, a dialog is presented and the user can enter a _text_ (free form input) and select a _priority_ (through a selector) for the task, a datepicker is also presented so that the user selects a _dueDate_ for the item. The date picker locks every date before today.
By using Angular forms, we can easily have validators in place for all 3 fields and not allow the user to click the _Create_ button until the data is valid. There is an additional validation that compares the entered text with the other TODOs and does not allow creation when it's equal as other one.
The TODO gets created with an _Active_ status. A unique, numeric,  incremental ID is also assigned for the element.
**Possible enhancement** Display the error on the dialog and allow for retry, current behavior is just displaying error on browser console and no item getting added to the cards.
### Visualizing TODOs
A card is presented for each active TODO. On it, the user can observe the text (as a title), the priority and the due date.
If a task is due for today or tomorrow, the card receives a special redish background to highlight this. If that's not the case, the card has a white background.

On the upper right corner, the user is presented a selector (whenever at least one card is present on the UI), that allows the user to sort the cards by due date (ascendent, descendent or none).
The UI also provides the possibility of dragging and dropping the cards, the behavior might present some inconsistencies when trying to reorder to different rows.
**Possible enhancement** Improve the Drag and Drop behavior and make it visually more appealing by maybe indicating where a card will be dropped before the user lets go of the mouse.
_Sidenote_: A CSS grid was implemented for presenting the cards. This allows the application to have a sense of responsiveness, since the cards count in each row will vary (up until a max number of 4) when having different screen sizes. However, this decision might have impacted the drag & drop behavior, maybe a regular list would provide better results and experience for that.
### Mark TODO as completed
For the TODO cards displayed for the user (only _active_ items), a "Mark Completed" button is presented. When clicked, the TODO changes its status to _Done_ and gets removed from the dashboard.
### Delete TODO
Very similarly as the previous feature, the user can create on the "Delete" button for a given card. Doing so will not remove the item in reality, but rather change its status to _Deleted_, as per the project requirements. That will of course mean that the item is not displayed on the dashboard though.
### TODO counts
On the bottom of the card grid, counts for _Active_ and _Done_ TODOs can be observed. These values get updated whenever an Add, Mark as Completed or Delete action is properly executed.
### State management
To manage the application's data state, which is in this case consists only of the TODOs, a service is being used. This service takes advantage of the RxJs library by using a _BehaviorSubject_. That's a special type that will be setting values in a stream-fashion, allowing the subscribers (_Dashboard component_ in this case) from it to pick them up and determine what to do everytime there's a change on the data.

_General Enhancement_ Use LocalStorage or Cookies to preserve the user TODOs on page reload.  

## Running the project locally

  

To be able to run the angular application in development mode (which provides very useful features such as live reloading), the target host needs to have NodeJs installed, preferrably the **LTS** version - which at the time of writing is 18 - since it's using the latest version of the Angular libraries.
Once Node is installed, on the project root directory run `npm install` to install project dependencies.
You can then run `npm start` , which will spin up a development server and make the application available at the `localhost:4200` address on your preferred browser.

  

## Deploying the project

  

A simple integration was done for deploying the application, by using **Github Pages**, using the helper library [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) . This handles running the build steps for the application and pushing into a specific branch on its GH repo, which at the same time gets configured to deploy to a GH pages assigned URL.
  