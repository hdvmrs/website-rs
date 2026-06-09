import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            [Jouw krachtige headline — wat doe je en voor wie?]
          </h1>
          <p className="text-white/80 max-w-xl text-lg leading-relaxed mb-2">
            [Ondertitel: een zin die beschrijft waarmee jij mensen helpt en wat hen dat oplevert.]
          </p>
          <a href="/aanbod" className="hero-btn">
            Bekijk mijn aanbod →
          </a>
        </div>
      </div>

      {/* Introductie */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">
          Welkom, ik ben Rinskje
        </h2>
        <p className="text-tekst/80 leading-relaxed reveal">
          [Vertel hier in twee à drie zinnen wie je bent, wat je doet en voor wie.
          Houd het warm en persoonlijk — mensen willen weten met wie ze te maken hebben.]
        </p>
        <a href="/over-mij"
          className="inline-block mt-8 text-primair font-semibold hover:underline reveal">
          Lees meer over mij →
        </a>
      </section>

      {/* Uitgelicht aanbod */}
      <section className="bg-accent-1 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primair mb-2 text-center reveal">
            Waar ik je mee help
          </h2>
          <p className="text-tekst/70 text-center mb-12 reveal">
            [Korte introductiezin over jouw aanbod]
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titel: '[Dienst of product 1]',
                tekst: '[Beschrijf in twee zinnen wat dit inhoudt en wat iemand eraan heeft.]',
              },
              {
                titel: '[Dienst of product 2]',
                tekst: '[Beschrijf in twee zinnen wat dit inhoudt en wat iemand eraan heeft.]',
              },
              {
                titel: '[Dienst of product 3]',
                tekst: '[Beschrijf in twee zinnen wat dit inhoudt en wat iemand eraan heeft.]',
              },
            ].map((item) => (
              <div key={item.titel}
                className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10 reveal">
                <h3 className="text-lg font-bold text-primair mb-2">{item.titel}</h3>
                <p className="text-tekst/70 leading-relaxed text-sm">{item.tekst}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <a href="/aanbod"
              className="inline-block bg-knop text-tekst-in-knop font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Bekijk het volledige aanbod →
            </a>
          </div>
        </div>
      </section>

      {/* Citaat / korte boodschap */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <blockquote className="text-xl text-primair font-medium leading-relaxed italic reveal">
          "[Vul hier een inspirerende uitspraak in die past bij jouw werk en aanpak.]"
        </blockquote>
        <p className="mt-4 text-tekst/50 text-sm reveal">— Rinskje Schaafsma</p>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
