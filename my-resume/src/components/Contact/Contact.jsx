// src/components/Contact/Contact.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
    honeypot: '',
  });
  const [submittedSummary, setSubmittedSummary] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim())
      newErrors.from_name = 'Name is required';
    if (!formData.from_email.trim())
      newErrors.from_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email))
      newErrors.from_email = 'Enter a valid email address';
    if (!formData.message.trim())
      newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name])
      setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setFeedback('Contact form is not configured yet. Add your EmailJS keys to a .env file.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        publicKey
      );
      setStatus('success');
      setFeedback('Message sent! I\'ll get back to you soon.');
      setSubmittedSummary({
        from_name: formData.from_name.trim(),
        from_email: formData.from_email.trim(),
        message: formData.message.trim(),
      });
      setFormData({ from_name: '', from_email: '', message: '', honeypot: '' });
    } catch (err) {
      setStatus('error');
      setFeedback('Something went wrong while sending the message. Please try again.');
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Contact Me</h2>

      {status === 'success' && <p className={styles.successMsg}>{feedback}</p>}
      {status === 'error' && <p className={styles.errorMsg}>{feedback}</p>}

      {submittedSummary && (
        <section className={styles.summaryCard} aria-label="Submitted message summary">
          <h3 className={styles.summaryHeading}>Submitted Summary</h3>
          <p><strong>Name:</strong> {submittedSummary.from_name}</p>
          <p><strong>Email:</strong> {submittedSummary.from_email}</p>
          <p><strong>Message:</strong> {submittedSummary.message}</p>
        </section>
      )}

      <form onSubmit={handleSubmit} noValidate className={styles.form}>

        {/* Honeypot — invisible to real users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        <div className={styles.field}>
          <label htmlFor="from_name">Name</label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className={errors.from_name ? styles.inputError : ''}
          />
          {errors.from_name && (
            <span className={styles.errorText}>{errors.from_name}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="from_email">Email</label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className={errors.from_email ? styles.inputError : ''}
          />
          {errors.from_email && (
            <span className={styles.errorText}>{errors.from_email}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={errors.message ? styles.inputError : ''}
          />
          {errors.message && (
            <span className={styles.errorText}>{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={styles.button}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

      </form>
    </section>
  );
};

export default Contact;