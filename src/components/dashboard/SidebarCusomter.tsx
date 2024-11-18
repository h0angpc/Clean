'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  icon: string;
  activeIcon: string;
  label: string;
  href: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, activeIcon, label, href, isActive }) => {
  return (
    <Link href={href} className={`flex gap-5 items-center px-5 py-4 w-48 max-w-full min-h-[50px] ${
      isActive ? 'text-white bg-blue-500 rounded-lg' : ''
    }`}>
      <img
        loading="lazy"
        src={isActive ? activeIcon : icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <div className="self-stretch my-auto">{label}</div>
    </Link>
  );
};

const SidebarCustomer: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      icon: "/images/Dashboard/Sidebar/InActive/Employee.svg", 
      activeIcon: "/images/Dashboard/Sidebar/Active/Employee.svg", 
      label: "Personal", 
      href: "/dashboard/personal" 
    },
    { 
      icon: "/images/Dashboard/Sidebar/InActive/OrderHistory.svg", 
      activeIcon: "/images/Dashboard/Sidebar/Active/OrderHistory.svg", 
      label: "Order History", 
      href: "/dashboard/order-history" 
    },
    { 
      icon: "/images/Dashboard/Sidebar/InActive/Calendar.svg", 
      activeIcon: "/images/Dashboard/Sidebar/Active/Calendar.svg", 
      label: "Calendar", 
      href: "/dashboard/calendar" 
    },
    { 
      icon: "/images/Dashboard/Sidebar/InActive/Feedback.svg", 
      activeIcon: "/images/Dashboard/Sidebar/Active/Feedback.svg", 
      label: "Feedback", 
      href: "/dashboard/feedback" 
    },
    { 
      icon: "/images/Dashboard/Sidebar/InActive/Refund.svg", 
      activeIcon: "/images/Dashboard/Sidebar/Active/Refund.svg", 
      label: "Refund", 
      href: "/dashboard/refund" 
    },
  ];


  return (
    <aside className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col items-center px-5 pt-5 mx-auto w-full font-Averta-Bold tracking-wide whitespace-nowrap bg-white min-h-[970px] pb-[700px] text-stone-600 max-md:pb-24">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            activeIcon={item.activeIcon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SidebarCustomer;