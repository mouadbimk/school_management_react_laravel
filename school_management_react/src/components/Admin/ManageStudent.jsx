import {Tabs,TabsList,TabsTrigger,TabsContent} from '../ui/tabs';
import {Button} from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { PlusCircle } from 'lucide-react';
import ParentUpsertForm from '../Forms/ParentUpsertForm.jsx';
import AdminParentList from "@/components/data-table/parent/AdminParentList.jsx";
import ParentApi from "@/services/Api/Student/ParentApi.js";
import AdminStudentList from "@/components/data-table/parent/AdminStudentList.jsx";


const ManageStudent = () => {
    return (
     <div className='relative overflow-x-auto'>

      <div className="hidden md:block">
        <div>
          <div className="bg-background">
            <div className="grid">
              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="parents_list" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="items_list" className="relative">
                          Students
                        </TabsTrigger>
                        <TabsTrigger value="add_student">Add new Student</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button value={'add_student'}>
                          <PlusCircle />
                          Add New
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="items_list"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            All Students
                          </h2>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                            <AdminStudentList/>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="add_student"
                      className="h-full">
                        <ParentUpsertForm handelSubmit={(values)=>ParentApi.create(values)}/>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
}

export default ManageStudent;
