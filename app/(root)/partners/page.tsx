import AboutUs from "@/src/modules/about-us"
import Partners from "@/src/modules/partners";
import { Metadata, NextPage } from "next"

const PrtnersPage: NextPage = () => {
    return <Partners/>
};
export const metadata: Metadata = {
    title: "دعوت دوستان  | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "در همیارچت، ما متعهد به بهبود تجربه مشتریان شما از طریق دستیار هوش مصنوعی مکالمه‌ای هستیم. پلتفرم ما با ارائه پاسخ‌های سریع و دقیق، به خودکارسازی پشتیبانی مشتریان کمک کرده و رضایت آن‌ها را افزایش می‌دهد. ما با بهره‌گیری از فناوری‌های پیشرفته، سعی در ارتقاء کسب‌وکار شما داریم.",
    // openGraph: {
    //   title: 'About Us',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}



export default PrtnersPage;