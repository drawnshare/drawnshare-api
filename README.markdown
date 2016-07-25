# Drawn n' share API
This is the API of the drawn n' share project.

# Usage

## Docker
You can run the API in docker with the following commands:
```
docker build -t drawnshare-api ./
# and then
docker start -p 3000 -d drawnshare-api
```

## Prerequisites
Since it's a nodejs API, you'll need nodejs to run it and npm to get the third-party
packages. If under Linux, a quick command-line will do:

```bash
sudo apt-get install nodejs
sudo pacman -S nodejs
sudo yum nodejs
```

We're using MySQL as our database dialect, and Sequelize as our ORM. To enable sequelize to talk to the local
database, just change the approppriate settings in the models/index.js file:

```JavaScript
var sequelize = new Sequelize('drawnshare', 'root', 'toor', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306
});
``` 
You'll also probably need to create the matching database. Even an empty one will do, as sequelize will
populate it.

## Launching
As said right above, you can't expect to launch a working server without a database ready.
Then you can:

```bash
# install nodejs dependencies & get the local server up and running
npm install && npm start
```
There you go. You should now have a running server. You can access it locally by reaching for
`localhost:3000`.
More on how to use the API on the [API documentation](https://drawnshare.github.io/drawnshare-api) brought
gracefully to you.

# Todo
* [X] API doc
* [ ] Authentification
* [ ] Unit testing
