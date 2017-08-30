# Express-nodemailer
Example of sending smtp mail with express api using nodemailer

# This is working example of express-nodemailer for new developers.

In this example, we use post request from our website query form and send email to you and your query asker. This app will also send a reverse mail to questioner that "thank you for your query we have attached query details". its send a email to your email and questioner email too with your smtp mail account.

I have used express api with nodemailer. This api use nodemailer for smtp connection with mail server and smtp auth requird for established connection to the mail server.

# Installation

step 1 - clone the git with url: https://github.com/samarmeena/express-nodemailer.git

step 2 - run npm install

step 3 - make required change in sendmail route like mail server configuration.

step 4 - run npm start

And now you will see in output that "your server is ready to take mails". Here you are done with all configurations. 

# Example

after running api you can visit on http://localhost:3000

to test your form, submit form details on below api 

http://localhost:3000/sendmail?name=formname&email=form@email.com&msg=form%20message&newsletter=true

now you can see in output that msg send and api response with email send.

# Thank you
