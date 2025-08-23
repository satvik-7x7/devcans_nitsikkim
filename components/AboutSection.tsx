import { Code, Lightbulb, Users, Rocket } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Master cutting-edge technologies and programming languages through hands-on workshops and coding sessions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Transform creative ideas into real-world solutions. We foster innovation and encourage out-of-the-box thinking.'
    },
    {
      icon: Users,
      title: 'Collaborative Community',
      description: 'Connect with like-minded peers, share knowledge, and build lasting professional relationships.'
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Enhance your skills, build an impressive portfolio, and prepare for a successful tech career.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-terminal-bg-lighter/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
            About DevCans
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
            DevCans is the premier coding and development club at NIT Sikkim, dedicated to nurturing 
            the next generation of software engineers, developers, and tech innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-in-left" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl md:text-3xl font-bold terminal-text mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To create a vibrant ecosystem where students can explore, learn, and master the art of 
              programming while building innovative solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in learning by doing, collaborating by building, and growing by sharing. 
              Our community is built on the principles of continuous learning, mutual support, and 
              technical excellence.
            </p>
          </div>
          
          <div className="slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="card-terminal">
              <h4 className="text-xl font-bold terminal-text mb-4">What We Do</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Weekly coding workshops and bootcamps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Hackathons and coding competitions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Open source project contributions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Tech talks and industry mentorship
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3"></span>
                  Career guidance and placement support
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-terminal text-center cyber-glow fade-in-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <feature.icon className="text-terminal-green w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold terminal-text mb-3">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;