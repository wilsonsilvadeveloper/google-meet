import Image from "next/image"

export default function Chat(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,'0') + ':';
    const minutes = date.getMinutes().toString().padStart(2,'0');
    return (
        <div className="bg-gray-900 px-4 pt-4 w-[20%] rounded-md m-3 hidden md:flex">
            <div className="relative h-full w-full">
                <div className="bg-gray-950 rounded p-2">
                    <div className="flex items-center text-pink-400 space-x-2">
                        <span>Wilson</span>
                        <span>{hours + minutes}</span>
                    </div>
                    <div className="mt-5 text-sm">
                        <p>text</p>
                    </div>
                </div>
                <form action="" className="absolute bottom-2 w-full">
                    <div className="flex relative">
                        <input title="msg" type="text" name="" id="" className="bg-gray-950 px-3 py-2 w-full rounded-md" />
                        <Image alt="send" src="/img/send.png" width={20} height={20} className="absolute right-2 top-2.5 cursor-pointer"/>
                    </div>
                </form>
            </div>
        </div>
    )
}