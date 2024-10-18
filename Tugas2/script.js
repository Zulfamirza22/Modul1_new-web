document.addEventListener('DOMContentLoaded', () => {
    const inputTugas = document.getElementById('task-input');
    const tombolTambah = document.getElementById('add-btn');
    const daftarTugas = document.getElementById('task-list');

    // Tambah tugas baru
    tombolTambah.addEventListener('click', () => {
        const teksTugas = inputTugas.value.trim();
        if (teksTugas !== "") {
            tambahTugasKeDOM(teksTugas);
            inputTugas.value = ''; // Kosongkan input
        }
    });

    // Tambah tugas ke DOM
    function tambahTugasKeDOM(teksTugas) {
        const li = document.createElement('li');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = teksTugas;
        input.readOnly = true;
        
        const tombolEdit = document.createElement('button');
        tombolEdit.textContent = 'Edit';
        tombolEdit.classList.add('edit');
        
        const tombolHapus = document.createElement('button');
        tombolHapus.textContent = 'Hapus';
        tombolHapus.classList.add('delete');
        
        li.appendChild(input);
        li.appendChild(tombolEdit);
        li.appendChild(tombolHapus);
        
        daftarTugas.appendChild(li);

        // Tangani pengeditan
        tombolEdit.addEventListener('click', () => {
            if (input.readOnly) {
                input.readOnly = false;
                input.focus();
                tombolEdit.textContent = 'Simpan';
            } else {
                input.readOnly = true;
                tombolEdit.textContent = 'Edit';
            }
        });

        // Tangani penghapusan
        tombolHapus.addEventListener('click', () => {
            daftarTugas.removeChild(li);
        });
    }
});
