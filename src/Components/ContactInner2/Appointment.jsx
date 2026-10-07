import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTarget } from "../../Shared/Lenis/lenis";
import titleShape from "/images/sub-title-shape.png";
import { MAP_EMBED_URL, DIRECTIONS_URL } from "../../Shared/officeLocation";
import { createPortal } from "react-dom";

const TERMS_INTRO =
  "By submitting this Contact Us form, you acknowledge and agree to the following terms:";

const TERMS_SECTIONS = [
  {
    title: "Accurate Information",
    body: "You agree to provide accurate, complete, and up-to-date information when submitting the form.",
  },
  {
    title: "Purpose of Information",
    body: "The information you provide, including your name, email address, phone number, and message, will be used solely to respond to your inquiry, provide requested information, or assist you with your request.",
  },
  {
    title: "Privacy & Data Protection",
    body: "We respect your privacy and will handle your personal information in accordance with our Privacy Policy. We will not sell or knowingly share your personal information with third parties except where required to provide our services or comply with applicable law.",
  },
  {
    title: "No Confidential Information",
    body: "Please do not submit confidential, sensitive, or proprietary information through this form unless specifically requested by us.",
  },
  {
    title: "Appropriate Use",
    body: "You agree not to use the Contact Us form to submit unlawful, abusive, defamatory, misleading, threatening, or fraudulent content, or to transmit malicious software or harmful material.",
  },
  {
    title: "Response Time",
    body: "Submitting this form does not guarantee an immediate response. We will make reasonable efforts to respond to legitimate inquiries within an appropriate timeframe.",
  },
  {
    title: "Consent to Communication",
    body: "By submitting the form, you consent to us contacting you using the contact details provided in connection with your inquiry.",
  },
  {
    title: "Changes to These Terms",
    body: "We reserve the right to modify these terms from time to time. Any updated terms will be posted on this website.",
  },
];

const TERMS_OUTRO =
  "By clicking “Submit”, you confirm that you have read and agree to these Terms & Conditions and consent to the processing of your information as described above.";

const Appointment = () => {
  // Job details passed from the "Apply" buttons on the Careers page.
  const { state } = useLocation();

  const jobTitle = state?.jobTitle || "";
  const jobDescription = state?.jobDescription || "";
  const jobExperience = state?.jobExperience || "";
  const jobLocation = state?.jobLocation || "";
  const jobType = state?.jobType || "";

  const [message, setMessage] = useState("");

  const MOBILE_REGEX = /^[6-9]\d{9}$/;

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const validateNumber = (value) => {
    if (!value) return "Mobile number is required";
    if (!MOBILE_REGEX.test(value))
      return "Enter a valid 10-digit mobile number";
    return "";
  };

  const handleNumberChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setNumber(digits);
    if (numberError) setNumberError(validateNumber(digits));
  };

  const NAME_REGEX = /^\p{L}+(?: \p{L}+)*$/u; // letters and single spaces only

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const validateName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Name is required";
    if (trimmed.length < 3) return "Name must be at least 3 characters";
    if (!NAME_REGEX.test(trimmed)) return "Only letters are allowed";
    return "";
  };

  const handleNameChange = (e) => {
    // strip digits and special characters as the user types
    const cleaned = e.target.value.replace(/[^\p{L} ]/gu, "");
    setName(cleaned);
    if (nameError) setNameError(validateName(cleaned));
  };

  const EMAIL_REGEX =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Email is required";
    if (/\s/.test(trimmed)) return "Email cannot contain spaces";
    if (!trimmed.includes("@")) return "Email must include @";
    if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address";
    return "";
  };

  const handleEmailChange = (e) => {
    // spaces are never valid in an email, so strip them as the user types
    const cleaned = e.target.value.replace(/\s/g, "");
    setEmail(cleaned);
    if (emailError) setEmailError(validateEmail(cleaned));
  };

  const [termsOpen, setTermsOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const termsTriggerRef = useRef(null);
  const termsCloseRef = useRef(null);

  useEffect(() => {
    if (!termsOpen) return;

    const trigger = termsTriggerRef.current;
    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setTermsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    termsCloseRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus(); // return focus to the link that opened the modal
    };
  }, [termsOpen]);

  const formRef = useRef(null);

  useEffect(() => {
    if (jobTitle) {
      setMessage(`I would like to apply for the ${jobTitle} position.`);
    }
  }, [jobTitle]);

  // Arriving from an "Apply" button: land on the form instead of the page top.
  useEffect(() => {
    if (!jobTitle) return;

    const timer = setTimeout(() => {
      if (formRef.current) {
        scrollToTarget(formRef.current);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [jobTitle]);

  const isFormValid =
    !validateName(name) &&
    !validateNumber(number) &&
    !validateEmail(email) &&
    termsAccepted;

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameErr = validateName(name);
    const numberErr = validateNumber(number);
    const emailErr = validateEmail(email);
    setNameError(nameErr);
    setNumberError(numberErr);
    setEmailError(emailErr);

    if (nameErr) {
      document.getElementById("name")?.focus();
      return;
    }
    if (numberErr) {
      document.getElementById("number")?.focus();
      return;
    }
    if (emailErr) {
      document.getElementById("email")?.focus();
      return;
    }
    if (!termsAccepted) {
      document.getElementById("terms")?.focus();
      return;
    }
    alert(`We are Working on it`);
  };
  //   return (
  //     <section className='py-16 md:py-20 lg:py-[102px]'>
  //       <div className='Container'>
  //         <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
  //           <div className='relative'>
  //           {/* /Avinash commented below */}
  //             {/* <iframe
  //               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867283.0267128727!2d34.232606549050644!3d31.8841932044305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sbd!4v1715597594739!5m2!1sen!2sbd'
  //               width='100%'
  //               height='632'
  //               allowFullScreen=''
  //               loading='lazy'
  //               referrerPolicy='no-referrer-when-downgrade'
  //               className='rounded-lg w-full'
  //             ></iframe> */}
  //             <iframe
  //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25355.1562983872!2d78.35600060961807!3d17.447000019055792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94e6d2f7d1b1%3A0x0!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1730710700000!5m2!1sen!2sin"
  //   width="100%"
  //   height="552"
  //   allowFullScreen=""
  //   loading="lazy"
  //   referrerPolicy="no-referrer-when-downgrade"
  //   className="rounded-lg w-full"
  // />
  //           </div>
  //           <div className='mr-4'>
  //             <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-[#0D47A1] uppercase'>
  //               <img
  //                 src={titleShape}
  //                 draggable={false}
  //                 alt='Shape'
  //               />{' '}
  //               Get In Touch
  //             </h5>
  //             <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-[#0D47A1] mt-[14px] mb-8'>
  //               Write Us Something
  //             </h1>
  //             <form
  //               onSubmit={handleSubmit}
  //               className='flex flex-col gap-7'
  //             >
  //               <div className='flex flex-col md:flex-row gap-7'>
  //                 <input
  //                   type='text'
  //                   name='name'
  //                   id='name'
  //                   placeholder='Your Name*'
  //                   required
  //                   className='font-Nunito text-[#0D47A1] border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
  //                 />
  //                 <input
  //                   type='text'
  //                   name='number'
  //                   id='number'
  //                   placeholder='Your Number'
  //                   className='font-Nunito text-[#0D47A1] border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
  //                 />
  //               </div>
  //               <div className='flex flex-col md:flex-row gap-7'>
  //                 <input
  //                   type='email'
  //                   name='email'
  //                   id='email'
  //                   placeholder='Your E-Mail*'
  //                   required
  //                   className='font-Nunito text-[#0D47A1] border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
  //                 />
  //                 <input
  //                   type='text'
  //                   name='address'
  //                   id='address'
  //                   placeholder='Your Address'
  //                   className='font-Nunito text-[#0D47A1] border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full'
  //                 />
  //               </div>
  //               <textarea
  //                 name='message'
  //                 id='message'
  //                 placeholder='Write A Message...'
  //                 className='font-Nunito text-[#0D47A1] border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full'
  //               ></textarea>
  //               <div className='flex gap-2 text-[#0D47A1] font-Nunito'>
  //                 <input
  //                   type='checkbox'
  //                   name='terms'
  //                   id='terms'
  //                 />
  //                 <p>I agree with the Terms & Conditions</p>
  //               </div>
  //               <div className='inline-block'>
  //                 <button
  //                   type='submit'
  //                   className='primary-btn'
  //                 >
  //                   {`Submit Message`}
  //                   <span className='icon-style'>
  //                     <svg
  //                       className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
  //                       xmlns='http://www.w3.org/2000/svg'
  //                       stroke='CurrentColor'
  //                       width='14.2'
  //                       height='14.2'
  //                       viewBox='0 0 14.2 14.2'
  //                     >
  //                       <g>
  //                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
  //                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
  //                       </g>
  //                       <g>
  //                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
  //                         <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
  //                       </g>
  //                     </svg>
  //                   </span>
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  return (
    <section className="relative overflow-hidden bg-[#061426] py-16 md:py-20 lg:py-[100px]">
      {/* ================= AI BACKGROUND GRID ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)
        `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* AI GLOW */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#1976D2]/20 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="Container relative z-10">
        {/* ================= HEADER ================= */}

        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

            <span className="font-Rajdhani text-[11px] font-bold uppercase tracking-[0.3em] text-[#7DD3FC]">
              AI Communication Center
            </span>
          </div>

          <h1 className="font-Rajdhani text-[40px] font-bold leading-tight text-white sm:text-[48px] md:text-[58px]">
            Let's build something
            <span className="block bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
              intelligent together.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] font-Nunito text-[15px] leading-7 text-slate-400 md:text-[17px]">
            Have an idea, a project, or a business challenge to solve? Connect
            with our experts and transform your vision into innovative,
            scalable, and impactful digital solutions that drive real business
            value.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* =====================================================
            MAP
        ====================================================== */}

          <div className="relative">
            <div className="group relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="relative h-full min-h-[560px] overflow-hidden rounded-[24px]">
                <iframe
                  src={MAP_EMBED_URL}
                  title="BlueLync Tech Solutions office location on Google Maps"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />

                {/* MAP DARK OVERLAY */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061426]/90 via-transparent to-[#061426]/10" />

                {/* LOCATION STATUS */}

                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/15 bg-[#061426]/85 px-4 py-2.5 backdrop-blur-xl">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#38BDF8]/10">
                    <svg
                      className="h-4 w-4 text-[#38BDF8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1114 0z"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="font-Rajdhani text-[9px] font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
                      Live Location
                    </p>

                    <p className="font-Rajdhani text-sm font-bold text-white">
                      KPHB Colony, Hyderabad
                    </p>
                  </div>
                </div>

                {/* BOTTOM LOCATION CARD */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#061426]/90 p-5 backdrop-blur-xl">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10">
                      <span className="text-xl text-[#38BDF8]">◉</span>
                    </div>

                    <div className="flex-1">
                      <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
                        BlueLync Tech Solutions
                      </p>

                      <p className="mt-1 font-Nunito text-sm text-white/60">
                        4th Floor, Srinivasa Heights, 302, Kousalya Colony,
                        Bachupally, Hyderabad, Telangana 500118 Business Hours:
                        Mon - Fri (7 AM to 10 PM) <br />
                        Contact:
                        <a href="tel:+916304925404"> +91-63049 25404 </a>
                      </p>
                    </div>

                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get directions to BlueLync Tech Solutions on Google Maps (opens in a new tab)"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#1976D2] px-5 py-2.5 font-Rajdhani text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)] sm:w-auto"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      Get Directions
                    </a>

                    <div className="hidden items-center gap-2 sm:flex">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />

                      <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-green-400">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
            CONTACT FORM
        ====================================================== */}

          <div className="relative scroll-mt-24" ref={formRef}>
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-9">
              {/* CARD GLOW */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#38BDF8]/10 blur-[80px]" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-[80px]" />

              <div className="relative">
                {/* FORM TITLE */}

                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#38BDF8]" />

                      <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
                        Start A Conversation
                      </span>
                    </div>

                    <h2 className="font-Rajdhani text-[32px] font-bold leading-tight text-white md:text-[40px]">
                      Get in Touch With
                      <span className="text-[#38BDF8]"> Our Team.</span>
                    </h2>

                    <p className="mt-3 font-Nunito text-sm leading-6 text-slate-500">
                      Tell us what you are building. Our team will get back to
                      you with the right solution.
                    </p>
                  </div>

                  {/* AI ICON */}

                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 md:flex">
                    <svg
                      className="h-7 w-7 text-[#38BDF8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M5.64 18.36l1.42-1.42M16.94 7.06l1.42-1.42"
                      />
                      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                {/* SELECTED JOB */}

                {jobTitle && (
                  <div className="mb-8 overflow-hidden rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 p-5 backdrop-blur-xl">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

                      <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.25em] text-[#7DD3FC]">
                        Applying For
                      </span>
                    </div>

                    <h3 className="font-Rajdhani text-[24px] font-bold leading-tight text-white">
                      {jobTitle}
                    </h3>

                    {(jobType || jobLocation || jobExperience) && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {jobType && (
                          <span className="rounded-full bg-[#0D47A1] px-3 py-1 font-Rajdhani text-[10px] font-semibold uppercase tracking-wider text-white">
                            {jobType}
                          </span>
                        )}

                        {jobLocation && (
                          <span className="rounded-full border border-white/10 px-3 py-1 font-Rajdhani text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                            {jobLocation}
                          </span>
                        )}

                        {jobExperience && (
                          <span className="rounded-full border border-white/10 px-3 py-1 font-Rajdhani text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                            {jobExperience}
                          </span>
                        )}
                      </div>
                    )}

                    {jobDescription && (
                      <p className="mt-4 font-Nunito text-sm leading-6 text-slate-400">
                        {jobDescription}
                      </p>
                    )}
                  </div>
                )}

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* SUBMITTED WITH THE FORM */}

                  {jobTitle && (
                    <>
                      <input type="hidden" name="jobTitle" value={jobTitle} />

                      <input
                        type="hidden"
                        name="jobDescription"
                        value={jobDescription}
                      />
                    </>
                  )}

                  {/* NAME / NUMBER */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        maxLength={50}
                        value={name}
                        onChange={handleNameChange}
                        onBlur={() => setNameError(validateName(name))}
                        placeholder="Your Name*"
                        required
                        aria-invalid={!!nameError}
                        aria-describedby="name-error"
                        className={`h-[58px] w-full rounded-xl border bg-[#071A30]/70 px-5 font-Nunito text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-[#071A30] focus:ring-4 focus:ring-[#38BDF8]/5 ${
                          nameError
                            ? "border-red-500/60 focus:border-red-500/60"
                            : "border-white/10 focus:border-[#38BDF8]/50"
                        }`}
                      />

                      {/* ERROR TOOLTIP */}
                      <div
                        id="name-error"
                        role="alert"
                        className={`pointer-events-none absolute bottom-full right-4 z-20 mb-2 transition-all duration-200 ${
                          nameError
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-0"
                        }`}
                      >
                        <div className="relative rounded-lg border border-red-500/30 bg-[#2a0f18] px-3 py-2 font-Nunito text-xs font-semibold text-red-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                          {nameError}
                          <span className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 border-b border-r border-red-500/30 bg-[#2a0f18]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      {/* <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="Mobile Number*"
                        className="h-[58px] w-full rounded-xl border border-white/10 bg-[#071A30]/70 px-5 font-Nunito text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#38BDF8]/50 focus:bg-[#071A30] focus:ring-4 focus:ring-[#38BDF8]/5"
                      /> */}
                      <input
                        type="tel"
                        name="number"
                        id="number"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        maxLength={10}
                        value={number}
                        onChange={handleNumberChange}
                        onBlur={() => setNumberError(validateNumber(number))}
                        placeholder="Mobile Number*"
                        required
                        aria-invalid={!!numberError}
                        aria-describedby={
                          numberError ? "number-error" : undefined
                        }
                        className={`h-[58px] w-full rounded-xl border bg-[#071A30]/70 px-5 font-Nunito text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-[#071A30] focus:ring-4 focus:ring-[#38BDF8]/5 ${
                          numberError
                            ? "border-red-500/60 focus:border-red-500/60"
                            : "border-white/10 focus:border-[#38BDF8]/50"
                        }`}
                      />

                      {/* ERROR TOOLTIP */}
                      <div
                        id="number-error"
                        role="alert"
                        className={`pointer-events-none absolute bottom-full right-4 z-20 mb-2 transition-all duration-200 ${
                          numberError
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-0"
                        }`}
                      >
                        <div className="relative rounded-lg border border-red-500/30 bg-[#2a0f18] px-3 py-2 font-Nunito text-xs font-semibold text-red-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                          {numberError}
                          {/* arrow */}
                          <span className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 border-b border-r border-red-500/30 bg-[#2a0f18]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* EMAIL / ADDRESS */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        maxLength={100}
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => setEmailError(validateEmail(email))}
                        placeholder="Your E-Mail*"
                        required
                        aria-invalid={!!emailError}
                        aria-describedby="email-error"
                        className={`h-[58px] w-full rounded-xl border bg-[#071A30]/70 px-5 font-Nunito text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-[#071A30] focus:ring-4 focus:ring-[#38BDF8]/5 ${
                          emailError
                            ? "border-red-500/60 focus:border-red-500/60"
                            : "border-white/10 focus:border-[#38BDF8]/50"
                        }`}
                      />

                      {/* ERROR TOOLTIP */}
                      <div
                        id="email-error"
                        role="alert"
                        className={`pointer-events-none absolute bottom-full right-4 z-20 mb-2 transition-all duration-200 ${
                          emailError
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-0"
                        }`}
                      >
                        <div className="relative rounded-lg border border-red-500/30 bg-[#2a0f18] px-3 py-2 font-Nunito text-xs font-semibold text-red-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                          {emailError}
                          <span className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 border-b border-r border-red-500/30 bg-[#2a0f18]" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Your Address"
                        className="h-[58px] w-full rounded-xl border border-white/10 bg-[#071A30]/70 px-5 font-Nunito text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#38BDF8]/50 focus:bg-[#071A30] focus:ring-4 focus:ring-[#38BDF8]/5"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write A Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-[145px] w-full resize-none rounded-xl border border-white/10 bg-[#071A30]/70 px-5 py-4 font-Nunito text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#38BDF8]/50 focus:bg-[#071A30] focus:ring-4 focus:ring-[#38BDF8]/5"
                  />

                  {/* TERMS */}

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="h-4 w-4 cursor-pointer accent-[#38BDF8]"
                    />

                    <label
                      htmlFor="terms"
                      className="cursor-pointer font-Nunito text-sm text-slate-400"
                    >
                      I agree with the Privacy Policy and{" "}
                      <button
                        type="button"
                        ref={termsTriggerRef}
                        onClick={() => setTermsOpen(true)}
                        aria-haspopup="dialog"
                        className="font-semibold text-[#38BDF8] underline underline-offset-2 transition-colors hover:text-[#7DD3FC] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38BDF8]"
                      >
                        Terms &amp; Conditions
                      </button>
                    </label>
                  </div>

                  {/* SECURITY */}

                  {/* <div className="flex items-center gap-3 rounded-xl border border-green-400/10 bg-green-400/5 px-4 py-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/10">
                      <svg
                        className="h-4 w-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v1h8z"
                        />
                      </svg>
                    </span>

                    <span className="font-Rajdhani text-[10px] font-bold uppercase tracking-[0.15em] text-green-400">
                      Secure communication channel
                    </span>
                  </div> */}

                  {/* SUBMIT */}

                  {/* SUBMIT */}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      aria-describedby={
                        !isFormValid ? "submit-hint" : undefined
                      }
                      className="group relative flex h-[58px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#06A6D6] font-Rajdhani text-[15px] font-bold text-white shadow-[0_12px_35px_rgba(25,118,210,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(56,189,248,0.25)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-[0_12px_35px_rgba(25,118,210,0.25)]"
                    >
                      <span>Submit Message</span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isFormValid
                              ? "group-hover:-translate-y-1 group-hover:translate-x-1"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M13 6l6 6-6 6"
                          />
                        </svg>
                      </span>

                      {/* Shine (only when the button is usable) */}
                      {isFormValid && (
                        <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
                      )}
                    </button>

                    {!isFormValid && (
                      <p
                        id="submit-hint"
                        className="mt-3 text-center font-Nunito text-xs text-slate-400"
                      >
                        Fill in the required fields (*) and accept the Terms
                        &amp; Conditions to continue.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TERMS & CONDITION MODAL ================= */}
        {termsOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
              onClick={() => setTermsOpen(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="terms-title"
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-[85vh] w-full max-w-[640px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#061426] shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <h2
                    id="terms-title"
                    className="font-Rajdhani text-2xl font-bold text-white"
                  >
                    Terms &amp; Conditions
                  </h2>

                  <button
                    type="button"
                    ref={termsCloseRef}
                    onClick={() => setTermsOpen(false)}
                    aria-label="Close Terms and Conditions"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 6l12 12M18 6L6 18"
                      />
                    </svg>
                  </button>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div
                  data-lenis-prevent
                  className="flex-1 overflow-y-auto px-6 py-5 font-Nunito text-sm leading-7 text-slate-300"
                >
                  <p className="mb-5 text-slate-200">{TERMS_INTRO}</p>

                  <ol className="space-y-4">
                    {TERMS_SECTIONS.map((section, i) => (
                      <li key={section.title}>
                        <h3 className="mb-1 font-semibold text-white">
                          {i + 1}. {section.title}
                        </h3>
                        <p>{section.body}</p>
                      </li>
                    ))}
                  </ol>

                  <p className="mt-6 border-t border-white/10 pt-5 font-semibold text-slate-200">
                    {TERMS_OUTRO}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex flex-col-reverse gap-3 border-t border-white/10 px-6 py-4 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setTermsOpen(false)}
                    className="rounded-full border border-white/20 px-6 py-2.5 font-Rajdhani text-sm font-bold uppercase tracking-wider text-slate-200 transition-colors hover:bg-white/10"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setTermsAccepted(true);
                      setTermsOpen(false);
                    }}
                    className="rounded-full bg-gradient-to-r from-[#0D47A1] to-[#1976D2] px-6 py-2.5 font-Rajdhani text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
                  >
                    I Agree
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )}

        {/* ================= BOTTOM FEATURES ================= */}

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
              ✦
            </div>

            <div>
              <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
                Intelligence
              </p>

              <p className="font-Rajdhani text-lg font-bold text-white">
                AI Driven Solutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
              ✓
            </div>

            <div>
              <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-green-400">
                Security
              </p>

              <p className="font-Rajdhani text-lg font-bold text-white">
                Trusted Communication
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#818CF8]/10 text-[#818CF8]">
              ↗
            </div>

            <div>
              <p className="font-Rajdhani text-[10px] font-bold uppercase tracking-widest text-[#818CF8]">
                Future Ready
              </p>

              <p className="font-Rajdhani text-lg font-bold text-white">
                Digital Transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Appointment;
