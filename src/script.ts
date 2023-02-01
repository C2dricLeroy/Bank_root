import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
//   const bank_account = await prisma.bank_account.create({
//     data: {
//       account_id: 2,
//       account_balance: 250,
//       account_RIB: 'alice.leroy.Bank'
//     },
//   })
//   console.log(bank_account)

  //find all bank_accounts --> findMany() return an array of objects
  // const users = await prisma.bank_account.findMany()

//   const customers = await prisma.customers.create({
//     data: {
//       customers_firstname: 'Bob',
//       customers_lastname: 'Leroy',
//       customers_password: 'test123456',
//       customers_username: 'cedric.leroy',
//       customers_id: 2,
//       // account_id: 3
//     }
// })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })