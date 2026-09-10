import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';

// ---- Inline icons (replace with your own /images/*.png imports if preferred) ----
const HtmlCssIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0 mt-1">
    <path d="M4 3 L5.5 20 L12 22 L18.5 20 L20 3 Z" />
    <path d="M7 7 H17 M7.5 12 H16 M8.5 17 L12 18 L15.5 17 L16 12" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" className="w-8 h-8 flex-shrink-0 mt-1">
    <circle cx="12" cy="12" r="2" fill="#0D47A1" stroke="none" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0 mt-1">
    <path d="M12 2 L21 6 L19.5 18 L12 22 L4.5 18 L3 6 Z" />
    <path d="M12 6 L17 17 M12 6 L7 17 M9 13 H15" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0 mt-1">
    <path d="M12 2 L20.5 7 V17 L12 22 L3.5 17 V7 Z" />
    <path d="M12 2 V22 M3.5 7 L12 12 L20.5 7 M3.5 17 L12 12 L20.5 17" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0 mt-1">
    <path d="M12 3 C9 3 8 4.2 8 6 V9 H14 V10 H6 C4.5 10 4 11.2 4 12.5 V13 C4 14.3 4.5 15.5 6 15.5 H7 V13.5 C7 12 8 11 9.5 11 H15 C16.5 11 17 10 17 9 V6 C17 4.2 16 3 12 3 Z" />
    <circle cx="10.2" cy="5.5" r="0.6" fill="#0D47A1" stroke="none" />
    <path d="M12 21 C15 21 16 19.8 16 18 V15 H10 V14 H18 C19.5 14 20 12.8 20 11.5 V11 C20 9.7 19.5 8.5 18 8.5 H17 V10.5 C17 12 16 13 14.5 13 H9 C7.5 13 7 14 7 15 V18 C7 19.8 8 21 12 21 Z" />
    <circle cx="13.8" cy="18.5" r="0.6" fill="#0D47A1" stroke="none" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0 mt-1">
    <path d="M6 9 H16 V15 C16 17.2 14.2 19 12 19 H10 C7.8 19 6 17.2 6 15 Z" />
    <path d="M16 10.5 H18 C19.1 10.5 20 11.4 20 12.5 C20 13.6 19.1 14.5 18 14.5 H16" />
    <path d="M9 4.5 C9 5.5 8 5.5 8 6.5 M13 4.5 C13 5.5 12 5.5 12 6.5" />
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0D47A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0 mt-1">
    <path d="M7 17 H17.5 C19.4 17 21 15.4 21 13.5 C21 11.6 19.4 10 17.5 10 C17.5 10 17.5 10 17.4 10 C17 7.2 14.6 5 11.7 5 C8.8 5 6.4 7.1 6 9.9 C4.3 10.2 3 11.7 3 13.5 C3 15.4 4.6 17 6.5 17 Z" />
  </svg>
);

// ---- Illustrations ----
const FrontendArt = () => (
  <svg viewBox="0 0 300 260" className="w-full max-w-[380px] m-auto">
    <rect x="30" y="20" width="240" height="160" rx="10" fill="#E7EEFA" stroke="#0D47A1" strokeWidth="2" />
    <rect x="30" y="20" width="240" height="28" rx="10" fill="#0D47A1" />
    <circle cx="46" cy="34" r="4" fill="#E7EEFA" />
    <circle cx="58" cy="34" r="4" fill="#E7EEFA" />
    <circle cx="70" cy="34" r="4" fill="#E7EEFA" />
    <rect x="50" y="66" width="90" height="12" rx="3" fill="#0D47A1" />
    <rect x="50" y="88" width="150" height="8" rx="3" fill="#33507A" opacity="0.5" />
    <rect x="50" y="104" width="130" height="8" rx="3" fill="#33507A" opacity="0.5" />
    <rect x="50" y="128" width="60" height="24" rx="6" fill="#0D47A1" />
    <rect x="130" y="128" width="60" height="24" rx="6" fill="none" stroke="#0D47A1" strokeWidth="2" />
    <rect x="10" y="196" width="280" height="10" rx="5" fill="#0D47A1" opacity="0.15" />
    <rect x="40" y="214" width="220" height="10" rx="5" fill="#0D47A1" opacity="0.1" />
  </svg>
);

const BackendArt = () => (
  <svg viewBox="0 0 300 260" className="w-full max-w-[380px] m-auto">
    <rect x="40" y="24" width="220" height="42" rx="6" fill="none" stroke="#0D47A1" strokeWidth="2" />
    <circle cx="58" cy="45" r="4" fill="#0D47A1" />
    <rect x="80" y="38" width="130" height="6" rx="3" fill="#0D47A1" opacity="0.5" />
    <rect x="80" y="50" width="90" height="6" rx="3" fill="#0D47A1" opacity="0.3" />
    <rect x="40" y="82" width="220" height="42" rx="6" fill="#E7EEFA" stroke="#0D47A1" strokeWidth="2" />
    <circle cx="58" cy="103" r="4" fill="#0D47A1" />
    <rect x="80" y="96" width="130" height="6" rx="3" fill="#0D47A1" opacity="0.6" />
    <rect x="80" y="108" width="100" height="6" rx="3" fill="#0D47A1" opacity="0.4" />
    <rect x="40" y="140" width="220" height="42" rx="6" fill="none" stroke="#0D47A1" strokeWidth="2" />
    <circle cx="58" cy="161" r="4" fill="#0D47A1" />
    <rect x="80" y="154" width="130" height="6" rx="3" fill="#0D47A1" opacity="0.5" />
    <rect x="80" y="166" width="80" height="6" rx="3" fill="#0D47A1" opacity="0.3" />
    <path d="M150 182 V206" stroke="#0D47A1" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="150" cy="218" r="16" fill="#0D47A1" />
    <path d="M143 218 L148 223 L158 212" stroke="#E7EEFA" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudArt = () => (
  <svg viewBox="0 0 300 220" className="w-full max-w-[380px] m-auto">
    <path d="M70 150 H210 C230 150 246 134 246 114 C246 94 230 78 210 78 C210 78 210 78 209 78 C202 54 180 38 154 38 C126 38 103 58 98 84 C76 87 60 105 60 126 C60 140 63 150 70 150 Z" fill="#E7EEFA" stroke="#0D47A1" strokeWidth="2.2" />
    <rect x="96" y="168" width="24" height="24" rx="4" fill="none" stroke="#0D47A1" strokeWidth="2" />
    <rect x="138" y="168" width="24" height="24" rx="4" fill="#0D47A1" />
    <rect x="180" y="168" width="24" height="24" rx="4" fill="none" stroke="#0D47A1" strokeWidth="2" />
    <path d="M108 168 V150 M150 168 V150 M192 168 V150" stroke="#0D47A1" strokeWidth="1.6" strokeDasharray="3 3" />
  </svg>
);

const TechnologyIntro = () => {
  return (
    <>
      <HelmetChanger title={'Tech Stack'} />
      <BreadCrumb2
        breadCrumbTitle={'Technology'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Tech Stack'}
      />

      <section className="relative py-16 md:py-20 lg:py-28 z-10">
        <div className="Container lg:px-0">

          {/* ===================== Frontend ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12">
            <div>
              <FrontendArt />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Frontend — What the User Sees
              </h2>

              <div className="flex items-start gap-4 mb-6">
                <HtmlCssIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">HTML5 & CSS3</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    HTML builds the DOM tree and semantic markup, while CSS controls layout,
                    responsiveness, and animation through the box-model, Flexbox, and Grid —
                    together they define the page&apos;s structure and look.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <ReactIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">React</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    A component-based JavaScript library that uses Virtual DOM diffing to
                    re-render only the parts that change. State is managed with Hooks, and
                    JSX lets you write markup and logic together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AngularIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">Angular</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    A full TypeScript-based framework with two-way data binding, dependency
                    injection, and built-in RxJS. CLI, routing, and forms come out-of-the-box.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== Backend ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 py-16">
            <div className="lg:mr-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Backend — What Runs Behind the Scenes
              </h2>

              <div className="flex items-start gap-4 mb-6">
                <NodeIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">Node.js</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    A JavaScript runtime built on the V8 engine, running on a single-threaded
                    event loop and non-blocking I/O — it can handle thousands of concurrent
                    connections without spawning new threads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <PythonIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">Python</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    An interpreted, dynamically-typed language. Django/Flask are used for
                    backend development, while NumPy, Pandas, and PyTorch power data science
                    and ML — readability and a huge library ecosystem are its biggest strengths.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <JavaIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">Java</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    A statically-typed language that runs on the JVM — &quot;write once, run
                    anywhere.&quot; Strong type-safety, garbage collection, and the Spring
                    framework make it reliable for enterprise systems.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <BackendArt />
            </div>
          </div>

          {/* ===================== Cloud ===================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 mb-12">
            <div>
              <CloudArt />
            </div>
            <div className="lg:ml-[58px]">
              <h2 className="font-Rajdhani font-bold text-[#0D47A1] text-3xl sm:text-4xl md:text-[42px] mb-6">
                Cloud — Where It All Gets Hosted
              </h2>

              <div className="flex items-start gap-4">
                <AwsIcon />
                <div>
                  <h3 className="font-Rajdhani font-bold text-[#0D47A1] text-xl mb-1">AWS</h3>
                  <p className="font-Nunito text-[#0D47A1] leading-relaxed max-w-none lg:max-w-3xl">
                    Amazon&apos;s IaaS/PaaS cloud platform. Infrastructure is provisioned and
                    scaled on-demand through EC2 (virtual servers), S3 (object storage), RDS
                    (managed databases), and Lambda (serverless functions) — on a pay-as-you-go
                    pricing model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyIntro;
