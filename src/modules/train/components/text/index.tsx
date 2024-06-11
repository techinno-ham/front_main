const TextInput = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="h-11/12 w-11/12">
                    <textarea
                        className="h-full w-full resize-none rounded-md border border-gray-300 p-4"
                        placeholder="میتوانید اینجا بنویسید تا من یاد بگیرم ..."
                        rows={12}
                    />
                </div>
            </div>
        </>
    )
}

export default TextInput