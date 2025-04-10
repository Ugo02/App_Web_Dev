export async function postJSON(url, data, options = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Request failed');
    }
    
    return response.json();
}

export async function getJSON(url, options = {}) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            ...options.headers
        }
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Request failed');
    }
    
    return response.json();
}