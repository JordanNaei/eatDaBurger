# Eat-Da-Burger Application
![GitHub license](https://img.shields.io/badge/Made%20by-%40Eng.JordanNaei-orange)
![License](https://img.shields.io/badge/License-ISC-blue.svg "License Badge")

# Description
Eat-Da-Burger is an application that allows the client to input burger of their choices, then this burger will be displayed on "Waiting to be Devoured" list with a click button, and once clicked then the burger will move to the "Devoured Burgers" section. List below illustrate the functionality in bullet pionts format for simplicity:

- Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
- Whenever a user submits a burger's name, the application will display the burger on the left side of the page -- waiting to be devoured.
- Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
- The application will store every burger in a database, whether devoured or not.

# Application Functionalities illustration video
![Git](videos/burgerGif.gif)

## Technologies and Frameworks Used
- Node.js.
- Express.
- Handlebars.
- My SQL.

# Installation
- Run npm i.
- Run node server.js.

# Database Design
Our Database burger_db consists of one table:
- burgers: 
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(100) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY(id)CHAR(100).

# Test
.vscode is added to the root directory to facilitate a smooth debuggin experince.

# Repository

- [Project Repo](https://github.com/JordanNaei/eatDaBurger)

