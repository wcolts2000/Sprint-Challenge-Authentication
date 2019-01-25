# Sprint Challenge: Authentication - Dad Jokes

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Authentication. During this Sprint, you studied Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication. In your challenge this week, you will demonstrate proficiency by creating an application that will give you a list of random dad jokes, as long as you are authorized.

- **DISCLAIMER** Authentication is a subject that many people spend a large amount time throughout their careers obtaining knowledge over. This is not something we expect you to have a mastery over, rather, we're preparing you to be able have an intelligent conversation about the subject.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency w/ Authentication and your command of the concepts and techniques in the Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are currently locked out.

Implement an User Authentication System in order to access the jokes from the Jokes API that we want to consume. You will need to ensure that your system uses `bcrypt` for hashing and encrypting your user's passwords, as well as JWT for handling the authorization aspect of the app.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. What is the purpose of using _sessions_?

Sessions provide a way of retaining bits of information or data about the client between requests. They are unique to the device (each new program is a new device, i.e. a new incognito tab in a browser or a different browser altogether will receive a new session and these cannot be shared)

1. What does bcrypt do to help us store passwords in a secure manner.

bcrypt adds salts to the end of the password and then sends it through a series of hashing rounds that will rehash the hashed password and return that newly generated hash back to us to store so we are not liable for storing any plain text passwords

1. What does bcrypt do to slow down attackers?

you can adjust the amount of hashing rounds that the password will go through. the higher the number (they increase exponentially) the longer it will take per password attempt, significantly slowing down the amount of passwords that a brute force attack can do and increasing the amount of time it would take to generate a rainbow table even if they were able to determine the salts used.

1. What are the three parts of the JSON Web Token?

- the header, containing the algorithm used to create the token (commonly the sha256 hashing algorithm) and the type (in our use case, JWT).
- the payload, containing the claims, this portion containing some pre defined claims such as the "sub" (subject) and the "iat" (issued at date/time) and any custom values we would like stored about that user, often a userId or username.
- the signature, containing the secret which is kept on the backend usually in the environment variables that the server used to properly identify the token as valid.

## Project Set Up

Follow these steps to set up and work on your project:

- [ x ] Create a forked copy of this project.
- [ x ] Add PM as collaborator on Github.
- [ x ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ x ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ x ] Implement the project on this Branch, committing changes regularly.
- [ x ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] `cd` into the root of the project and run `yarn` to install dependencies.
- [ ] Once you have your `node_modules` go ahead and run `yarn server` or `npm run server` to start your node server.
- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by merging the branch back into master.

Helpful Tip on Testing this Project:

- [ ] **TEST** this project using **`POSTMAN`**.

## Minimum Viable Product

- [ ] Implement the `register` function inside `/config/routes.js`.
- [ ] Implement the `login` function inside `/config/routes.js`.
- [ ] Use JSON Web Tokens for authentication.

**Note** The migrations and a database with empty users is already included

- [ ] Add the authentication related code. If every is done correctly, visiting `/api/jokes` should return a list of jokes.

## Stretch Problem: Build a front end to interface with your User Auth System

- Add a React client that connects to your API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- Once you have the functionality down, style it!
