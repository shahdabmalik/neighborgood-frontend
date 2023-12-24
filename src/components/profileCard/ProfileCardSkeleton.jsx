

const ProfileCardSkeleton = () => {
    return (
        <div className="border-2 dark:border-2 animate-pulse border-slate-300 dark:border-slate-700 rounded-2xl shadow-lg md:shadow-xl dark:shadow-none overflow-hidden flex flex-col bg-slate-300 dark:bg-slate-700">
            <div className="aspect-4/3 w-full h-full " ></div>
            <div className="bg-slate-100 dark:bg-slate-900 p-3 transition-none md:transition-colors duration-300 ease-linear h-full flex flex-col justify-between" >
                <p className=" rounded-lg w-full h-6 bg-slate-300 mt-5  dark:bg-slate-700 " ></p>
                <div className="flex gap-3 mt-4">
                    <div className="w-10 h-10 bg-slate-300 dark:bg-slate-700 rounded-full" ></div>
                    <div className="w-10 h-10 bg-slate-300 dark:bg-slate-700 rounded-full" ></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardSkeleton