import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

const main = async ()=>{
    //  const result = await prisma.post.create({
    //     data:{
    //         title:"first post 2",
    //         content:"this is my first post and content...2",
    //         authorName:"Amir mahmud ....2"
    //     },
     
    //  })
     const getAlldata= await prisma.post.findMany();
     console.log(getAlldata)
}

main()