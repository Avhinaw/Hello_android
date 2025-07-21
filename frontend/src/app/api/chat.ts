export async function sendMsgToBackend(prompt: string) {
    const response = await fetch('https://hello-android.onrender.com/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt})
    });
    const data = await response.json();
    return data.reply;
}