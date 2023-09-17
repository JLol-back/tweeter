# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Users can create short posts of up to 140 characters and have them append to the main page. Posts are sequential, with the most recent posts appearing at the top of the page. To do so, Tweeter asynchronously fetches a list of posts from a simplified ‘server’ and allows users to add posts to this list dynamically. 


## Demo

### Tweeter UI

<img title="Tweeter UI " alt="Tweeter UI" src="/public/images/tweeter-ui.png">

### Tweeter Character Counter

<img title="Character Counter" alt="Character Counter" src="/public/images/character-counter.gif">

### Error Handling

<img title="Tweet Error Handling" alt="Tweet Error Handling" src="/public/images/tweet-errors.gif">


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express 4.18.2 or above
- Node 5.10.x or above
- Body Parser 1.20.2
- Chance 1.1.11
- md5 2.3.0
