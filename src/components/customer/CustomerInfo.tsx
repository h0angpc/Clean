"use client"
import { InputWithLabel } from '@/components/input/inputwithlabel'
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ComboboxInput } from '@/components/input/combobox-input';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCustomerInfoData, customerInfoSchema } from '@/schema/customerInfoSchema';
import FileDownloadCard from '@/components/card/FileDownloadCard';
import ClipLoader from "react-spinners/ClipLoader";

const genderOptions = ["Female", "Male", "Other"]

const CustomerInfo = () => {
    const form = useForm<createCustomerInfoData>({
        mode: "onSubmit",
        resolver: zodResolver(customerInfoSchema),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = form;

    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
    const [idCard, setIdCard] = useState<File | null>(null);
    const [idCardUrl, setidCardUrl] = useState<string | null>(null);

    useEffect(() => {
        setidCardUrl("/images/Dashboard/Personal/identity.png");
    }, []);

    const inputAvatarRef = useRef<HTMLInputElement>(null);

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedAvatar(file);

            const objectUrl = URL.createObjectURL(file);
            setAvatarUrl(objectUrl);
        }
    };

    const handleIdCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const allowedFormats = ["image/jpeg", "image/png", "application/pdf"];
            if (!allowedFormats.includes(selectedFile.type)) {
                alert("Only JPG, PNG, or PDF files are allowed!");
                return;
            }

            if (selectedFile.size > 10 * 1024 * 1024) {
                alert("File size should be less than 10MB!");
                return;
            }

            setIdCard(selectedFile);

            if (selectedFile.type.startsWith("image/")) {
                const objectUrl = URL.createObjectURL(selectedFile);
                setidCardUrl(objectUrl);
            }
            else {
                setidCardUrl(null);
            }
        }
    };

    const handleIdCardDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files?.[0];
        if (droppedFile) {
            const allowedFormats = ["image/jpeg", "image/png", "application/pdf"];
            if (!allowedFormats.includes(droppedFile.type)) {
                alert("Only JPG, PNG, or PDF files are allowed!");
                return;
            }

            if (droppedFile.size > 10 * 1024 * 1024) {
                alert("File size should be less than 10MB!");
                return;
            }

            setIdCard(droppedFile);

            if (droppedFile.type.startsWith("image/")) {
                const objectUrl = URL.createObjectURL(droppedFile);
                setidCardUrl(objectUrl);
            }
            else {
                setidCardUrl(null);
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDownload = (file: File | null) => {
        if (!file) {
            alert("No file selected to download.");
            return;
        }

        const fileUrl = URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = file.name;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(fileUrl);
    };

    const uploadFile = async (file: File | null): Promise<string | null> => {
        if (!file) {
            alert("Please select a file first!");
            return null;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/test-cloudinary", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                return data.url; // Trả về URL file đã upload
            } else {
                console.error("File upload failed:", await response.text());
                return null;
            }
        } catch (error) {
            console.error("File upload failed:", error);
            return null;
        }
    };

    const onSubmitHandle = async (data: createCustomerInfoData) => {
        try {
            // Upload các file song song
            const [avatarUrl, idCardUrl] = await Promise.all([
                uploadFile(selectedAvatar),
                uploadFile(idCard),
            ]);

            // Kiểm tra nếu có file nào không upload được
            if (!avatarUrl || !idCardUrl) {
                alert("Failed to upload one or more files. Please try again.");
                return;
            }

            // Cập nhật URL vào form data
            const formData = {
                ...data,
                avatar: avatarUrl,
                idCard: idCardUrl,
            };

            console.log("Final Form Data:", formData);

            //Tam thoi xai cung
            await fetch("/api/users/fa21339b-a224-466b-bf76-043a207ad160",
                { method: "PUT", body: JSON.stringify(formData) });

            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Failed to submit data:", error);
            alert("Something went wrong during form submission.");
        }
    };

    return (
        <div className="bg-white h-fit">
            <form className=" h-full w-full flex flex-wrap md:flex-row justify-center"
                onSubmit={handleSubmit(onSubmitHandle)}>
                {/* Section Left */}
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
                            <Controller
                                name="fullName"
                                control={control}
                                render={({ field }) => (
                                    <InputWithLabel
                                        className="min-w-[290px]"
                                        labelText="FULL NAME" inputType="text"
                                        inputPlaceholder="Enter Full Name" inputId="fullName"
                                        value={field.value ?? ""}
                                        onChange={field.onChange}
                                        inputWidth="25vw"
                                        error={errors.fullName?.message}
                                    />
                                )} />
                            <div className="flex md:mt-0 gap-2">
                                <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    render={({ field }) => (
                                        <InputWithLabel
                                            className="min-w-[170px]"
                                            labelText="DATE OF BIRTH" inputType="date"
                                            inputPlaceholder="" inputId="dateOfBirth"
                                            value={field.value}
                                            onChange={field.onChange}
                                            error={errors.dateOfBirth?.message}
                                            inputWidth="11.25vw" />
                                    )} />
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <ComboboxInput
                                            className="min-w-[112px]"
                                            labelText="GENDER"
                                            inputId="gender" defaultValue={genderOptions.at(0)}
                                            inputWidth="6.875vw" options={genderOptions}
                                            inputPlaceholder='Gender'
                                            value={field.value ?? ""}
                                            onChange={field.onChange}
                                            error={errors.gender?.message}
                                        />
                                    )} />

                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <Controller
                                name="phoneNumber"
                                control={control}
                                render={({ field }) => (
                                    <InputWithLabel
                                        className="min-w-[290px]"
                                        labelText="PHONE NUMBER" inputType="text"
                                        inputPlaceholder="Enter a Phone number" inputId="phoneNumber"
                                        inputWidth="25vw"
                                        value={field.value ?? ""}
                                        onChange={field.onChange}
                                        error={errors.phoneNumber?.message} />
                                )} />

                            <div className="md:mt-0">
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <InputWithLabel
                                            className="min-w-[290px]"
                                            labelText="EMAIL ADDRESS" inputType="email"
                                            inputPlaceholder="Enter your email address" inputId="contactEmail"
                                            inputWidth="18.125vw" plusPX='8px'
                                            value={field.value ?? ""}
                                            onChange={field.onChange}
                                            error={errors.email?.message} />
                                    )} />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <InputWithLabel
                                        className="min-w-[290px]"
                                        labelText="CITY/PROVINCE" inputType="text"
                                        inputPlaceholder="Enter your city/province" inputId="city"
                                        inputWidth="43.125vw" plusPX="16px"
                                        value={field.value ?? ""}
                                        onChange={field.onChange}
                                        error={errors.city?.message} />
                                )} />
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <Controller
                                name="ward"
                                control={control}
                                render={({ field }) => (
                                    <InputWithLabel
                                        className="min-w-[290px]"
                                        labelText="WARD" inputType="text"
                                        inputPlaceholder="Enter ward" inputId="ward"
                                        inputWidth="25vw"
                                        value={field.value ?? ""}
                                        onChange={field.onChange}
                                        error={errors.ward?.message} />
                                )} />

                            <div className=" md:mt-0">
                                <Controller
                                    name="postalCode"
                                    control={control}
                                    render={({ field }) => (
                                        <InputWithLabel
                                            className="min-w-[290px]"
                                            labelText="POSTAL CODE" inputType="text"
                                            inputPlaceholder="Enter Postal Code" inputId="postalCode"
                                            inputWidth="18.125vw" plusPX='8px'
                                            value={field.value ?? ""}
                                            onChange={field.onChange}
                                            error={errors.postalCode?.message} />
                                    )} />
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap md:flex-row gap-2">
                            <Controller
                                name="houseNumber"
                                control={control}
                                render={({ field }) => (
                                    <InputWithLabel
                                        className="min-w-[290px]"
                                        labelText="HOUSE NUMBER" inputType="text"
                                        inputPlaceholder="Enter your House Number" inputId="houseNumber"
                                        inputWidth="18.75vw"
                                        value={field.value ?? ""}
                                        onChange={field.onChange}
                                        error={errors.houseNumber?.message} />
                                )} />

                            <div className=" md:mt-0">
                                <Controller
                                    name="streetName"
                                    control={control}
                                    render={({ field }) => (
                                        <InputWithLabel
                                            className="min-w-[290px]"
                                            labelText="STREET NAME" inputType="text"
                                            inputPlaceholder="Enter your Street Name" inputId="streetName"
                                            inputWidth="24.375vw" plusPX='8px'
                                            value={field.value ?? ""}
                                            onChange={field.onChange}
                                            error={errors.streetName?.message} />
                                    )} />

                            </div>
                        </div>

                    </div>
                </div>
                {/* Section Right */}
                <div className="md:w-1/3 justify-center min-w-[300px]">

                    {/* Avatar */}
                    <div>
                        <p className="font-Averta-Bold text-4xl my-[12.8875px] ml-[10px]">Avatar</p>
                        <div className="mb-6">
                            <div className="w-[160px] h-[160px] rounded-full overflow-hidden flex mx-auto justify-center bg-gray-200 cursor-pointer">
                                {avatarUrl ? (
                                    <Image
                                        src={avatarUrl}
                                        alt="avatar"
                                        width={160}
                                        height={160}
                                        className="cursor-pointer flex items-center justify-center mx-auto rounded-full"
                                        onClick={() => {
                                            if (inputAvatarRef.current) {
                                                inputAvatarRef.current.click();
                                            }
                                        }}
                                    />
                                ) : (
                                    <Image
                                        src="/images/Dashboard/Personal/camera.svg"
                                        alt="camera"
                                        width={160}
                                        height={160}
                                        className="cursor-pointer flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110"
                                        onClick={() => {
                                            if (inputAvatarRef.current) {
                                                inputAvatarRef.current.click();
                                            }
                                        }}
                                    />
                                )}
                            </div>

                            <input
                                ref={inputAvatarRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="avatar-upload"
                                onChange={handleAvatarChange}
                            />
                            <label
                                htmlFor="avatar-upload"
                                className="block hover:underline w-fit mx-auto mt-2 text-[#1A78F2] cursor-pointer font-Averta-Semibold"
                            >
                                Upload Your Avatar
                            </label>
                        </div>
                    </div>

                    <div>
                        <p className="text-3xl font-Averta-Bold mt-[1vw] ml-[10px]">ID Card</p>
                        <input
                            id="indentifyCard"
                            type="file"
                            className="hidden"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={handleIdCardChange}
                        />

                        <div
                            onDrop={handleIdCardDrop}
                            onDragOver={handleDragOver}
                        >
                            {idCardUrl ? (
                                <>
                                    <div className="text-center">
                                        <Image
                                            src={idCardUrl}
                                            alt="identity"
                                            width={400}
                                            height={200}
                                            className='mx-auto'
                                        />
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-[10px] mt-4">
                                        <Button className="w-[170px] h-[40px] 
                                                bg-[#1A78F2] font-Averta-Semibold text-[16px]"
                                            type="button"
                                            onClick={() => handleDownload(idCard)}>
                                            Download
                                        </Button>
                                        <Button className="w-[170px] h-[40px]
                                                bg-white font-Averta-Semibold text-[#1A78F2] hover:bg-gray-100
                                                text-[16px] border-2 border-[#1A78F2]"
                                            onClick={() => document.querySelector<HTMLInputElement>("#indentifyCard")?.click()}
                                            type="button">Upload IDCard</Button>
                                    </div></>
                            ) : idCard ? (
                                <FileDownloadCard
                                    className='mx-[2.08vw]'
                                    fileName={idCard.name}
                                    fileSize={idCard.size}
                                    onUpdate={() => document.querySelector<HTMLInputElement>("#indentifyCard")?.click()}
                                    onDownload={() => handleDownload(idCard)} />
                            ) : (
                                <div className="flex justify-center items-center w-full h-[200px]">
                                    <ClipLoader color="#2A88F5" loading={true} size={30} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center py-[20px]">
                    <Button className="md:w-1/5 min-w-[150px] h-[60px] bg-[#1A78F2] font-Averta-Semibold text-[16px]">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default CustomerInfo