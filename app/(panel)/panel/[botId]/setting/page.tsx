import Setting from "@/src/modules/setting"
import { Metadata, NextPage } from "next"

const DashboardSettingPage: NextPage = () => {
    return (
        <>
            {" "}
            <Setting />
        </>
    )
}
export const metadata: Metadata = {
    title: "تنظیمات دستیار هوش مصنوعی | همیارچت",
    description: "مدیریت و پیکربندی تنظیمات دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardSettingPage
