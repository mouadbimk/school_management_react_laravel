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
import { ADMIN_DASHBOARD_LAYOUT, STUDENT_DASHBOARD_ROUTE, TEACHER_DASHBOARD_LAYOUT } from "../../router"
import { Loader2 } from "lucide-react"
import { useStudentContext } from "../../context/StudentContext"
const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
})

export default function Login(){ 
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
        try{
          await login(values.email,values.password).then((response)=>{
            console.log(response)
              if(response.status === 200){
                const {role} = response.data.user;
                setAuthenticated(true);
                  switch(role){
                    case 'student':
                      navigate(STUDENT_DASHBOARD_ROUTE);
                      break;
                    case 'admin':
                      navigate(ADMIN_DASHBOARD_LAYOUT);
                      break;
                      case 'teacher':
                        navigate(TEACHER_DASHBOARD_LAYOUT);
                        break;
                  }
              }
            })
        }catch(error){
          setError('email',{
            message: error.response?.data?.errors?.email?.join(", ") ||
                     error.response?.data?.message ||
                     "Login failed",
          });
        }
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