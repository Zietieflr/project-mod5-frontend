# O'Tock

## What is it?
This project came from a need to focus, and also step away from the computer from time to time. Finding a balance between work and distraction can be hard, and by setting time to do one or the other, both can exist. This stems from the ideology of pomodoro timers and agile sprints. 

A full stack app with core functionality built in 10 days, this app is my first step toward disciplining myself toward healthier and more effective programming. 

## What can it do?
You can enter in time to work and then to break for, adding as many as makes sense to you. When you press play it will present a visual representation of the time you have remaining. The timer will not continue until you acknowledge the popup window on the main sight, though it will produce a system notification (it was there, but the video below didn't record it.) After completing both work and break timer, the values will change color to inform you where you are in your set, and these can be refreshed with the history button. If you are logged into an account, you can save a schedule with either a default or custom name. These can be added to your current session, or completely deleted at any time.

## Demonstration video
[Take a look at the project in action.](https://youtu.be/g8NV0A0ktT0)

## Project setup
This repo is the Frontend, you'll need both this repository and the [Backend](https://github.com/Zietieflr/project-mod5-backend) running locally to get the full effect of this project. The [Backend](https://github.com/Zietieflr/project-mod5-backend) will focus exclusively on it's own installation, while this document will cover everything else. 

This guide assumes you have [npm installed](https://www.npmjs.com/get-npm).

Once you have this repository locally, navigate to the local directory for the project in terminal and run:
```
npm install
```
This will take a moment, but once you've done that, you'll be able to run the Frontend!

## Running a development server
Inside the local directory, run:
```
npm run serve
```
Doing this will host the Frontend on [http://localhost:8080](http://localhost:8080). If it does not open automatically, then you can follow or navigate to the provided local host link.

## Technologies
This project was built with:
- Vue
- Ruby on Rails
- SweetAlerts (via VueSwal)
- Chart.js (via vue-chartjs)
- FontAwesome (via vue-fontawesome)
- Web Notification API (via vue-native-notification)
