Instrucation on how to run:

1.  Create a .env file in the sample-project-api folder
2.  Inside put and define the following
      DB_CONNECTION=
      DB_HOST=
      DB_PORT=
      DB_DATABASE=
      DB_USERNAME=
      DB_PASSWORD=
3.  Open XAMPP
4.  Start Apache and MySQL
5.  Open command line and cd into the sample-project-api folder
6.  Run the following commands:

      --php artisan migrate:fresh
      
      --php artisan db:seed --class=UsersTableSeeder
      
      --php artisan db:seed --class=ProjectsTableSeeder
      
      --php artisan serve
      
7.  Open a new instance of command line and cd into the sample-project folder
8.  Run the following command:

       --ng serve

9.  Open browser and put in the address bar: "https://localhost:4200/user/{user}". Replace {name} with a real name (Stuart,Tyler, Adam or Lan)

<img src='Stuart.png'/>
<img src='Tyler.png'/>
<img src='Adam.png'/>
<img src='Lan.png'/>
<img src='E-commerce.png'/>
<img src='AngularUpgrades.png'/>
<img src='WebsocketUpdates.png'/>
