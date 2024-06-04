import { useState } from "react";
import { useEffect } from "react";

export default function ProgressBar({ timer }) {
    const [timeRemaining, setTimeRemaining] = useState(timer);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval")
            setTimeRemaining(prevTime => prevTime - 10)
        }, 10);
        return () => { clearInterval(interval) };
    }, [])

    return <progress value={timeRemaining} max={timer} />
}