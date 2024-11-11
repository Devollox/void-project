```

                ██▒   █▓ ▒█████   ██▓▓█████▄     ██▓███   ██▀███   ▒█████   ▄▄▄██▀▀▀▓█████  ▄████▄  ▄▄▄█████▓
               ▓██░   █▒▒██▒  ██▒▓██▒▒██▀ ██▌   ▓██░  ██▒▓██ ▒ ██▒▒██▒  ██▒   ▒██   ▓█   ▀ ▒██▀ ▀█  ▓  ██▒ ▓▒
                ▓██  █▒░▒██░  ██▒▒██▒░██   █▌   ▓██░ ██▓▒▓██ ░▄█ ▒▒██░  ██▒   ░██   ▒███   ▒▓█    ▄ ▒ ▓██░ ▒░
                 ▒██ █░░▒██   ██░░██░░▓█▄   ▌   ▒██▄█▓▒ ▒▒██▀▀█▄  ▒██   ██░▓██▄██▓  ▒▓█  ▄ ▒▓▓▄ ▄██▒░ ▓██▓ ░ 
                  ▒▀█░  ░ ████▓▒░░██░░▒████▓    ▒██▒ ░  ░░██▓ ▒██▒░ ████▓▒░ ▓███▒   ░▒████▒▒ ▓███▀ ░  ▒██▒ ░ 
                  ░ ▐░  ░ ▒░▒░▒░ ░▓   ▒▒▓  ▒    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░ ▒░▒░▒░  ▒▓▒▒░   ░░ ▒░ ░░ ░▒ ▒  ░  ▒ ░░   
                  ░ ░░    ░ ▒ ▒░  ▒ ░ ░ ▒  ▒    ░▒ ░       ░▒ ░ ▒░  ░ ▒ ▒░  ▒ ░▒░    ░ ░  ░  ░  ▒       ░    
                    ░░  ░ ░ ░ ▒   ▒ ░ ░ ░  ░    ░░         ░░   ░ ░ ░ ░ ▒   ░ ░ ░      ░   ░          ░      
                     ░      ░ ░   ░     ░                   ░         ░ ░   ░   ░      ░  ░░ ░               
                    ░                 ░                                                    ░                 

```
Void Project Shop is an online store selling headsets for computers and more, fully customizable and using the CMS system in `Strapi` video as well as `Redis`

## Setup

> You can use the Vercel server, since the site is written in Next.js, and deployment will be very simple or on your own dedicated servers.

### From Sources

1. Install [node.js](#nodejs-version-compatibility)
2. Run `git clone https://github.com/Devollox/void-project.git`
   of the repository)
3. Go into the cloned folder with `cd void-project`
4. Run `npm install` (only has to be done before first start or when you change the source code)
5. Run `npm run dev`
6. Browse to <http://localhost:3000>

## Demo
<http://>

## Documentation
Creates an `.env` file to which we add variables
```.env
  You can get it directly from GitHub - https://docs.github.com/ru/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions
GITHUB_ID= 
GITHUB_SECRET=

  You can get it directly from Google Console - https://console.cloud.google.com
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_SECRET=supersecret
NEXTAUTH_URL=[your domain]

  You can get it directly from Redis - [https://console.cloud.google.com](https://upstash.com/)
NEXT_PUBLIC_UPSTASH_REDIS_REST_URL=
NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN=

  You can get it directly from Strapi - https://cloud.strapi.io
NEXT_PUBLIC_STRAPI_SERVER=
```
## Stack

> 1. Next.js
> 2. Next Auth.js
> 3. Redis - main DB
> 4. Strapi - control product cart

### There should not be any difficulties; you will need to create a CMS where you will need to add

1. title - VGN F1 PRO MAX
2. description - \
3. price - 7,499
4. slug - vgn_f1_pro_max - `it should always be different`
5. type - mouse
6. keyfatures - \
7. image - [1-4]

#### After setting up `Strapi` and opening and adding it to `.env`, your site should start smoothly and cards will be displayed
