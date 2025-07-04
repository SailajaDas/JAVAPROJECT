import React from 'react'

const List = () => {
  const ListCard = [
    {
      id: 1,
      topic:"Arraylsit",
      Note: [
        "This category is used to store group of individual elements where the elements can be duplicated .",
        "List is an interface whose object can not be created directly . ",
        "To Work with this category we have to use following implementation clas of list interface .",
        "Example: ArrayList , Linkedlist , Vector ,Stack"
      ],
      ListNote: [
        "-> List is the child interface of collection .",
        "-> If we want to represent a group of individual where duplicates are allowed and insertion order is preserved. Then we should go for list .",
        "-> We can differentiate duplicate Objects and we can maintain insertion order by means of index hence (index plays a crucial role in List .)",
      ],
      Method: [
        "-> boolean add(int index,Object o);",
        "-> boolean addAll(int index,Collection c);",
        "-> Object get(int index);",
        "-> Object remove(int index);",
        "-> Object Set(int index,Collection c);",
        "-> int indexOf(Object o);",
        "-> int lastIndexOf(Object o);",
        "-> ListIterator listiterator();"
      ],
      ArrayListNotes: [
        "-> ArrayList is an implementation class of Collection interface .",
        "-> The underlying structure is resizable(internally it will use Array to store data)",
        "-> Duplicate Objects are allowed ",
        "-> Insertion order is preserved",
        "-> Heterogenous objects are allowed ",
        "-> Null insertion is possible "
      ],
      ArrayListConstructor: [
        "1>> ArrayList al = new ArrayList();",
        "ArrayList creates an empty ArrayList Obejct with default initila capacity 10 .",
        "ArrayList reaches its maximum capacity then a new ArrayList Object will be created with (NewCapacity = (current Capacity * 3/2)+1",
        "2>> ArrayList al = new ArrayList(int initial capacity);",
        "Creates an empty Arraylist Object with the specified initial capacity .",
        "3>> Arraylist al = new ArrayList(Collection c);",
        " Creates  an equivalent ArryaList Object for the given collection that is this constructort menat for inter conversation between Collection Objects .",
        
      ],
      important: [
        "-> ArrayList and vector classes implements Random Access interface so that any random element we can access with the same speed .",
        "-> RandomAccess interface present in utill package and does not contain any methods . It is a marker interface .",

      ],
      Example: [
        
        'import class ArrayList;',
        'public class ArrayListDemo  {',
        '   public static void main(String[] args) {',
        '      ArrayList al =  new ArrayList();     ',
        '      al.add("ashokit");',
        '      al.add("101");',
        '      al.add(202.15);',
        '      System.out,println(al);',
        '      al.remove(1);',
        '      System.out.println(al);',
        '      al.add("hyd);',
        '      al.add("Java");',
        '      System.out.println(al);'
      ]
      
    },
    {
      id: 2,
      Topic:"Linkedlist",
      Note: [
        " Linkedlist is one of the implementation classes of Collection interface . ",
        " The underlying data structure is double Linkedlist .",
        " If our frequent operation is insertion or deletion in the middle then Linkedlist is thge best choice . ",
        " If our frequent operation is retrival then LinkedList is not best option .",
        " Duplicate Objects are allowed .",
        " Insertion Order is preserved .",
        " Heterogenous Object are allowed .",
        " NULL insertion is possible .",
        " Implementation Serilizable and Cloneable interface but  not RandomAccess .",
      ],
      LinkedListNotes: [
        "Note: Usually we can linkedloist to implement Stacks and Queues to provide support for this requirement Linkedlist class defines the following 6 specific methods .",
        "1>> void addFirst(Object o);",
        "2>> void addLast(Object o);",
        "3>> Object getFirst();",
        "4>> Object getLast();",
        "5>> Object removeFirst();",
        "6>> Object removeLast();"
      ],
      LinkedlistConstructors: [
        "1>> LinkedList l = new LinkedList();",
        "It creates an empty LinkedList Object .",
        "2>> LinkedList l = new LinkedList(Collection c);",
        "To create an equivalent Linkedlist Object for the given Collection ."
      ],
      Example: [
        'import Java.util.LinkedList;',
        'Public class LinkedListDemo {',
        '   public static void main(String[] args) {',
        '      LinkedList l1 = new LinkedList();     ',
        '      l1.add("ashok);                       ',
        '      l1.add(40);                           ',
        '      l1.add(null);                         ',
        '      System.out.println(l1);               ',
        '      l1.add(0,"Java");                     ',
        '      System.out.println(l1);               ',
        '      l1.set(0,"oracle);                    ',
        '      System.out.println(l1)                ',
        '      l1.removeLast()                       ',
        '      l1.addFirst("ashok");                 ',
        '      System.out.println(l1);               ',
        '      }                                     ',
        '   }                                        '
      ],
      important: [
        "-> ArrayList is slower in insertion and deletion of elements because it internally requires shifting operations , But faster in accessing the elements because ArrayList use index position for every element .",
        "-> LinkedList is faster in insertion and deletion of elements because it just require modifying the links of nodes instead of shifting operations,But slower in accessing the elements because Linkedlist does not use any index position ."
      ],

    },
    {
      id: 3,
      Toic:"vector",
      Note: [
        "Vector is the implemntation class of List interface which is also used to store group individual objects where duplicate values are allowed .",
        "Vector is exactly similar to ArrayList but Arraylist is not a synchronized class  where vector is a synchronized class .",
        "Vector is also  called legacy class because it is available from Java 1.0 version ."
        
      ],
      VectorConstruction: [
        "1>> Vector<E> v = new Vector<E>();",
        "2>> Vector<E> v = new Vector<E>(int capacity);",
        "3>> Vector<E> v = new Vector(Collection obj);"
      ],
      Example: [
        'import Java.util.Vector; ',
        'Public class VectorDemo {',
        '   public static void main(String[] args) {',
        '      Vector<String> v = new Vector<String>();',
        '      v.add("sachin);                         ',
        '      v.add(new String("sehwagh"));           ',
        '      v.add("kohli");                         ',
        '      v.add("suresh);                         ',
        '      System.out.println(v);                  ',
        '      System.out.println(v.size());           ',
        '          }                                   ',
        '     }                                        ',
      ]
    },
    {
      id: 4,
      Topic: "Stack",
      Note: [
        "Stack is a child of Vector and implements List interface .",
        "Stack stores group of objects b using a mechanism called LIFO .",
        "LIFO stands for Last in first out, it means last inserted element deleted first ."
      ],
      StackConstructors: [
        "Stack<E> s = new Satck();",
      ],
      Methods: [
        "-> We can use all collection Methods .",
        "-> We can also use legacy methods of Vector class like addElement() , removeElement() , setElementAt()...",
        "-> But if we want to follow the LIFO mechanism , we should use Stack methods like follows .",
        "E push(E obj) -: this method will add new element available on stack .",
        "E pop() -: this method deletes the top element available on Stack .",
        "E peek() -: this method just returns the top element available on stack ."
      ],
      Example: [
        'import Java.util.Stack ;',
        'public class StackDemo {',
        '  public static void main(String[] args) {  ',
        '     Stack<Double> s = new Stack<Double>(); ',
        '     s.push(10.2);                          ',
        '     s.push(50.2);                          ',
        '     s.push(30.2);                          ',
        '     s.push(40.2);                          ',
        '     s.push(70.2);                          ',
        '     System.outprintln(s);                  ',
        '     System.out.println(s.pop());           ',
        '     System.out.println(s);                 ',
        '     System.out.println(s.pop());           ',
        '     System.out.println(s);                 ',
        '     System.out.println(s.peek());          ',
        '     System.out.println(s)                  ',
        '      }                                     ',
        '    }                                       '
      ]
    },
   
  ]


  return (
    
    <div>
      {ListCard.map((card) => (
    <div key={card.id} className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-violet-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-xl font-bold mb-2">{card.topic || card.Topic || card.Toic}</h2>

      {card.Note && (
        <div className="mb-2">
          <h3 className="font-semibold underline">Notes:</h3>
          <ul className="list-disc list-inside">
            {card.Note.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {card.ListNote && (
        <div className="mb-2">
          <h3 className="font-semibold underline">List Notes:</h3>
          <ul className="list-disc list-inside">
            {card.ListNote.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {card.Method && (
        <div className="mb-2">
          <h3 className="font-semibold underline">Methods:</h3>
          <ul className="list-disc list-inside">
            {card.Method.map((method, idx) => (
              <li key={idx}>{method}</li>
            ))}
          </ul>
        </div>
      )}

      {card.ArrayListNotes && (
        <div className="mb-2">
          <h3 className="font-semibold underline">ArrayList Notes:</h3>
          <ul className="list-disc list-inside">
            {card.ArrayListNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {card.ArrayListConstructor && (
        <div className="mb-2">
          <h3 className="font-semibold underline">ArrayList Constructors:</h3>
          <ul className="list-disc list-inside">
            {card.ArrayListConstructor.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      )}

      {card.LinkedListNotes && (
        <div className="mb-2">
          <h3 className="font-semibold underline">LinkedList Notes:</h3>
          <ul className="list-disc list-inside">
            {card.LinkedListNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {card.LinkedlistConstructors && (
        <div className="mb-2">
          <h3 className="font-semibold underline">LinkedList Constructors:</h3>
          <ul className="list-disc list-inside">
            {card.LinkedlistConstructors.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      )}

      {card.VectorConstruction && (
        <div className="mb-2">
          <h3 className="font-semibold underline">Vector Constructors:</h3>
          <ul className="list-disc list-inside">
            {card.VectorConstruction.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      )}

      {card.StackConstructors && (
        <div className="mb-2">
          <h3 className="font-semibold underline">Stack Constructors:</h3>
          <ul className="list-disc list-inside">
            {card.StackConstructors.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      )}

      {card.important && (
        <div className="mb-2">
          <h3 className="font-semibold underline">Important Points:</h3>
          <ul className="list-disc list-inside">
            {card.important.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {card.Example && (
        <div className="mb-2 bg-black text-green-950">
          <h3 className="font-semibold underline">Example:</h3>
          <pre className=" p-2 rounded text-sm overflow-x-auto  bg-black text-green-800">
            {card.Example.join('\n')}
          </pre>
        </div>
      )}
    </div>
  ))}
    </div>
  )
}

export default List