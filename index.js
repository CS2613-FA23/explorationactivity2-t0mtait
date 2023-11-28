

async function encryptText()
{
    const inputText = document.getElementById('originalText').value;
    const response = await fetch('http://localhost:3000/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            text: inputText
        }),

    });
    if (response.ok)
    {
        const data = await response.json()
        document.getElementById("encryptedText").value = data.encryptedText
    }
    else
    {
        console.error('Error')
        document.getElementById("encryptedText").value = "encryption error"
    }
}


async function decryptText()
{
    const inputText = document.getElementById('encryptedText').value;
    const response = await fetch('http://localhost:3000/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            text: inputText
        }),

    });
    if (response.ok)
    {
        const data = await response.json()
        document.getElementById("originalText").value = data.ogText
    }
    else
    {
        console.error('Error')
        document.getElementById("originalText").value = "invalid input!"
    }
}




