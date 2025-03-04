import {Tabs,TabsList,TabsTrigger,TabsContent} from '../ui/tabs';
import {Button} from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { PlusCircle } from 'lucide-react';
import ParentUpsertForm from '../Forms/ParentUpsertForm.jsx';
import AdminParentList from "@/components/data-table/parent/AdminParentList.jsx";
import ParentApi from "@/services/Api/Student/ParentApi.js";


const ManageParent = () => {
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
                        <TabsTrigger value="parents_list" className="relative">
                          Parents
                        </TabsTrigger>
                        <TabsTrigger value="add_parent">Add new Parent</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircle />
                          Add Parent
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="parents_list"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            All Parents
                          </h2>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                            <AdminParentList/>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>


                    </TabsContent>
                    <TabsContent
                      value="add_parent"
                      className="h-full"
                    >
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

export default ManageParent;
