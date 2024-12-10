import { InputWithLabel } from '@/components/input/inputwithlabel'
import Image from "next/image";
import React from 'react';
import { Button } from '@/components/ui/button';
import FileDownloadCard from '@/components/card/FileDownloadCard';
import { ComboboxInput } from '@/components/input/combobox-input';
import { MultipleChoiceInput } from '@/components/input/multiplechoice-input';

const genderOptions = ["Female", "Male", "Other"]

const EmployeeInfo = () => {
    const handleDownload = () => {

    };

    const handleUpdate = () => {

    };

    return (
        <div className="bg-white h-fit">
            <div className=" h-full w-full flex flex-wrap md:flex-row justify-center">
                {/* Section-Left */}
                <div className="md:w-2/3 pb-10 bg-white">
                    <div className="flex flex-row">
                        <Image
                            src="/images/Dashboard/Personal/exit-button.png"
                            alt="X-button"
                            width={70}
                            height={70}
                            className='cursor-pointer hover:bg-[#ededed]'
                        />
                        <p className="font-Averta-Bold text-4xl text-center my-auto ml-[10px]">User Info</p>
                    </div>

                    <div className="grid mt-[50px] gap-4">
                        <div className="flex justify-center flex-wrap md:flex-row gap-2 w-full">
                            <InputWithLabel
                                className="min-w-[290px]"
                                labelText="FULL NAME" inputType="text"
                                inputPlaceholder="Enter Full Name" inputId="name"
                                inputWidth="25vw" />
                            <div className="flex md:mt-0 gap-2">
                                <InputWithLabel
                                    className="min-w-[170px]"
                                    labelText="DATE OF BIRTH" inputType="date"
                                    inputPlaceholder="" inputId="date"
                                    inputWidth="11.25vw" />
                                <ComboboxInput
                                    className="min-w-[112px]"
                                    labelText="GENDER"
                                    inputPlaceholder="" inputId="gender" defaultValue={genderOptions.at(0)}
                                    inputWidth="6.875vw" options={genderOptions} />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <InputWithLabel
                                className="min-w-[290px]"
                                labelText="PHONE NUMBER" inputType="text"
                                inputPlaceholder="Enter a Phone number" inputId="phoneNum"
                                inputWidth="25vw" />
                            <div className="md:mt-0">
                                <InputWithLabel
                                    className="min-w-[290px]"
                                    labelText="EMAIL ADDRESS" inputType="email"
                                    inputPlaceholder="Enter your email address" inputId="contactEmail"
                                    inputWidth="18.125vw" plusPX='8px' />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <InputWithLabel
                                className="min-w-[290px]"
                                labelText="SALARY EXPECTATION" inputType="text"
                                inputPlaceholder="100000$" inputId="salary"
                                inputWidth="18.125vw" plusPX='8px' />
                            <div className=" md:mt-0">
                                <InputWithLabel
                                    className="min-w-[290px]"
                                    labelText="CITY/PROVINCE" inputType="text"
                                    inputPlaceholder="Enter your city/province" inputId="city"
                                    inputWidth="25vw" />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <InputWithLabel
                                className="min-w-[290px]"
                                labelText="WARD" inputType="text"
                                inputPlaceholder="Enter ward" inputId="ward"
                                inputWidth="25vw" />
                            <div className=" md:mt-0">
                                <InputWithLabel
                                    className="min-w-[290px]"
                                    labelText="POSTAL CODE" inputType="text"
                                    inputPlaceholder="Enter Postal Code" inputId="postal"
                                    inputWidth="18.125vw" plusPX='8px' />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <InputWithLabel
                                className="min-w-[290px]"
                                labelText="HOUSE NUMBER" inputType="text"
                                inputPlaceholder="Enter your House Number" inputId="houseNum"
                                inputWidth="18.75vw" />
                            <div className=" md:mt-0">
                                <InputWithLabel
                                    className="min-w-[290px]"
                                    labelText="STREET NAME" inputType="text"
                                    inputPlaceholder="Enter your Street Name" inputId="streetName"
                                    inputWidth="24.375vw" plusPX='8px' />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            {/* <MultipleChoiceInput
                className="min-w-[290px]"
                labelText="OFFERED SERVICES" inputId="servicesOffered"
                inputWidth="43.125vw" plusPX='16px' options={options}
                value={field.value ?? []}
                onChange={field.onChange}
                error={errors.servicesOffered?.message} /> */}

                        </div>

                    </div>
                </div>
                {/* Section Right */}
                <div className="md:w-1/3 justify-center min-w-[300px]">
                    <p className="font-Averta-Bold text-4xl my-[12.8875px] ml-[10px]">Avatar</p>

                    <div className="mb-6">
                        <Image
                            src="/images/Dashboard/Personal/camera.svg"
                            alt="camera"
                            width={160}
                            height={160}
                            className="cursor-pointer flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110"
                        />
                        <Button variant="link" className="flex text-[18px] items-center justify-center mx-auto font-Averta-Semibold text-[#1A78F2]">Upload Avatar</Button>
                    </div>

                    <p className="text-3xl font-Averta-Bold mt-[1vw] ml-[10px]">ID Card</p>
                    <div className="px-4 py-8 text-center">
                        <Image
                            src="/images/identity.png"
                            alt="identity"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-[10px]">
                        <Button className="w-[170px] h-[40px] 
            bg-[#1A78F2] font-Averta-Semibold text-[16px]">Download</Button>
                        <Button className="w-[170px] h-[40px]
            bg-white font-Averta-Semibold text-[#1A78F2] hover:bg-gray-100
              text-[16px] border-2 border-[#1A78F2]">Upload IDCard</Button>
                    </div>
                    <p className="text-3xl font-Averta-Bold mb-3 mt-6 ml-[10px]">Résumé</p>
                    <FileDownloadCard />
                </div>
                <div className="flex justify-center items-center py-[20px]">
                    <Button className="md:w-1/5 min-w-[150px] h-[60px] bg-[#1A78F2] font-Averta-Semibold text-[16px]">Save</Button>
                </div>
            </div>

        </div>
    )
}

export default EmployeeInfo