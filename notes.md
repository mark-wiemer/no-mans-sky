# Notes

## Trading

| Economy               | Demands               | Color     |
| --------------------- | --------------------- | --------- |
| 🧭 Trading            | 🧪 Scientific         | 💚 Green  |
| 🧬 Advanced materials | 🧭 Trading            | 🩷 Pink   |
| 🧪 Scientific         | 🧬 Advanced materials | 💜 Purple |
| ⛏️ Mining             | ⚡ Energy             | 🧡 Orange |
| ⚙️ Manufacturing      | ⛏️ Mining             | 💛 Yellow |
| 📕 Tech               | ⚙️ Manufacturing      | 💙 Blue   |
| ⚡ Energy             | 📕 Tech               | 💖 Red    |

See in-game favorites for relevant systems

## Exploration

### Hierarchy

- There is one [universe](https://nomanssky.fandom.com/wiki/Universe) in NMS, but it has three permutations: Expeditions, Permadeath, and Regular. I'll stick with the Regular one, but it's nice to know
- Each universe permutation has 256 [galaxies](https://nomanssky.fandom.com/wiki/Galaxy), I'm going to stick to the first galaxy, Euclid.
- Within each galaxy are around 4.2 billion [regions](https://nomanssky.fandom.com/wiki/Region). My main base is in the region named Muaesva, aka the Muaesva Region.
- Each region has 4096 [star systems](https://nomanssky.fandom.com/wiki/Star_system) reserved, but in practice only ~200-600 are visible on the galaxy map and therefore part of the main game
  - Most systems not on the map are called [phantom stars](https://nomanssky.fandom.com/wiki/Phantom_Star) and only accessible via external tools (boring!)
  - At most one system in each region is the shadow star and extremely difficult to identify via in-game tools
    1. Use a binary search to identify the highest valid portal number for the region (usually ~500-600)
    2. Increment that portal number by one
    3. Decode the portal number to a system code
    4. Search the galaxy map in that region for a system matching that code (tedious!)
       - That system might not even exist!
  - [Reverse shadow stars](https://nomanssky.fandom.com/wiki/Reverse_Shadow_Star) always exist at portal address decimal 1000, or hex 1E8, so they're boring
- Each star system has 2-6 celestial bodies ([planets](https://nomanssky.fandom.com/wiki/Planet) or [moons](https://nomanssky.fandom.com/wiki/Moon))
- Each celestial body has its own portal address, along with flora, fauna, minerals, other resources, and other points of interest

### Classification

There are multiple in-game ways of uniquely identifying a celestial body:

- [Portal addresses](https://nomanssky.fandom.com/wiki/Portal_address) are a coordinate system of twelve hexadecimal digits following the pattern P-SSS-YY-ZZZ-XXX
  - P for planet index, 1-6
  - SSS for solar systemP index, usually below 600 decimal.
  - YY-ZZZ-XXX for region address, with maxima and minima values being invalid
    - Y:
      - 00 is the very center
      - 80 is the very edge and unused
      - 81 is just above the bottom and is used
      - FF is just below the center and is used
      - 01 is just above the center and is used
      - 7F is just below the top and is used
    - X and Z:
      - 000 is the very center and unused
      - 800 is the very edge and unused
      - 801 is the northern-/western-most used value
      - FFF is just north/west of center and is used
      - 001 is just south/east of center and is used
      - 7FF is the southern-/eastern-most used value
- [Galactic coordinates](https://nomanssky.fandom.com/wiki/Galactic_Coordinates) are an alternative coordinate system used by signal boosters following the pattern W:0XXX:00YY:0ZZZ:PSSS
  - W is a 4-5 letter scanner ID
  - 0XXX:00YY:0ZZZ is the region address in hex
    - The first 1-2 digits of each section are always zero because there aren't that many regions in a galaxy
    - 0000:0000:0000 would be the bottom, northwestern most corner and is used
    - 07FF:007F:07FF is the center
    - 0FFE:00FE:0FFE is the top, southeastern most corner and is used
      - this represents the highest used value for each coordinate
  - PSSS is the planet and solar system index, between P0..P2FF and P3E8..P429
    - P is always between 1 and 6 ?
    - The first digit is always zero because there aren't that many solar systems in a region
    - This includes the planet ID (somehow)

## Bases

- New Cradle Outpost: Nothing
- Cradle II: Nothing
- Basphurine Outpost
  - Basalt
  - Sulphurine
- Cradle III: Nothing
- True Raddiox Outpost:
  - Radon
  - Dioxite

## Freighter

- Use D-Pad in Freighter inventory to access storage cubes
- To access Freighter inventory globally, research Freighter upgrades with Salvaged Frigate modules
- [Salvaged Frigate modules](https://nomanssky.fandom.com/wiki/Salvaged_Frigate_Module) spawn:
  - in crashed freighters, discovered by
    - just flying over land
    - distress signal planetary charts from geographers
