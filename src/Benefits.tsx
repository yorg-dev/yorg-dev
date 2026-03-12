const BENEFITS = [
  {
    icon: '🌱',
    title: 'LIVING WORLD',
    body: 'Every action reshapes the environment. Plant trees, carve paths, and watch your corner of the world grow and breathe around you.',
  },
  {
    icon: '⚒️',
    title: 'DEEP CRAFTING',
    body: 'Harvest wood, stone, and rare flora to craft tools, structures, and upgrades. The deeper you dig, the stranger the recipes get.',
  },
  {
    icon: '🗺️',
    title: 'VAST EXPLORATION',
    body: 'Discover hidden biomes, forgotten ruins, and secret areas locked behind the skills you build. The map rewards the curious.',
  },
  {
    icon: '⚔️',
    title: 'STRATEGIC DEFENSE',
    body: "Hold your settlement against waves of enemies with tactical placement, clever traps, and fortifications you've built with your own hands.",
  },
  {
    icon: '✨',
    title: 'HANDCRAFTED ART',
    body: 'Every tile, character, and particle effect is lovingly hand-pixeled. No procedural slop — just pure artisan pixel work from root to crown.',
  },
]


const Benefits = () => (
  <section className="benefits-section relative px-6 py-20">

    {/* Top edge — scalloped stone border illusion */}
    <div className="benefits-top-border" />

    {/* Section header sign */}
    <div className="flex justify-center mb-14">
      <div className="pixel-billboard px-10 py-4">
        <span className="pixel-font" style={{ fontSize: 11, color: '#3a2008', letterSpacing: '0.12em' }}>
          ✦ WHY PLAY YORG? ✦
        </span>
      </div>
    </div>

    {/* Cards grid — 2 col, last card centered */}
    <div className="benefits-grid" style={{ maxWidth: 820, margin: '0 auto' }}>
      {BENEFITS.map((b, i) => (
        <div
          key={b.title}
          className={`benefit-card pixel-scroll${i === 4 ? ' benefit-card-last' : ''}`}
        >
          {/* Icon slot */}
          <div className="benefit-icon-slot">
            <span style={{ fontSize: 26, lineHeight: 1 }}>{b.icon}</span>
          </div>

          {/* Title */}
          <p className="pixel-font mt-4 mb-3" style={{ fontSize: 8, color: '#3a2008', lineHeight: 2, letterSpacing: '0.06em' }}>
            {b.title}
          </p>

          {/* Body */}
          <p style={{ fontFamily: 'Nunito, sans-serif', color: '#5a3a18', fontSize: 14, lineHeight: 1.7, fontWeight: 600 }}>
            {b.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
