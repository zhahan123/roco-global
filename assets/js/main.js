/* =============================================
   Roco Kingdom: World — Global Guide Hub
   Full Data & Logic — 2026
   ============================================= */

// =============================================
// PET DATABASE (30+ entries)
// =============================================
// petsData is now loaded from pets-data.js (200+ pets)

// =============================================
// GUIDE DATA
// =============================================
const guidesData = [
  {
    id: 'starter-guide',
    title: 'Which Starter Should You Pick? — Complete Starter Guide 2026',
    category: 'beginner', tag: 'Beginner', icon: '🌱', featured: true,
    author: 'RocoGlobal Team', date: '2026-05-28', views: 45230, likes: 1892,
    excerpt: 'Hydroblue, Spark, or Meowmeow? We break down each starter with stats, evolution paths, and late-game viability to help you make the best choice.',
    content: `
<h2>🎮 The Three Starters</h2>
<p>When you begin your journey in Roco Kingdom: World, Professor Oakheart offers you a choice between three companions. This decision will shape your early-game experience, so let us break down each option.</p>

<h2>🔥 Spark (Fire) — The Aggressive Pick</h2>
<p><strong>Rating: ★★★★☆</strong></p>
<p>Spark is the go-to choice for players who want fast, explosive progress. With base 65 Attack and 68 Speed, it outspeeds and out-damages most early-game wild pets.</p>

<div class="table-wrap">
<table>
  <tr><th>Stat</th><th>Base</th><th>Growth</th></tr>
  <tr><td>HP</td><td>48</td><td>Medium</td></tr>
  <tr><td>Attack</td><td>65</td><td>High</td></tr>
  <tr><td>Speed</td><td>68</td><td>High</td></tr>
</table>
</div>

<p><strong>Evolution:</strong> Spark → Flarepup (Lv.16) → Blaze Dragon (Lv.36)</p>
<p><strong>Best for:</strong> Players who prioritize fast story progression and enjoy aggressive playstyles.</p>

<h2>💧 Hydroblue (Water) — The Balanced Pick ⭐ RECOMMENDED</h2>
<p><strong>Rating: ★★★★★</strong></p>
<p>Hydroblue offers the smoothest experience for new players. Its freeze capability provides crowd control that remains relevant throughout the entire game.</p>

<div class="table-wrap">
<table>
  <tr><th>Stat</th><th>Base</th><th>Growth</th></tr>
  <tr><td>HP</td><td>55</td><td>Medium</td></tr>
  <tr><td>Sp. Attack</td><td>62</td><td>Medium</td></tr>
  <tr><td>Sp. Defense</td><td>65</td><td>Medium-High</td></tr>
</table>
</div>

<p><strong>Evolution:</strong> Hydroblue → Hydropup (Lv.16) → Crystal Leviathan (Lv.36)</p>
<p><strong>Best for:</strong> New players who want a versatile companion that excels in both PVE and PVP.</p>

<h2>🌿 Meowmeow (Grass) — The Tanky Pick</h2>
<p><strong>Rating: ★★★☆☆</strong></p>
<p>Meowmeow starts slow but becomes invaluable in longer battles. Its healing capabilities make it a staple for endurance content and boss fights.</p>
<p><strong>Evolution:</strong> Meowmeow → Meowleaf (Lv.16) → Forest Guardian (Lv.36)</p>
<p><strong>Best for:</strong> Patient players who value sustain and plan to tackle difficult boss content.</p>

<blockquote>
💡 <strong>Verdict:</strong> Pick <strong>Hydroblue</strong> if you want the easiest ride. Its Ice/Water dual typing after evolution covers a massive range of opponents, and freeze is never useless.
</blockquote>
    `
  },
  {
    id: 'evolution-guide',
    title: 'Hidden Evolution Paths — Complete Guide (All 10+ Secret Evolutions)',
    category: 'evolution', tag: 'Evolution', icon: '🧬', featured: true,
    author: 'RocoGlobal Team', date: '2026-05-25', views: 78340, likes: 3420,
    excerpt: 'Some pets have secret evolution requirements! Bloodline changes, specific KO counts, even height restrictions — we reveal every hidden evolution.',
    content: `
<h2>🔍 What Are Hidden Evolutions?</h2>
<p>Unlike regular evolutions that only require reaching a certain level, hidden evolutions have special conditions that must be met. Missing a step can lock you out of a powerful form!</p>

<h2>⚠️ CRITICAL: Meteorabbit (Order Matters!)</h2>
<p><strong>⚠️ This is the #1 mistake new players make!</strong></p>
<p>To get Meteorabbit from Starhopper:</p>
<ol>
  <li><strong>FIRST:</strong> Change Starhopper's bloodline to <strong>Ghost</strong></li>
  <li><strong>THEN:</strong> Level to 32 to evolve</li>
</ol>
<blockquote>❌ If you evolve at 32 BEFORE changing the bloodline, you CANNOT get Meteorabbit. The order is irreversible!</blockquote>

<h2>📋 Complete Hidden Evolution List</h2>

<div class="table-wrap">
<table>
  <tr><th>Base Pet</th><th>Evolved Form</th><th>Condition</th></tr>
  <tr><td>Greedy Mole</td><td><strong>Giant Needle Mole</strong></td><td>Lv.32 + Defeat 3 Bug-types</td></tr>
  <tr><td>Dizzy Chick</td><td><strong>Chickenfu</strong></td><td>Lv.36 + Defeat 3 Dark-types</td></tr>
  <tr><td>Squidink</td><td><strong>Inkcommander</strong></td><td>Lv.32 + Defeat 3 Dark-types</td></tr>
  <tr><td>Portrait Guard</td><td><strong>Canvas Ironbeast</strong></td><td>Lv.36 + Defeat 3 Illusion-types</td></tr>
  <tr><td>Portrait Guard</td><td><strong>Canvas Magehand</strong></td><td>Lv.36 + Defeat 3 Fighting-types</td></tr>
  <tr><td>Bookwarden</td><td><strong>Archivemage</strong></td><td>Lv.36 + Defeat 3 Fighting-types</td></tr>
  <tr><td>Bookwarden</td><td><strong>Scroll Golem</strong></td><td>Lv.36 + Defeat 3 Illusion-types</td></tr>
  <tr><td>Lightwhisper</td><td><strong>Shadowmoth</strong></td><td>Lv.28 + Defeat 3 Light-types</td></tr>
  <tr><td>Starhopper</td><td><strong>Meteorabbit</strong></td><td>Change bloodline to Ghost → Lv.32</td></tr>
  <tr><td>Bluepearl Swan</td><td><strong>Blackswan</strong></td><td>Change bloodline to Dark → Evolve</td></tr>
  <tr><td>Spidermite</td><td><strong>Dustmite</strong></td><td>Keep height BELOW 0.375m</td></tr>
</table>
</div>

<h2>💡 Pro Tips</h2>
<ul>
  <li>Check bloodline requirements BEFORE leveling — some are one-way only</li>
  <li>Use training dummies in the Battle Tower for specific KO count requirements</li>
  <li>Height-based evolutions require careful feeding — avoid growth-boosting berries!</li>
</ul>
    `
  },
  {
    id: 'shiny-guide',
    title: 'Shiny Hunting Ultimate Guide — 1.8% Odds, Pity System & 33-Method',
    category: 'shiny', tag: 'Shiny Hunting', icon: '✨', featured: true,
    author: 'RocoGlobal Team', date: '2026-05-22', views: 91580, likes: 5620,
    excerpt: 'Master the art of shiny hunting! Learn the 33-method for efficient shiny farming, understand the 80-catch pity system, and find all 19 fixed shiny forms.',
    content: `
<h2>🌟 Shiny Basics</h2>
<p>Shiny (Chromafoil) pets have unique color palettes but identical stats to normal versions. Their rarity makes them the ultimate status symbol.</p>
<p><strong>Base shiny rate:</strong> 1.8% per encounter<br><strong>Pity system:</strong> Guaranteed shiny after 80 consecutive catches of the same species</p>

<h2>🎯 The "33 Method" — Most Efficient Shiny Farming</h2>
<ol>
  <li>Place 2 types of Shiny-attracting berries in the Owl Sanctuary</li>
  <li>Catch 3 of Species A, then 3 of Species B</li>
  <li>Repeat this cycle — the alternating pattern maximizes shiny spawns</li>
</ol>

<h2>📊 All 19 Fixed Shiny Forms</h2>
<p>Some pets have guaranteed shiny variants that can be found at specific locations during certain weather or time conditions. Check our full shiny gallery on the Pet Dex page!</p>
    `
  },
  {
    id: 'boss-drakonbreath',
    title: 'Drakonbreath Parr Boss Guide — Legendary Battle Strategy',
    category: 'boss', tag: 'Boss Strategy', icon: '👾', featured: true,
    author: 'RocoGlobal Team', date: '2026-05-20', views: 38700, likes: 2100,
    excerpt: 'Struggling with the S1 legendary boss? We reveal the complete moveset, recommended team comp, and turn-by-turn strategy for victory.',
    content: `
<h2>👾 Boss Overview</h2>
<div class="table-wrap">
<table>
  <tr><th>Boss</th><td>Drakonbreath Parr (Dark-type)</td></tr>
  <tr><th>Level</th><td>75</td></tr>
  <tr><th>HP</th><td>~45,000</td></tr>
  <tr><th>Recommended Level</th><td>70+</td></tr>
</table>
</div>

<h2>⚡ Moveset</h2>
<ul>
  <li><strong>Evil Swap (every 4 turns):</strong> Transfers all debuffs to your active pet</li>
  <li><strong>Shadow Breath (main attack):</strong> Dark-type AoE with 15% flinch chance</li>
  <li><strong>Dark Barrier (below 50% HP):</strong> +2 Defense, +2 Sp. Defense</li>
</ul>

<h2>🛡️ Recommended Team</h2>
<div class="table-wrap">
<table>
  <tr><th>Role</th><th>Pet</th><th>Why</th></tr>
  <tr><td>Main DPS</td><td>Floria (Grass)</td><td>Solar Beam nuke at max rage</td></tr>
  <tr><td>Support</td><td>Healhare (Fairy)</td><td>Cleanse debuffs from Evil Swap</td></tr>
  <tr><td>Tank</td><td>Mechacube (Steel)</td><td>Absorbs Shadow Breath with high Sp. Def</td></tr>
</table>
</div>

<blockquote>
💡 <strong>Key Strategy:</strong> When Drakonbreath uses Evil Swap, immediately switch to a pet with no debuffs, then use Healhare to cleanse. Don't let debuffs stack!
</blockquote>
    `
  },
  {
    id: 'pvp-beginner',
    title: 'PVP Arena Beginner Guide — From Zero to Competitive',
    category: 'pvp', tag: 'PVP', icon: '⚔️',
    author: 'RocoGlobal Team', date: '2026-05-18', views: 31200, likes: 1450,
    excerpt: 'New to competitive battling? Learn the fundamentals of team building, type matchups, speed tiers, and the current S1 meta.',
    content: '<h2>Coming Soon</h2><p>Full PVP guide is being updated for the latest meta. Check the Tier List page for current rankings!</p>'
  },
  {
    id: 'hidden-quests',
    title: 'All Hidden Quests & Secret Locations — 100% Completion Guide',
    category: 'hidden', tag: 'Hidden Quests', icon: '🔮',
    author: 'RocoGlobal Team', date: '2026-05-15', views: 56780, likes: 2890,
    excerpt: 'Discover every hidden quest, secret cave, and environmental puzzle across all 10+ biomes. Some reward rare pets!',
    content: '<h2>Coming Soon</h2><p>Full hidden quests guide is in development. Stay tuned!</p>'
  },
  {
    id: 'team-building',
    title: 'Team Building 101 — Synergy, Coverage & Role Compression',
    category: 'team', tag: 'Team Building', icon: '👥',
    author: 'RocoGlobal Team', date: '2026-05-12', views: 22300, likes: 980,
    excerpt: 'How to build a balanced 6-pet team that can handle any situation — covering type synergy, role assignment, and common team archetypes.',
    content: '<h2>Coming Soon</h2><p>Full team building guide coming soon!</p>'
  },
  {
    id: 's1-events',
    title: 'S1 "Dark Night Light" — Complete Event Guide & Rewards Checklist',
    category: 'event', tag: 'Events', icon: '🎪',
    author: 'RocoGlobal Team', date: '2026-05-08', views: 44200, likes: 2010,
    excerpt: 'Everything in Season 1: Battle Pass rewards, limited pets, event timeline, and how to maximize your Wish Stars.',
    content: '<h2>Coming Soon</h2><p>Full S1 event guide is in development!</p>'
  }
];

// =============================================
// TIER LIST DATA
// =============================================
const tierListData = {
  s: [
    { id:'p001', name:'Drakonbreath Parr', icon:'🐉', types:['dark'] },
    { id:'p019', name:'Swiftdeer', icon:'🦌', types:['electric'] },
    { id:'p007', name:'Floria', icon:'🌸', types:['grass'] },
    { id:'p025', name:'Archivemage', icon:'📜', types:['psychic'] },
  ],
  a: [
    { id:'p002', name:'Hydroblue', icon:'💧', types:['water'] },
    { id:'p003', name:'Spark', icon:'🔥', types:['fire'] },
    { id:'p005', name:'Dimo', icon:'💫', types:['psychic'] },
    { id:'p012', name:'Healhare', icon:'🐰', types:['fairy'] },
    { id:'p016', name:'Meteorabbit', icon:'🌠', types:['psychic','rock'] },
    { id:'p015', name:'Shadowmoth', icon:'🦟', types:['bug','dark'] },
  ],
  b: [
    { id:'p004', name:'Meowmeow', icon:'🌿', types:['grass'] },
    { id:'p006', name:'Rockhide', icon:'🪨', types:['rock'] },
    { id:'p008', name:'Dreamy', icon:'💤', types:['fairy','psychic'] },
    { id:'p013', name:'Mechacube', icon:'🤖', types:['steel'] },
    { id:'p014', name:'Guardpup', icon:'🐕', types:['fire'] },
    { id:'p017', name:'Chickenfu', icon:'🐔', types:['fighting'] },
    { id:'p018', name:'Inkcommander', icon:'🦑', types:['dark','water'] },
    { id:'p030', name:'Blackswan', icon:'🦢', types:['dark','flying'] },
  ],
  c: [
    { id:'p009', name:'Serpenscale', icon:'🐍', types:['poison','ground'] },
    { id:'p010', name:'Whiskerfish', icon:'🐟', types:['water'] },
    { id:'p011', name:'Granball', icon:'🌵', types:['grass'] },
    { id:'p020', name:'Snoweye', icon:'👁️', types:['ice','fairy'] },
    { id:'p022', name:'Springhare', icon:'🐇', types:['grass','fairy'] },
    { id:'p023', name:'Duckpiper', icon:'🦆', types:['flying','water'] },
    { id:'p024', name:'Wintersparrow', icon:'🐦', types:['ice','flying'] },
  ],
  d: [
    { id:'p021', name:'Lilacat', icon:'🐱', types:['normal'] },
    { id:'p026', name:'Dustmite', icon:'🕷️', types:['bug'] },
  ]
};

// =============================================
// UTILITY
// =============================================
function getParam(p) { return new URL(window.location.href).searchParams.get(p); }
function fmtNum(n) { return n >= 10000 ? (n/10000).toFixed(1)+'K' : n.toString(); }
function formatDate(d) { const diff = Math.floor((new Date()-new Date(d))/(86400000)); return diff===0?'Today':diff<7?diff+'d ago':diff<30?Math.floor(diff/7)+'w ago':d; }

// Pet icon fallback (type → emoji)
const typeIcons = { fire:'🔥', water:'💧', grass:'🌿', electric:'⚡', ice:'❄️', dragon:'🐉', dark:'🌑', ghost:'👻', fairy:'✨', fighting:'👊', poison:'☠️', ground:'🏔️', flying:'🕊️', rock:'🪨', bug:'🐛', psychic:'🔮', steel:'🤖', normal:'⭐' };
function petIcon(p) { if(p.img) return `<img src="${p.img}" alt="${p.name}" style="width:80px;height:80px;object-fit:contain;">`; return p.icon || typeIcons[p.types[0]] || '🐾'; }

// =============================================
// HOME PAGE
// =============================================
function renderHome() {
  const hotGrid = document.getElementById('hotGuides');
  if (!hotGrid) return;
  const hot = guidesData.filter(g => g.featured).slice(0, 3);
  hotGrid.innerHTML = hot.map(g => `
    <article class="card">
      <div class="card-img"><span>${g.icon}</span><span class="card-badge badge-hot">HOT</span></div>
      <div class="card-body">
        <span class="card-tag">${g.tag}</span>
        <h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3>
        <p>${g.excerpt}</p>
      </div>
      <div class="card-footer"><span>👤 ${g.author}</span><span>👀 ${fmtNum(g.views)} · ❤️ ${fmtNum(g.likes)}</span></div>
    </article>
  `).join('');

  document.getElementById('latestNews').innerHTML = [
    { title:'Roco Kingdom: World Hits 30M Players in 9 Days', date:'2026-04-05', cat:'News', excerpt:'Tencent\'s monster-taming RPG becomes the fastest-growing mobile game of Q1 2026.' },
    { title:'International Players Demand Global Release', date:'2026-04-15', cat:'Community', excerpt:'Overseas fans flood social media asking for an English version after seeing Chinese success.' },
    { title:'S1 "Dark Night Light" Battle Pass Breakdown', date:'2026-03-26', cat:'Guide', excerpt:'Everything you need to know about the Moonlight vs Starlight battle pass tracks.' },
    { title:'Shiny Hunting Community Discovers "33 Method"', date:'2026-04-20', cat:'Community', excerpt:'A revolutionary farming technique that nearly doubles shiny encounter rates.' },
  ].map(n => `
    <div class="news-item">
      <div class="news-date"><span>${n.date.split('-')[2]}</span>${n.date.split('-')[1]}M</div>
      <div class="news-info"><h4>${n.title}</h4><p class="news-meta">${n.cat} · ${n.excerpt}</p></div>
    </div>
  `).join('');

  document.getElementById('starterPets').innerHTML = petsData.filter(p => p.rarity==='Starter').map(p => `
    <div class="news-item" style="cursor:pointer;" onclick="window.location.href='pets.html?search=${encodeURIComponent(p.name)}'">
      <div class="news-date" style="font-size:1.8rem;">${petIcon(p)}</div>
      <div class="news-info"><h4>${p.name}</h4><p class="news-meta">${p.types.join(' / ')} · ${p.cn}</p></div>
    </div>
  `).join('');

  document.getElementById('featuredPets').innerHTML = petsData.filter(p => p.tier==='S').slice(0,3).map(p => `
    <div class="news-item" style="cursor:pointer;" onclick="openPetDetail('${p.id}')">
      <div class="news-date" style="font-size:1.8rem;">${petIcon(p)}</div>
      <div class="news-info"><h4>${p.name} <span style="color:var(--danger);font-size:0.75rem;">S-Tier</span></h4><p class="news-meta">${p.rarity} · ${p.cn}</p></div>
    </div>
  `).join('');
}

// =============================================
// GUIDES PAGE
// =============================================
function renderGuides() {
  const grid = document.getElementById('guidesGrid');
  if (!grid) return;
  let guides = [...guidesData];
  const sq = getParam('search'), cq = getParam('cat');

  if (sq) {
    const q = sq.toLowerCase();
    guides = guides.filter(g => g.title.toLowerCase().includes(q) || g.excerpt.toLowerCase().includes(q));
    document.getElementById('guideSearchInput').value = sq;
  }
  let activeFilter = cq || 'all';
  if (activeFilter !== 'all') guides = guides.filter(g => g.category === activeFilter);

  document.getElementById('resultCount').textContent = guides.length;
  renderGuideCards(guides);

  document.querySelectorAll('#filterBar .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === activeFilter);
    b.addEventListener('click', () => {
      document.querySelectorAll('#filterBar .filter-btn').forEach(bb => bb.classList.remove('active'));
      b.classList.add('active');
      const f = b.dataset.filter;
      const filtered = f==='all' ? [...guidesData] : guidesData.filter(g => g.category===f);
      document.getElementById('resultCount').textContent = filtered.length;
      renderGuideCards(filtered);
    });
  });

  document.getElementById('guideSearchBtn').addEventListener('click', () => {
    const q = document.getElementById('guideSearchInput').value.trim();
    if (q) window.location.href = 'guides.html?search='+encodeURIComponent(q);
  });
}

function renderGuideCards(list) {
  document.getElementById('guidesGrid').innerHTML = list.map(g => `
    <article class="card">
      <div class="card-img"><span>${g.icon}</span><span class="card-badge badge-guide">${g.tag}</span></div>
      <div class="card-body">
        <span class="card-tag">${g.tag}</span>
        <h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3>
        <p>${g.excerpt}</p>
      </div>
      <div class="card-footer"><span>👤 ${g.author}</span><span>👀 ${fmtNum(g.views)}</span></div>
    </article>
  `).join('');
}

// =============================================
// GUIDE DETAIL
// =============================================
function renderGuideDetail() {
  const el = document.getElementById('guideTitle');
  if (!el) return;
  const id = getParam('id');
  const guide = guidesData.find(g => g.id===id);
  if (!guide) { el.textContent='Guide Not Found'; document.getElementById('guideContent').innerHTML='<p>This guide does not exist.</p><a href="guides.html" class="btn btn-primary">← Back to Guides</a>'; return; }

  el.textContent = guide.title;
  document.getElementById('guideMeta').innerHTML = `👤 ${guide.author} · 📅 ${guide.date} · 👀 ${fmtNum(guide.views)} reads · ❤️ ${guide.likes} likes`;
  document.getElementById('breadcrumbCat').textContent = guide.tag;
  document.getElementById('guideContent').innerHTML = guide.content;

  const related = guidesData.filter(g => g.category===guide.category && g.id!==guide.id).slice(0,3);
  document.getElementById('relatedGuides').innerHTML = related.map(g => `
    <article class="card">
      <div class="card-img"><span>${g.icon}</span><span class="card-badge badge-guide">${g.tag}</span></div>
      <div class="card-body"><span class="card-tag">${g.tag}</span><h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3><p>${g.excerpt}</p></div>
      <div class="card-footer"><span>👀 ${fmtNum(g.views)}</span></div>
    </article>
  `).join('');
  document.title = guide.title + ' — RocoGlobal';
}

// =============================================
// PETS PAGE
// =============================================
function renderPets() {
  const grid = document.getElementById('petsGrid');
  if (!grid) return;

  function renderPetCards(list) {
    grid.innerHTML = list.map(p => `
      <div class="pet-card" onclick="openPetDetail('${p.id}')">
        <div class="pet-icon">${petIcon(p)}</div>
        <div class="pet-no">#${p.no} · ${p.rarity}</div>
        <h3>${p.name}</h3>
        <div class="pet-types">${p.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join('')}</div>
        <p style="font-size:0.78rem;color:var(--text-muted);">${p.cn}</p>
        ${p.tier==='S' ? '<p style="font-size:0.75rem;color:var(--danger);margin-top:4px;">⭐ S-Tier</p>' : ''}
      </div>
    `).join('');
    document.getElementById('petResultCount').textContent = list.length;
  }

  renderPetCards(petsData);

  document.getElementById('petSearchBtn').addEventListener('click', () => {
    const q = document.getElementById('petSearchInput').value.trim().toLowerCase();
    if (!q) { renderPetCards(petsData); return; }
    renderPetCards(petsData.filter(p => p.name.toLowerCase().includes(q) || p.no.includes(q) || p.cn.includes(q) || p.types.some(t => t.includes(q))));
  });

  document.querySelectorAll('#petFilterBar .filter-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#petFilterBar .filter-btn').forEach(bb => bb.classList.remove('active'));
      b.classList.add('active');
      const f = b.dataset.filter;
      renderPetCards(f==='all' ? petsData : petsData.filter(p => p.types.includes(f)));
    });
  });

  const sq = getParam('search');
  if (sq) { document.getElementById('petSearchInput').value=sq; document.getElementById('petSearchBtn').click(); }
}

function openPetDetail(id) {
  const p = petsData.find(p => p.id===id);
  if (!p) return;
  const total = p.hp+p.atk+p.def+p.spa+p.spd+p.sp;
  document.getElementById('petModalContent').innerHTML = `
    <div style="text-align:center;margin-bottom:20px;">
      <span style="font-size:5rem;">${petIcon(p)}</span>
      <h2 style="color:#fff;margin-top:8px;">${p.name} <span style="color:var(--text-muted);font-size:0.85rem;">${p.cn}</span></h2>
      <p style="color:var(--text-muted);">#${p.no} · ${p.rarity} · ${p.tier==='S'?'⭐ S-Tier':p.tier==='A'?'🌟 A-Tier':''}</p>
      <div style="margin-top:8px;">${p.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join(' ')}</div>
    </div>
    <p style="margin-bottom:16px;color:var(--text-secondary);">${p.desc}</p>
    <div class="table-wrap"><table>
      <tr><th>Stat</th><th>Base</th><th>Rating</th></tr>
      <tr><td>HP</td><td>${p.hp}</td><td>${'★'.repeat(Math.ceil(p.hp/25))}</td></tr>
      <tr><td>Attack</td><td>${p.atk}</td><td>${'★'.repeat(Math.ceil(p.atk/25))}</td></tr>
      <tr><td>Defense</td><td>${p.def}</td><td>${'★'.repeat(Math.ceil(p.def/25))}</td></tr>
      <tr><td>Sp. Attack</td><td>${p.spa}</td><td>${'★'.repeat(Math.ceil(p.spa/25))}</td></tr>
      <tr><td>Sp. Defense</td><td>${p.spd}</td><td>${'★'.repeat(Math.ceil(p.spd/25))}</td></tr>
      <tr><td>Speed</td><td>${p.sp}</td><td>${'★'.repeat(Math.ceil(p.sp/25))}</td></tr>
      <tr style="font-weight:700;background:rgba(255,255,255,0.03);"><td>Total</td><td colspan="2">${total}</td></tr>
    </table></div>
    ${p.signature ? `<p style="margin-top:12px;font-size:0.88rem;"><strong>⚡ Trait:</strong> ${p.signature}</p>` : ''}
    ${p.skills ? `
      <div style="margin-top:12px;"><strong>🛠️ Recommended Build:</strong>
        <ul style="margin-top:6px;list-style:none;padding:0;">
          ${p.skills.map(s => `<li style="padding:6px 12px;margin:4px 0;background:rgba(108,92,231,0.1);border-radius:6px;font-size:0.84rem;color:var(--text-secondary);">${s}</li>`).join('')}
        </ul>
      </div>
    ` : (p.skill ? `<p style="margin-top:12px;font-size:0.88rem;"><strong>Skill:</strong> ${p.skill}</p>` : '')}
    <p style="margin-top:12px;font-size:0.88rem;"><strong>📍 Obtain:</strong> ${p.obtain}</p>
    <p style="margin-top:6px;font-size:0.88rem;"><strong>🧬 Evolution:</strong> ${p.evolution}</p>
  `;
  document.getElementById('petModal').classList.remove('hidden');
}

function closePetModal() { document.getElementById('petModal').classList.add('hidden'); }

// =============================================
// TIER LIST PAGE
// =============================================
function renderTierList() {
  const el = document.getElementById('tierList');
  if (!el) return;
  const keys = ['s','a','b','c','d'];
  const labels = {s:'S',a:'A',b:'B',c:'C',d:'D'};

  el.innerHTML = keys.map(k => `
    <div class="tier-row">
      <div class="tier-label tier-${k}">${labels[k]}</div>
      <div class="tier-pets">
        ${tierListData[k].map(p => `
          <div class="tier-pet" onclick="openPetDetail('${p.id}')" title="${p.name}">
            <span class="tier-icon">${p.icon}</span>
            <span class="tier-name">${p.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.querySelectorAll('#tierFilterBar .filter-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#tierFilterBar .filter-btn').forEach(bb => bb.classList.remove('active'));
      b.classList.add('active');
      const t = b.dataset.tier;
      if (t==='all') { document.querySelectorAll('.tier-row').forEach(r => r.style.display='flex'); }
      else { keys.forEach(k => { document.querySelectorAll('.tier-row')[keys.indexOf(k)].style.display = k===t?'flex':'none'; }); }
    });
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/^\/+/,'').replace(/\/$/,'');
  if (path.includes('guide-detail')) renderGuideDetail();
  else if (path.includes('guides')) renderGuides();
  else if (path.includes('pets')) renderPets();
  else if (path.includes('tier-list')) renderTierList();
  else renderHome();

  const modal = document.getElementById('petModal');
  if (modal) {
    document.getElementById('closePetModal').addEventListener('click', closePetModal);
    modal.addEventListener('click', e => { if (e.target===modal) closePetModal(); });
  }
});
