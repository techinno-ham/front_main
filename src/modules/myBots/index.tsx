"use client"
import { Danger, ElementPlus, SearchNormal1, Star } from "iconsax-react"
import BotBox from "./components/botBox"
import { useRouter } from "next/navigation"
import TotalBots from "./components/totalBot"
import PremiumBot from "./components/primiumBot"
import { getBotList } from "./utils"
import { useEffect, useState } from "react"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import Head from "next/head"
import EmptyBot from "@/src/shared/components/common/emptyBotLoader"
import LoaderLottie from "@/src/shared/components/common/loader"
import Modal from "@/src/shared/components/common/modal"
import Image from "next/image"
import useDebounce from "@/src/shared/hooks/Debounce"
import Pagination from "./components/pagination"

const MyBots = () => {
    const [myBotsArry, setMyBots] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchText, setSearchText] = useState("");
    const debouncedSearchText = useDebounce(searchText, 500);
   
    useEffect(() => {
        const fetchBotList = async () => {
            setIsLoading(true)
            try {
                const response: any = await getBotList({
                    type: "website",
                    itemsPerPage: 10,
                    page: currentPage,
                    search: debouncedSearchText,  
                })
                setMyBots(response.data.bots)
                setTotalPages(response.data.totalPages);
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchBotList()
    }, [debouncedSearchText,currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleOnCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(false)
    };
    const handlePrimiumRoute = ()=>{
        setOpen(false);
        router.push("/pricing")
    }
    const handleLimitModal = () => {
        setOpen(true)
    }
    const handleDeleteBot = async (botId: string) => {
        try {
            await service.deleteBot(botId)
            setMyBots((prevBots) =>
                prevBots.filter((bot: any) => bot.bot_id !== botId),
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container mx-auto mb-40  mt-24 h-full px-4">
                <div className="flex w-full items-center justify-between">
                    <div className="w-[60%]">
                        <p className="text-[28px]  md:text-3xl">
                            چت بات های من
                        </p>
                        <p className="text-[10px]  text-slate-500 md:mt-1 md:text-sm">
                            در اینجا، می توانید بات های خود را ببینید و بات های
                            جدید بسازید.
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                if (myBotsArry.length < 2) {
                                    router.push("/createbot")
                                } else {
                                    toast.error(
                                        "شما بیش از 2 بات نمیتوانید بسازید...",
                                    )
                                    handleLimitModal();
                                }
                            }}
                            className="rounded-2xl bg-[#1D4ED8] p-3 text-[12px]  text-slate-50 md:p-3 md:text-sm"
                            disabled={isLoading}
                        >
                            <div className="flex gap-2">
                                <ElementPlus size="18" color="#FFf" />
                                <span> چت بات جدید</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-6 md:flex-row">
                    <TotalBots totalNumber={myBotsArry.length}  isLoading={isLoading}/>
                    <PremiumBot  totalPerimium={0} isLoading={isLoading} />
                </div>

                {/* bot container */}
                <div className="mt-8 rounded-2xl bg-white px-10 pt-10 py-4 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] md:min-h-[450px]">
                    <div className="flex justify-center">
                        <div className="flex w-full items-center rounded-lg border border-solid border-gray-200 p-2 text-[14px] md:w-1/2">
                            <SearchNormal1 color="#8F8F8F" />
                            <div className="mr-5 w-full">
                                <input
                                    className="w-full border-none placeholder-gray-300 focus:outline-none"
                                    type="text"
                                    placeholder="جستوجو کردن ..."
                                    onChange={(e) =>
                                        setSearchText(e.target.value.toLowerCase())
                                      }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {isLoading ? (
                            <>
                                <div className="col-span-full flex items-center justify-center">
                                    <span className="mr-3">
                                        مقداری صبر کنید ...
                                    </span>
                                    <LoaderLottie />
                                </div>
                            </>
                        ) : myBotsArry.length > 0 ? (
                            myBotsArry.map((bot: any, index) => (
                                <BotBox
                                    key={index}
                                    type={bot.type}
                                    botsData={bot}
                                    onDelete={handleDeleteBot}
                                />
                            ))
                            
                        ) : (
                            <div className="col-span-full flex h-full flex-col items-center justify-center text-center">
                                <EmptyBot />
                                <span>در حال حاظر چت باتی وجود ندارد ....</span>
                                <span>
                                    شما میتوانید برای ساختن آن روی دکمه ی "چت
                                    بات جدید "بزنید و اولین چت بات خود را
                                    بسازید.
                                </span>
                            </div>
                        )}
                    </div>
                    {!isLoading &&  myBotsArry.length > 0 && (
                        <>
                               <Pagination
                        currentPage={currentPage}
                         totalPages={totalPages}
                          onPageChange={handlePageChange}
                        />
                        </>
                    ) }
             
              
                </div>
                 <Modal
                                        open={open}
                                        onClose={handleOnCloseModal}
                                    >
                                        <div className="w-80 mt-4"> 
                                            <div className="flex justify-center items-center">
                                            <div className="flex items-center justify-center">
                            <Image
                                src="/logo.svg"
                                height="60"
                                width="60"
                                alt="Logo"
                            />
                            <span
                                className={`mr-2 text-2xl font-bold `}
                            >
                                همیار چت
                            </span>
                                             </div>

                                            </div>
                                            <div className="flex justify-center mt-8">
                                            <Danger
                                              size="40"
                                              color="#ef4444"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-red-500"> حد استفاده به پایان رسیده است.</p>
                                                <span className="text-[12px] text-gray-400">پلن خود را ارتقا دهید تا استفاده بیشتری داشته باشید</span>
                                            </div>
                                            <div className="flex flex-col mt-8">
                                            <div>
                                                   <button
                                                       onClick={handlePrimiumRoute}
                                                       className="rounded-2xl bg-[#ed8307] p-3 text-[12px]  text-slate-50 md:p-3 md:text-sm w-full flex justify-center"
                                                      >
                                                     <div className="flex gap-2">
                                                        <Star size="18" color="#FFf" />
                                                        <span> ارتقا حساب </span>
                                                     </div>
                                                  </button>
                                            </div>
                                            

                                            </div>

                                          
                                        </div>
                                    </Modal>
            </div>
        </>
    )
}

export default MyBots
