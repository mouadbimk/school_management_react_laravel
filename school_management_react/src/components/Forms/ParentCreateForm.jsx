import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import { RadioGroup,RadioGroupItem, } from "../../components/ui/radio-group";
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "../../components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import ParentApi from "../../services/Api/Student/ParentApi"
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
})

export default function ParentCreateForm(){ 
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "mouad@gmail.com",
          password:"12345678",
        },
      })
     const {setError, formState: {isSubmitting,}} = form;
      // 2. Define a submit handler.
      const onSubmit = async values =>{
        console.log(values);
        debugger;
           await ParentApi.create(values).then((
            {status,data}) => {
            if(status === 200){
                console.log(data)
            }
           })
            

      }
    return (
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input type={'text'} placeholder="First Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
              <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input type={'text'} placeholder="Last Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="date_of_birth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type={'date'} placeholder="Date of Birth..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
  control={form.control}
  name="gender"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Gender</FormLabel>
      <FormControl>
        <RadioGroup
          defaultValue={field.value} // Set the default value from the form
          onValueChange={field.onChange} // Update the form state when the value changes
          className="flex flex-col space-y-2" // Add spacing between radio buttons
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="f" id="female" />
            <Label htmlFor="female">Women</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="m" id="male" />
            <Label htmlFor="male">Man</Label>
          </div>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="blood_type"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Blood Type</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a Blood Type" />
         
          </SelectTrigger>
        </FormControl>
        <SelectContent>
        {["O+","O-","A+","A-","B+","B-","AB+","AB-"].map((bloodType,key) =>{
              return <SelectItem key={key} value={bloodType}>{bloodType}</SelectItem>
            })}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
             <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type={'text'} placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
               <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type={'text'} placeholder="Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type={'text'} placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader2 className={'my-2 mx-2 animate-spin'} />} Create
          </Button>
      </form>
    </Form>

)
}