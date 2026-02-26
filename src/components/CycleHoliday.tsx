import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday =
    | "Valentine's Day"
    | "Memorial Day"
    | "Easter"
    | "Thanksgiving"
    | "Christmas";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    const ALPHABETIC_TRANSITION: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Memorial Day",
        "Memorial Day": "Thanksgiving",
        Thanksgiving: "Valentine's Day",
        "Valentine's Day": "Christmas",
    };

    const CHRONOLOGICAL_TRANSITION: Record<Holiday, Holiday> = {
        "Valentine's Day": "Easter",
        Easter: "Memorial Day",
        "Memorial Day": "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Valentine's Day",
    };

    const TO_EMOJIS: Record<Holiday, string> = {
        Christmas: "🎁",
        Easter: "🐇",
        "Memorial Day": "🪖",
        Thanksgiving: "🦃",
        "Valentine's Day": "💘",
    };

    function goNextTime(): void {
        const newHoliday: Holiday = CHRONOLOGICAL_TRANSITION[holiday];
        setHoliday(newHoliday);
    }

    function goNextAlphabet(): void {
        const newHoliday: Holiday = ALPHABETIC_TRANSITION[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>Holiday: {TO_EMOJIS[holiday]}</span>
            <p></p>
            <Button onClick={goNextAlphabet}>
                Next Holiday Alphabetically
            </Button>
            <Button onClick={goNextTime}>Next Holiday in the Year</Button>
        </div>
    );
}
