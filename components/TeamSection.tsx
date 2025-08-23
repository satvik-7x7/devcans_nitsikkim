import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      year: 'Final Year CSE',
      bio: 'Full-stack developer passionate about building scalable web applications and leading tech communities.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'arjun@devcans.com'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      year: 'Third Year IT',
      bio: 'AI/ML enthusiast and competitive programmer with expertise in data science and algorithms.',
      skills: ['Python', 'TensorFlow', 'C++', 'Data Science'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'priya@devcans.com'
      }
    },
    {
      name: 'Rahul Singh',
      role: 'Technical Lead',
      year: 'Third Year CSE',
      bio: 'System architect and open source contributor, specializing in backend development and DevOps.',
      skills: ['Java', 'Docker', 'Kubernetes', 'PostgreSQL'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'rahul@devcans.com'
      }
    },
    {
      name: 'Sneha Gupta',
      role: 'Events Coordinator',
      year: 'Second Year ECE',
      bio: 'UI/UX designer and frontend developer, passionate about creating beautiful and functional user experiences.',
      skills: ['JavaScript', 'React', 'Figma', 'CSS'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sneha@devcans.com'
      }
    },
    {
      name: 'Aditya Kumar',
      role: 'Community Manager',
      year: 'Second Year CSE',
      bio: 'Mobile app developer and tech blogger, focused on cross-platform development and community building.',
      skills: ['Flutter', 'Dart', 'Firebase', 'React Native'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'aditya@devcans.com'
      }
    },
    {
      name: 'Nisha Reddy',
      role: 'Outreach Lead',
      year: 'Second Year IT',
      bio: 'Cybersecurity enthusiast and web developer, passionate about building secure applications.',
      skills: ['Python', 'Cybersecurity', 'Linux', 'Ethical Hacking'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'nisha@devcans.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-terminal-bg-lighter/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
            The passionate individuals driving DevCans forward, each bringing unique skills and perspectives to our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="card-terminal cyber-glow group fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-terminal-bg-lighter flex items-center justify-center">
                  <div className="w-24 h-24 bg-terminal-green/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold terminal-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold terminal-text mb-1">{member.name}</h3>
                <p className="text-terminal-green font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.year}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-terminal-green/20 text-terminal-green text-xs rounded border border-terminal-green/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4 border-t border-terminal-green/20">
                <a
                  href={member.social.github}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="card-terminal max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold terminal-text mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals to join our leadership team. 
              If you're interested in taking on a more active role in DevCans, we'd love to hear from you!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;