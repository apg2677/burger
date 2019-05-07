# Good Burger

-  Good burger is an online app designed to demonstrate the use of orm's and handlebar templating in a full stack application.

-  Good burger uses the custom built orm to implement CRUD operations

<br>

## Overview
- Good burger queries a mysql database to retrieve all the rows in the database corresponding to each individual burger

- The burger table is composed of two main columns:
  , Name: which is the name of the column, and devoured: which is a boolean value

- If the burger is not eaten it shows up in one pod and if devoured it is placed in another pod

- Each burger has a button that when clicked toggles which pod it should be placed in
 

## Adding Burgers

- The add portion of the page allows the user to enter a name for a new burger to be added to the database

- It also allows a radio button choice for wether the burger has been eaten or now

- It then populates the databse and displays the reults in the top portion of the screen


## Future fixes:
- Currently if you add too many burgers it does not properly display them on the screen, instead it overflows
- A solution might be to create a modal window for the add feature
  and a scroll bar the the returned data