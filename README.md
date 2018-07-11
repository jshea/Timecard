# Timecard

This is a sample application for Angular and Material Design. It uses a weekly Timecard as the use case.

It uses the Angular InMemoryWebApi to simulate REST calls against hard coded data.

Todo
* Add date picker
  * create a blank TC for new dates
* Update/edit
* Editable table
  * https://github.com/swimlane/ngx-datatable ?
* Clone previous week to this week
* Submit the timecard
* PWA features
* Use Elastic as a datasource
* Run with nginx
* Node/HapiJS middle tier
* Run in a Docker container
  * Container with nginx/app
  * Container with NodeJS/Hapi REST services
  * Container with Elastic. Data and logging
  * Container with Kibana for Elastic querying & data loading?