# Memory Management
The primary distinction to programming languages which are more commonly used at universities (aka Java) is manual memory management. Much has been said about the implications to reliability and speed. Avoiding the hazards that lead to memory management related bugs gets easier with experience but once the bugs have arrived they can be very hard to find. But memory management is a primary reason that C++ code can run faster than Java code. It is also the reason why some C++ code runs slower than Java code. Generally programming languages try to handle three somewhat distinct memory areas:
### Static memory
This is where global variables go. It is allocated when the application starts and cannot be manually deallocated. It is rarely problematic, as long as allocating massive amounts of static memory can be avoided.
### Stack memory
The program stack is a region of memory that is semiautomatically handled by the compiler. It holds all function parameters and local variables which don’t fit in the system’s registers and additional data used implicitly by a program like function return addresses.
## Heap memory
This is all manually allocated memory. Heap memory is requested using the new operator. This is where things get tricky. Static and stack memory is preallocated and accordingly there are no speed penalties when using it, but manually allocating memory is slow. And in fact allocating memory in C++ is usually slower than in Java. Java preallocates a rather huge amount of heap memory and hands it out to the application in small buckets when memory is requested. C++ does by design do as little by itself as possible – that means the new operator will ask the operating system for a block of memory. This is a slow and unpredictable process, how long it takes exactly depends on the operating system and its current state and some allocations can be faster or slower for reasons out of the application developer’s control. And that is the reason Java programs can be faster than C++ programs. Clever C++ programs though use tactics similar to Java and exploit knowledge about the concrete memory access patterns of the application at hand to handle heap memory more efficiently. Or they avoid allocating heap memory altogether in critical sections, which is generally much easier to do in C++ than in Java.
## Garbage
Java does automatic garbage collections – it will find allocated but later unused memory and release it or mark it for later reuse. C++ usually does not do that, memory has to be freed explicitly using the delete operator. This is a little annoying and somewhat error prone – but it makes developing nice games much easier. Garbage collection is generally a fast process, but it’s a mostly unpredictable process. When the garbage collection is triggered and the game didn’t take very good care to minimize allocations the game will stutter in irregular intervals and it can be very hard to fix that.
## Pointers
C++ explicitly differentiates for every variable between local, stack-allocated variables and pointers to memory. A local integer has the type int. A pointer to an integer has the type int*. By contrast, in Java every int is always a local variable and all user generated types are always managed pointers.
To create a variable on the stack:
```cpp
int foo;
```
To create a variable in the heap:
```cpp
int* foo = new int;
```
Similarly function arguments can be passed by copying them on the stack or by just supplying a memory address:
```cpp
void bar(int a, int* b) { }
```
The addresses of local stack variables can be determined using the & operator:
```cpp
int a = 3;
int b = 4;
bar(a, &b);
```
Taking the address of a local variable can be dangerous. Local variables are destroyed when the containing function goes out of scope (meaning the stack pointer is reverted and they will just be overwritten when something else is put on the stack). When bar puts the value of b away somewhere for later usage, the application will get into trouble at some later point in time.
## Arrays
Arrays in C++ are just passed around using the address of their first element. They do not know their own size, the application has to keep track of that. Arrays too can be allocated on the stack or in the heap.
Array on the stack:
```cpp
int array[3];
```
Array in the heap:
```cpp
int* array = new int[3];
```
Heap arrays are deallocated using delete[]:
```cpp
delete[] a;
```
Because arrays are always passed around using the address of their first element and an address is just synonym for a pointer this is legal code for both previous kinds of array allocations:
```cpp
bar(a, array);
```
## Strings
Strings in C/C++ are also just arrays. “foobar” is of type char*. But “foobar” has an array-length of 7. Strings end with an implicit ‘\0’ (an actual zero byte). That way the length of a string can always be measured, which is however an O(n) operation.
On all common systems a char is an 8 bit type, but on Unix systems (Linux, OSX, iOS,...) a char* can be a utf8 string (every ansi string is also a proper utf8 string). In utf8 the most common letters are encoded in 8 bits but other letters are encoded using two or three 8 bit values. Calculating the length of a char* string in number of letters is therefore not trivial. It is considered best practice to always use utf8 strings when possible (even on systems which don't use it natively like Windows), because it is for most texts a very memory efficient string representation and it is generally not possible to count letters in a string reliably, because some languages have interesting typographical rules. Windows, Java and C# use UTF16 for historic reasons, they are remnants of an era when it was considered possible to count letters and to use 16 bits for a character.
## STL
C++ contains a library of types that make memory management easier. There is std::vector which is an array that knows its own length and can grow automatically (don’t use pointers to elements in a vector, they will be broken the moment the vector grows). There is std::string which can handle strings much more conveniently. Game studios tend to avoid these types. They make memory management easier but also less predictable. It can also have different performance characteristics on different systems. When it comes to performance in games one thing is more important than speed: Predictability. Less than 15 ms for every frame feels better than 10 ms per frame on average.