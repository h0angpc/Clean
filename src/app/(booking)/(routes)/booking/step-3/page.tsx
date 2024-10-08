'use client'

import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Step_3 = () => {
  return (
    <div className="h-full w-full">
      <div className="w-1/2 m-auto p-4">
        <div className="justify-center h-max">
          <p className="text-4xl text-center font-Averta-Bold mb-2 mt-[50px] ">
            Book Timing
          </p>
          <p className="text-[20px] text-center text-[#88939D] font-Averta-Regular leading-[25px]">
            Save even more by booking off-peak dates and times.
          </p>
        </div>
    </div>
    <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem className="basis-1/7 pl-4">  
          <Card>
              <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
                22
              </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              23
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-blue-500 border border-blue-500">
              24
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              25
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              26
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              27
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              28
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              29
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/7 pl-4">
          <Card>
            <CardContent className="flex justify-center items-center pt-[23px] bg-white h-[55px] w-[132px] rounded-[10px] font-Averta-Semibold text-xl text-[#4f6071] border border-[#d3d8dd]">
              30
            </CardContent>
          </Card>
        </CarouselItem>     
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <div className="grid w-3/4 m-auto justify-center gap-4 mt-[40px]">
      <Button className="bg-white h-[73px] w-[400px] rounded-[10px] font-Averta-Semibold text-xl text-blue-500 border border-blue-500 hover:text-white">
        <div className="grid grid-cols-2">
            <p className="text-base font-Averta-Semibold leading-[23px] tracking-tight text-left">Flexible</p>
            <p className="text-xs font-Averta-Semibold leading-[14px] tracking-tight text-right self-center">Save $8.10 off</p>
            <p className="text-sm font-Averta-Regular leading-[19px] tracking-tight text-left">Cleaner will arrive between 9am-4pm</p>
        </div>
      </Button>
      <Button className="bg-white h-[73px] w-[400px] rounded-[10px] font-Averta-Semibold text-base leading-[23px] tracking-tight text-[#4f6071] border border-[#d3d8dd] hover:text-white">08:00am</Button>
      <Button className="bg-white h-[73px] w-[400px] rounded-[10px] font-Averta-Semibold text-base leading-[23px] tracking-tight text-[#4f6071] border border-[#d3d8dd] hover:text-white">08:30am</Button>
      <Button className="bg-white h-[73px] w-[400px] rounded-[10px] font-Averta-Semibold text-base leading-[23px] tracking-tight text-blue-500 border border-blue-500 hover:text-white">09:00am</Button>
      <Button className="bg-white h-[73px] w-[400px] rounded-[10px] font-Averta-Semibold text-base leading-[23px] tracking-tight text-[#4f6071] border border-[#d3d8dd] hover:text-white">09:30am</Button>
      <Button className="bg-white h-[73px] w-[400px] rounded-[10px] font-Averta-Semibold text-base leading-[23px] tracking-tight text-[#4f6071] border border-[#d3d8dd] hover:text-white">10:00am</Button>
    </div>
    
    <div className="flex justify-center items-center mt-[35px]">
          <Button className="w-[165px] h-[55px] bg-[#1A78F2] text-lg text-white font-Averta-Semibold">Next</Button>
    </div>
</div>

  )
}

export default Step_3