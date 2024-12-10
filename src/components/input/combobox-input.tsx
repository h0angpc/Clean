"use client"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import {
    Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"



interface ComboboxInputlProps {
    labelText: string;
    inputId: string;
    inputWidth?: string;
    inputPlaceholder?: string;
    options?: string[];
    defaultValue?: string;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
}

export function ComboboxInput({
    labelText,
    inputId,
    inputWidth = "w-full",
    inputPlaceholder,
    options = [],
    defaultValue,
    className,
    value,
    onChange,
    error
}: ComboboxInputlProps) {

    return (
        <div className="grid max-w-max items-center gap-1.5">
            <Label className="text-[14px] w-fit font-Averta-Semibold text-[#9FA7B0]" htmlFor={inputId}>
                {labelText}
            </Label>
            <div className="relative">
                <Select defaultValue={defaultValue} value={value} onValueChange={(val) => onChange?.(val)}>
                    <SelectTrigger
                        className={cn("font-Averta-Regular h-[50px] text-[16px] text-[#88939D] border-2", 
                            error ? "border-red-500 focus:ring-red-500" : "border-[#E5E7EB]",
                            className)}
                        style={{ width: `${inputWidth}` }}
                        id={inputId}
                    >
                        <SelectValue placeholder={inputPlaceholder}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {options.map((option, index) => (
                                <SelectItem key={index} value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {error && (
                    <p className="lg:absolute text-[14px] text-red-500 font-Averta-Regular top-full mt-[2px]">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
}