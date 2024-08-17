console.log(superHeroes);

function listarSuperHeroes(listado) {
    $("#listado-super-heroes tbody").html("");
    for (const item of listado) {
        $("#listado-super-heroes tbody").append(`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.work.occupation}</td>
                <td>* ${item.biography.aliases.join("<br>* ")}</td>
                <td>
                    <img class="img-avatar" src="${item.image.url}">
                </td>
                <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Acciones
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item link-eliminar" data-id="${item.id}" href="#">Eliminar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>    
        `);
    }
}

listarSuperHeroes(superHeroes)

$(function() {
    $(document).on("click", ".link-eliminar", function(event) {
        event.preventDefault();
        var idEliminar = $(this).data("id")

        if(confirm("¿Seguro desea eliminar este super héroe?")) {
            // Ejemplo 1 para eliminar
            // var indice = superHeroes.findIndex(item => item.id == idEliminar)
            // superHeroes.splice(indice)

            // Ejemplo 2 para eliminar
            superHeroes = superHeroes.filter(item => item.id != idEliminar)

            listarSuperHeroes(superHeroes)
        }
    })

    $("#mostrar-ocultar").click(function() {
        if($("#filtros").hasClass("d-none")) { // Lógica para mostrar
            $("#filtros").removeClass("d-none")
            $("#mostrar-ocultar").removeClass("btn-success").addClass("btn-danger").html("Ocultar")
        } else { // Lógica para ocultar
            $("#filtros").addClass("d-none")
            $("#mostrar-ocultar").removeClass("btn-danger").addClass("btn-success").html("Mostrar")
        }
    })
})