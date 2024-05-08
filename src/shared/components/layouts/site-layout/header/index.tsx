"use client"
import { CloseCircle, HambergerMenu } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 65
            setScroll(isScrolled)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const links: any = [
        {
            link: "/",
            title: "امکانات",
        },
        {
            link: "/",
            title: "قیمت",
        },
        {
            link: "/",
            title: "مستندات",
        },
        {
            link: "/",
            title: "بلاگ",
        },
        {
            link: "/",
            title: "درباره ی ما",
        },
    ]

    return (
        <>
            <nav
                className={`fixed top-0 z-20 w-full border-b border-gray-200 ${scroll ? "bg-blue-700" : "bg-white"}`}
            >
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <Link href={"/"}>
                        <Image
                            src="/logo.svg"
                            height="120"
                            width="120"
                            alt="Logo"
                        />
                    </Link>

                    <div
                        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                        id="navbar-sticky"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 rtl:space-x-reverse ">
                            {links.map((link: any, index: any) => {
                                return (
                                    <li key={index}>
                                        <Link href={link.link}>
                                            <div className="block rounded bg-blue-700 px-3 py-2 text-black md:bg-transparent md:p-0 ">
                                                {link.title}
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={() => router.push("/auth/login")}
                            type="button"
                            className="hidden rounded-lg  px-4 py-2 text-center text-sm font-medium text-black focus:outline-none  focus:ring-4 md:flex "
                        >
                            ورود
                        </button>
                        <button
                          onClick={() => router.push("/auth/register")}
                            type="button"
                            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            ثبت نام
                        </button>
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            {isOpen ? <CloseCircle /> : <HambergerMenu />}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className=" w-full items-center justify-between md:order-1 md:hidden  md:w-auto"
                        id="navbar-sticky"
                    >
                        <ul
                            className={`mt-4  flex-col rounded-lg bg-white p-4 font-medium md:mt-0  md:space-x-8 md:border-0 rtl:space-x-reverse ${isOpen ? "flex" : "hidden"} `}
                        >
                            {links.map((link: any, index: any) => {
                                return (
                                    <li key={index}>
                                        <Link href={link.link}>
                                            <div className="block rounded px-3 py-2 text-black md:bg-transparent md:p-0 ">
                                                {link.title}
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header