import  { useState } from 'react';
import { MAP_LINK_URL } from './officeLocation';
import { getEmailError } from './validation';

const MESSAGE_MIN = 20;
const MESSAGE_MAX = 500;

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  company: '',
  help: 'Gen AI Services',
  message: '',
};

const validateField = (key, value) => {
  const v = value.trim();
  switch (key) {
    case 'name':
      if (!v) return 'Name is required.';
      if (v.length < 2) return 'Name must be at least 2 characters.';
      return '';
    case 'phone': {
      if (!v) return 'Mobile number is required.';
      // Accepts 10-digit Indian mobile numbers, optionally prefixed with +91 / 91 / 0
      const digits = v.replace(/[\s-]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '');
      if (!/^[6-9]\d{9}$/.test(digits)) return 'Enter a valid 10-digit mobile number.';
      return '';
    }
    case 'email':
      return getEmailError(v);
    case 'message':
      if (!v) return 'Message is required.';
      if (v.length < MESSAGE_MIN) return `Message must be at least ${MESSAGE_MIN} characters.`;
      if (v.length > MESSAGE_MAX) return `Message must be ${MESSAGE_MAX} characters or less.`;
      return '';
    default:
      return '';
  }
};

const REQUIRED_FIELDS = ['name', 'phone', 'email', 'message'];

const inputClass = (hasError) =>
  `w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
    hasError
      ? 'border-red-500 focus:ring-red-500'
      : 'border-BorderColor2 focus:ring-PrimaryColor-0'
  }`;

const Consultation = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    if (touched[key]) {
      setErrors({ ...errors, [key]: validateField(key, value) });
    }
  };

  const handleBlur = (key) => {
    setTouched({ ...touched, [key]: true });
    setErrors({ ...errors, [key]: validateField(key, form[key]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    REQUIRED_FIELDS.forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched(Object.fromEntries(REQUIRED_FIELDS.map((key) => [key, true])));

    if (Object.keys(newErrors).length > 0) {
      e.target.querySelector(`[name="${Object.keys(newErrors)[0]}"]`)?.focus();
      return;
    }

    alert('✅ Your consultation request has been submitted successfully!');
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
  };

  const fieldError = (key) =>
    errors[key] ? (
      <p id={`${key}-error`} className="text-red-600 text-xs mt-1">
        {errors[key]}
      </p>
    ) : null;

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
          <p>
            📍{' '}
            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-PrimaryColor-0"
              aria-label="View KPHB Colony, Hyderabad on Google Maps (opens in a new tab)"
            >
              KPHB Colony, Hyderabad
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 bg-white rounded-xl shadow-cases p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-center text-HeadingColor mb-6">
          Schedule A Free Consultation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={inputClass(errors.name)}
            />
            {fieldError('name')}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              inputMode="tel"
              placeholder="Mobile Number*"
              maxLength={16}
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value.replace(/[^\d+\s-]/g, ''))}
              onBlur={() => handleBlur('phone')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={inputClass(errors.phone)}
            />
            {fieldError('phone')}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Company Email*"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={inputClass(errors.email)}
            />
            {fieldError('email')}
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className={inputClass(false)}
          />

          <select
            value={form.help}
            onChange={(e) => handleChange('help', e.target.value)}
            className={inputClass(false)}
          >
            <option>Gen AI Services</option>
            <option>Software Development</option>
            <option>UI/UX Design</option>
            <option>Cloud Consulting</option>
            <option>Cyber Security</option>
          </select>

          <div>
            <textarea
              name="message"
              placeholder={`Your Message* (min ${MESSAGE_MIN} characters)`}
              rows="4"
              maxLength={MESSAGE_MAX}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={inputClass(errors.message)}
            ></textarea>
            <div className="flex justify-between gap-2">
              <div>{fieldError('message')}</div>
              <span className="text-xs text-gray-500 mt-1 shrink-0">
                {form.message.trim().length}/{MESSAGE_MAX}
              </span>
            </div>
          </div>

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
