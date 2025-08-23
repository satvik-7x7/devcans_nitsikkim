import { Github, Linkedin, Mail } from 'lucide-react';
import MatrixBackground from '@/components/MatrixBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CircularGallery from '../../ReactBitscomponets/CircularGallery/CircularGallery.jsx';
import pratyayKuilaImage from '/cse_faculty/PratyayKulia.jpeg';
import BamBahadurImage from '/cse_faculty/BamBahadur.jpg';
import DikshaImage from '/cse_faculty/deekshaRangwani.jpeg';
import Harshit from '/devCans4thyear/Harshit.png';
import Vidhi from '/devCans4thyear/vidhiDidi.png';
import Vipin from '/devCans4thyear/vipin.png';

const Teams = () => {
  const facultyAdvisers = [
    {
      name: 'Dr. Pratyay Kuila',
      role: 'President',
      department: 'Computer Science & Engineering',
      bio: ' Evolutionary Algorithms, AI and Machine Learning, Quantum-Inspired Algorithm, Mobile Fog and Edge Computing, Wireless Sensor Networks',
      image: pratyayKuilaImage,
      social: {
        email: 'pratyay_kuila@nitsikkim.ac.in',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Bam Bahadur Sinha',
      role: 'Vice President',
      department: 'Computer Science & Engineering',
      bio:'Artificial Intelligence & Machine Learning, Deep Learning, Optimization Techniques, Recommender Systems, Generative AI',
      image: BamBahadurImage,
      social: {
        email: 'bambahadursinha@nitsikkim.ac.in',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Diksha Rangwani',
      role: 'Faculty Coordinator',
      department: 'Computer Science & Engineering',
      bio:'Energy-Efficient Authentication Protocols, Machine Learning based Authentication Protocols, Network Security',
      image: DikshaImage,
      social: {
        email: 'diksharangwani@nitsikkim.ac.in',
        linkedin: '#'
      }
    }

  ];

  const teamLeads = [
    {
      name: 'Harshit Vyas',
      role: 'President',
      year: 'Final Year CSE',
      image: Harshit,
      social: {
        github: '#',
        linkedin: '#',
        email: 'arjun@devcans.com'
      }
    },
    {
      name: 'Vidhi Verma',
      role: 'Convenor',
      year: 'Final Year CSE',
      image: Vidhi,
      social: {
        github: '#',
        linkedin: '#',
        email: 'priya@devcans.com'
      }
    },
    {
      name: 'Vipin Mishra',
      role: 'Treasurer',
      year: 'Final Year CSE',
     
      image: Vipin,
      social: {
        github: '#',
        linkedin: '#',
        email: 'rahul@devcans.com'
      }
    }
  ];

  const members = [
    {
      name: 'Aditya Kumar',
      role: 'Core Member',
      year: 'Second Year CSE',
      bio: 'Mobile app developer and tech blogger, focused on cross-platform development.',
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
      role: 'Core Member',
      year: 'Second Year IT',
      bio: 'Cybersecurity enthusiast and web developer, passionate about building secure applications.',
      skills: ['Python', 'Cybersecurity', 'Linux', 'Ethical Hacking'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'nisha@devcans.com'
      }
    },
    {
      name: 'Vikram Thakur',
      role: 'Core Member',
      year: 'First Year CSE',
      bio: 'Passionate about competitive programming and algorithm design.',
      skills: ['C++', 'Java', 'Data Structures', 'Algorithms'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'vikram@devcans.com'
      }
    },
    {
      name: 'Anita Singh',
      role: 'Core Member',
      year: 'First Year IT',
      bio: 'Frontend enthusiast learning modern web technologies and design principles.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'anita@devcans.com'
      }
    },
    {
      name: 'Rohit Gupta',
      role: 'Core Member',
      year: 'First Year ECE',
      bio: 'IoT enthusiast exploring the intersection of hardware and software.',
      skills: ['Arduino', 'Raspberry Pi', 'Python', 'C'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'rohit@devcans.com'
      }
    },
    {
      name: 'Kavya Joshi',
      role: 'Core Member',
      year: 'First Year CSE',
      bio: 'Machine learning enthusiast working on computer vision projects.',
      skills: ['Python', 'OpenCV', 'TensorFlow', 'NumPy'],
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      }
    }
  ];

  const renderPersonCard = (person: any, showSkills = true) => (
    <div key={person.name} className="card-terminal cyber-glow group fade-in-up">
      <div className="relative mb-6 overflow-hidden rounded-lg">
          <div className="w-full h-48 bg-terminal-bg-lighter flex items-center justify-center overflow-hidden rounded-full">
            {person.image.includes('placeholder') ? (
              <div className="w-24 h-24 bg-terminal-green/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold terminal-text">
                  {person.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
            ) : (
              <img
                src={person.image}
                alt={person.name}
                className="object-cover w-24 h-24 rounded-full"
              />
            )}
          </div>
        <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold terminal-text mb-1">{person.name}</h3>
        <p className="text-terminal-green font-medium mb-1">{person.role}</p>
        {person.year && <p className="text-sm text-muted-foreground">{person.year}</p>}
        {person.department && <p className="text-sm text-muted-foreground">{person.department}</p>}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {person.bio}
      </p>

      {showSkills && person.skills && (
        <div className="flex flex-wrap gap-2 mb-6">
          {person.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 bg-terminal-green/20 text-terminal-green text-xs rounded border border-terminal-green/30"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="flex space-x-4 pt-4 border-t border-terminal-green/20">
        {person.social.github && (
          <a
            href={person.social.github}
            className="text-muted-foreground hover:text-terminal-green transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        )}
        {person.social.linkedin && (
          <a
            href={person.social.linkedin}
            className="text-muted-foreground hover:text-terminal-green transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
        <a
          href={`mailto:${person.social.email}`}
          className="text-muted-foreground hover:text-terminal-green transition-colors"
          title="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-terminal-bg text-foreground overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold terminal-text mb-6 slide-in-left">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
              Meet the dedicated individuals who make DevCans a thriving community of developers and innovators.
            </p>
          </div>
        </section>

        {/* Faculty Advisers */}
        <section className="py-20 bg-terminal-bg-lighter/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
                Faculty Advisors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
                Our mentors and guides who provide invaluable support and direction to our club.
              </p>
            </div>

            {/* Circular Gallery */}
            <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery 
                items={[
                  {
                    image: pratyayKuilaImage,
                    text: 'Dr. Pratyay Kuila - President'
                  },
                  {
                    image: BamBahadurImage,
                    text: 'Dr. Bam Bahadur Sinha - Vice President'
                  },
                  {
                    image: DikshaImage,
                    text: 'Dr. Diksha Rangwani - Faculty Coordinator'
                  }
                ]}
                bend={0} 
                textColor="#ffffff" 
                borderRadius={0.05} 
                scrollSpeed={2}
                scrollEase={0.05}
              />
            </div>
          </div>
        </section>

        {/* Current Team Leads */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
                Current Team Leads
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
                The passionate leaders driving DevCans forward and organizing amazing events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamLeads.map((lead, index) => (
                <div key={lead.name} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  {renderPersonCard(lead)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="py-20 bg-terminal-bg-lighter/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
                Core Members
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
                Our dedicated members who actively contribute to the club's growth and success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div key={member.name} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  {renderPersonCard(member)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="card-terminal max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '1s' }}>
              <h3 className="text-2xl font-bold terminal-text mb-4">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals to join our community. 
                Whether you're a beginner or experienced developer, there's a place for you at DevCans!
              </p>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="btn-primary"
              >
                Get Involved
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;