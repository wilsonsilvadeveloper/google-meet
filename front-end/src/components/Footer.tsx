'use client'
import { useState } from "react";
import { Camera, Mic, NoCamera, NoMic, NoTela, Phone, Tela } from "../Icons";
import Container from "./Container";

export default function Footer(){
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setCameraOff] = useState(false);
    const [isScreenSharing, setScreenSharing] = useState(false);

    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0') + ':';
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return (
        <div className="fixed items-center bottom-0 bg-black py-6 w-full">
            <Container>
                <div className="grid grid-cols-3">
                    <div className="flex items-center">
                        <span className="text-xl">{hours + minutes}</span>
                    </div>
                    <div className="flex space-x-6 justify-center items-center">
                        {isMuted ? 
                            (<NoMic className="h-12 w-16 text-white p-2 bg-red-500 rounded-md cursor-pointer" onClick={()=>setIsMuted(!isMuted)}/>) : 
                            (<Mic className="h-12 w-16 text-white p-2 bg-gray-950 rounded-md cursor-pointer" onClick={()=>setIsMuted(!isMuted)} />)
                        } 
                        {
                            isCameraOff ? 
                            (<NoCamera className="h-12 w-16 text-white p-2 bg-red-500 rounded-md cursor-pointer" onClick={()=>setCameraOff(!isCameraOff)} />):
                            (<Camera className="h-12 w-16 text-white p-2 bg-gray-950 rounded-md cursor-pointer" onClick={()=>setCameraOff(!isCameraOff)}/>)
                        }
                        {   isScreenSharing ? 
                            (<NoTela className="h-12 w-16 text-white p-2 bg-red-500 rounded-md cursor-pointer" onClick={()=>setScreenSharing(!isScreenSharing)}/>):
                            (<Tela className="h-12 w-16 text-white p-2 bg-gray-950 rounded-md cursor-pointer" onClick={()=>setScreenSharing(!isScreenSharing)}/>)
                        }
                        <Phone className="h-11 w-16 text-white p-2 bg-primay hover:bg-red-500 rounded-md cursor-pointer"/>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}