# express-nodemailer
Example of sending smtp mail with express api using nodemailer

# This is working example of express-nodemailer for new developers.

In this example, we use post request from our website query form and send email to you and your query victim. This app will also send a reverse mail to victim that "thank you for your query we have attached query details". its send a email to your email and victim email too with your smtp mail account.

I have used express api with nodemailer. This api use nodemailer for smtp connection with mail server and smtp auth requird for established connection to the mail server.

# Installation

step 1 - clone the git with url: https://github.com/samarmeena/express-nodemailer.git

step 2 - run npm install

step 3 - make required change in sendmail route like mail server configuration.

step 4 - run npm start

And now you will see in output that "your server is ready to take mails". Here you are done with all configurations. 

# Example

after running api you can visit on http://localhost:3000

to send a test email use this query parameters in your url 

http://localhost:3000/sendmail?name=victimname&subject=victimsubject&text=victimmessage&email=victimemail@domain.com&newslater=yes

now you can see in output that msg send and api response with email send.
