from groq import Groq
from config import GROQ_API_KEY
<<<<<<< HEAD
from config import OPENAI_API_KEY
from openai import OpenAI


def text_to_speech(text):
    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.audio.speech.create(
        model="tts-1",
        voice="alloy",
        input=text,
    )

    response.stream_to_file("output.mp3")


def chat(input, chat_history=""):
    client = Groq(api_key=GROQ_API_KEY)
=======


client = Groq(api_key=GROQ_API_KEY)
def chat(input, chat_history=""):
>>>>>>> 9d6a8912fb88fbb86e74ecbffb303e915bd276f8
    completion = client.chat.completions.create(
        model="llama-3.1-70b-versatile",
        messages=[
            {
                "role": "system",
<<<<<<< HEAD
                "content": "Pretend you are a mock patient who is speaking with a medical student (the user). You have symptoms of headache and nausea. Please try to keep your answers brief and only directly address the questions that the student asks you. Express that you are in great discomfort. Do not talk about being a large language model EVER. Do not give action statements or qualifiers such as gritting teeth or anxiously. Instead only use language which can express those characteristics, such as incorporating nervous or angry language."
=======
                "content": "Pretend you are a mock patient who is speaking with a medical student (the user). You have symptoms of headache and nausea. Please try to keep your answers brief and only directly address the questions that the student asks you. Express that you are in great discomfort. Do not talk about being a large language model EVER."
>>>>>>> 9d6a8912fb88fbb86e74ecbffb303e915bd276f8
            },
            {
                "role": "system",
                "content": chat_history
            },
            {
                "role": "user",
                "content": input
            }
        ],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True,
        stop=None,
    )

    full_response = ""
    for chunk in completion:
        print(chunk.choices[0].delta.content or "", end="")
        full_response += chunk.choices[0].delta.content or ""
    return full_response
    

if __name__ == "__main__":
    chat_history = ""
    while True:
        print("\n")
        user_input = input("You: ")
        chat_history = chat_history + "\nUser: " + user_input
        if user_input.lower() in ['quit', 'exit']:
            break
        response = chat(user_input, chat_history)
<<<<<<< HEAD
        text_to_speech(response)
=======
>>>>>>> 9d6a8912fb88fbb86e74ecbffb303e915bd276f8
        chat_history = chat_history + "\nAI: " + response

