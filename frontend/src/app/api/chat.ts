export async function sendMsgToBackend(prompt: string) {
    const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt})
    });
    const data = await response.json();
    return data.reply;
}