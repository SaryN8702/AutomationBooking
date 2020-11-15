This test was created with cypres.
Cypress is a e2e automation tool FE tool created with JS, MOCHA and CHAI as actions librery.
This tool doesn't need to use SELENIUM or web driver to be run.

INSTRUCTIONS 

- For running this test you need to have Node.js on you laptop
- Inside the project run: `npm install -y`
- Then run `npm install cypress` to install cypress
- For running a cypress test use: `npx cypress open` and then the UI will open
- Select the name of the `spec.json` you want to run. (in this case the folder is `booking.spec.js`)


VIEWPORT SETUP

- Cypress runs on 1600 x 800px viewport by the default , so in the `cypress.jason` folder you will find a viewport setup (1440 x 800px) to overwrite the default one and avoid the selectors change on desktop test.

COOKIE ACCEPT 

- In order to avoid cookie banner shows up the whole test, in the `index.js` folder is the command to accept the cookie before the test runs so the banner is not going to show up every time the test need to be run.
