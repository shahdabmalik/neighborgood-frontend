
const ProfileSkeleton = ({ userProfile }) => {

    return (
        <div className="max-w-screen-lg mx-auto pt-32 pb-24 animate-pulse" >
            <div className="flex flex-col md:flex-row gap-10 md:gap-5" >
                <div className=" max-w-md md:max-w-[250px] lg:max-w-xs w-full aspect-square rounded-md border border-primary-light shadow-xl shadow-slate-200 dark:shadow-none bg-slate-300 dark:bg-slate-700"></div>
                <div className=" flex flex-col gap-4 px-4 pb-4 pt-2 flex-grow transition-none md:transition-colors duration-300 ease-linear" >
                    <div className="border-b pb-2 border-slate-300 dark:border-slate-700 transition-none md:transition-colors duration-300 ease-linear">
                        <h1 className="h-8 my-1 bg-slate-300 dark:bg-slate-700  max-w-xs w-full rounded-full"  ></h1>
                    </div>
                    <div className=" flex flex-col gap-4 transition-colors" >
                        <div className="flex items-center gap-8" ><span className="bg-slate-300 dark:bg-slate-700 h-5 my-0.5 rounded-full w-16" ></span> <span className="h-5 bg-slate-300 dark:bg-slate-700 w-32 rounded-full" ></span></div>
                        <div className="flex items-center gap-8" ><span className="bg-slate-300 dark:bg-slate-700 h-5 my-0.5 rounded-full w-16" ></span> <span className="h-5 bg-slate-300 dark:bg-slate-700 w-60 rounded-full" ></span></div>
                        {/* <div className="flex gap-4 " ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Address:</span> <span className="flex-grow text-sm" >232 Luettgen Rapid, Trantowborough, CA 44218-8638</span></div> */}
                    </div>
                    {userProfile && <div className="mt-8 h-10 w-48 bg-slate-300 dark:bg-slate-700 rounded" ></div>}
                </div>
            </div>
            <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                <div className="w-32 h-6 mb-8 rounded-full bg-slate-300 dark:bg-slate-700" ></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                </div>
            </div>
            <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                <div className="w-32 h-6 mb-8 rounded-full bg-slate-300 dark:bg-slate-700" ></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                    <div className="flex justify-between border-b pb-1 dark:border-slate-800" ><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-20"></div><div className="h-4 bg-slate-300 dark:bg-slate-700 rounded-full w-32"></div></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSkeleton