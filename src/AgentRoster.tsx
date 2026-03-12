const AGENTS = [
  {
    icon: '🎯',
    name: 'SCOUT',
    role: 'Outbound Sales',
    accent: '#f0a020',
    voice: "I find buyers before they've even heard of you. Plant me in your Sales Garden and I'll tend your pipeline while you're doing everything else.",
    harvest: '5+ new qualified conversations every week',
  },
  {
    icon: '📅',
    name: 'BLOOM',
    role: 'Appointment Setting',
    accent: '#e87890',
    voice: "I fill your calendar with warm, qualified conversations — overnight. You wake up to meetings already booked.",
    harvest: 'Your calendar full without you lifting a finger',
  },
  {
    icon: '🌿',
    name: 'SAGE',
    role: 'Follow-Up Sequences',
    accent: '#4aaa30',
    voice: "Leads don't go cold on my watch. I tend every prospect until they're ready to buy — or they tell me to stop.",
    harvest: '30–40% more closed deals from existing leads',
  },
  {
    icon: '🌼',
    name: 'MEADOW',
    role: 'Social Media',
    accent: '#50b8e0',
    voice: "I keep you visible every single day without you tending a single post. Your audience grows while you're out doing the work you love.",
    harvest: '7 days of content without opening your phone',
  },
  {
    icon: '📧',
    name: 'VINE',
    role: 'Email Marketing',
    accent: '#9060c0',
    voice: "I keep your list warm and engaged — on its own. One email chain can tend a relationship for months.",
    harvest: 'A warm, responsive list that converts on its own',
  },
  {
    icon: '📝',
    name: 'HARVEST',
    role: 'Proposal Generation',
    accent: '#e07820',
    voice: "Send polished, professional proposals in minutes — not the hours you're spending now. I handle the writing. You handle the close.",
    harvest: 'Proposals out the door before the competition responds',
  },
]

export default function AgentRoster() {
  return (
    <section className="roster-section relative px-6 py-20">
      <div
        className="benefits-top-border"
        style={{ background: 'repeating-linear-gradient(90deg, #4aafaa 0px, #4aafaa 28px, #3a9f9a 28px, #3a9f9a 32px)' }}
      />

      {/* Header */}
      <div className="flex flex-col items-center mb-14">
        <div className="pixel-billboard px-10 py-4 mb-6">
          <span className="pixel-font" style={{ fontSize: 11, color: '#3a2008', letterSpacing: '0.12em' }}>
            ✦ MEET YOUR GROWING TEAM ✦
          </span>
        </div>
        <p style={{ fontFamily: 'Nunito, sans-serif', color: '#1a3a38', fontSize: 17, fontWeight: 700 }}>
          Every Agent has special skills that can automate a portion of your business
        </p>
      </div>

      {/* Agent cards */}
      <div className="pixel-grid-3col" style={{ maxWidth: 920, margin: '0 auto 48px' }}>
        {AGENTS.map(agent => (
          <div key={agent.name} className="agent-card">
            <div className="agent-card-accent" style={{ background: agent.accent }} />
            <div style={{ padding: '20px 18px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div className="benefit-icon-slot">
                  <span style={{ fontSize: 24 }}>{agent.icon}</span>
                </div>
                <div>
                  <p className="pixel-font" style={{ fontSize: 8, color: '#3a2008', lineHeight: 1.8 }}>{agent.name}</p>
                  <p style={{ fontFamily: 'Nunito, sans-serif', color: agent.accent, fontSize: 12, fontWeight: 800, marginTop: 2 }}>{agent.role}</p>
                </div>
              </div>
              <p style={{ fontFamily: 'Nunito, sans-serif', color: '#5a3a18', fontSize: 13, lineHeight: 1.65, fontStyle: 'italic', fontWeight: 600, marginBottom: 14 }}>
                "{agent.voice}"
              </p>
              <div style={{ borderTop: '2px dashed #c4924a', paddingTop: 10 }}>
                <p className="pixel-font" style={{ fontSize: 8, color: agent.accent, marginBottom: 4 }}>BENEFIT</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', color: '#3a2008', fontSize: 13, fontWeight: 800, lineHeight: 1.4 }}>{agent.harvest}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="pixel-button px-8 py-3">
          <span className="pixel-font text-[9px]" style={{ color: '#3a2008' }}>🌱 SEE WHICH AGENTS YOU NEED</span>
        </button>
      </div>
    </section>
  )
}
