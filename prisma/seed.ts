import { 
    blacklistedUserData,
    bookContractData,
    bookingData,
    bookingDetailData,
    contractData,
    durationPriceData,
    feedbackData,
    helperAvailabilityData,
    helperData,
    refundData,
    roomPricingData,
    serviceCategoryData,
    serviceTypeData,
    userData 
} from "./mockData";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    for (let blacklistedUser of blacklistedUserData) {
        await prisma.blacklistedUser.create({
            data: blacklistedUser
        });
    }
    for (let bookContract of bookContractData) {
        await prisma.bookingContract.create({
            data: bookContract
        });
    }
    for (let booking of bookingData) {
        await prisma.booking.create({
            data: booking
        });
    }
    for (let bookingDetail of bookingDetailData) {
        await prisma.bookingDetail.create({
            data: bookingDetail
        });
    }
    for (let contract of contractData) {
        await prisma.contract.create({
            data: contract
        });
    }
    for (let durationPrice of durationPriceData) {
        await prisma.durationPrice.create({
            data: durationPrice
        });
    }
    for (let feedback of feedbackData) {
        await prisma.feedback.create({
            data: feedback
        });
    }
    for (let helperAvailability of helperAvailabilityData) {
        await prisma.helperAvailability.create({
            data: helperAvailability
        });
    }
    for (let helper of helperData) {
        await prisma.helper.create({
            data: helper
        });
    }
    for (let refund of refundData) {
        await prisma.refund.create({
            data: refund
        });
    }
    for (let roomPricing of roomPricingData) {
        await prisma.roomPricing.create({
            data: roomPricing
        });
    }
    for (let serviceCategory of serviceCategoryData) {
        await prisma.serviceCategory.create({
            data: serviceCategory
        });
    }
    for (let serviceType of serviceTypeData) {
        await prisma.serviceType.create({
            data: serviceType
        });
    }
    for (let user of userData) {
        await prisma.user.create({
            data: user
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