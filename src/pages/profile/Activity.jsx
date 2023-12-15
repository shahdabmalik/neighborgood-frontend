
const Activity = ({ activity, activityName }) => {
    return (
        <div className="border-b dark:border-slate-700 flex justify-between text-sm pb-1 transition-none-none md:transition-colors duration-300 ease-linear" ><span className="font-semibold text-slate-800 dark:text-slate-200">{activityName}</span><span className="text-right text-slate-700 dark:text-slate-300">{activity}</span></div>
    )
}

export default Activity