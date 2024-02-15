async function datos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const info = await respuesta.json()
    console.log(info)

    info.forEach((elemento) => {
        document.getElementById("codigo").innerHTML +=
        `<tr>
        <th>${elemento.name}</th>
        <th>${elemento.username}</th>
        <th>${elemento.email}</th>
        <th><button>
                Agregar
            </button>
            <button>
                Eliminar
            </button></th>
        </tr>`


    });

}
datos()



