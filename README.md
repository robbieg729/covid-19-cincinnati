## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Interaction](#interaction)

## General Info
***
This project is a series of HTML webpages that allow users to see Covid-19 data, guidance, and info, in the city of Cincinnati, OH, USA. It contains 5 different webpages: index.html (home page), symptoms.html, protectingYourself.html, whatToDoIfYouAreSick.html, and publicTransport.html. It also contains a style.css file for all of the webpages, plus an index.js file which is linked to the index.html page only.
***

## Technologies
***
The technologies used in this project are:
* [Bootstrap](https://getbootstrap.com/): Version 5.0.0
* [jQuery](https://jquery.com/): Version 3.5.1
***

## Interaction
***
Each HTML page contains a column on the left showing a menu/navigation, and references to images used. The menu initially contains 3 items: 'Interactive Map', 'Guidance', and 'Public transport info'. The 'Guidance' item is collapsible and when clicked, will show 3 more items: 'Symptoms', 'Protecting yourself', and 'What to do if you feel ill'. All of these menu items contain hyperlinks to the corresponding page.
***

### index.html page
The index page contains an interactive map of Cincinnati, showing the 53 different neighborhoods in the city. Clicking on a neighborhood area of the map will display the basic Covid-19 data such as cases and deaths in a column to the left of the map. An initially hidden collapsible row of advanced data, showing statistics such as cases by age, can be shown by clicking the 'Show advanced data' button. Clicking the 'Total' button to the left of the 'Show advanced data' button will display the data for the whole of Cincinnati.
***
Also initially hidden, is a form containing checkboxes, and color-coded circles showing the locations of various services such as hospitals and Covid-19 testing sites on the map. These elements can be shown by clicking the 'Show services' button. All of the circles, which contain popover information that will be displayed when clicked, are initially visible after clicking the 'Show services' button, but their visibility can be changed by using the checkbox form on the left edge of the map.
***

### Guidance pages
All of the guidance pages contain only textual information, giving information on Covid-19 such as symptoms, and instructions on what to do in various scenarios. All of the guidance pages, except for symptoms.html, contain collapsible elements, all initially hidden, that will display text when their header is clicked.
***

### publicTransport.html page
This page shows textual information on how public transport in Cincinnati has been affected by Covid-19, and what measures certain companies are taking to try and reduce the spread of the virus on public transport vehicles.
