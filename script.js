document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('material-form');
  const materialsList = document.getElementById('materials-list');
  const filterSelect = document.getElementById('filter-materia');

  
  let materials = [
    {
      id: 1,
      titulo: 'Exercícios de Álgebra Linear',
      materia: 'Matemática',
      link: 'https://drive.google.com'
    },
    {
      id: 2,
      titulo: 'Resumo sobre Segunda Guerra',
      materia: 'História',
      link: 'https://notion.so'
    }
  ];

  
  function renderMaterials(filter = 'todos') {
    materialsList.innerHTML = '';

    const filteredMaterials = filter === 'todos' 
      ? materials 
      : materials.filter(item => item.materia === filter);

    if (filteredMaterials.length === 0) {
      materialsList.innerHTML = '<p style="color: #888;">Nenhum material encontrado para esta matéria.</p>';
      return;
    }

    filteredMaterials.forEach(item => {
      const li = document.createElement('li');
      li.className = 'material-item';
      li.innerHTML = `
        <div>
          <span class="material-tag">${item.materia}</span>
          <h4 class="material-title">${item.titulo}</h4>
        </div>
        <div class="material-actions">
          <a href="${item.link}" target="_blank" class="material-link">Acessar Material ↗</a>
          <button class="btn-delete" onclick="deleteMaterial(${item.id})">Excluir</button>
        </div>
      `;
      materialsList.appendChild(li);
    });
  }

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const materia = document.getElementById('materia').value;
    const link = document.getElementById('link').value;

    const newMaterial = {
      id: Date.now(),
      titulo,
      materia,
      link
    };

    materials.push(newMaterial);
    renderMaterials(filterSelect.value);

    form.reset();
  });


  filterSelect.addEventListener('change', (e) => {
    renderMaterials(e.target.value);
  });

 
  window.deleteMaterial = (id) => {
    materials = materials.filter(item => item.id !== id);
    renderMaterials(filterSelect.value);
  };


  renderMaterials();
});