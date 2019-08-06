#  Heyjobs Test Automatino Framework
Welcome to Heyjobs test automation framework
Framework: Mocha using Webdriver IO
Pattern: Page Object Pattern
Assertions: Chai
Style: BDD

## Setup
This requires node version v10.16.1 to be installed 
To install node visit
```https://nodejs.org/en/download/```

## How to run the tests

To run the test, install the dependencies.

```
yarn install

```
Run the task from the root using the below commands.

```
yarn test

```
## Visual Regression Test
Following command will run the visual regression test 
on the job list page for job image and assert the screenshot. 
But on the job list page the image is dyanamic and changes each time this might FAIL.

```
yarn tests:visualregression
```