const Inventory = () => (
  <div className="pixel-inventory flex gap-2 p-2 mt-6">
    <button className="pixel-slot pixel-slot-active">
      <span style={{ fontSize: 20, lineHeight: 1 }}>🌱</span>
      <span className="pixel-font" style={{ fontSize: 7, color: '#3a2008' }}>PLAY</span>
    </button>
    <button className="pixel-slot">
      <span style={{ fontSize: 20, lineHeight: 1 }}>📜</span>
      <span className="pixel-font" style={{ fontSize: 7, color: '#3a2008' }}>STORY</span>
    </button>
    <button className="pixel-slot">
      <span style={{ fontSize: 20, lineHeight: 1 }}>⚔️</span>
      <span className="pixel-font" style={{ fontSize: 7, color: '#3a2008' }}>CHARS</span>
    </button>
    <button className="pixel-slot">
      <span style={{ fontSize: 20, lineHeight: 1 }}>🗺️</span>
      <span className="pixel-font" style={{ fontSize: 7, color: '#3a2008' }}>WORLD</span>
    </button>
  </div>
);

export default Inventory;
