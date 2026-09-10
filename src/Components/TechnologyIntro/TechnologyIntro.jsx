import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import {
  HtmlCssIcon,
  ReactIcon,
  AngularIcon,
  NodeIcon,
  PythonIcon,
  JavaIcon,
  AwsIcon,
  FrontendArt,
  BackendArt,
  CloudArt
} from '../../Shared/Icons/Icons';


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
