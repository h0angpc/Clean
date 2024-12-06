import LeaveRequestTable from "@/components/leave-request/LeaveRequestTable";
import React from "react";

const LeaveRequestPage = () => {
  const userRole = "admin"

  const tableProps = userRole === "admin"
    ? { canCreate: false}
    : { canCreate: true};

  return (
    <>
     <LeaveRequestTable {...tableProps}/>
    </>
  );
};

export default LeaveRequestPage;
