# project details
To run project locally

**Start backend server by running:**
>python manage.py runserver

**Start frontend by running:**
>npm run dev


**Database Details**
>I used PostgreSQL as the database because it allowed me to use PostgreSQL specific model fields. I used ArrayField in order to store arrays in my database.

>I created a seed file to utilize the 2 external APIs. The seed file fetches the API data and sorts it into the correct tables.

**Frontend Details**
>The frontend is being managed by React and the state is being managed by Redux. I was able to use react router to navigate to different pages.
>The Allergens & Recipes displayed on the frontend are being fetched from the database. The customer data that is entered in the form is being saved in the database in a Customer table. I ran into several bugs tring to use Django's exclude queryset in order to filter the recipes. As a temporary fix, the recipes are being filtered on the front end before being rendered. This is something that I would like to fix in the future.


