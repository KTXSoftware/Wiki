Kha is accompanied by a small collection of tools to help you build your project.

## Haxe
[Haxe](http://haxe.org), the programming language used in Kha, is a strongly typed, curly-braced language similar to ActionScript. It's defining feature is that it can be compiled to several target languages. Kha makes extensive use of that.
Haxe is a well documented open source project - before getting startet with Kha, please have a closer look at the [official Haxe documentation](http://haxe.org/doc).

## kfx
[krafix](https://github.com/KTXSoftware/krafix) is a GLSL cross-compiler, which outputs different kinds of GLSL and HLSL or the Metal Shading language.

## khamake
[khamake](https://github.com/KTXSoftware/khamake) is Kha's build and asset encoding tool. It creates FlashDevelop project files and calls other tools like krafix and koremake as needed.

## koremake
[koremake](https://github.com/KTXSoftware/koremake) is a C++ build tool and is used by khamake to create project files for Visual Studio, XCode or Code::Blocks for all native targets.