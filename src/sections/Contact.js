import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert';


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { showAlert, hideAlert } = useAlert();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.send(
        'service_okssqky',
        'template_9u7udih',
        {
          from_name: form.name,
          to_name: 'Aayush',
          from_email: form.email,
          to_email: 'aayush.20b0121052@abes.ac.in',
          message: form.message,
        },
        'oo-KPBowmT_qlWBfR'
      );
  
      setLoading(false);
      showAlert({
        show: true,
        text: 'Thank you for your message 😃',
        type: 'success',
      });
  
      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error('Error sending email:', error);
  
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: 'danger',
      });
    }
  };
  


  return (
    <section className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen' />
        <div className='contact-container'>
          <h3 className='head-text'>Contact Me</h3>
          <p className='text-lg text-white-600 mt-3'>
If you are seeking a dedicated developer proficient in the MERN stack and React Native, please feel free to reach out.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}  className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe" />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com" />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your message</span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi, I'm interested in..." />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
