$(document).ready(function() {
    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = $('#taskInput').val().trim();

        if (taskText !== '') {
            // Criar um novo item de lista (li)
            const $li = $('<li></li>').text(taskText);

            // Adicionar botão de completar tarefa
            const $completeButton = $('<button></button>').text('Concluir');
            $completeButton.on('click', function() {
                $li.toggleClass('completed');
            });

            $li.append($completeButton);
            $('#taskList').append($li);

            // Limpar o campo de entrada
            $('#taskInput').val('');
        }
    }

    // Evento de clique no botão de adicionar tarefa
    $('#addTaskButton').on('click', addTask);

    // Permitir adicionar tarefa com a tecla Enter
    $('#taskInput').on('keypress', function(e) {
        if (e.which === 13) {
            addTask();
        }
    });
});
