import { MapPin, Briefcase, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Development',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: 'NPR 80,000 - 120,000',
    experience: '5+ years',
    description: 'We are looking for an experienced full stack developer to join our dynamic team. You will work on modern web applications using React, Node.js, and cloud technologies.',
    responsibilities: [
      'Develop and maintain full-stack web applications',
      'Collaborate with product and design teams',
      'Implement responsive and user-friendly interfaces',
      'Optimize application performance and scalability',
      'Participate in code reviews and mentoring'
    ],
    requirements: [
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with PostgreSQL and MongoDB',
      'Knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Experience with Git and CI/CD pipelines',
      'Excellent communication and teamwork skills'
    ]
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Engineer',
    department: 'Technology',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: 'NPR 70,000 - 110,000',
    experience: '4+ years',
    description: 'Join our infrastructure team to design, deploy, and manage cloud solutions. Help our clients transition to modern cloud architectures.',
    responsibilities: [
      'Design and deploy cloud infrastructure on AWS/GCP/Azure',
      'Manage containerization using Docker and Kubernetes',
      'Implement security best practices and compliance',
      'Monitor and optimize cloud costs',
      'Provide technical support and documentation'
    ],
    requirements: [
      'Strong AWS or GCP certification preferred',
      'Experience with Kubernetes and Docker',
      'Knowledge of Infrastructure as Code (Terraform)',
      'Understanding of networking and security',
      'Problem-solving mindset'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Product',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: 'NPR 50,000 - 80,000',
    experience: '3+ years',
    description: 'Create beautiful and intuitive user interfaces for our web and mobile applications. Shape the digital experiences of our clients.',
    responsibilities: [
      'Design user interfaces for web and mobile apps',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and design systems',
      'Collaborate with developers and product managers',
      'Maintain design consistency and documentation'
    ],
    requirements: [
      'Proficiency in Figma or Adobe XD',
      'Strong portfolio demonstrating design skills',
      'Understanding of user-centered design principles',
      'Experience with design systems',
      'Knowledge of accessibility standards'
    ]
  },
  {
    id: 4,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: 'NPR 85,000 - 130,000',
    experience: '5+ years',
    description: 'Protect our systems and clients from cyber threats. Implement security measures and conduct penetration testing.',
    responsibilities: [
      'Implement security protocols and best practices',
      'Conduct vulnerability assessments and penetration testing',
      'Monitor security incidents and respond to threats',
      'Create security documentation and policies',
      'Train staff on security awareness'
    ],
    requirements: [
      'CEH or OSCP certification preferred',
      'Experience with SIEM tools',
      'Knowledge of network security and cryptography',
      'Experience with penetration testing',
      'Strong analytical skills'
    ]
  },
  {
    id: 5,
    title: 'Business Analyst',
    department: 'Consulting',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: 'NPR 60,000 - 95,000',
    experience: '3+ years',
    description: 'Analyze business processes and requirements to deliver effective IT solutions. Bridge the gap between clients and technical teams.',
    responsibilities: [
      'Gather and analyze business requirements',
      'Create detailed documentation and specifications',
      'Facilitate communication between stakeholders',
      'Track project metrics and KPIs',
      'Support project implementation and testing'
    ],
    requirements: [
      'Experience with requirements gathering',
      'Proficiency in documentation tools',
      'Strong analytical and communication skills',
      'Knowledge of SDLC methodologies',
      'Experience with SQL is a plus'
    ]
  },
  {
    id: 6,
    title: 'Mobile App Developer (iOS)',
    department: 'Development',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    salary: 'NPR 65,000 - 105,000',
    experience: '4+ years',
    description: 'Develop high-quality iOS applications using Swift. Create engaging mobile experiences for our diverse client base.',
    responsibilities: [
      'Develop iOS apps using Swift and SwiftUI',
      'Implement app features and user interfaces',
      'Optimize app performance and battery life',
      'Collaborate with designers and backend developers',
      'Maintain code quality and documentation'
    ],
    requirements: [
      'Strong Swift and iOS development experience',
      'Familiarity with iOS design guidelines',
      'Experience with Xcode and Git',
      'Understanding of REST APIs',
      'Knowledge of App Store submission process'
    ]
  }
];

interface SelectedJob {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<SelectedJob | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: ''
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for applying! We will review your application and get back to you soon.`);
    setFormData({ name: '', email: '', phone: '', resume: '' });
    setSelectedJob(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Careers at BITSI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and help us transform the future of IT services and investments
          </p>
        </div>

        <div className="mb-12 bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Work With Us?</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Competitive Compensation</h4>
              <p className="text-gray-700">Attractive salary and benefits package</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h4>
              <p className="text-gray-700">Continuous learning and career development</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Collaborative Culture</h4>
              <p className="text-gray-700">Work with talented and passionate professionals</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {job.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{job.department}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-blue-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase size={18} className="text-blue-600" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign size={18} className="text-blue-600" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={18} className="text-blue-600" />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition group/btn"
                >
                  <span>View Details & Apply</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-500 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <p className="text-blue-100">{selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{selectedJob.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold text-gray-900">{selectedJob.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Salary</p>
                    <p className="font-semibold text-gray-900">{selectedJob.salary}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience Required</p>
                    <p className="font-semibold text-gray-900">{selectedJob.experience}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About This Role</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedJob.description}</p>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                  <ul className="space-y-2 mb-8">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Apply Now</h3>
                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter / Additional Info *
                      </label>
                      <textarea
                        id="resume"
                        name="resume"
                        required
                        value={formData.resume}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                        placeholder="Tell us about yourself and why you're interested in this position..."
                      />
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Submit Application
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
