
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, User, Send, MapPin, Clock, MessageCircle } from 'lucide-react';
import { contactsLinks } from '@/Api/personalLinkes';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (validateForm()) {
  //     setIsSubmitting(true);
      
  //     // Simulate form submission
  //     setTimeout(() => {
  //       console.log('Form submitted:', formData);
  //       alert('Message sent successfully! I will get back to you soon.');
  //       setFormData({ name: '', email: '', subject: '', message: '' });
  //       setIsSubmitting(false);
  //     }, 2000);
  //   }
  // };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (validateForm()) {
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    // Replace with your actual Web3Forms access key
    formDataObj.append("access_key", "d6520264-db53-436c-8746-65167d80b943");
    formDataObj.append('from_name', formData.name);
    formDataObj.append('replyto', formData.email);
    formDataObj.append('subject', `New Contact Message: ${formData.subject}`);

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        console.log("Form submitted successfully:", data);
        alert("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Submission failed:", data);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'pmuhammedfais2001@gmail.com',
      href: 'mailto:pmuhammedfais2001@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8137019017',
      href: 'tel:+918137019017',
      description: 'Call me directly'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/muhammedfais',
      description: 'Professional network'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/muhammedfais',
      description: 'Check out my projects'
    }
  ];

  const quickInfo = [
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Ernakulam, Kerala'
    },
    {
      icon: <Clock size={20} />,
      label: 'Response Time',
      value: 'Within 24 hours'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'Preferred Contact',
      value: 'Email or LinkedIn'
    }
  ];

  const GmailLink = contactsLinks.find(link => link.name === "Gmail")?.url;
  const linkedinLink = contactsLinks.find(link => link.name === "LinkedIn")?.url;
  
  

  return (
    <section id="contact" className="py-20 section-padding bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            <User className="inline-block mr-3 text-primary" size={32} />
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, interesting projects, or just have a conversation about technology and development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Info</h4>
              <div className="space-y-3">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{info.label}: </span>
                      <span className="text-foreground font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/20 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                        errors.name ? 'border-red-500' : 'border-border/50'
                      } focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                        errors.email ? 'border-red-500' : 'border-border/50'
                      } focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                      errors.subject ? 'border-red-500' : 'border-border/50'
                    } focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="training">Training & Mentorship</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                      errors.message ? 'border-red-500' : 'border-border/50'
                    } focus:border-primary focus:outline-none transition-all duration-300 resize-vertical backdrop-blur-sm`}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Contact CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Prefer a Quick Chat?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Sometimes a conversation is worth a thousand messages. Feel free to reach out directly for a quick discussion about your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GmailLink}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center space-x-2"
              >
                <Mail size={18} />
                <span>Email Me</span>
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;