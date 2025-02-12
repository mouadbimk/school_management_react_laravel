import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { axiosClient } from './../../api/axios';

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
  name: z.string().min(10).max(55),
})

export default function StudentRegister(){
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name:"Mouad bimk",
          email: "mouad@gmail.com",
          password:"12345678aze",
        },
      })
     
      // 2. Define a submit handler.
      const onSubmit = async values =>{
       const data = await axiosClient.post('/login',values);
        console.log(data)
      }
    return (

    
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type={'text'} placeholder="Name..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type={'email'} placeholder="Email..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
            <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={'password'} placeholder="Password..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

)
}