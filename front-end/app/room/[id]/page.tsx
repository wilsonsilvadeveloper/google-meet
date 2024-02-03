import Chat from "@/src/components/Chat";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function Room({params}: {params:{id: string}}){
    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[80%]">
                <div className="md:w-[80%] w-full m-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="bg-gray-950 w-full h-full rounded-md p-2 relative">
                            <video src="" className="w-full h-full">

                            </video>
                            <span className="absolute bottom-3">Wilson</span>
                        </div>
                        <div className="bg-gray-950 w-full h-full rounded-md p-2 relative">
                            <video src="" className="w-full h-full">

                            </video>
                            <span className="absolute bottom-3">Wilson</span>
                        </div>
                    </div>
                </div>
                <Chat />
            </div>
            <Footer />
        </div>
    )
};