type Customer = {
    id: string;
    gender: "Female" | "Male" | "Other";
    fullName: string;
    email: string;
    dateOfBirth: string;
    identifyCard: string;
    address: string;
    phoneNumber: string;
    isActive?: boolean;
};