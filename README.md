# Tonnetz

This is a web app to visualize chords and chord changes using the "https://en.wikipedia.org/wiki/Tonnetz" Tonnetz, a diagram representing tonal space. The app features 23 buttons to transform triads. The triads are transformed according to the most basic movements possible, and they are transformed with the fewest moves possible.

## Libraries and Repositories Used

### hertz.js

For this project, I built a way to reference notes using integers, retrieve their frequencies by their note number, and retrieve their note letter by note number.

### Transformation.js

This provides a way to manipulate chords based on the three basic chord movements: P (parallel), l (leading-tone exchange), and R (relative). It prioritizes parsimonious voice leading by making the smallest movements possible.

### Jzz.js

This is a wonderful library of high-quality sounds, here I use the electric piano sound.

### Tonnetz-vis

This repo supplied the grid and some of its functionality, but provides no way to click the notes or chords.for the the grid used here and which is used to visualize notes, scales and chords. It was created y "https://ondrej.cifka.com" Ondřej Cífka in 2016. You can view the repo and the copyright information here "https://github.com/cifkao/tonnetz-viz/blob/master/LICENSE"

A few of the benefits of the Tonnetz are outlined in that project's documentation:

It can be used to visualize harmonic relationships in music. Each node in the diagram corresponds to one of the 12 tones and is connected to 6 adjacent nodes. The &lsquo;neighbours&rsquo; of each tone are related to it either by a third (major or minor), or by a perfect fifth, dependingon their relative position in the diagram.

One of the interesting properties of the Tonnetz is that any combination of tones (e.g. a chord or a melodic idea) forms a &lsquo;shape&rsquo; that is unchanged by transposition. For instance, in the default layout, every major triad is a downward-pointing triangle, and every minor triad is an upward-pointing triangle.

## Future Work

There are several directions this project might go in. One goal is to make the tonnetz clickable with the help of the library konva.js. I would also like to enable it to create chord progressions, and to dynamically change according to the transformation made. I would also like to incorporate my counterpoint repo to generate nice movements between chords in the progression.
