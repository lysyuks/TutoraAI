import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Magister in Law',
    institution: 'Taras Shevchenko National University of Kyiv',
    period: '2005 - 2011',
    description: 'International Law & International Relations. Graduated with Honors.',
    gpa: 'Honors',
  },
  {
    degree: 'High School Diploma',
    institution: 'Escambia High School, Pensacola, Florida',
    period: '2004 - 2005',
    description: 'Exchange student program in the United States. Graduated with Honors.',
    gpa: 'Honors',
  },
]

const certifications = [
  {
    name: 'AI Product Manager Nanodegree',
    issuer: 'Udacity',
    year: '2025',
  },
  {
    name: 'Certified SAFe 4 Practitioner',
    issuer: 'EPAM Systems',
    year: '2020',
  },
]

function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education & <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <span>{edu.period}</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-lg flex items-start gap-4"
                >
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    <span className="text-blue-600 text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
