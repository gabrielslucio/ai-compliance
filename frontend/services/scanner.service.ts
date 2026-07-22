export async function scanContent(
    content: string
) {
    const response = await fetch(
        "http://127.0.0.1:8000/scan",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
            }),
        }
    );

    await new Promise(
        (resolve) => setTimeout(resolve, 2000)
    );

    return response.json();
}