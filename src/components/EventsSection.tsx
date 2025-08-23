import { Calendar, MapPin, Users, Trophy, Code2, Zap } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: 'HackNIT 2024',
      type: 'Hackathon',
      date: 'March 15-17, 2024',
      location: 'NIT Sikkim Campus',
      participants: '200+',
      description: 'Our flagship 48-hour hackathon bringing together the brightest minds to solve real-world problems.',
      status: 'upcoming',
      icon: Trophy
    },
    {
      title: 'Web Development Bootcamp',
      type: 'Workshop',
      date: 'February 20-22, 2024',
      location: 'Computer Lab',
      participants: '50+',
      description: 'Intensive 3-day bootcamp covering modern web technologies including React, Node.js, and MongoDB.',
      status: 'ongoing',
      icon: Code2
    },
    {
      title: 'AI/ML Workshop Series',
      type: 'Workshop',
      date: 'January 10-15, 2024',
      location: 'Seminar Hall',
      participants: '75+',
      description: 'Deep dive into machine learning algorithms, neural networks, and practical AI applications.',
      status: 'completed',
      icon: Zap
    },
    {
      title: 'Open Source Contribution Drive',
      type: 'Community Event',
      date: 'December 5-10, 2023',
      location: 'Online & Campus',
      participants: '100+',
      description: 'A week-long event to encourage students to contribute to open source projects.',
      status: 'completed',
      icon: Code2
    }
  ];

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'upcoming':
        return `${baseClasses} bg-terminal-green/20 text-terminal-green border border-terminal-green/30`;
      case 'ongoing':
        return `${baseClasses} bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30`;
      case 'completed':
        return `${baseClasses} bg-muted text-muted-foreground border border-border`;
      default:
        return baseClasses;
    }
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold terminal-text mb-6 slide-in-left">
            Events & Activities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
            From hackathons to workshops, we organize diverse events that challenge, educate, and inspire our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="card-terminal cyber-glow fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <event.icon className="text-terminal-green w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold terminal-text">{event.title}</h3>
                    <p className="text-sm text-terminal-green-dim">{event.type}</p>
                  </div>
                </div>
                <span className={getStatusBadge(event.status)}>
                  {event.status.toUpperCase()}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-terminal-green" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-terminal-green" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-terminal-green" />
                  {event.participants} participants
                </div>
              </div>

              {event.status === 'upcoming' && (
                <div className="mt-6 pt-4 border-t border-terminal-green/20">
                  <button className="btn-terminal w-full">
                    Register Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Want to stay updated about upcoming events?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;