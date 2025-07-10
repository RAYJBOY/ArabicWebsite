For the server, if you are using in dev mode, just run "npm run dev"
If you want to build the files, run "npm run build"

Stripe
To get stripe to listen to webhooks locally, folow these steps:
1) Open terminal
2) Type `stripe login`. You'll be given a pairing code in the terminal. Hit enter and you'll be taken to the website and shown the same pairing code. Check to see the pairing code matches in the terminal
3) Type `stripe listen --events checkout.session.completed --forward-to localhost:8080/webhook/stripe`
4) Copy the webhook signing secret into your .env file. You should now receive webhooks!

For Prisma schema changes, do the following:
1) Make the change to the schema file
2) npx prisma generate
3) npx prisma migrate dev --name init --create-only
4) npx prisma migrate deploy

To reset the DB, do the following:
1) Remove all files in prisma/migrations (including migration_lock.toml)
2) npx prisma migrate reset
3) npx prisma generate
4) npx prisma migrate dev --name init --create-only
5) npx prisma migrate deploy

Steps to go live
1) Stripe must exit from test mode. Complete your business account on stripe.
   - Replace dev keys with live keys. Go to dashboard -> API Keys. Copy secret key
   into STRIPE_SECRET_KEY in the .env file
   - Add a webhook endpoint. When a checkout session is completed, Stripe will inform this webhook. This should be 'https://yourDomain.com/stripe'
   - Get the STRIPE_WEBHOOK_SECRET from the webhook dashboard and store it in the .env file. This is what you'll use on prod