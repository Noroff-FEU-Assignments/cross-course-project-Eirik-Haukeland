[![Netlify Status](https://api.netlify.com/api/v1/badges/6cadece7-376e-4ed3-8df7-01112636b75b/deploy-status)](https://app.netlify.com/sites/joyful-halva-a4d44f/deploys)

# [README: cross course project](https://github.com/Noroff-FEU-Assignments/cross-course-project-Eirik-Haukeland)
by [Eirik Berget Haukeland](https://github.com/Eirik-Haukeland)

This is the code for the front end of my food blog

## Built With
- Html
- Css
- JavaScript
- cms (WordPress)

## get the code

### with gh cli tool
you need to download gh cli tool [look here for information](https://github.com/cli/cli#installation)

Fork the repo:
``` shell
  $ gh repo fork git@github.com/Noroff-FEU-Assignments/cross-course-project-Eirik-Haukeland
```

### with standard git cli
you need to download git cli tool [look here for information](https://git-scm.com/downloads)

clone the repo:
``` shell
  $ git clone git@github.com/Noroff-FEU-Assignments/cross-course-project-Eirik-Haukeland
```

check the current remote:
``` shell
  $ git remote -v
```

set the new remote:
``` shell
  $ git remote set-url origin http://newserver/myproject.git 
```

verify that the remote has been sett properly:
``` shell
  $ git remote -v
```

push to new repo:
```shell
  $ git push origin master
```

## hosing the front end
once you have the repo you will need to sett up the web host:

you might use [GitHub pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site),
Netlify [se here](https://docs.netlify.com/get-started/), or
sett your own web server.

be sure to set the frontend folder to the root folder
of the web page

## setup cms whit docker
I used WordPress with the "WooCommerce" plugin

you will need a sql database like [mariadb](https://hub.docker.com/_/mariadb)
or [mysql](https://hub.docker.com/_/mysql) then you will
need to add sett up a [WordPress](https://hub.docker.com/_/wordpress)

### set up the network for your container
```shell
  $ docker network create [name-of-network]
```

### set up the database (here we are using mariadb)
```shell
  $ mkdir [path/to/db]

  $ docker run \
      --detach \
      --network [name-of-network] \
      -v [path/to/db]:/var/lib/mysql \
      --name [name-db] \
      --env MARIADB_DATABASE=[name-db] \
      --env MARIADB_USER=[user-name] \
      --env MARIADB_ROOT_PASSWORD='[root password]' \
      --env MARIADB_PASSWORD='[personal password]' \
      mariadb:latest
```

### set up the WordPress
```shell
  $ mkdir [path/to/wordpress]
  
  $ sudo docker run \
      --network [name-of-network] \
       -v [path/to/wordpress]:/var/www/html \
      --name [wordpres-name] \
      -p 8080:80 \
      -p 443:443 \
      -d wordpress
```

### WordPress setup
when setting up the database:
- set database name to the value from MARIADB_DATABASE (from the db setup)
- set username to the value from MARIADB_USER (from the db setup)
- set password to the value from MARIADB_PASSWORD (from the db setup)
- set database host to the value from name (from the db setup)

### adding WooCommerce plugin
- go to plugins tab
- click on "Add New"
- search for "WooCommerce"
- click "install now" and then "activate"
- go through the setup
- afterwords you can go to the "products" tab and add you 
products

### change to code
change the urls of the fetch request on
[a_game.js](frontend/js/a_game.js), [browse_game.js](frontend/js/browse_game.js), 
[order.js](frontend/js/order.js), [order_complete.js](frontend/js/order_complete.js),
and [index.js](frontend/js/index.js)

## License
You are free to copy, modify, and distribute exam project 1
with attribution under the terms of the Creative Commons
Attribution license. See the [Creative Commons Attribution
4.0 International License](http://creativecommons.org/licenses/by/4.0/) file
for details.
