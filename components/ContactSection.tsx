import { Mail, MapPin, Phone, Github, Instagram, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
            Ready to join our community or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 slide-in-left" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-2xl font-bold terminal-text mb-6">Connect With Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-terminal-green w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium terminal-text">Email</h4>
                    <p className="text-muted-foreground">devcans@nitsikkim.ac.in</p>
                    <p className="text-muted-foreground">contact@devcans.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-terminal-green w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium terminal-text">Location</h4>
                    <p className="text-muted-foreground">
                      National Institute of Technology Sikkim<br />
                      Ravangla, Sikkim 737139, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-terminal-green w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium terminal-text">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold terminal-text mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 card-terminal cyber-glow hover:scale-110 transition-transform">
                  <Github className="text-terminal-green w-6 h-6" />
                </a>
                <a href="#" className="p-3 card-terminal cyber-glow hover:scale-110 transition-transform">
                  <Linkedin className="text-terminal-green w-6 h-6" />
                </a>
                <a href="#" className="p-3 card-terminal cyber-glow hover:scale-110 transition-transform">
                  <Instagram className="text-terminal-green w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="card-terminal">
              <h4 className="text-lg font-bold terminal-text mb-4">Join Our Community</h4>
              <p className="text-muted-foreground mb-4">
                Become a part of NIT Sikkim's most active coding community. All skill levels welcome!
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Weekly coding sessions and workshops
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Access to exclusive resources and mentorship
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Networking opportunities with industry professionals
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Priority registration for hackathons and events
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="card-terminal">
              <h3 className="text-2xl font-bold terminal-text mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium terminal-text mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-terminal-bg border border-terminal-green/30 rounded-lg focus:outline-none focus:border-terminal-green text-foreground font-mono"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium terminal-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-terminal-bg border border-terminal-green/30 rounded-lg focus:outline-none focus:border-terminal-green text-foreground font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium terminal-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-terminal-bg border border-terminal-green/30 rounded-lg focus:outline-none focus:border-terminal-green text-foreground font-mono resize-none"
                    placeholder="Tell us about yourself, your interests, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;