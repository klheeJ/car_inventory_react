let token = 'd78b68daa689227debf75510f054412806e4ae5ed9d23f9c'

export const server_calls={
    get: async () => {
        const response = await fetch('https://futuristic-roomy-flyingfish.glitch.me/api/memes', 
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'x-access-token': token
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }    
        return await response.json()
    },

    create: async (data: any = {}) =>{
        const response = await fetch ('https://futuristic-roomy-flyingfish.glitch.me/api/memes',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': token
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async(id:string, data:any={}) => {
        const response = await fetch('https://futuristic-roomy-flyingfish.glitch.me/api/memes/${id}',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'x-access-token': token
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async(id:string, data:any={}) => {
        const response = await fetch('https://futuristic-roomy-flyingfish.glitch.me/api/memes/${id}',
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'x-access-token': token
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },




}