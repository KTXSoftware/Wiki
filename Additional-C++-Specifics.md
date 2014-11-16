### Operator Overloading
C++ supports operator overloading, which is done using special, reserved function names.
```cpp
class Number {
	// …
};

Number operator+(Number a, Number b) {
	return Number;
}

Number a;
Number b;
Number c = a + b;
```
Those functions can be defined inside or outside of a class. When defined inside of a class, the first parameter is omitted and replaced by the this pointer. Operator overloading can make performance of a piece of code less predictable for the programmer, as a seemingly simple piece of arithmetic code can possibly involve complex function calls.
```cpp
class Number {
	Number operator++(); // ++num;
	Number operator++(int); // num++;
};

for (Number i = 0; i < 10; i++) { }
for (Number i = 0; i < 10; ++i) { } // maybe faster when ++ is overloaded
```
Postfix operators are defined using an additional, useless int parameter. Also, when operators are overloaded, ++i is usually faster than i++ even for simple for loops, because the compiler cannot reliably simplify the generally more complex postfix operators.
### References
A reference is a new name for an already existing variable.
```cpp
int a = 3;
Int& b = a;
b = 4;
// a == 4
```
References can be used as function parameters, allowing a function to change the originally passed value. This can be a safer alternative to passing pointers, but in contrast to pointer the syntax for changing a reference value is the same as for changing a regular value.
```cpp
void reference_test(int& b) {
	b = 4;
}

int a = 3;
reference_test(a);
// a == 4
```
References are a high level concept that unlike pointers do not exactly map to a hardware feature. As references are just new names for existing variables they can often be removed by the compiler. However when a function that uses reference parameters is not inlined, the compiler will have to use pointers to implement references. Practically speaking, references are restricted pointers that do not allow any kind of pointer arithmetic. Also a reference can never be changed to point to another variable after it was created.
Originally, references were added to the language to support custom map implementations but are now very widely used.
```cpp
class Map {
	int& operator[](int index);
};
```
### Constness
Like Java, C++ supports constant values.
```cpp
const int a = 3;
a = 4; // compile error
```
Const can also be used for function parameters.
```cpp
void bla(const int a) {
	a = 4; // compile error
}
```
Pointers support two kinds of constness.
```cpp
const char* bla1 = „bla“;
char* const bla2 = „bla“;
bla1 = “blub“; // ok
bla2 = “blub”; // compile error
bla1[0] = ‘g’; // compile error
bla2[0] = ‘g‘; // ok
```
Very often, const references are used for function parameters. This is a hint for the compiler that the program is only ever interested in the value of the parameter and the compiler is free to optimize how that value is made available to the function.
```cpp
void bla(const int& a) {
	// …
}
```
Methods in C++ can also be const. Const methods are not allowed to change any object members unless they are declared mutable.
```cpp
class A {
	void method1() const {
		a = 3; // compile error
	}
	void method2() const {
		b = 3; // ok
	}
	int a;
	mutable int b;
};
```
Methods can also be overloaded based on constness.
```cpp
class A {
	void method1() const;
	void method1();
};
A a;
a.method1();
const A b;
b.method1();
```
### Templates
Templates are a feature similar to Java’s generics.
```cpp
template<class T> class A {
	void method1() {
	}
	void method2(); // link error
};

A<int> a;
```
The compiler creates new code for every instantiation of a template. That can lead to unnecessary code bloat. Also for it to work, all template members have to be defined in the same compilation unit they are used, meaning that method bodies have to be defined in the header files, therefore increasing compilation times.
Template parameters can also be concrete values.
```cpp
template<int i> void bla() { }
bla<3>();
```
This makes compile time functional programming possible. However actually using that is difficult due to a complex syntax and obscure compiler errors.
### static
Aside from marking class members like in Java, the static keyword can be used to denote functions to be compiled locally for a single compilation unit.
```cpp
// functions.h
void func1() { } // link error, when functions.h is included in more than one compile unit
static void func2() { }
inline void func3() { }
namespace {
	void func4() { }
}
```
The inline keyword does the same thing, but was originally used to hint at the compiler which functions should be inlined. Those hints are largely ignored by modern compilers.
A more modern alternative to the static keyword for free functions are anonymous namespaces, which can wrap all locally used functions.