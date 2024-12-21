async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}

async function main() {
    console.log('Loding Modues');

    console.log('Do something else');

    console.log('Load data');

    let data =  await getData()

    console.log(data);

    console.log('process data');

    console.log('task 2');
}

main()