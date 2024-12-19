import Dashboard from "./page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import LogoutButton from "./logout-button";
export default function LayoutDashboard(){
  return (
    <>
    <SidebarProvider> 
    <AppSidebar/>
    <Dashboard/>
   </SidebarProvider>
   </>
  )
}