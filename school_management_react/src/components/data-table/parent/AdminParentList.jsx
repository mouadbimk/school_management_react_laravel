import {DataTable} from "@/components/data-table/DataTable.jsx";
import {useEffect, useState} from "react";
import ParentApi from "@/services/Api/Student/ParentApi.js";
import {DataTableColumnHeader} from "@/components/data-table/DataTableColumnHeader.jsx";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.js";
import {Button} from "@/components/ui/button.js";
import {Trash} from "lucide-react";
import {toast} from "sonner";


export default function AdminParentList(){
    const [data,setData] = useState([]);
    const AdminParentColumns = [
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="#ID" />
            ),
        },

        {
            accessorKey: "firstname",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="First Name" />
            ),
        },
        {
            accessorKey: "lastname",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Last Name" />
            ),
        },
        {
            accessorKey: "address",
            header: "Address",
        },
        {
            accessorKey: "email",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Email" />
            ),

        },
        {
            accessorKey: "phone",
            header: "Phone",
            // cell: ({ row }) => {
            //     const phone = (row.getValue("phone"))
            //     return <div className="text-right font-medium">+212-{phone}</div>
            // },
        },
        {
            accessorKey: "blood_type",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Blood Type" />
            ),
        },
        {
            accessorKey: "date_of_birth",
            header: "Date of Birth",
        },
        {
            accessorKey: "gender",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Gender" />
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
                    <>
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
                                       const {data: deletedParent,status} = await ParentApi.delete(id);
                                       console.log(deletedParent);
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

                    </>
                )
            },
        },
    ];
    useEffect(() => {
        ParentApi.all().then(({data}) =>{
            console.log(data);
            setData(data.data)
        }).catch(error =>{
           console.log(error);
        });
    }, []);
    return<>
        <DataTable columns={AdminParentColumns} data={data} />

    </>
}