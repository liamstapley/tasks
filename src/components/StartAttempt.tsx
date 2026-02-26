import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numberOfAttempts, setNumberOfAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function mulligan(): void {
        setNumberOfAttempts(numberOfAttempts + 1);
    }

    function startQuiz(): void {
        setNumberOfAttempts(numberOfAttempts - 1);
    }

    return (
        <div>
            <Button
                disabled={inProgress || numberOfAttempts === 0}
                onClick={() => {
                    setInProgress(true);
                    startQuiz();
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setInProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    mulligan();
                }}
            >
                Mulligan
            </Button>
            {numberOfAttempts}
        </div>
    );
}
