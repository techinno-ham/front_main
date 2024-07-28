import Dashboard from "@/src/modules/dashboard"
import MyMessage from "@/src/modules/myMessage"
import Train from "@/src/modules/train"
import { Metadata, NextPage } from "next"

const DashboardMyMessagePage: NextPage = () => {
    return (
        <>
            {" "}
            <MyMessage />
        </>
    )
}
export const metadata: Metadata = {
    title: "تاریخچه پیام‌ها | همیارچت",
    description: "مشاهده و بررسی تاریخچه پیام‌های دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default DashboardMyMessagePage
