import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

const main = async ()=>{

    // create single data 
    //  const result = await prisma.post.create({
    //     data:{
    //         title:"first post 2",
    //         content:"this is my first post and content...2",
    //         authorName:"Amir mahmud ....2"
    //     },
     
    //  })
    //  const getAlldata= await prisma.post.findMany();
    //  console.log(getAlldata)

    // create  multiple data

    const createMany = await prisma.post.createMany({
        data:[
            {
                title:"Title 1",
                content:"content 2",
                 
            },
            {
                title:"Title 2",
                content:"content 2",
             
            },
            {
                title:"Title 3",
                content:"content 2",
                 
            },
        ]
    })
    console.log(createMany)
}

main()