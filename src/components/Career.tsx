import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, X } from 'lucide-react';

const openings = [
  {
    title: 'Associate Java Software Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    salary: 'Negotiable',
    description: 'Join our development team to build cutting-edge web applications using modern technologies.',
  },
  // {
  //   title: 'Cloud Solutions Architect',
  //   department: 'Infrastructure',
  //   location: 'Hybrid',
  //   type: 'Full-time',
  //   salary: 'Negotiable',
  //   description: 'Design and implement scalable cloud infrastructure for enterprise clients.',
  // },
  {
    title: 'Associate Cybersecurity Analyst',
    department: 'Security',
    location: 'Hybrid',
    type: 'Full-time',
    salary: 'Negotiable',
    description: 'Protect our clients digital assets and conduct security assessments.',
  },
  // {
  //   title: 'Investment Advisor',
  //   department: 'Investment',
  //   location: 'Hybrid',
  //   type: 'Full-time',
  //   salary: 'Negotiable',
  //   description: 'Provide strategic investment guidance to our diverse client portfolio.',
  // },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
    salary: 'Negotiable',
    description: 'Create beautiful and intuitive user experiences for our applications.',
  },
  // {
  //   title: 'Data Analyst',
  //   department: 'Analytics',
  //   location: 'Hybrid',
  //   type: 'Full-time',
  //   salary: 'Negotiable',
  //   description: 'Transform data into actionable insights for business decision-making.',
  // },
];

const benefits = [
  'Competitive salary and performance bonuses',
  'Comprehensive health and dental insurance',
  'Flexible work arrangements and remote options',
  'Professional development and training programs',
  'Generous paid time off and holidays',
  'Retirement savings plan with company matching',
  'Modern office spaces with latest technology',
  'Team building events and company retreats',
];

type Job = {
  title: string;
  department?: string;
  location?: string;
  type?: string;
  salary?: string;
  description?: string;
};

export default function Career() {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const openForm = (job: Job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    closeForm();
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-green-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology and investment
          </p>
        </div>

        {/* Why Work Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Work at BITSI?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              At BITSI, we believe our people are our greatest asset. We foster a culture of innovation,
              collaboration, and continuous learning. Join us to work on challenging projects, collaborate
              with talented professionals, and make a real impact.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100"
                >
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Current Openings</h3>
          <p className="text-gray-600 text-center mb-8">Explore opportunities to grow your career with us</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {openings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 px-3 py-1 rounded-full text-sm font-semibold border border-green-100">
                    {job.department}
                  </span>
                </div>
                <Briefcase className="text-green-600" size={32} />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-green-600" size={20} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="text-green-600" size={20} />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <DollarSign className="text-green-600" size={20} />
                  <span>{job.salary}</span>
                </div>
              </div>

              <button
                onClick={() => openForm(job)}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Resume Submission Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Don't See Your Role?</h3>
          <p className="text-lg mb-6 text-green-50">
            We're always looking for talented individuals to join our team. Send us your resume and let's talk!
          </p>
          <button
            onClick={() => openForm({ title: 'General Application' })}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Submit Your Resume
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl relative">
            <button onClick={closeForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Apply for {selectedJob?.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Cover Letter</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Write a short cover letter..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Upload Resume</label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
