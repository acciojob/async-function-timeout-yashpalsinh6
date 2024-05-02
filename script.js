//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    const text = document.getElementById('text').value;
    const delay = document.getElementById('delay').value;

    await displayMessageWithDelay(text, delay);
});

async function displayMessageWithDelay(text, delay) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = ''; // Clear previous output

    await new Promise(resolve => setTimeout(resolve, delay)); // Convert delay to milliseconds

    outputDiv.textContent = text;
}