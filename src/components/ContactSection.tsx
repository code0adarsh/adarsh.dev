
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-mono text-teal mb-4">What's Next?</div>
        <h2 className="section-title text-lightSlate mb-6">
          Get In Touch
        </h2>
        
        <p className="text-slate mb-12 text-lg">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lightSlate mb-2 font-mono">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-navy border border-slate/30 focus:border-teal rounded p-3 text-lightSlate focus:outline-none"
              placeholder="Your name"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-lightSlate mb-2 font-mono">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-navy border border-slate/30 focus:border-teal rounded p-3 text-lightSlate focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-lightSlate mb-2 font-mono">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-navy border border-slate/30 focus:border-teal rounded p-3 text-lightSlate focus:outline-none resize-none"
              placeholder="Your message"
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary min-w-[180px] relative overflow-hidden group"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg 
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-teal" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" cy="12" r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
