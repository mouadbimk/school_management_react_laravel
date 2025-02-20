import { cn } from "@/lib/utils"
import { Button } from "../../components/ui/button.tsx";
import {GraduationCap, UserIcon} from "lucide-react";
import { Link } from 'react-router-dom';
import {ADMIN_MANAGE_PARENT_ROUTE, ADMIN_MANAGE_STUDENT_ROUTE} from "../../router/index.jsx";

export function AdminAdministrationSideBar() {
  return (
    <div className={cn("pb-12")}>
      <div >
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Administration
          </h2>
          <div className="space-y-1">
          <Link to={ADMIN_MANAGE_PARENT_ROUTE}>

            <Button variant="ghost" className="w-full justify-start">
              <UserIcon className={'mr-2'}/>
              Add Parent
            </Button>
            </Link>
            <Link to={ADMIN_MANAGE_STUDENT_ROUTE} >
            <Button variant="ghost" className="w-full justify-start">
            <GraduationCap className={'mr-2'}/>
              Students
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}