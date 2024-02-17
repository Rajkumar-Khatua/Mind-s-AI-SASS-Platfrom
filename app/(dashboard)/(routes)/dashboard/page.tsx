import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return ( <div>
        Dashboard page
        <UserButton afterSignOutUrl="/"/>
    </div> );
}
 
export default DashboardPage;