# SkyScraper
**Please note not to use real passwords when using this application. Authentication has not been added**

Using Express Node to create an application that works with MongoDB, Mongoose, Cheerio, and Handlebars, SkyScraper is an application where users can scrape articles from www.accuweather.com to view articles about the weather. They can save articles, leave comments, and delete comments. You can view this project here: https://powerful-shore-41576.herokuapp.com/.

## How to Begin
 * Log in or create a user that will be added to the database by clicking the "Sign up" buton.
 * Once logged in, a user has two options: "Scrape!" or "View Saved Articles"
 		* When a user clicks on the "Scrape!" button, the app then render articles obtained from www.accuweather.com using Cheerio.
 		* When a user clicks on the "View Saved Articles" button, the app should then direct the user to a page that only renders articles that have been saved by the user.

## Saving an Article
 * When a user saves an article, the article will be updated to user's database and will be rendered when the user presses the "View Saved Articles" button.

## Viewing Comments
 * When a user clicks on "View Comments" of an article, they will be directed to a page that renders the details of the article including title, name, and link to the article. Ther user will also be able to see comments left by other users and have the ability to delete other users' comments. This feature may be changed in the future to where the user can only delete their own comment

## Posting a Comment
 * When a user posts a comment, Title and Body must be filled out before clicking the submit button otherwise a comment will not be created.
 * After posting a comment, the comment will be rendered onto the article's page.

## Deleting a Comment
 * When a user deletes a comment it will update the database for the article, user, and the comments. 

 Copyright 2018 Michelle Le

