# Drawn n' share API
This is the API of the drawn n' share project.

# Usage

## Prerequisites
Since it's a nodejs API, you'll need nodejs to run it and npm to get the third-party packages. If under Linux, a quick command-line will do:

``` bash
sudo apt-get install nodejs
sudo pacman -S nodejs
sudo yum nodejs
``` 

We're using MySQL as our database dialect, and Sequelize as our ORM. To enable sequelize to talk to the local database, just change the approppriate settings in the models/index.js file:

``` JavaScript
var sequelize = new Sequelize('drawnshare', 'root', 'toor', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306
});
``` 

And lastly, you'll need to create a database (default name should be drawnshare, as shown above).

## Launching
We're planning to add an extensive API documentation so it'll be pretty easily usable, but until then, here's how to get the API up and running localy:

``` bash
# install nodejs dependencies
npm install
# Get the local server up and running
node index.js
```

# Todo
* [ ] Add findAndCreate() after checking if the task exists instead of plain create()
* [ ] Authentification
* [ ] Unit testing
* [ ] API doc
