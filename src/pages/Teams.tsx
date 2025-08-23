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

  const teamLeads = [
     {
      name: 'Vipin Mishra',
      role: 'Treasurer',
      year: 'Third Year IT',
      bio: 'Cloud Systems & AIML',
      skills: ['Python', 'TensorFlow', 'C++', 'Data Science'],
      image: './devCans4thyear/vipin.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'vipin@devcans.com'
      }
    },
    {
      name: 'Harshit Vyas',
      role: 'Secretary',
      year: 'Final Year CSE',
      bio: 'Cybersecurity',
      skills: ['React', 'ShellScripting', 'Burpsuite', 'Python', 'C++', 'Cryptography'],
      image: './devCans4thyear/Harshit.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'harshit@devcans.com'
      }
    },
    {
      name: 'Vidhi Verma',
      role: 'Convenor',
      year: 'Third Year CSE',
      bio: 'Web Development',
      skills: ['Java', 'Docker', 'Kubernetes', 'PostgreSQL'],
      image: './devCans4thyear/vidhiDidi.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'vidhi@devcans.com'
      }
    }
  ];

  const coreMembers = [
    {
      name: 'Raj Kumar Prasad',
      role: 'Core Member',
      year: 'Final Year CSE',
      bio: 'Web Development',
      skills: ['Flutter', 'Dart', 'Firebase', 'React Native'],
      image: './devCans4thyear/raj.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'aditya@devcans.com'
      }
    },
    {
      name: 'Sharim Farhan',
      role: 'Core Member',
      year: 'Final Year CSE',
      bio: 'Web Development',
      skills: ['Python', 'Cybersecurity', 'Linux', 'Ethical Hacking'],
      image: './devCans4thyear/sharim.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'nisha@devcans.com'
      }
    },
    {
      name: 'Pranjal Rawat',
      role: 'Core Member',
      year: 'Final Year CSE',
      bio: 'Data Structures and Algorithms',
      skills: ['C++', 'Java', 'Data Structures', 'Algorithms'],
      image: './devCans4thyear/pranjal.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'vikram@devcans.com'
      }
    },
    {
      name: 'Siddarth Choudhary',
      role: 'Core Member',
      year: 'Final Year CSE',
      bio: 'DevOps',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: './devCans4thyear/siddarth.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'anita@devcans.com'
      }
    },
    {
      name: 'Ujjwal Kumar Rajak',
      role: 'Core Member',
      year: 'Final Year CSE',
      bio: 'Web Development',
      skills: ['Arduino', 'Raspberry Pi', 'Python', 'C'],
      image: './devCans4thyear/ujjwal.png',
      social: {
        github: '#',
        linkedin: '#',
        email: 'rohit@devcans.com'
      }
    }
  ];

  const members = [
    {
      name: 'Ayan Roy',
      role: 'Member',
      year: 'Third Year EEE',
      bio: 'Machine Learning & Data Science',
      skills: ['Python', 'JavaScript', 'Git', 'Linux'],
      image: './3rdYear/ayan.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'arjun@devcans.com'
      }
    },
    {
      name: 'Yash Gupta',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Linux & Networking',
      skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      image: './3rdYear/yash.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'priya.j@devcans.com'
      }
    },
    {
      name: 'Sathvik Choudhary',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Generative AI',
      skills: ['C', 'Arduino', 'Electronics', 'Python'],
      image: './3rdYear/sathvik.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'karan@devcans.com'
      }
    },
    {
      name: 'Sulav Singhal',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development',
      skills: ['C++', 'Python', 'Data Structures', 'Problem Solving'],
      image: './3rdYear/sulav.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sneha@devcans.com'
      }
    },
    {
      name: 'Siddareddy Rajesh Reddy',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development',
      skills: ['SQL', 'Java', 'Spring Boot', 'MySQL'],
      image: './3rdYear/rajesh.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'raghav@devcans.com'
      }
    },
    {
      name: 'Gaurav Kumar Choudary',
      role: 'Member',
      year: 'First Year CSE',
      bio: 'AIML & DSA',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/gaurav.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Mukul',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'DSA',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/mukul.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Shishupal Kumar',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development & python',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/shishupal.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Satya Ranjan Barik',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'AIML & Web Development',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/satya.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Annepu Gnana Prasad',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development & python',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/gnana.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Valle Durga Prasad',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development & Java',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/durga.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Shirshak Sinha',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/shirshak.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },
     {
      name: 'Sohit',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/sohit.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    }, {
      name: 'Susheel Kumar Gupta',
      role: 'Member',
      year: 'Third Year CSE',
      bio: 'Web Development& UI/UX',
      skills: ['Python', 'NumPy', 'Pandas', 'OpenCV'],
      image: './3rdYear/susheel.jpg',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@devcans.com'
      },
      
    },

  ];
  const renderPersonCard = (person, showSkills = true) => (
    <div key={person.name} className="card-terminal cyber-glow group fade-in-up">
      <div className="relative mb-6 overflow-hidden rounded-lg ">
        <div className="w-full h-50 bg-terminal-bg-lighter flex items-center justify-center">
          <img
            src={person.image}
            alt={`${person.name} - ${person.role}`}
            className="w-40 h-40 object-cover rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg border-2 border-terminal-green/30"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target;
              target.style.display = 'none';
              const fallback = target.nextElementSibling;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }}
          />
          {/* Fallback initials circle - hidden by default, shown if image fails */}
          <div 
            className="w-40 h-40 bg-terminal-green/20 rounded-full flex items-center justify-center shadow-lg border-2 border-terminal-green/30 transition-transform duration-300 group-hover:scale-110"
            style={{ display: 'none' }}
          >
            <span className="text-2xl font-bold terminal-text">
              {person.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
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
          {person.skills.map((skill) => (
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
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
        )}
        {person.social.linkedin && (
          <a
            href={person.social.linkedin}
            className="text-muted-foreground hover:text-terminal-green transition-colors"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
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
                Team Leads
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
                Our enthusiastic members who are learning, growing, and contributing to our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamLeads.map((member, index) => (
                <div key={member.name} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  {renderPersonCard(member)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
                Core Members
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
                Our enthusiastic members who are learning, growing, and contributing to our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreMembers.map((member, index) => (
                <div key={member.name} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  {renderPersonCard(member)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
                Members
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-right" style={{ animationDelay: '0.2s' }}>
                Our enthusiastic members who are learning, growing, and contributing to our community.
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
        <section className="py-20 bg-terminal-bg-lighter/30">
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