# Ecommerce

## Ecommerce Admin

This is admin for seller. provide Graphql API.

### Clone Responsitory

```
git clone git@github.com:LoaLoa-Tech/ecom-admin.git
cd ecom-admin
git checkout 4.0.1
npm i
```

### Run with development

```
npm run dev
```

### Deployment 

```
npm run build
git add .
git commit -m "build"
git push origin 4.0.1
```

## Ecommerce Static

This is client website. Using Ecommerce Admin Graphql API. It was build by Ecommerce Client.

### Clone Responsitory

```
git clone git@github.com:LoaLoa-Tech/ecom-static.git
cd ecom-admin
git checkout master
npm i
```

Move static file to ./<user_email> [example](https://github.com/LoaLoa-Tech/ecom-static/tree/master/yensaodatquang)

```
git add .
git commit -m "upload"
git push origin master
```




## Ecommerce Client

Using Ecommerce Admin Graphql API to build client static website from json file.

### Clone Responsitory

```
git clone git@github.com:LoaLoa-Tech/ecom-client.git
cd ecom-admin
git checkout master
npm i
```

### Run with development

Create JSON in ./config/<user_email>__-dev.json__

Required JSON file above in ./config/index.js

```
npm run dev
```

### Build Static File

Create JSON in ./config/<user_email>.json ([example](!https://github.com/LoaLoa-Tech/ecom-client/config/yensaodatquang.json))

Required JSON file above in ./config/index.js

```
npm run export
```

Then, the file export in ./out

### Deployment 

You only deploy by move static file and push to __[Ecommerce Static](https://github.com/truongduchuy910/ecom-static)__

### Build Static File

First, get all user with __Ecommerce Admin__ [API](https://github.com/truongduchuy910/ecom-admin/docs/API.MD)

Create JSON in ./config/<user_email>.json ([example](!https://github.com/LoaLoa-Tech/ecom-client/config/yensaodatquang.json))

Required JSON file above in ./config/index.js

Next, let's export:

```
npm run export
```
