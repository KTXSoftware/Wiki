GLSL is one of several programming languages used to program GPUs. It is very similar to C but as its central feature provides semiautomatic parallelization. A single function is implemented which is then executed for each vertex or pixel in parallel. The driver takes care of the actual parallelization to use multiple execution cores in addition to wide SIMD instructions.
A typical GLSL program looks like
```
uniform sampler2D tex;
varying vec2 texCoord;
varying vec4 color;

void kore() {
	vec4 texcolor = texture2D(tex, texCoord) * color;
	texcolor.rgb *= color.a;
	gl_FragColor = texcolor;
}
```
Each shader stage gets its own GLSL program with a separate main/kore function. Each shader stage also defines some special variables which can be used by the shader programs.
The vertex shader stage has access to the variable gl_Position which has to be written to define the final screen space position. Additional data can be written to user defined variables.
Similarly the fragment shader stage has to write the final color value to gl_FragColor. The fragment shader can generally not output any additional hardware (though some hardware supports simultaneous usage of multiple render buffers or overwriting the depth value).
All shader stages can define uniform variables. A uniform is a constant while the shader is executed but can be changed from the CPU side between draw calls.
```
uniform mat4 projectionMatrix;
uniform sampler2D tex;
```
Variables which are declared as attribute are inputs for the vertex shader. They have to be defined in the corresponding Vertex Buffer using the same names and types.
```
attribute vec3 vertexPosition;
attribute vec2 texPosition;
attribute vec4 vertexColor;
```
To transfer data from the vertex shader to the fragment shader variables are declared as varying. Varyings are written in the vertex shader and then interpolated and read in the fragment shader. Consequently the same varying variables have to be defined in a pair of vertex and fragment shaders which is supposed to work together.
varying vec2 texCoord;
GLSL includes support for vector and matrix types, including basic arithmetic. Vector variables can also be swizzled to conveniently create subvectors.
```
mat4 projection;
vec3 position;
vec4 color;
vec3 temp1 = color.bgr;
vec2 temp2 = position.xy;
```
A sampler is a special variable type that represents a texture. Typically a sampler is also a uniform.
```
uniform sampler2D tex;
vec4 texcolor = texture2D(tex, texCoord);
```
GLSL also supports precision modifiers for floating point values to speed up calculations where full 32 bit floating point calculations are not necessary – which is typically in later calculation stages aka the fragment shader. Mobile hardware also often requires usage of smaller floating point types in the fragment shader.
```
precision mediump float;
```
There are of course different versions of GLSL, currently up to version 4.5. OpenGL ES, the OpenGL variant for mobile devices defines its own set of GLSL dialects.