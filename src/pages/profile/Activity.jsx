
const Activity = ({ activity, activityName }) => {

    const isArray = Array.isArray(activity)

    return (
        <div className="border-b dark:border-slate-700 flex gap-8 justify-between text-sm pb-1 transition-none md:transition-colors duration-300 ease-linear" >
            <span className="font-semibold text-slate-800 dark:text-slate-200">{activityName}</span>
            <span className={"text-right text-slate-700 dark:text-slate-300 " + (isArray ? " flex gap-x-2 gap-y-1 flex-wrap justify-end" : "")}>
                {!isArray ? "Yes" :
                    activity?.map((acti, index) => {
                        const isLast = activity?.length - 1 === index;
                        return <span key={index} > {acti}{!isLast && ","}</span>
                    })
                }
            </span>
        </div>
    )
}

export default Activity