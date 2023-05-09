
const fetchData = async (url) => {

    return await fetch(url).then(res => {
        if(!res.ok) throw new Error(`${res.status} ${res.statusText}`, {cause: res});
        else return res.json();
    }).then(json_data => {
        return json_data;
    });
}

export {fetchData};

