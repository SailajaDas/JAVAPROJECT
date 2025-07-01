import React from 'react'

const Encapsulation = () => {
  const EncapsulationCard = [
    {
      id: 1,
      topic: "Encapsulation",
      definition: "It is the process of binding or wrapping up of data members along with its’s data handler methods i.e.., getters & setters ",
      advantages: [
        "We can protect the data from unauthorized access.",
        "We can perform data validation.",
        "We can make the data readonly of writeonly.",
        
      ],
      specifications: [
        "The bean class must be public non abstract class.",
        "We can perform data validation. ",
        "We can make the data readonly or writeonly."
      ],
      example: [
        "public class Student{",
        "     private int age;",
        "     private double perc; ",
        "     public int getAge() { ",
        "     return age; ",
        "     }",
        "     public void setAge(int age) { ",
        "     this.age = age; ",
        "     }",
        "     public double getPerc() { ",
        "     return perc;",
        "     }",
        "     public void setPerc(double perc) { ",
        "     this.perc = perc;",
        "     }",
        "     public void study()// business behavior",
        "     { ",
        "      ",
         "    }",
         "    public void doHomeWork() // business behavior ",
         "}}",
         "  ",
         "public class Test{ ",
         "    public static void main(String[] args) {",
         "        Student s=new Student(); ",
         "        s.setAge(40);",
         "        System.out.println(s.getAge());",
         "        s.setPerc(66.8);",
         "        System.out.println(s.getPerc());",
         "     }",
         "}"
      ],
      SecondExample:        "To make Data write only:",
      exampleTwo:[
        "class User{ ",
        "     public void setName(String name) { ",
        "     this.name=name;",
        "         }",
        "}"
      ],
      thirdExample: "To make Data Read only:",
      exampleThree: [
        "public class Mobile{ ",
        "     private final String make='India';",
        "     public void getMake() { ",
        "           return make; ",
        "      }",
        "}"
      ]
      
    },


  ]
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">💊Encapsulation</h1>
      {EncapsulationCard && EncapsulationCard.length > 0 ? (
        <div className="flex flex-col gap-8">
          {EncapsulationCard.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2> */}
              {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>}
              {/* {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>} */}
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">✅Advantages</h2>
              {card.advantages && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.advantages.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">📋Specifications</h2>

              {card.specifications && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.specifications.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
              
              {card.example && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
                            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">✅{card.SecondExample}</h2>

              {card.exampleTwo && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.exampleTwo.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
                            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">✅{card.thirdExample}</h2>

              {card.exampleThree && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.exampleThree.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-semibold">No data available in FlowControlCard. Please check your data import or initialization.</p>
      )}
    </div>
  );
}

export default Encapsulation