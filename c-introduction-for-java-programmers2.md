# C++ Introduction For Java Programmers
C++ is a complex language and has a long history, reaching back to the early 70s when C was developed. It is an almost strict superset of C, meaning that most C programs are also legal C++ programs. Java is very much a simplified versions of C++ and accordingly it is quite easy to get into C++ for Java programmers. It is however not that easy to use C++ effectively.
C++ is a standardized language that does not have a default implementation. Language updates happen slowly and when they happen it can take a long time for all relevant compilers to implement them. The leading C++ compilers are clang, gcc (both open source projects) and the Visual C++ compiler (by Microsoft). Game programmers might be forced to use specific non-mainstream compilers to support game consoles and thus tend to avoid newer language features. Also there is often talk about "C/C++" which has no clear meaning but is often used because it is rarely important which of the two languages is actually used. Compilers also allow easily mixing of C (even the kind of C that is not legal C++) and C++ sources in a single program.

## Syntax
Syntactical differences to Java are minimal. This is a class definition in C++:
```cpp
class Foo {
public:
	Foo() {
		x = 2;
	}
private:
	int x;
};
```
The semicolon at the very end of the class definition is mandatory. Also the visibility modifiers (public, protected and private) end with a colon and mark all following declarations up to the next visibility modifier. The default visibility in a class is private. C++ also supports struct declerations, which are exactly the same thing as class declerations, but default visibility is public.
C++ can have free functions, not contained in classes. The main entry point of an application is such a function:
```cpp
int main(int argc, char** argv) {
	return 0;
}
```
System dependency troubles start right here. main is not always main. Windows has several variations of main for graphical and console programs and for programs which use 8 or 16 bit chars. Some libraries define main themselves to avoid these problems.
The most notable difference to a Java main decleration are the funny multiplication signs. A multiplication sign is used to declare pointers. A pointer is simply a memory address. C++ lets the programmer control himself where and how data is managed in memory, which can be a very helpful feature to make sure a game runs at a steady framerate. It's also a feature that can make programs crash in very weird ways.
Further problems arise in C/C++ when adding a second source file. Multiple files are in the first step handled by something called the preprocessor. This is a first compilation pass which handles special instructions which are prefixed by a # sign. The most important of those is the include instruction. The preprocessor will literally replace every include instruction with the content of the file the instruction points to. Multiple source files can be put combined that way, but it is a slow process resulting in lots of repetitive parsing. Usually C/C++ programs are split up in source files (usually .cpp) and header files (usually .h). Header files include just the declarations.
```cpp
class Foo {
public:
	Foo();
private:
	int x;
};
```
The compiler then is called not to create an executable but just an object file - which is very much the same thing but can contain placeholders for functions that have only been decleared with a definition (aka the function body) still missing.
In a second step the linker is called, a program that is typically completely separate to the compiler. It takes in all object files, replaces placeholder function calls with actual addresses and writes out the executable.
There is no official way to declare which source files make up a program, it is not part of the C++ standard. IDEs usually take care of this themselves, which makes multiplatform development troublesome as it requires one to manually keep several incompatible IDE projets up to date. Several open source projects like cmake and premake can create IDE projects of different kinds based on a single sources definition file.