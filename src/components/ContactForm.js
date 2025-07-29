import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_xbfishi';
  const TEMPLATE_ID = 'template_urzo0db';
  const PUBLIC_KEY = 'zd4SndumXMaFjKJ4G';

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your public key
      window.emailjs.init(PUBLIC_KEY);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [PUBLIC_KEY]); // Dependency array includes PUBLIC_KEY

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using EmailJS send method
      const response = await window.emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
      <div className="text-center mb-8">
        <p className="text-lg text-slate-300 leading-relaxed">
          Ready to bring your ideas to life? Let's collaborate and create something amazing together.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell me about your project, feedback, or how we can work together..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
              isSubmitting ? 'hover:scale-100' : 'hover:shadow-2xl hover:shadow-purple-500/25'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="text-center p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
            <div className="flex items-center justify-center space-x-2 text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Failed to send message. Please try again or contact me directly.</span>
            </div>
          </div>
        )}
      </form>

      {/* Direct Contact Options */}
      <div className="mt-8 pt-8 border-t border-slate-700">
        <p className="text-center text-slate-400 mb-4">Or reach me directly:</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">

          <a
            href="tel:+254724620792"
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.27 1.05l-1.6 1.6a16 16 0 006.58 6.58l1.6-1.6a1 1 0 011.05-.27l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
            </svg>
            <span>0724620792</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254724620792"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
              <path d="M16.004 2.003A13.996 13.996 0 0 0 2 16c0 2.477.648 4.851 1.874 6.961L2 30l7.222-1.831A13.928 13.928 0 0 0 16 30c7.72 0 14-6.279 14-14S23.72 2.003 16.004 2.003zm0 25.793c-2.175 0-4.29-.58-6.137-1.678l-.44-.261-4.283 1.087 1.138-4.177-.288-.459A11.957 11.957 0 0 1 4.001 16c0-6.627 5.372-11.999 12.003-11.999 6.628 0 12 5.372 12 11.999s-5.372 11.999-12 11.999zm6.47-8.57c-.354-.177-2.096-1.035-2.42-1.151-.324-.118-.56-.177-.797.177s-.916 1.151-1.123 1.386c-.206.235-.412.265-.766.088-.354-.177-1.493-.55-2.842-1.755-1.05-.937-1.756-2.09-1.963-2.443-.206-.353-.022-.544.154-.72.158-.157.354-.412.53-.618.176-.206.235-.353.353-.589.118-.236.059-.442-.03-.62-.088-.176-.797-1.921-1.092-2.634-.287-.688-.58-.59-.797-.601l-.677-.012c-.236 0-.618.088-.94.412s-1.233 1.204-1.233 2.938 1.264 3.411 1.44 3.646c.177.235 2.49 3.801 6.035 5.33.843.365 1.5.582 2.012.745.844.268 1.614.23 2.222.14.678-.1 2.096-.854 2.392-1.68.294-.825.294-1.532.206-1.68-.088-.147-.323-.236-.677-.412z" />
            </svg>
            <span>0724620792</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;