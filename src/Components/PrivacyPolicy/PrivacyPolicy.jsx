/* eslint-disable react/prop-types */
import BreadCrumb2 from '../../Shared/BreadCrumb/BreadCrumb2';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../Shared/Helmet/Helmet';
import { scrollToTarget } from '../../Shared/Lenis/lenis';

const COMPANY = 'BlueLync Tech Solutions India Pvt Ltd';

const Paragraph = ({ children }) => (
  <p className="font-Nunito text-[15px] md:text-base text-[#1A237E] leading-7 md:leading-8 mb-4 last:mb-0">
    {children}
  </p>
);

const NumberedList = ({ items }) => (
  <ol className="list-decimal pl-6 space-y-2.5 mb-4 font-Nunito text-[15px] md:text-base text-[#1A237E] leading-7 marker:font-bold marker:text-[#1976D2]">
    {items.map((item, i) => (
      <li key={i} className="pl-1">
        {item}
      </li>
    ))}
  </ol>
);

const BulletList = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2.5 mb-4 font-Nunito text-[15px] md:text-base text-[#1A237E] leading-7 marker:text-[#1976D2]">
    {items.map((item, i) => (
      <li key={i} className="pl-1">
        {item}
      </li>
    ))}
  </ul>
);

const Term = ({ children }) => (
  <strong className="font-bold text-[#0D47A1]">{children}</strong>
);

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <Paragraph>
          {COMPANY} (“{COMPANY},” “we,” “us,” or “our”) and its affiliates are
          committed to protecting and preserving your privacy. This policy, together
          with our Terms of Use and Conditions, and any other underlying agreements or
          terms, sets out the basis on which any data we collect from you, or that you
          provide to us, will be processed by us.
        </Paragraph>
        <Paragraph>
          By using our website (“Site”), you are accepting the practices described in
          this Privacy Policy. This Privacy Policy also describes the manner in which we
          process, use, and disclose information that you provide to us when you use our
          Site.
        </Paragraph>
        <Paragraph>
          By using this Site, you consent to the use of the information that you provide
          to us in accordance with this Privacy Policy. We may update this Privacy Policy
          from time to time, so please review this Privacy Policy regularly. If we
          materially alter our Privacy Policy, we will notify you of such changes by
          posting a notice on our Site.
        </Paragraph>
        <Paragraph>
          Your continued use of the Site will be deemed your agreement that your
          information may be used in accordance with the new policy. If you do not agree
          with the changes, you should stop using the Site and notify us that you do not
          want your information used in accordance with the changes.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'website-privacy-notice',
    title: 'Website Privacy Notice',
    content: (
      <>
        <Paragraph>
          Please read this Policy carefully to fully understand how we collect, share,
          and protect information about you. This Policy is incorporated into and is a
          part of the Terms of Use and Conditions for this Site.
        </Paragraph>
        <Paragraph>
          By accessing and using the Site, you agree that you have read and understand
          this Privacy Policy and that you accept the privacy practices and uses and
          disclosures of your information described herein.
        </Paragraph>
        <Paragraph>
          In order to deliver personalized and relevant information to you through our
          Site, we collect certain information from users.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <Paragraph>
          In operating our Site, we may collect and process the following data about you:
        </Paragraph>
        <NumberedList
          items={[
            <>
              <Term>Website Usage Information:</Term> Details of your visits to our Site
              and the resources that you access, including traffic data, location data,
              weblogs, and other communication data, including your IP address, the date
              and time you accessed or left the Site, and which pages you viewed. Some
              parts of our Site use cookies and other technologies to collect information
              about your general internet usage.
            </>,
            <>
              <Term>Information You Provide Directly:</Term> Information that you provide
              directly to us by filling in forms on our Site, such as your name, email
              address, and telephone number.
            </>,
            <>
              <Term>Personal and Professional Information:</Term> We may collect personal
              details from you, such as your name, address, contact information, date of
              birth, birthplace, gender, family composition, career history (including
              CVs, recruitment details, education and training, language, and other
              job-related skills, as applicable), financial information, and/or
              information regarding your use of our resources.
            </>,
            <>
              <Term>Events and Conferences:</Term> We may collect information from you if
              you visit our events, trade shows, or conferences.
            </>,
            <>
              <Term>Webinars and Thought Leadership:</Term> We may collect information if
              you sign up for our thought leadership programs, webinars, or similar
              events.
            </>,
            <>
              <Term>Product and Service Requests:</Term> If you request information about
              our products or services, we may collect your First Name, Last Name, Email
              Address, City, Country, State/Province/Region, Address, Postal Code,
              Company/Organization, and Phone Number.
            </>,
            <>
              <Term>Communications:</Term> We may collect information provided to us when
              you communicate with us for any reason.
            </>,
          ]}
        />
        <Paragraph>
          By submitting a telephone number to {COMPANY}, you agree that a representative
          of {COMPANY} can contact you at the number you provide, potentially using
          automated technology, including texts/SMS messaging or pre-recorded messages.
          Your consent is not an obligation to receive any of our products and/or
          services.
        </Paragraph>
        <Paragraph>
          We may also collect personal details from you, or any authorized representative
          of you or {COMPANY}, for Corporate Social Responsibility-related activities. This
          may include personal information such as name, address, contact information,
          date of birth, gender, national identifier, health information, and bank
          account details, as applicable and permitted by law. Where required,
          guardian/parent consent will be obtained for minors.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'How We Use Cookies',
    content: (
      <>
        <Paragraph>
          A “cookie” is a piece of text that asks permission to be placed on your
          computer’s hard drive. Once you agree, this cookie file is stored on the hard
          drive of your computer. Cookies help us and our affiliates improve our Site and
          present content from our Site in the most effective manner for you and your
          computer.
        </Paragraph>
        <Paragraph>
          You can configure your browser to decline cookies. Please note that if you
          choose to decline cookies, you may be unable to access particular parts of our
          Site.
        </Paragraph>
        <Paragraph>
          We may track users across time or across websites where permitted by applicable
          law.
        </Paragraph>
        <Paragraph>
          Our website may respond to web browser “Do Not Track” signals and other
          mechanisms that provide consumers with the ability to exercise choice regarding
          the collection of personally identifiable information about an individual’s
          online activities over time and across third-party websites.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'use-of-information',
    title: 'Use of Your Information',
    content: (
      <>
        <Paragraph>
          The information that we collect and store relating to you is primarily used to
          enable us to provide our products and/or services to you in the best possible
          manner.
        </Paragraph>
        <Paragraph>
          In addition, we may use the information for the following purposes:
        </Paragraph>
        <NumberedList
          items={[
            'To provide you with information relating to our services and/or products.',
            'To fulfill or meet the reason you provided the information.',
            'To provide third parties with statistical information about users of our Site.',
            'To monitor and conduct analysis of our Site traffic and usage patterns.',
            'To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.',
            'To establish and maintain contact with you.',
            'To respond to a security incident.',
            'For financial management purposes.',
            'To maintain ethics reporting mechanisms, monitor and audit company functions, conduct employee certifications, support office automation and collaboration, and operate our internal Help Desk.',
            'To send you updates and/or other informational mailings.',
            'To comply with contractual obligations.',
            'For recruiting and employee onboarding pursuant to applicable employment arrangements.',
            'For background verification checks.',
            'To collect feedback and conduct surveys.',
            'To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.',
            'For fraud prevention.',
          ]}
        />
        <Paragraph>
          We will not use personal information we collect for materially different,
          unrelated, or incompatible purposes without providing you with notice and/or
          updating this Privacy Policy.
        </Paragraph>
        <Paragraph>
          We may use your personal information for providing benefits under Corporate
          Social Responsibility-related activities and may retain this information for
          auditing and other legal requirements.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    content: (
      <>
        <Paragraph>
          To secure your information, we have put in place commercially suitable
          physical, electronic, and managerial procedures to safeguard and secure the
          information we collect on our Site.
        </Paragraph>
        <Paragraph>
          Nonetheless, transmission of information via the internet is not completely
          secure. Therefore, we cannot guarantee the security of data sent to us
          electronically through our Site, and transmission of such data is undertaken at
          your own risk.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'disclosing-information',
    title: 'Disclosing Your Information',
    content: (
      <>
        <Paragraph>
          Where applicable, we may disclose your personal information to affiliated
          business entities or third parties necessary to provide products and/or services
          to you.
        </Paragraph>
        <Paragraph>
          This may include subsidiaries, holding companies and their subsidiaries, service
          providers involved in the administration and operation of our products and/or
          services, and other parties for legitimate business purposes.
        </Paragraph>
        <Paragraph>We may also disclose your personal information to third parties:</Paragraph>
        <NumberedList
          items={[
            'Where we sell any or all of our business and/or assets to a third party, whether through bankruptcy proceedings or another sale, restructuring, or merger.',
            'Where we are legally required to disclose your information, including pursuant to a valid subpoena, court order, search warrant, or law enforcement request.',
            `To third parties, including customers, auditors, accountants, attorneys, professional advisers, and third-party companies, to allow ${COMPANY} to comply with contractual, statutory, and other obligations and for the proper management of its business.`,
            'Where necessary in connection with fraud prevention, unlawful conduct investigations, or other legitimate legal or business purposes, subject to applicable law.',
          ]}
        />
        <Paragraph>
          Where we disclose personal information for a purpose set forth herein, we may
          enter into an agreement with the third party describing the purpose of
          processing and requiring the third-party recipient to keep the personal
          information confidential and not use it for purposes other than performing the
          agreed services.
        </Paragraph>
        <div className="my-5 rounded-xl border-l-4 border-[#1976D2] bg-[#E3F2FD] px-5 py-4">
          <p className="font-Rajdhani text-lg font-bold text-[#0D47A1]">
            We do not sell your personal information to third parties.
          </p>
        </div>
        <Paragraph>
          Where applicable, {COMPANY} may transfer Personal Data collected in the European
          Economic Area (“EEA”) to countries outside the EEA that may not have laws
          offering the same level of protection for personal data. Where required by
          applicable law, {COMPANY} will implement appropriate safeguards to protect such
          Personal Data.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Retention of Your Data',
    content: (
      <>
        <Paragraph>
          {COMPANY} will store and maintain your information for as long as necessary:
        </Paragraph>
        <BulletList
          items={[
            'To fulfill the purpose(s) for which it was collected;',
            'To meet its current and future legal obligations, including applicable record-retention requirements; and/or',
            'As permitted to meet its legitimate business interests.',
          ]}
        />
        <Paragraph>
          Personal information of individuals, other than employees, may be retained for
          up to 10 years unless applicable law, contractual obligations, or legitimate
          business requirements permit or require a shorter or longer period.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'third-party-websites',
    title: 'Third-Party Websites',
    content: (
      <>
        <Paragraph>
          By accessing third-party websites through our Site, you are subject to the terms
          and privacy policies of those websites.
        </Paragraph>
        <Paragraph>
          We do not accept responsibility or liability for the privacy practices of
          third-party websites because we do not control them. We encourage you to review
          the privacy policies of third-party websites before providing personal
          information.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'legal-age',
    title: 'Users Only of Legal Age of Majority',
    content: (
      <>
        <Paragraph>
          Our Site is designed and intended for individuals who have reached the age of
          majority applicable in their jurisdiction. By using our Site, you affirm that you
          are legally permitted to use the Site.
        </Paragraph>
        <Paragraph>
          We do not knowingly authorize children to submit or post personal information on
          our Site where prohibited by applicable law.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contacting Us',
    content: (
      <>
        <Paragraph>
          We welcome any queries, comments, complaints, or requests you may have regarding
          this Privacy Policy.
        </Paragraph>
        <Paragraph>Please contact us at:</Paragraph>
        <div className="rounded-2xl bg-gradient-to-r from-[#0D47A1] to-[#1976D2] p-6 md:p-8 text-white shadow-[0_15px_40px_rgba(13,71,161,0.25)]">
          <p className="font-Rajdhani text-xl md:text-2xl font-bold mb-4">{COMPANY}</p>
          <dl className="space-y-3 font-Nunito text-[15px] md:text-base">
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <dt className="font-bold text-white/70 sm:w-24 shrink-0">Address</dt>
              <dd>
                4th Floor, Srinivasa Heights, 302, Kousalya Colony, Bachupally, Hyderabad,
                Telangana 500118
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <dt className="font-bold text-white/70 sm:w-24 shrink-0">Email</dt>
              <dd>
                <a
                  href="mailto:operations@bluelync.in?subject=Privacy%20Policy%20Enquiry"
                  className="underline underline-offset-4 hover:text-[#80D8FF] break-all"
                >
                  operations@bluelync.in
                </a>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <dt className="font-bold text-white/70 sm:w-24 shrink-0">Website</dt>
              <dd>
                <a
                  href="https://www.bluelync.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[#80D8FF] break-all"
                >
                  https://www.bluelync.in/
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  const goToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) scrollToTarget(target, { offset: -110 });
  };

  return (
    <>
      <HelmetChanger title={'Privacy Policy'} />
      <BreadCrumb2
        breadCrumbTitle={'Privacy Policy'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Privacy Policy'}
      />

      <section
        className="relative py-14 md:py-20 lg:py-24"
        style={{ background: 'linear-gradient(rgb(224, 247, 250) 0%, rgb(128, 216, 255) 100%)' }}
      >
        <div className="Container">
          {/* Header */}
          <div className="mx-auto mb-10 md:mb-14 max-w-3xl text-center">
            <span className="inline-block rounded-full border border-[#1976D2]/20 bg-white/70 px-4 py-1.5 font-Rajdhani text-xs font-bold uppercase tracking-[0.2em] text-[#1976D2]">
              Legal
            </span>
            <h2 className="mt-4 font-Rajdhani text-3xl font-bold leading-tight text-[#0D47A1] sm:text-4xl md:text-[42px]">
              Privacy Policy and Notice of Privacy Practices
            </h2>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 font-Nunito text-sm text-[#1A237E]">
              <span className="rounded-full bg-white/80 px-4 py-1.5 shadow-sm">
                <strong className="text-[#0D47A1]">Effective Date:</strong> 2025
              </span>
              <span className="rounded-full bg-white/80 px-4 py-1.5 shadow-sm">
                <strong className="text-[#0D47A1]">Last Updated:</strong> 2025
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            {/* Table of contents (desktop) */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Privacy policy sections"
                className="sticky top-28 rounded-2xl bg-white/80 p-5 shadow-[0_10px_30px_rgba(13,71,161,0.08)] backdrop-blur"
              >
                <p className="mb-3 font-Rajdhani text-sm font-bold uppercase tracking-[0.15em] text-[#1976D2]">
                  On this page
                </p>
                <ol className="space-y-1">
                  {SECTIONS.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => goToSection(e, section.id)}
                        className="flex gap-2 rounded-lg px-2 py-1.5 font-Nunito text-sm text-[#1A237E] transition-colors hover:bg-[#E3F2FD] hover:text-[#0D47A1]"
                      >
                        <span className="w-5 shrink-0 font-bold text-[#1976D2]">{i + 1}.</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Policy content */}
            <div className="space-y-6">
              {SECTIONS.map((section, i) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(13,71,161,0.08)] md:p-8"
                >
                  <h3 className="mb-5 flex items-center gap-3 font-Rajdhani text-2xl font-bold text-[#0D47A1] md:text-[28px]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-base text-white">
                      {i + 1}
                    </span>
                    {section.title}
                  </h3>
                  {section.content}
                </article>
              ))}

              <p className="pt-2 text-center font-Nunito text-sm text-[#1A237E]">
                ©2025 {COMPANY}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
