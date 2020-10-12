function agregaTarea(datos) {
    let html = `<li class="list-group-item" id="${datos.id}">
        <div class="row">
            <div class="col-1 d-flex">
                <input type="checkbox" class="form-control align-self-center">
            </div>
            <div class="col-10 row m-0">
                <div class="col-9 h5">
                    ${datos.titulo}
                </div>
                <div class="col-3 text-right">
                    <i>${datos.fecha}</i>
                </div>
                <div class="col-12 text-justify">
                    ${datos.descripcion}
                </div>
            </div>
            <div class="col-1 d-flex">
                <button class="btn btn-danger align-self-center borrar-tarea" onclick="borrarTarea('${datos.id}')">&times;</button>
            </div>
        </div>
    </li>`;

    $("#lista_tareas").append(html);
}

function muestraAlerta(mensaje) {
    $("#alerta_form").text(mensaje);
    $("#alerta_form").show(1000);
}

function borrarTarea(id) {
    $("#" + id).remove();
}

$(document).ready(function(){
    $("#alerta_form").hide(0);

    $("#form-tarea").submit(function(e){
        e.preventDefault();

        let titulo = $("#titulo").val();
        if(titulo.trim() === "")
        {
            muestraAlerta("El título de la tarea no puede estar vacío");
            return;
        }

        let fecha = $("#fecha").val();
        if(fecha === "")
        {
            muestraAlerta("La fecha no puede estar vacía");
            return;
        }

        let descripcion = $("#descripcion").val();

        let datos = {
            titulo: titulo,
            fecha: fecha,
            descripcion: descripcion,
            id: Date.now()
        };

        agregaTarea(datos);
    });
});