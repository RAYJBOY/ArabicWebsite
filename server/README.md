For the server, if you are using in dev mode, just run "npm run dev"
If you want to build the files, run "npm run build"

Stripe
To get stripe to listen to webhooks locally, folow these steps:
1) Open terminal
2) Type `stripe login`. You'll be given a pairing code in the terminal. Hit enter and you'll be taken to the website and shown the same pairing code. Check to see the pairing code matches in the terminal
3) Type `stripe listen --events checkout.session.completed --forward-to localhost:5001/webhook/stripe`
4) Copy the webhook signing secret into your .env file. You should now receive webhooks!

For Prisma schema changes, do the following:
1) Make the change to the schema file
2) npx prisma generate
3) npx prisma migrate dev --name init --create-only
4) npx prisma migrate deploy