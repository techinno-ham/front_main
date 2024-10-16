import { Trash } from "iconsax-react"
import useDateSourceUpdate from "../../hooks/useDataSourceUpdate"
import useStoreLoadData from "../../hooks/loadDataSource"
import { useEffect } from "react"

const QandA = () => {
    const {
        qaList,
        addQAList,
        isQAInitialized,
        addQAInitialized,
        isQAListChanged,
        addQAListChanged,
    } = useDateSourceUpdate()
    const { data, setData } = useStoreLoadData()

    useEffect(() => {
        if (!isQAInitialized) {
            const initQa = data.qANDa_input
            addQAList(initQa)
            addQAInitialized(true)
        }
    }, [isQAInitialized, addQAList, addQAInitialized])

    const handleAddQA = () => {
        if (!isQAListChanged) {
            addQAListChanged(true)
        }
        addQAList([...qaList, { question: "", answer: "" }])
    }

    const handleDeleteQA = (index: number) => {
        if (!isQAListChanged) {
            addQAListChanged(true)
        }
        const newList = [...qaList]
        newList.splice(index, 1)
        addQAList(newList)
    }

    const handleInputChange = (index: number, field: string, value: string) => {
        if (!isQAListChanged) {
            addQAListChanged(true)
        }
        const newList: any = [...qaList]
        newList[index][field] = value
        addQAList(newList)
    }

    return (
        <div className=" mt-4 flex justify-center">
            <div className="h-[90%] w-[90%]">
                <div className="mb-3 flex items-center justify-between">
                    <button
                        className="rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-100"
                        onClick={() => {
                            addQAList([])
                            setData({
                                ...data,
                                qANDa_input: [],
                            })
                        }}
                    >
                        حذف کردن همه
                    </button>
                    <button
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white"
                        onClick={handleAddQA}
                    >
                        اضافه کردن +
                    </button>
                </div>
                <div className="custom-scrollbar mt-3 flex h-72 flex-col gap-10  overflow-auto">
                    {qaList.map((qa, index) => (
                        <div
                            key={index}
                            className="mt-4 rounded-lg bg-[#55505004] p-4 shadow-md"
                        >
                            <div className="flex justify-end">
                                <button
                                    className="p-2"
                                    onClick={() => handleDeleteQA(index)}
                                >
                                    <Trash size="26" color="red" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>سوال:</span>
                                <textarea
                                    className="rounded-md border border-gray-300 p-2"
                                    placeholder="مثال: چطوری از قیمت ها مطلع بشم؟"
                                    value={qa.question}
                                    onChange={(e) =>
                                        handleInputChange(
                                            index,
                                            "question",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>پاسخ :</span>
                                <textarea
                                    className="rounded-md border border-gray-300 p-2"
                                    placeholder="با مراجعه به صفحه قیمتگزاری میتونید از آخرین وضعیت قیمت مطلع شوید"
                                    value={qa.answer}
                                    onChange={(e) =>
                                        handleInputChange(
                                            index,
                                            "answer",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QandA
