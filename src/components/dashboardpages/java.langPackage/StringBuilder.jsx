import React from "react";
import { ListChecks } from "lucide-react";

const ICONS = {
  compare: (
    <ListChecks className="text-purple-600 dark:text-purple-300" size={24} />
  ),
};

const stringComparisonData = [
  {
    feature: "Synchronization",
    stringBuffer: "All methods are synchronized",
    stringBuilder: "None of the methods are synchronized",
  },
  {
    feature: "Multithreading",
    stringBuffer: "Not suitable (due to synchronization overhead)",
    stringBuilder: "Suitable, but not thread-safe",
  },
  {
    feature: "Thread Safety",
    stringBuffer: "Thread-safe",
    stringBuilder: "Not thread-safe",
  },
  {
    feature: "Performance",
    stringBuffer: "Slower due to synchronization (more time and complexity)",
    stringBuilder: "Faster as no synchronization is used (better performance)",
  },
  
];


// Section header
const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">
      {title}
    </h1>
  </div>
);

// Card wrapper
const ContentCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-indigo-600 hover:shadow-lg transition-transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </div>
);

const StringBuilder = () => {
  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title=" StringBuilder Class" />

      {/* StringBuilder Definition */}
      <ContentCard icon={ICONS.compare} title="What is StringBuilder?">
        <p className="text-gray-800 dark:text-gray-300">
          <strong>StringBuilder:</strong> A pre-defined class in the{" "}
          <code>java.lang</code> package. It is exactly the same as the{" "}
          <strong>StringBuffer</strong> class, except for the following
          differences:
        </p>
      </ContentCard>
      <br />
      <ContentCard icon={ICONS.compare} title="StringBuffer Vs stringBuilder">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-purple-300">
            <thead className="bg-purple-300 dark:bg-purple-900 text-purple-900 dark:text-white">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">StringBuffer</th>
                <th className="p-3">StringBuilder</th>
              </tr>
            </thead>
            <tbody>
              {stringComparisonData.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 font-semibold">{row.feature}</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    {row.stringBuffer}
                  </td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    {row.stringBuilder}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentCard>
    </div>
  );
};

export default StringBuilder;
