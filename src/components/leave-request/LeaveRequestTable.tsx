'use client'
import React, { useState } from 'react';
import { useQueryClient, useQuery } from "@tanstack/react-query";
import LeaveRequestRow from './LeaveRequestRow';
import Pagination from '../employee/Pagination';
import SearchBarAndFilter from './SearchBarAndFilter';
import Image from 'next/image';
import { useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface LeaveRequestTableProps {
    canCreate: boolean;
}

const LeaveRequestTable: React.FC<LeaveRequestTableProps> = ({ canCreate }) => {
    // const url = "http://localhost:3001/api/helper_availability";

    const fetchData = async (): Promise<LeaveRequest[]> => {
        try {
            const response = await fetch(`/api/helper_availability`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("Filter by");
    const [searchBy, setSearchBy] = useState("Name");


    const { data, isLoading, error } = useQuery({
        queryKey: ["leaveRequests"],
        queryFn: fetchData,
    });

    const leaveRequestsdata: LeaveRequest[] = data ?? [];


    // filter
    const applyFilter = (data: LeaveRequest[]) => {
        if (filter === "Newest") {
            return [...data].sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                console.log(a);
                return dateB.getTime() - dateA.getTime();
            });
        }
        if (filter === "Oldest") {
            return [...data].sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateA.getTime() - dateB.getTime();
            });
        }
        return data;
    };

    // search by
    const filteredData = leaveRequestsdata.filter((Request) => {
        const term = searchTerm.toLowerCase();
        if (searchBy === "Name") {
            return Request.helper?.user?.fullName.toLowerCase().includes(term);
        }
        // if (searchBy === "Status") {
        //     return Request.status.toLowerCase().includes(term);
        // }
        if (searchBy === "Reason") {
            return Request.requestReason?.toLowerCase().includes(term);
        }
        return true;
    });

    const finalData = applyFilter(filteredData);
    // pagination
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = finalData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
    };

    useEffect(() => { }, [])
    return (
        <>
            <div className='flex flex-wrap justify-between gap-3 items-center'>

                <SearchBarAndFilter
                    setSearchTerm={setSearchTerm}
                    setSearchBy={setSearchBy}
                    onFilterChange={setFilter}
                />
                <div className='flex flex-row gap-2'>
                    {canCreate && <button
                        onClick={() => alert('Open popup Create LeaveRequest')}
                        className="flex flex-row gap-2 items-center justify-center px-8 h-[38px] bg-[#1b78f2] hover:bg-opacity-90 rounded-[8px] text-xs font-Averta-Bold tracking-normal leading-loose whitespace-nowrap text-center text-white">
                        <Image src="/images/icons/outline_plus.svg" alt="" width={18} height={18} />
                        Create LeaveRequest
                    </button>}
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <div className="flex flex-row gap-2 items-center justify-center px-10 h-[38px] bg-[#E11B1B] hover:bg-opacity-90 rounded-[8px] text-xs font-Averta-Bold tracking-normal leading-loose whitespace-nowrap text-center text-white">
                                <Image src="/images/Dashboard/Feedback/Trash.svg" alt="" width={18} height={18} />
                                Delete
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This action will delete the leave request.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction asChild>
                                    <button className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700">
                                        Delete
                                    </button>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

            </div>
            <div className="flex overflow-hidden flex-col justify-center mt-3.5 w-full max-md:max-w-full">
                {currentData.map((request: LeaveRequest, index: any) => (
                    <LeaveRequestRow key={request.id} {...request} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalItems={filteredData.length}
                totalPages={totalPages}
                onPageChange={handlePageChange} />
        </>
    );
};

export default LeaveRequestTable;