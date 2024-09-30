

export const test=(url)=>{
    let test
    try {
         test = fetch(`url${url}`, {
            method: "POST",
            headers:{

            },
            body: JSON.stringify({name: "TEST"})
         })
    } catch (error) {
        
    }
    return test   
}