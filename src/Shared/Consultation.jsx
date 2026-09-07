import  { useState } from 'react';

const Consultation = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    help: 'Gen AI Services',
    message: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Your consultation request has been submitted successfully!');
  };

  return (
    <section  className="py-10 bg-[#ffc27f]  flex items-center z-10 mb-[50px]" >
     <div className='Container'>
    <section className="bg-gradient-to-r from-SecondaryColor-0 to-BodyBgDark6 py-16 px-5 lg:px-10 flex flex-col lg:flex-row items-start justify-between gap-10 shadow-2xl rounded-2xl">
      {/* LEFT SIDE */}
      <div className="flex-1 text-white">
        <button className="bg-PrimaryColor-0 text-white uppercase text-sm font-semibold px-4 py-2 rounded-md mb-4">
          Contact Us
        </button>

        <h2 className="text-3xl md:text-4xl font-Rajdhani font-bold mb-4 leading-snug">
          Free Consultation - Discover IT Solutions For Your Business
        </h2>

        <p className="text-TextColor mb-6 font-Nunito text-base leading-relaxed max-w-xl">
          Unlock the full potential of your business with our free consultation.
          Our expert team will assess your IT needs, recommend tailored solutions,
          and chart a path to success.
        </p>

        <ul className="space-y-2 text-sm md:text-base">
          {[
            'Confirmation of appointment details',
            'Research and preparation by the IT services company',
            'Consultation to discuss technology solutions',
            'Needs assessment for tailored solutions',
            'Presentation of proposed solutions',
            'Project execution and ongoing support',
            'Follow-up to evaluate effectiveness and satisfaction',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-PrimaryColor-0 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3 text-sm">
          <p>
            📧{' '}
            <a
              href="mailto:operations@bluelync.in"
              className="hover:text-PrimaryColor-0"
            >
              operations@bluelync.in
            </a>{' '}
            |{' '}
            <a href="mailto:hr-admin@bluelync.in" className="hover:text-PrimaryColor-0">
              hr-admin@bluelync.in
            </a>
          </p>
          <p>
            📞{' '}
            <a href="tel:+916304925404" className="hover:text-PrimaryColor-0">
              +91-6304925404
            </a>
          </p>
          <p>📍 KPHB Colony, Hyderabad</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 bg-white rounded-xl shadow-cases p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-center text-HeadingColor mb-6">
          Schedule A Free Consultation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full border border-BorderColor2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
            required
          />

          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full border border-BorderColor2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
            required
          />

          <input
            type="email"
            placeholder="Company Email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full border border-BorderColor2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
            required
          />

          <input
            type="text"
            placeholder="Company / Organization"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="w-full border border-BorderColor2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
          />

          <select
            value={form.help}
            onChange={(e) => handleChange('help', e.target.value)}
            className="w-full border border-BorderColor2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
          >
            <option>Gen AI Services</option>
            <option>Software Development</option>
            <option>UI/UX Design</option>
            <option>Cloud Consulting</option>
            <option>Cyber Security</option>
          </select>

          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full border border-BorderColor2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-PrimaryColor-0"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-PrimaryColor-0 hover:bg-PrimaryColor3 text-white rounded-lg py-3 font-semibold transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>

     </div>
     </section>
  );
};

export default Consultation;
