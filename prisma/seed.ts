import { 
    blacklistedUserData,
    bookContractData,
    bookingData,
    bookingDetailData,
    contractData,
    feedbackData,
    helperAvailabilityData,
    helperData,
    refundData,
    serviceDetailData,
    serviceCategoryData,
    serviceTypeData,
    userData 
} from "./mockData";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //user
    // for (let user of userData) {
    //     await prisma.user.create({
    //         data: {
    //             gender: user.gender,
    //             fullName: user.fullName,
    //             dateOfBirth: new Date(user.dateOfBirth),
    //             identifyCard: user.identifyCard,
    //             address: user.address,
    //             phoneNumber: user.phoneNumber
    //         }
    //     });
    // }

    //serviceCategory
    // for (let serviceCategory of serviceCategoryData) {
    //     await prisma.serviceCategory.create({
    //         data: serviceCategory
    //     });
    // }

    //serviceType
    // for (let serviceType of serviceTypeData) {
    //     await prisma.serviceType.create({
    //         data: serviceType
    //     });
    // }

    //helper
    // for (let helper of helperData) {
    //     await prisma.helper.create({
    //         data: helper
    //     });
    // }

    //helperAvailability
    // for (let helperAvailability of helperAvailabilityData) {
    //     await prisma.helperAvailability.create({
    //         data: helperAvailability
    //     });
    // }

    //booking
    // for (let booking of bookingData) {
    //     await prisma.booking.create({
    //         data: booking
    //     });
    // }

    //bookingContract
    // for (let bookContract of bookContractData) {
    //     await prisma.bookingContract.create({
    //         data: bookContract
    //     });
    // }

    //contract
    // for (let contract of contractData) {
    //     await prisma.contract.create({
    //         data: contract
    //     });
    // }

    //feedback
    // for (let feedback of feedbackData) {
    //     await prisma.feedback.create({
    //         data: feedback
    //     });
    // }

    //refund
    // for (let refund of refundData) {
    //     await prisma.refund.create({
    //         data: refund
    //     });
    // }

    //serviceDetail
    // for (let serviceDetail of serviceDetailData) {
    //     await prisma.serviceDetail.create({
    //         data: serviceDetail
    //     });
    // }

    //bookingDetail
    // for (let bookingDetail of bookingDetailData) {
    //     await prisma.bookingDetail.create({
    //         data: bookingDetail
    //     });
    // }

    //blacklistedUser
    for (let blacklistedUser of blacklistedUserData) {
        await prisma.blacklistedUser.create({
            data: blacklistedUser
        });
    }

}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});

// Run the seed script
// xem cai ben duoi va lam theo
// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding