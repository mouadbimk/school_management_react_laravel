import {DataTable} from "@/components/data-table/DataTable.jsx";
import {useEffect, useState} from "react";
import {DataTableColumnHeader} from "@/components/data-table/DataTableColumnHeader.jsx";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.js";
import {Button} from "@/components/ui/button.js";
import {Edit, Trash} from "lucide-react";
import {toast} from "sonner";
import {Sheet,SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.js";
import ParentUpsertForm from "@/components/Forms/ParentUpsertForm.jsx";
import {ScrollArea} from "@/components/ui/scroll-area.js";
import StudentApi from "@/services/Api/Student/StudentApi.js";


export default function AdminStudentList(){
    const [data,setData] = useState([]);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const AdminStudentColumns = [
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="#ID" />
            ),
        },

        {
            accessorKey: "name",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Full Name" />
            ),
        },

        {
            accessorKey: "email",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Email" />
            ),

        },
        {
            accessorKey: "gender",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Gender" />
            ),
        },
        {
            accessorKey: "blood_type",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Blood Type" />
            ),
        },
        {
            accessorKey: "student_parent_id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Student Parent ID" />
            ),
        },
        {
            accessorKey: "last_login_date",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Last Login Date" />
            ),
        },
        {
            accessorKey: "updated_at",
            header: "Updated At",
            cell:({ row }) => {
                const date = (row.getValue('updated_at'));
                const formated = new Date(date).toDateString();
                return <>{formated}</>
            }
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const {id,firstname,lastname} = row.original;
                return (
                    <div className={'flex justify-center gap-1'}>

                        <Sheet onOpenChange={setOpenUpdateDialog}>
                            <SheetTrigger>
                                <div className={'bg-green-500 text-white py-1 px-2 text-sm rounded'}>
                                    <Edit className={'w-5'} onClick={()=>setOpenUpdateDialog(true)}/>
                                </div>
                            </SheetTrigger>

                            <SheetContent inert={openUpdateDialog}> {/* Add inert here */}
                                <SheetHeader>
                                    <SheetTitle>Update Parent {firstname} {lastname}</SheetTitle>
                                    <ScrollArea className="h-[90vh]">
                                        <SheetDescription>
                                            <ParentUpsertForm


                                            values={row.original}
                                                handelSubmit={(values) => {
                                                    StudentApi.update(id, values).then((response) => {

                                                        setOpenUpdateDialog(false);
                                                        console.log(response);
                                                    }).finally(()=>{
                                                        toast.dismiss()
                                                    });
                                                }}
                                            />
                                        </SheetDescription>
                                    </ScrollArea>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button size={'sm'} variant="destructive" ><Trash/></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure to delete <b className={'capitalize'}>{firstname} {lastname}</b>?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className={'bg-red-600 hover:bg-red-400'} onClick={ async ()=>{
                                        const deletingLoader = toast.loading('Deleting in progress');
                                       const {data: deletedParent,status} = await StudentApi.delete(id);
                                       if(status === 200){
                                           setData(data.filter(parent => parent.id !== id));
                                           toast.dismiss(deletingLoader);
                                            //Toast sonner
                                           toast.success(`User ${deletedParent.data.firstname} ${deletedParent.data.lastname} has been Deleted.`)

                                       }

                                    }

                                    }>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                )
            },
        },
    ];
    useEffect(() => {
        StudentApi.getAll().then(({data}) =>{
            setData(data.data)
        }).catch(error =>{
           toast({title:"Error",
           description:error.data.message})
        });
    }, []);
    return<>
        <DataTable columns={AdminStudentColumns} data={data} />

    </>
}