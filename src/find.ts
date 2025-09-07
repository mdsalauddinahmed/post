import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

const main = async ()=>{
 
     const getAlldata= await prisma.post.findMany();

    const findFirst = await prisma.post.findFirst({
        where:{
            id:10
        }
    })

    const findOneUnique= await prisma.post.findUniqueOrThrow({
        where:{
            id:10 
        }
    })
   console.log(findOneUnique)
    //  console.log(findFir)
}

main()