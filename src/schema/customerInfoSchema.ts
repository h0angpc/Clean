import z from "zod";

const customerInfoSchema = z.object({
    fullName: z.string().min(1, 'Full Name is required'),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date',
    }),
    gender: z.enum(["Female", "Male", "Other"], { required_error: 'Gender is required' }),
    phoneNumber: z
      .string()
      .regex(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .min(1, 'Phone number is required'),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    // city: z.string().min(1, 'City is required'),
    // ward: z.string().min(1, 'Ward is required'),
    // postalCode: z.string().min(1, 'Postal Code is required'),
    // houseNumber: z.string().min(1, 'House Number is required'),
    // streetName: z.string().min(1, 'Street Name is required'),
  });

  const partialCustomerInfoSchema = customerInfoSchema.partial();

export type createCustomerInfoData = z.infer<typeof customerInfoSchema>;
export type updateCustomerInfoData = z.infer<
  typeof partialCustomerInfoSchema
>;

export { customerInfoSchema, partialCustomerInfoSchema };