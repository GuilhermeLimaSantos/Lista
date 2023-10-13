unction addNote() {
    var noteInput = document.getElementById('noteInput');
    var noteList = document.getElementById('noteList');

    if (noteInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = noteInput.value;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            noteList.removeChild(li);
        };

        li.appendChild(deleteButton);
        noteList.appendChild(li);
        noteInput.value = '';
    }
}
