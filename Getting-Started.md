To use Kha you need [git](http://git-scm.com) and [node](http://nodejs.org) (v0.12.0+) .

Our github page contains several example projects to get you started.

The git urls are as follows:
* [Blocks From Heaven](https://github.com/KTXSoftware/BlocksFromHeaven.git)
* [Shader](https://github.com/KTXSoftware/Shader.git)
* [Ploing](https://github.com/KTXSoftware/Ploing.git)
* [TPlayer](https://github.com/KTXSoftware/TPlayer.git)
* [Velvet Worm](https://github.com/KTXSoftware/VelvetWorm.git)

_git clone --recursive_ one of the projects - or if you want a fresh start, type:
_git clone --recursive https://github.com/KTXSoftware/Empty.git_

A complete clone can take a while, because it contains the complete source history of all used libraries. You can omit the history by adding the --depth=1 parameter.

Navigate to the directory and execute _node Kha/make flash_. This will create a FlashDevelop project file in a build subdirectory. You can load and build this project directly. Development is usually done in Flash due to the excellent debugging support in FlashDevelop. When everything is done, call khamake again with a different parameter to build your project for a different system. Currently supported parameters are:

windows linux android windowsrt osx ios html5 flash wpf xna java psm dalvik

If you are not building for html5 or flash, a separate system-build directory will be created inside the build subdirectory, containing the translated sources and a project for the native IDE of the target (Visual Studio, XCode, Code::Blocks or Eclipse respectively).

khamake tries to encode all assets for you automatically but due to the mp3 and aac patent restrictions those encoders are not included. To let khamake use external encoders for that job, call it like this:

	node Kha/make flash "aac=/path/to/faac -o {out} {in}" "mp3=/path/to/lame -S -h {in} {out}"