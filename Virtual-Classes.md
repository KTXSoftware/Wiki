# Virtual Classes and Interfaces

In the previous chapters, we have not looked often at virtual classes/functions or inheritance in C++. The reason for this was partly the overhead that virtual classes incur.

When a function is marked as virtual, the compiler will create a virtual function table in the class. This function table holds function pointers to all the virtual functions in the class. At runtime, when a function is called, the correct function will be looked up in this function table and then called. In many cases, this also means that the compiler will not be able to inline a function and potentially speed up the code thereby.

On the plus side, however, using inheritance and virtual functions can make the code much more versatile and readable. New programmers who want to amend a library or a program do not need to create everything from scratch, instead, they can derive from an existing class and then only re-implement those functions that need to be changed.

In this week's programming exercise, we have used a base class for all texture generator nodes. By using this class polymorphically, we can easily build a network of nodes and exchange the active network for an object without keeping track of which classes are involved. We can also add new types of generators easily.

## Virtual functions
In C++, virtual functions are marked with the keyword virtual, such as 

```cpp
class A {
  virtual void foo(int a);
};
```

When we want to derive from a base class with a virtual function, we will usually derive it with public inheritance, which will read to a programmer that we want to model an is-a relationship.

```cpp
class B: public A{ };
```

C++, unlike other programming languages, support multiple inheritance. If used with caution, this can have good uses (for example, if used diligently, it can reproduce the interface concept of languages such as C#), but in many cases, it can lead to overly complicated code, especially if classes are brought back together that have a common ancestor.

When we override a virtual method, provide the function in the derived class as well:

```cpp
class B: public A{
  virtual void foo(int a);
};
```

## Casting
Pointers to objects can be cast between inherited types. Two basic types of casting are present in C++. The first is implicit casting, which is carried out automatically for you in examples as this:

```cpp
A* a;
B b;
a = &b;
// a now points to b
```

The second type of casting is explicit, coming from C. This is done by supplying the type to which we wish to cast as follows:

```cpp
A* a;
B b;
a = (A*) &b;
// a now points to b
```

In C++, a set of cast operators has been added that are more expressive and give more choice to the programmer. Those are the following:

```cpp
TYPE static_cast<TYPE>(object)
```

The static cast will try to handle the object as an object of type TYPE. If this conversion is not valid, it will give no warning, i.e. it carries out no checks on the request.

```cpp
TYPE* dynamic_cast<TYPE*>(object)
TYPE& dynamic_cast<TYPE&>(object)
```

A dynamic_cast carries out checks if the conversion is valid. This means that if dynamic_cast is used, the compiler will require to add run-time type information (RTTI) to the classes, which has an associated overhead. If the conversion fails, the dynamic_cast for pointers returns null, while the reference dynamic_cast will throw an exception.

```cpp
TYPE reinterpret_cast<TYPE>(object)
```

The reinterpret_cast will instruct the compiler to just treat the object as if it was TYPE, with no regard to what types are involved. This of course carries the danger of messing with memory that should not be messed with and should only be done if you know what you are doing.

## Abstract classes/functions and interfaces
Unlike other programming languages, there is no keyword for abstract classes or interfaces. Instead, a class/function is abstract if at least one of the functions is declared virtual and marked as having no definition:

```cpp
virtual void abstract_function() = 0;
```

If we derive a class from an abstract class and do not provide an implementation or again mark the function as abstract, the compiler will complain about the missing function implementation.

Using abstract classes, we can build interfaces, which give a common interface or contract of what functionality a class should have. In our example, the "Generate Texture" function of the texture generators is abstract and needs to be implemented by the child classes.

## Constructors and virtual destructors
When we derive from a class, we have to watch out for some things. During construction of an object, the base class constructor will be called automatically if it has no parameters. If it has parameters, it needs to be called with the syntax as shown below in the initialization list of the class.

```cpp
// Base class has only one constructor with one int argument
Derived_Class(int x, int y): Base_Class(x), member(y)
{
}
int member;
```

One basic rule that you should keep in mind is to make the destructor of a virtual class virtual as well. Otherwise, the destructor of a child class will not be called when the object is destroyed via a pointer of base class type.

