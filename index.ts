import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // create
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "john doe",
  //       email: "john@gmail.com",
  //     },
  //   });
  const users = await prisma.user.findMany();

  //   create article and associate it with a user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Johns first article",
  //       body: "This is john first article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  // get all the articles
  const articles = await prisma.article.findMany();
  // create user and articles and associate them

  // const user = await prisma.user.create({
  //   data: {
  //     name: "Sarah Smith",
  //     email: "sara@gmail.com",
  //     articles: {
  //       create: {
  //         title: "Sarah first articles",
  //         body: "This is sarah first articles",
  //       },
  //     },
  //   },
  // });
  // create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Sample article",
  //     body: "this is a sample article",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // Loop over sarah articles
  // users.forEach((user) => {
  //   console.log(`User:${user.name}, Email:${user.email}`);
  //   console.log("articles:");
  //   user.articles.forEach((article) => {
  //     console.log(`-title:${article.title}, body:${article.body}`);
  //   });
  //   console.log("\n");
  // });

  // update data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "John Doe Jr",
  //   },
  // });

  // delete article
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  console.log(articles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
