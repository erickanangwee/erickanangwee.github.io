document.getElementById('year').textContent = new Date().getFullYear();

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------- Skills ----------
fetch('skills.json')
  .then(res => res.json())
  .then(groups => {
    const container = document.getElementById('skills-list');
    container.innerHTML = groups.map(group => `
      <div class="skills__group">
        <h3>${escapeHTML(group.category)}</h3>
        <div class="skills__tags">
          ${group.items.map(item => `<span>${escapeHTML(item)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Could not load skills.json', err));

// ---------- Experience ----------
fetch('experience.json')
  .then(res => res.json())
  .then(items => {
    const container = document.getElementById('experience-list');
    container.innerHTML = items.map(job => `
      <div class="timeline__item">
        <p class="timeline__meta">${escapeHTML(job.start)} — ${escapeHTML(job.end)}</p>
        <h3>${escapeHTML(job.role)}</h3>
        <p class="timeline__org">${escapeHTML(job.org)}</p>
        <p>${escapeHTML(job.description)}</p>
      </div>
    `).join('');
  })
  .catch(err => console.error('Could not load experience.json', err));

// ---------- Projects ----------
fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const sorted = [...projects].sort((a, b) => (a.date < b.date ? 1 : -1));
    const container = document.getElementById('projects-list');
    container.innerHTML = sorted.map(project => `
      <div class="card">
        <p class="card__date">${escapeHTML(project.date)}</p>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="card__tags">
          ${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}
        </div>
        <div class="card__links">
          ${project.link ? `<a href="${escapeHTML(project.link)}" target="_blank" rel="noopener">Live demo →</a>` : ''}
          ${project.repo ? `<a href="${escapeHTML(project.repo)}" target="_blank" rel="noopener">Code →</a>` : ''}
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Could not load projects.json', err));
