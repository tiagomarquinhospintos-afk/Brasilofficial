const stats = [
  { label: 'População', value: '216,6M', meta: 'estimativa 2024' },
  { label: 'Área territorial', value: '8,5M km²', meta: 'maior país da Am. Latina' },
  { label: 'Municípios', value: '5.570', meta: 'dados oficiais do IBGE' },
  { label: 'PIB nominal', value: 'US$ 2,3T', meta: 'aproximadamente' }
];

const regions = [
  { name: 'Sudeste', value: 88 },
  { name: 'Nordeste', value: 72 },
  { name: 'Sul', value: 30 },
  { name: 'Norte', value: 19 },
  { name: 'Centro-Oeste', value: 18 }
];

const themes = [
  {
    icon: '🌍',
    title: 'Demografia',
    text: 'O Brasil concentra uma população urbana e diversificada, com grande concentração no Sudeste e no Nordeste.'
  },
  {
    icon: '📈',
    title: 'Economia',
    text: 'A economia brasileira é marcada por agropecuária, serviços, indústria e forte integração regional e internacional.'
  },
  {
    icon: '🏫',
    title: 'Educação',
    text: 'O país possui ampla rede pública e privada, com destaque para crescimento de acesso e desigualdades regionais.'
  },
  {
    icon: '⚡',
    title: 'Infraestrutura',
    text: 'Rodovias, portos, ferrovias e energia formam a base do transporte e da logística do território nacional.'
  },
  {
    icon: '🌱',
    title: 'Meio ambiente',
    text: 'A Amazônia, o Cerrado e outros biomas desempenham papel central na biodiversidade e no clima global.'
  },
  {
    icon: '🧭',
    title: 'Geografia',
    text: 'Com cinco regiões e fronteiras com quase todos os países da América do Sul, o Brasil tem grande singularidade territorial.'
  }
];

const statsGrid = document.getElementById('statsGrid');
const regionChart = document.getElementById('regionChart');
const themeGrid = document.getElementById('themeGrid');

statsGrid.innerHTML = stats
  .map(
    (item) => `
      <article class="stat-card">
        <p class="stat-card__label">${item.label}</p>
        <p class="stat-card__value">${item.value}</p>
        <p class="stat-card__meta">${item.meta}</p>
      </article>
    `
  )
  .join('');

const maxRegionValue = Math.max(...regions.map((item) => item.value));
regionChart.innerHTML = regions
  .map(
    (region) => `
      <div class="region-row">
        <div class="region-row__label">${region.name}</div>
        <div class="region-row__track">
          <div class="region-row__bar" style="width: ${(region.value / maxRegionValue) * 100}%"></div>
        </div>
        <div class="region-row__value">${region.value}M</div>
      </div>
    `
  )
  .join('');

themeGrid.innerHTML = themes
  .map(
    (item) => `
      <article class="theme-card">
        <div class="theme-card__icon" aria-hidden="true">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  )
  .join('');
