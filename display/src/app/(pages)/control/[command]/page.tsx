'use client';

import BackButton from "rbrgs/app/components/backButton";
import Header from "rbrgs/app/components/header";
import SelectItem from "rbrgs/app/components/selectItem";
import { getInfo } from "rbrgs/app/utils/actions/getCommandInfo";
import { useState } from "react";
import ROSLIB from "roslib";

const MoveTo = async (params: any) => {
    const [status, setStatus] = useState("Not connected");


    const info = await getInfo(params.searchParams.id);
    const title = info?.title || "";
    const command = info?.command || "";
    const items = info?.items || [];
    const description = info?.description || "";

    

    // const handleClick = (e: any) => {
    //     const msg = command + " " + e;
    //     setMessage(msg);
    //     console.log(message)
    // }

    

    return (
        <div className="p-20 flex flex-col justify-between h-screen">
            <div>
                <Header title={title} />
                <p className="text-neutral-300 font-mono my-4">
                    {description}
                </p>
                <div className="px-10 flex flex-col self-center">
                    {items.map((item, key) => (
                        <SelectItem key={key} label={item} command={command} />
                    ))}
                </div>
            </div>
            <div className="self-center">
                <BackButton />
            </div>
        </div>
    )
}

export default MoveTo;