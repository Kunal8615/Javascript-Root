function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!",{
                kunal : "hello"
            });
        }, 2000); // Simulating a 2-second delay
    });
}



async function getData() {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);
}

getData();