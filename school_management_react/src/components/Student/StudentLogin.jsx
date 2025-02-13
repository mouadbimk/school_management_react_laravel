import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { STUDENT_DASHBOARD_ROUTE } from "../../router"
import { Loader2 } from "lucide-react"
import { useStudentContext } from "../../context/StudentContext"
const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
})

export default function StudentLogin(){ 
  const {login,setAuthenticated} = useStudentContext();
  const navigate = useNavigate();
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
       await login(values.email,values.password).then((value)=>{
          if(value.status ==204){
             setAuthenticated(true);
             navigate(STUDENT_DASHBOARD_ROUTE);
          }
        }).catch(({response})=>{
          setError('email',{
            message:response.data.errors.email.join()
          });
        })
      }
    return (

    
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader2 className={'my-2 mx-2 animate-spin'} />} Login
          </Button>
      </form>
    </Form>

)
}