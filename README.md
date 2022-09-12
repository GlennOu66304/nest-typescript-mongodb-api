MANT  Stack([MongoDB Angular NestJS TypeScript](https://morioh.com/p/ffa5a649384f))



## 1.specify the node version

## 2.build the Profile 

## 3.Mongodb connection issue fix



Do not use the command option to set the mongod db env value, just copy the value from mongdb atlas, then paste it into the env config value

[Heroku deployment with mongodb atlas failed](https://forum.codewithmosh.com/t/heroku-deployment-with-mongodb-atlas-failed/1626)

## 4.[When I run `npm install`, it returns with `ERR! code EINTEGRITY` (npm 5.3.0)](https://stackoverflow.com/questions/47545940/when-i-run-npm-install-it-returns-with-err-code-eintegrity-npm-5-3-0)

```
Delete package-lock.json file and then try to install
```

## Regular deploy follow up



[Deploying a NestJS App With Heroku](https://medium.com/weekly-webtips/deploying-a-nestjs-app-with-heroku-5fa84cb5b6c6)

[Deploying a Production NestJS Server on Heroku](https://www.joshmorony.com/deploying-a-production-nestjs-server-on-heroku/)

[Deploy NestJS typescript app to Heroku (Solved: 503 Error)](https://dev.to/rosyshrestha/deploy-nestjs-typescript-app-to-heroku-27e)

## BackEnd:

1.Tech Stack:

1.1Mongodb

1.2.Nest JS

1.3.Typescript



2.Set Up the Bakc End Project:

Model Controller Route main route

2.1 Model: user.ts
1
2.2 Controller(repository):mongoose function--->user.repository.ts

2. 2.3 all in one: user.module.ts

2. 2.4controller in nest: responsible for the error or success of the mongoose process

2. 2.5Route:is in the app.module and router.module

[Setup project](https://javascript.plainenglish.io/build-a-server-side-app-with-typescript-nestjs-and-mongodb-d29d26ac1ab3)

[Modern Full-Stack Development with Nest.js, React, TypeScript, and MongoDB: Part 1](https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/)

##Front End:

1.Tech Stack:

1.1Angular

1.2.Typescrip



2.Build the Angular Project

2.1 build the project

2.2 build the route

if you can not see the router page result, you can clean the app.component.html code content, then replace the content 

with only the 

```
<div class="container">
    <router-outlet></router-outlet>
  </div>
```



2.3 then restart the project

[Build a web app using Nestjs, createdAt, MongoDB and Angular 8](https://www.djamware.com/post/5d2898430707cc5968d9d57f/build-a-web-app-using-nestjs-fastify-mongodb-and-angular-8)

[MEAN Project](https://livebook.manning.com/book/getting-mean-with-mongo-express-angular-and-node-second-edition/chapter-4/)



# [Difference between ng add  vs npm install  in angular 6](https://stackoverflow.com/questions/50169680/difference-between-ng-add-package-name-vs-npm-install-package-name-in-angula)



# [Angular 4 - Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application](https://stackoverflow.com/questions/46683027/angular-4-please-include-either-browseranimationsmodule-or-noopanimationsmo)