"use client"
import useSelectModal from "@/src/shared/components/common/selectModal/hooks/useSelectModal.ts"
import useFetchLinks from "@/src/shared/hooks/fetchLinks"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ClockLoader } from "react-spinners"
import Services from "../../../../../src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { toast } from "sonner"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)
    const SelectModal = useSelectModal()

    const validateInput = () => {
        // Check if input value is empty
        if (!inputValue.trim()) {
            toast.error("آدرس وبسایت نمی‌تواند خالی باشد.")
            return false
        }
        // Check if input value is a valid URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
        if (!urlPattern.test(inputValue)) {
            toast.error("آدرس وبسایت وارد شده معتبر نیست.")
            return false
        }
        return true
    }

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async () => {
        if (!validateInput()) {
            return
        }

        try {
            setLoading(true)
            const response = await Services.fetchLink(inputValue)
            const linkArray = response.data
            console.log(linkArray.length)
            if (linkArray.length > 2) {
                SelectModal.setUrls(linkArray)
                SelectModal.onOpen()
            } else {
                toast.error("لینک های سایت شما کافی نمی باشد.")
            }
        } catch (error) {
            toast.error("بررسی سایت مشکل پیش امده است.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="intro_conteiner">
                <div>
                    <div className="absolute left-[80%] top-24 -z-50">
                        <Image
                            src="/images/rightBlur.png"
                            height="100"
                            width="650"
                            alt="Logo"
                        />
                    </div>
                    <div className="left-blur absolute right-[80%] top-24 -z-50">
                        <Image
                            src="/images/letfBlur.png"
                            height="200"
                            width="500"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* <a
                        href="#"
                        className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pl-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                        role="alert"
                    >
                        <span className="bg-blue-600 ml-3 rounded-full px-4 py-1.5 text-xs text-white">
                            New
                        </span>{" "}
                        <span className="text-sm font-medium">
                            Flowbite is out! See whats new
                        </span>
                        <svg
                            className="-rotate-180 mr-2 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a> */}
                    <h1>
                        <p className=" text-4xl md:text-7xl">
                            <span className="text-blue-600">همیارچت</span> ، هوش
                            مصنوعی در خدمت{" "}
                            <span className="text-blue-600">رضایت</span> مشتریان
                            و<span className="text-blue-600">پیشرفت</span>{" "}
                            کسب‌وکارها
                        </p>
                    </h1>
                    <h5 className="flex gap-x-px">
                        <p className="text-4xl md:text-7xl"></p>
                        <div>
                            <Image
                                src="/icons/jet.svg"
                                height="70"
                                width="70"
                                alt="Logo"
                            />
                        </div>
                    </h5>
                </div>
                <div className="mt-7 text-base text-slate-400 md:mt-10 md:text-lg ">
                    <p>
                        {`با همیارچت، تجربه‌ای هوشمند و شخصی‌سازی شده برای ارتباطات آنلاین و خدمات مشتریان خود بسازید. پلتفرم قدرتمند ما به شما کمک می‌کند تا به سادگی و با کارایی بالا، ارتباطات بهینه‌تری با مشتریان خود برقرار کنید و همیشه در دسترس باشید.`}
                    </p>
                </div>
                <input
                    type="text"
                    className="input-url"
                    onChange={handleInputChange}
                    placeholder="آدرس وبسایت مورد نظرتان وارد کنید ..."
                />
                <div className="mt-[20px] flex flex-col items-center justify-center">
                    <div>
                        <button className="btn-demo" onClick={handleSubmit}>
                            ساختن بات دمو
                        </button>
                    </div>

                    <div className="mt-[22px] md:mt-[35px]">
                        <Image
                            src="/images/phone.svg"
                            height="400"
                            width="600"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>

            {loading && (
                <>
                    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#ffffff80]"></div>{" "}
                    <>
                        <div className="fixed left-1/2  top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3">
                                <span>در حال دریافت اطلاعات ...</span>
                                <LoaderLottie />
                            </div>
                        </div>
                    </>
                </>
            )}
        </>
    )
}

export default IntroduceSections
