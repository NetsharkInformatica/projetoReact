import Button from "./evento/Button";
function Eventos({numero}){

        function meuEvento(){
           alert(`ativando o primeiro evento,${numero}`);
        }
        function segundoEvento(){
            alert('ativando o segudo Evento')
        }

    return(
        <div>
            <p>
                clique para ativar um evento
            </p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>

    )

}

export default Eventos