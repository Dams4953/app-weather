// API des villes
export async function apiFunctionVilles (input) {
    const apiKeyVilles = '041d85c6b318296cd9d672445609a779';

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKeyVilles}`);
        return await response.json();

    } catch (error) {
        alert("API error villes");
    }
};


// API des images
export async function apiFunctionImages (input) {
    try {

        let response = await fetch(`https://api.unsplash.com/search/photos?page=&query=${input}&client_id=Cm_UAgR03mS0QMWpGnFa72ZYum-ZWQcfq_MuwcK7Jkk`)
    

        return await response.json();
    } catch {
        alert("API errror images")
    }
};


