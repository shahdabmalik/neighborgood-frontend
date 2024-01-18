import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { IoIosPersonAdd } from "react-icons/io";
import { Oval } from 'react-loader-spinner';


const InvitationButton = () => {

    let [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log(errors);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const response = await axios.post("/", JSON.stringify(data))
            toast.success(response?.data?.message)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            const message = error?.response?.data?.message || error.message
            toast.error(message)
        }

    }

    return (
        <>
            <button type='button' className='bg-primary-light text-black font-medium px-4 py-1.5  hover:bg-primary rounded flex items-center justify-center gap-2' onClick={openModal} > <IoIosPersonAdd size={20} /> Invite</button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25 backdrop-blur" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white dark:bg-slate-900 p-4 pt-2 text-left align-middle shadow-xl transition-all border border-primary">
                                    <h3 className='text-2xl font-semibold text-slate-800 dark:text-slate-200 ' >Invite Neighbors</h3>
                                    <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                                        <div className='relative'>
                                            <input type='email' name='email'
                                                className='w-full  dark:bg-slate-950 dark:text-slate-300 focus:outline-none border border-slate-300 dark:border-slate-800 rounded p-2 h-10'
                                                {...register('recipient_email', {
                                                    required: "Please enter recipient email",
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                        message: "Invalid email format"
                                                    }
                                                })}
                                                placeholder='Enter neighbor email'
                                            />
                                            {errors.recipient_email && <p className="text-xs text-black dark:text-slate-200 font-medium absolute -bottom-5 right-0.5">{errors.recipient_email.message}</p>}
                                        </div>
                                        <button disabled={isLoading} type='submit' className='mt-5 w-full bg-primary-light hover:bg-primary dark:bg-primary dark:hover:bg-primary-light dark:text-white px-4 py-1.5 rounded font-medium text-black flex items-center justify-center' >{!isLoading ? "Invite" :
                                            <Oval
                                                height={24}
                                                width={24}
                                                color="#ffffff"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                visible={true}
                                                ariaLabel='oval-loading'
                                                secondaryColor="#ffffff"
                                                strokeWidth={4}
                                                strokeWidthSecondary={3}
                                            />}</button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default InvitationButton