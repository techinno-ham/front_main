import Affiliate from "@/src/modules/Affiliate";
import { Metadata, NextPage } from "next"

const AffiliatePage: NextPage = () => {
    return <Affiliate/>
};

export const metadata: Metadata = {
    title: "بلاگ‌ها | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "با بلاگ‌های همیارچت، از آخرین اخبار و مقالات مرتبط با دستیار هوش مصنوعی مکالمه‌ای مطلع شوید. مطالب آموزشی، نکات و ترفندها، و مطالعات موردی به شما کمک می‌کنند تا به روز بمانید و از فناوری‌های نوین در کسب‌وکار خود بهره‌برداری کنید.",
    // openGraph: {
    //   title: 'Blogs',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default AffiliatePage