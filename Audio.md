Games use two predominant forms of sound – music and sound effects – which pose largely different technical difficulties.
Music is mostly made of very long files and is mostly not influenced by gameplay. Sound effects are the exact opposite – very small files which are triggered directly by gameplay and are eventually modified according to the current in-game situation.
Speech sits somewhere in-between. Some speech files are very short, others very long. Sometimes speech is triggered and modified by gameplay, sometimes it just plays in the background.

### Music
Music as it’s commonly established uses a system of notes which are used as basic building blocks. A note is primarily defined by four attributes – pitch, duration, loudness and the tone color. In regards to sound waves the pitch equals the wave’s frequency, loudness is mainly defined by the wave’s amplitude and the duration of a note equals the duration of the sound wave. Only the tone color is a more complicated affair. It is the actual form of the wave, which can be very complex and is defined by the used instrument.
Early games used very basic wave forms to represent different instruments like square waves and triangle waves. They also regularly added a noise channel which was mainly used for drums. Later games used FM-Synthesis – sinus waves modified by multiplying a second sinus wave with a similar frequency. Just a little later games also started using samples of actual instruments (called tracker music or also module files). Due to hardware restrictions this was restricted to certain systems but could produce music quality that can rival today’s games.
As games worked on the actual musical note structure it was possible to implement more dynamic music systems which adjusted itself to gameplay situations in different ways. Monkey Island 2 defined short musical transitions which played dynamically at the right moments when scenes changed in the game. Banjo Kazooie used a similar system that blended the instruments used for parts of the music tracks.
But in the mid Nineties starting with the broader use of CDs for data games started to use completely prerecorded music tracks. This boosted music quality but sadly made it difficult to use dynamic music systems – using prerecorded music the program cannot see or modify the musical structure.
Today games still use prerecorded music tracks, mostly compressed using mp3 or similar formats which are streamed and decompressed in realtime. Music is recorded using actual orchestras and/or sequencer programs. Interestingly though sequencers primarily work using instrument samples – the same way game music worked before they started using CDs. Sequencers however usually lack an option to export anything else but a single prerendered file.

### Sound Effects
As with music sound effects were originally based on simple wave forms. But sound effects transitioned to samples much earlier. Apart from limits in the amount of samples that could be mixed simultaneously nothing basic ever changed for sound effects. But sound effects can be altered in a multitude of ways to adjust to the current game situation. To simulate the distance between the listener and the source of a sound effect the amplitude can be modified by multiplying it with 1 / distance. To simulate the direction of a sound effect modern sound systems add more and more speakers – the sound effect is then played by the two speakers which are placed next to the actual direction, both speakers playing with a reduced amplitude with the speaker nearer to the original direction playing proportionally louder.
Instead using lots of speakers the sound direction can also be reproduced using headphones by simulating the effects used by the ears and brain to identify directions. To differentiate sounds from left and right humans measure the time difference between the left and right ear as well as the loudness difference which occurs because the head itself is always in the way of the sound and one of the ears. Depending on the frequency of the sound either one method is used primarily – loudness differences are used for frequencies above 1600 Hz and timing differences are used below 800 Hz. For other frequencies the brain does sensor fusion. Simulating sounds in the front and in the back is more complicated because the brain uses the subtle differences that are applied to sound waves due to the ear forms. Those differences are also somewhat individual. Additionally the brain uses information gathered when the head is moved.
Like light rays sound waves typically undergo several modifications before they end up in an ear. Games can simulate those modifications to generate a more realistic environment. One of those modifications that is very easy to implement is the Doppler Effect which occurs when the source and/or the listener of a sound move. Wave lengths increase or decrease because positions change relative to the sound waves. The Doppler Effect can be calculated for increasing/decreasing distance between source and listener according to
[doppler1]
[doppler2]
with B for the destination, S for source and c for the speed of sound.
More complex are sound reflections. Sound reflection depends on the wavelength and the structure of the hit surface. Large surfaces directly reflect small wavelengths but small surface scatter long wavelengths. Sound reflections are mostly implementing using global sound modifiers like echo and reverb effects which are predefined for different places in a level editor. Predefined sound regions can also be used to damp sound effects originating in neighboring regions thus roughly simulating sound occluders.
Proper sound reflection simulation has to work on actual 3D scene data so it can use the geometry and surface properties of the scene. This was rarely done in games and is still mainly a research topic but in the late 90s the A3D audio API from Aureal provided this functionality on special hardware. But Aureal was later bought by Creative Labs, which integrated the features in their EAX api. EAX was later deprecated and integrated in OpenAL. OpenAL is now largely deprecated. The open source project OpenAL Soft however is still active.
All in all music and sound playback/simulation in games is mostly in a primitive state. More interesting technology existed but was only used briefly before it disappeared completely.