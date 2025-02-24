import ChatBot from "@/src/shared/components/common/chatBot"
import service from "@/src/shared/services/service"
import { formatDistanceToNow } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface chartDemoProps {
    botData: any
    botId: any
    conversationId: any
}

const ChatBotContainer: React.FC<chartDemoProps> = ({
    botData: initialBotData,
    botId,
    conversationId,
}) => {
    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: faIR })
    }

    const [botData, setBotData] = useState(initialBotData)
    const state = botData?.status === "inProgress" ? false : true
    const [botActive, setBotActive] = useState<boolean>(state)

    useEffect(() => {
        let fetchIntervalId: string | number | NodeJS.Timeout | undefined

        const fetchBotData = async () => {
            try {
                const response = await service.getBot(botData?.bot_id)
                const status = response.data.status
                if (status === "active" && !botActive) {
                    toast.success("چت بات شما اکنون آماده می باشد.")
                    toast.success("چت بات شما اکنون آماده استفاده و پاسخگویی می باشد.")
                    setBotActive(true)
                    clearInterval(fetchIntervalId)
                } else if (status !== "active") {
                    setBotActive(false)
                }
                
                setBotData(response.data)
            } catch (error: any) {
                console.error(error)
            }
        }

        const checkBotStatus = async () => {
            if (!botActive && !fetchIntervalId) {
                await fetchBotData()
                fetchIntervalId = setInterval(async () => {
                    console.log("Polling bot status...")
                    await fetchBotData()
                }, 5000)
            }
        }

        checkBotStatus()

        return () => {
            clearInterval(fetchIntervalId)
        }
    }, [botActive, botData])

    return (
        <>
            <div className="mx-auto mt-10 flex flex-col pb-12 md:mt-10 md:px-3">
                <div className="rounded-2xl bg-white shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
                    <div className="border-b p-4">
                        <span className="text-xl font-semibold leading-6 text-zinc-900">
                            {"مشخصلات چت بات"}
                        </span>
                    </div>
                    <div className="p-5">
                        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
                            <div className="flex w-full flex-col gap-4 relative">
                            <img src="/arrow-hamyar.svg" className="absolute z-50  left-0 transform rotate-[192deg] hidden md:block   md:w-[100px] md:h-[100px] lg:w-80 lg:h-80 "></img>
                                <div>
                                    <span className="text-zinc-5 block text-sm font-medium">
                                        چت بات آیدی :
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-700">
                                        {botData?.bot_id ||
                                            "sG-EAaBK-R4AbfET4AhmP"}
                                    </span>
                                </div>
                                <div className="flex gap-32">
                                    <div>
                                        <span className="text-zinc-5 block text-sm font-medium">
                                            وضعیت :
                                        </span>
                                        {botData?.security_configs
                                            ?.status_bot === "enable" ? (
                                            <span className="text-sm font-semibold text-zinc-700">
                                                <span className="mr-1 inline-block h-[10px] w-[10px] rounded-full bg-green-500"></span>{" "}
                                                فعال
                                            </span>
                                        ) : (
                                            <span className="text-sm font-semibold text-zinc-700">
                                                <span className="mr-1 inline-block h-[10px] w-[10px] rounded-full bg-red-500"></span>{" "}
                                                غیر فعال
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <span className="text-zinc-5 block text-sm font-medium">
                                            مدل :
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-700">
                                            {botData?.model_configs
                                                ?.model_name || "gpt-3.5-turbo"}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-zinc-5 block text-sm font-medium">
                                        دسترسی :
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-700">
                                        {botData?.security_configs
                                            ?.access_bot === "private"
                                            ? "خصوصی"
                                            : "عمومی"}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-zinc-5 block text-sm font-medium">
                                        آخرین آموزش :
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-700">
                                        {botData?.updated_at
                                            ? formatRelativeTime(
                                                  botData.updated_at,
                                              )
                                            : " مدتی قبل"}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full p-2">
                                <ChatBot
                                    botData={botData}
                                    chatBotActive={botActive}
                                    conversationId={conversationId}
                                    botId={botId}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBotContainer
