import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

const main = async ()=>{

    // const deleteone = await prisma.post.delete({
    //     where:{
    //         id:12
    //     },
        
    // })


    // const deleteMany = await prisma.post.deleteMany({

    // })


    const upsetData = await prisma.post.upsert({
        where: {
            id: 1
        },
        create: {
            title: "New Post",
            content: "This is a new post",
           
        },
        update: {
            title: "Updated Post",
            content: "This post was updated",
           
        }
    })
    console.log(upsetData)
}

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

main()