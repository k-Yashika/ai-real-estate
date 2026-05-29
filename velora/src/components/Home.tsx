import { PAGES, features, DEMO_APARTMENTS } from "../utils/constants";
import ScoreBar from "./features/ScoreBar";
import Tag from "./features/Tag";

type HomeProps = {
  setPage: (page: string) => void;
};

const Home = ({ setPage }: HomeProps) => {
  return (
    <section className="min-h-screen bg-slate-50 px-6 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-[7px] rounded-full border border-teal-200 bg-teal-50 px-[14px] py-[5px]">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-teal-600" />
            <span className="text-xs font-medium text-teal-700">
              AI rental intelligence
            </span>
          </div>

          <h1 className="mb-5 max-w-xl text-[clamp(38px,5vw,64px)] font-semibold leading-[1.05] tracking-[-2px] text-slate-950">
            Don&apos;t rent blind.
            <br />
            Analyze <em className="not-italic text-teal-600">before</em> you
            visit.
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-8 text-slate-600">
            Our AI-powered platform gives you clear rental insights before you
            waste time visiting the wrong apartment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setPage(PAGES.UPLOAD)}
              className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Try it free
            </button>

            <button className="rounded-xl border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50">
              See examples
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-teal-200 bg-white p-6 shadow-xl shadow-teal-900/10">
          <div className="rounded-[22px] bg-teal-50 p-7">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs text-slate-500">
                  Overall apartment score
                </p>

                <div className="flex items-end gap-3">
                  <span className="text-[56px] font-semibold leading-none tracking-[-1.5px] text-teal-600">
                    87
                  </span>
                  <Tag className="mb-2">Great find</Tag>
                </div>
              </div>

              <Tag className="bg-amber-100 text-amber-700">Fair value</Tag>
            </div>

            {[
              ["Lighting", 90],
              ["Space efficiency", 82],
              ["Storage", 65],
              ["Layout", 85],
            ].map(([label, score]) => (
              <ScoreBar
                key={label}
                label={label as string}
                score={score as number}
              />
            ))}

            <div className="mt-5 border-t border-teal-200 pt-4">
              <p className="mb-3 text-xs text-slate-500">Detected issues</p>

              <div className="flex flex-wrap gap-2">
                {["Limited storage", "Street noise risk"].map((issue) => (
                  <span
                    key={issue}
                    className="rounded-lg bg-red-50 px-3 py-1 text-[11px] font-medium text-red-600"
                  >
                    {issue}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="border-y border-slate-200 bg-slate-50 px-8 py-[72px]">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-600">
            What Velora does
          </p>

          <h2 className="mb-12 text-center text-[30px] font-semibold tracking-[-0.6px] text-slate-900">
            Everything you need before signing a lease
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[14px] border border-slate-200 bg-white px-5 py-[22px]"
              >
                <div className="mb-[14px] flex h-9 w-9 items-center justify-center rounded-[9px] bg-teal-50 text-base font-semibold text-teal-600">
                  {feature.icon}
                </div>

                <p className="mb-[7px] text-sm font-semibold text-slate-900">
                  {feature.title}
                </p>

                <p className="m-0 text-[13px] leading-[1.65] text-slate-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Listings */}
      <div className="mx-auto max-w-[1100px] px-8 pb-[100px] pt-[72px]">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-600">
          Live examples
        </p>

        <h2 className="mb-12 text-[30px] font-semibold tracking-[-0.6px] text-slate-900">
          See what Velora finds
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {DEMO_APARTMENTS.map((apt) => {
            const score = apt.analysis.overall_score;

            const scoreClasses =
              score >= 75
                ? "bg-teal-50 text-teal-700"
                : score >= 50
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-50 text-red-600";

            return (
              <div
                key={apt.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <div
                  className="relative h-[175px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${apt.imageUrl})` }}
                >
                  <span
                    className={`absolute right-3 top-3 rounded-lg px-[10px] py-1 text-[13px] font-bold ${scoreClasses}`}
                  >
                    {score}
                  </span>
                </div>

                <div className="p-[18px]">
                  <p className="mb-1 text-sm font-semibold text-slate-900">
                    {apt.name}
                  </p>

                  <p className="mb-[10px] text-xs text-slate-500">
                    {apt.city} · ${apt.rent.toLocaleString()}/mo · {apt.size}{" "}
                    sqft
                  </p>

                  <p className="text-[13px] leading-[1.55] text-slate-500">
                    {apt.analysis.summary.slice(0, 95)}...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
