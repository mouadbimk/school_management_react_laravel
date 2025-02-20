import { cn } from "@/lib/utils"
import { Button } from "../../components/ui/button.tsx";
import { UserPlus } from "lucide-react";
import { Link } from 'react-router-dom';
import { ADMIN_MANAGE_PARENT_ROUTE } from "../../router/index.jsx";

export function ParentAdministrationSideBar() {
  return (
    <div className={cn("pb-12")}>
      <div >
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Administration
          </h2>
          <div className="space-y-1">
          <Link to={''}>

            <Button variant="ghost" className="w-full justify-start">
            <UserPlus/>
              Student
            </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
              Radio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}