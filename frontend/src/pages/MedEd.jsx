import React from "react";
import useSpeechToText from "../hooks/useSpeechToText";

export default function MedEd() {
    const { isListening, transcript, startListening, stopListening } = useSpeechToText();

    const startStopListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };


    return (
        <div>
            <h1>Medical Foreign Language Education</h1>
            <button
                onClick={() => startStopListening()}
                style={{
                    backgroundColor: isListening ? "red" : "green",
                }}
            >
                {isListening ? "Stop Listening" : "Speak"}
            </button>
            <p>{transcript}</p>
        </div>
    );
}