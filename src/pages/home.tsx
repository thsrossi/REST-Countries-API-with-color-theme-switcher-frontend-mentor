import React from "react";
import { Row } from "../Components/Header/style";

import { HomePage } from "./homeStyle";

export default function Home() {
    const optionsRegion = [
        { label: 'Africa', value: 'Africa' },
        { label: 'America', value: 'America' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' }
    ]

    return (
        <HomePage>

            <Row justifyContent={'space-between'}>
                <div>
                    <input type="text" />
                </div>
                <select>
                    {optionsRegion.map((option: any, index: number) => {
                        return (
                            <option key={index} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
            </Row>
            <div className="flex">
                <div className="flex-none ...">
                    01
                </div>
                <div className="flex-1 p-28">
                    02
                </div>
                <div className="flex-1 w-32 ...">
                    03
                </div>
            </div>

        </HomePage >
    )
}