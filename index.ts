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
  //   const users = await prisma.user.findMany();

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
