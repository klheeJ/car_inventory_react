let token = 'e27596f7c50cb6eb4f21702383d33cf05264f6de51324f43'

export const server_calls={
    get: async () => {
        const response = await fetch('https://scratch-separate-omelet.glitch.me/api/inventories', 
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }    
        return await response.json()
    },

    create: async (data: any = {}) =>{
        const response = await fetch ('https://scratch-separate-omelet.glitch.me/api/inventories',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async(id:string, data:any={}) => {
        const response = await fetch(`https://scratch-separate-omelet.glitch.me/api/inventories/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async(id:string, data:any={}) => {
        const response = await fetch(`https://scratch-separate-omelet.glitch.me/api/inventories/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },




}