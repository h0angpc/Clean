'use client'

import React from 'react';
import { InputWithLabel } from '@/components/input/inputwithlabel';
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckboxWithText } from '@/components/checkbox/checkboxwithtext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Step_5: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-full relative min-h-screen">
      {/* Section Left */}
      <div className="w-full md:w-2/3 p-4 bg-white min-h-screen">
        <div className="justify-center h-max">
          <p className="text-4xl text-center font-Averta-Bold mb-2 mt-[50px] ">
            Payment Details
          </p>
          <p className="text-[20px] text-center text-[#88939D] font-Averta-Semibold leading-[25px]">
            Add in your payment details through our secure gateway
          </p>
        </div>

        <div className="grid justify-center mt-[50px]">
          <div className="flex flex-col md:flex-row">
            <InputWithLabel
              labelText="FULL NAME" inputType="text"
              inputPlaceholder="Enter Full Name" inputId="name"
              inputWidth="w-full md:w-[340px]" />
            <div className="md:ml-2 mt-2 md:mt-0">
              <InputWithLabel
                labelText="EMAIL ADDRESS" inputType="email"
                inputPlaceholder="Enter your email address" inputId="email"
                inputWidth="w-full md:w-[340px]" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-[30px]">
            <InputWithLabel
              labelText="PHONE NUMBER" inputType="text"
              inputPlaceholder="Enter a Phone number" inputId="phoneNum"
              inputWidth="w-full md:w-[340px]" />
            <div className="md:ml-2 mt-2 md:mt-0">
              <InputWithLabel
                labelText="HOW DO WE CONTACT YOU" inputType="email"
                inputPlaceholder="" inputId="contactEmail"
                inputWidth="w-full md:w-[340px]" />
            </div>
          </div>

          <div className='mt-[30px]'>
            <ScrollArea className="h-[170px] font-Averta-Regular w-full md:w-[688px] rounded-md border p-3">
              Jokester began sneaking into the castle in the middle of the night and leaving
              jokes all over the place: under the king's pillow, in his soup, even in the
              royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
              then, one day, the people of the kingdom discovered that the jokes left by
              Jokester were so funny that they couldn't help but laugh. And once they
              started laughing, they couldn't stop. Jokester began sneaking into the castle in the middle of the night and leaving
              jokes all over the place: under the king's pillow, in his soup, even in the
              royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
              then, one day, the people of the kingdom discovered that the jokes left by
              Jokester were so funny that they couldn't help but laugh. And once they
              started laughing, they couldn't stop.
            </ScrollArea>
            <CheckboxWithText />
          </div>
        </div>
      </div>

      {/* Section Right */}
      <div className="w-full md:w-1/3 p-4 bg-gray-100 min-h-screen">
        <p className="text-4xl mx-auto font-Averta-Bold mb-4 mt-[50px]">Billing</p>
        <div className="my-4 border-gray-300 rounded-lg">
          <div className="p-6 bg-white rounded-lg">
            <div className="flex justify-between ">
              <div className="text-gray-600 font-Averta-Regular">Studio</div>
              <Separator orientation='vertical' className='border-gray-300 mx-4 h-9' />
              <div className="text-gray-600 font-Averta-Regular">3 Bathrooms</div>
              <Separator orientation='vertical' className='border-gray-300 mx-4 h-9' />
              <div className="text-gray-600 font-Averta-Regular">Standard</div>
            </div>
            <div className="mb-4 border-t pt-4 flex">
              {/* <p className=" text-gray-600 font-semibold">Every 2 weeks</p> */}
              <p className="text-gray-600 font-Averta-Semibold">Tuesday, July 17, 2018 at 2.30pm</p>
            </div>
            <div className="mb-4 border-t pt-4">
              <p className=" text-gray-600 font-Averta-Semibold">114 Broadway Newyork, NY 10005</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className=" text-gray-600 font-Averta-Semibold">Add-on: Inside oven</p>
            </div>
          </div>
        </div>

        <div className="flex mt-[40px]">
          <Input type="text" placeholder="Discount" className="bg-white border-gray-300 h-[50px] font-Averta-Regular" />
          <Button className="bg-[#1A78F2] h-[50px] md:w-1/3 ml-[8px] font-Averta-Semibold text-[16px]">Apply</Button>
        </div>

        <div className=" my-[40px] border-gray-300 rounded-lg">
          <div className="p-6 bg-white rounded-lg">
            <div className="mb-4 flex justify-between items-center">
              <div className="flex">
                <p className="text-gray-600 font-Averta-Semibold">Appointment Value</p>
                <p className="text-blue-600 font-Averta-Semibold ml-[10px]">- Details</p>
              </div>
              <p className="text-gray-600 font-Averta-Semibold ">$ 125.99</p>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex">
                <p className=" text-gray-600 font-Averta-Semibold">Discounts</p>
                <p className="text-blue-600 font-Averta-Semibold ml-[10px]">- Details</p>
              </div>
              <p className="text-gray-600 font-Averta-Semibold ">-$ 15.89</p>
            </div>
            <div className="mb-4 border-t pt-4 flex justify-between items-center">
              <p className=" text-gray-600 font-Averta-Semibold">Subtotal</p>
              <p className="text-gray-600 font-Averta-Semibold ">$ 110.01</p>
            </div>
            <div className="mb-4 border-t pt-4 flex justify-between items-center">
              <p className=" text-gray-600 font-Averta-Semibold">Tax</p>
              <p className="text-gray-600 font-Averta-Semibold">+$ 5.20</p>
            </div>
            <div className="border-t pt-4 justify-between items-center flex">
              <p className=" text-gray-600 text-[18px] font-Averta-Bold">Total</p>
              <p className=" text-gray-600 text-[18px] font-Averta-Bold">$610.00</p>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center ">
          <Button className="md:w-1/3 h-[60px] bg-[#1A78F2] font-Averta-Semibold text-[16px]">Place order</Button>
        </div>
      </div>
    </div >
  )
}

export default Step_5
