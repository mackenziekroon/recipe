# tiny-organics
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

**Future Improvements**
>I would like to fix the filtered queryset bug as mentioned above. I would also like to add an option in the allergens section where a user could click, "I certify that my child does not have any allergies.' That would ensure that the section is not missed somehow.

**Testing**
>It would be helpful to write tests to ensure the allergen filter is working correctly.
