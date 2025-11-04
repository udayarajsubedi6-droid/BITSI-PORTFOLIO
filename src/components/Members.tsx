import { Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Chief Executive Officer',
    department: 'Executive',
    bio: 'Visionary leader with 15+ years of experience in IT services and strategic investments.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'rajesh@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Chief Technology Officer',
    department: 'Technology',
    bio: 'Innovative technologist specializing in cloud infrastructure and AI solutions.',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'priya@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Chief Financial Officer',
    department: 'Finance',
    bio: 'Financial strategist with expertise in investment portfolios and fiscal planning.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'amit@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 4,
    name: 'Neha Singh',
    position: 'Head of Product Development',
    department: 'Product',
    bio: 'Creative product lead focused on delivering innovative solutions that solve real problems.',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'neha@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    position: 'Head of Cloud Services',
    department: 'Technology',
    bio: 'Cloud infrastructure expert with deep knowledge of multi-cloud architectures.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'vikram@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 6,
    name: 'Anjali Desai',
    position: 'Head of Human Resources',
    department: 'Human Resources',
    bio: 'People-focused leader building strong teams and fostering inclusive workplace culture.',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'anjali@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 7,
    name: 'Suresh Gupta',
    position: 'Senior Consultant',
    department: 'Consulting',
    bio: 'Strategic consultant helping businesses navigate digital transformation.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'suresh@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  },
  {
    id: 8,
    name: 'Deepika Nair',
    position: 'Lead Full Stack Developer',
    department: 'Development',
    bio: 'Expert developer specializing in end-to-end web and mobile application development.',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'deepika@bitsi.com.np',
    phone: '+977 1 XXXX XXXX'
  }
];

export default function Members() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const departments = [...new Set(teamMembers.map(m => m.department))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals behind BITSI's success
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedMember(null)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            All Members
          </button>
          {departments.map((dept) => (
            <button
              key={dept}
              className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.department}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                <p className="text-2xl text-blue-600 font-semibold mb-1">{selectedMember.position}</p>
                <p className="text-lg text-gray-600 mb-6">{selectedMember.department}</p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">{selectedMember.bio}</p>

                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-gray-900 font-medium">{selectedMember.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-gray-900 font-medium">{selectedMember.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-600">LinkedIn</p>
                      <p className="text-gray-900 font-medium">linkedin.com/in/{selectedMember.name.toLowerCase().replace(' ', '-')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
