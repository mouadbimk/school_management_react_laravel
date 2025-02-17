import { Loader } from "lucide-react";
import { useStudentContext } from "../../context/StudentContext";

export default function TeacherDashboard() {
  const { user,authenticated } = useStudentContext();

  // Ensure `user` is defined
  if (!authenticated || !user) {
    return <Loader className="w-100 min-w-full animate-spin flex items-center justify-center">Loading</Loader>;
  }

  // Convert `user.created_at` to a valid Date object safely
  const formattedDate = user.created_at
    ? new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(user.created_at)) // Ensure it's a Date object
    : "No date available"; // Fallback if `created_at` is invalid

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.id}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{formattedDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
