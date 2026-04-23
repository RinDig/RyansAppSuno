const ARTISTS = [
  // POP
  { name: "Taylor Swift", group: "Pop", era: "2000s–2020s", color: "#c084fc", tags: ["pop", "country-pop", "indie pop", "singer-songwriter", "confessional", "anthemic", "acoustic guitar", "orchestral pop"] },
  { name: "Beyoncé", group: "Pop", era: "2000s–2020s", color: "#f59e0b", tags: ["R&B", "pop", "dance", "soul", "electropop", "powerhouse vocals", "empowerment", "cinematic"] },
  { name: "Billie Eilish", group: "Pop", era: "2010s–2020s", color: "#86efac", tags: ["dark pop", "indie pop", "lo-fi", "whisper vocals", "minimalist", "bedroom pop", "atmospheric", "bass-heavy"] },
  { name: "Ariana Grande", group: "Pop", era: "2010s–2020s", color: "#f9a8d4", tags: ["pop", "R&B", "dance pop", "whistle register", "powerhouse vocals", "bubblegum pop", "trap pop"] },
  { name: "Lady Gaga", group: "Pop", era: "2000s–2020s", color: "#a78bfa", tags: ["electropop", "dance pop", "synth pop", "theatrical", "glam", "arena pop", "piano ballad"] },
  { name: "The Weeknd", group: "Pop", era: "2010s–2020s", color: "#f87171", tags: ["dark R&B", "synth pop", "80s revival", "noir", "falsetto", "cinematic", "moody", "808s"] },
  { name: "Lana Del Rey", group: "Pop", era: "2010s–2020s", color: "#93c5fd", tags: ["dream pop", "sadcore", "cinematic pop", "baroque pop", "melancholic", "Americana", "lo-fi", "orchestral"] },
  { name: "Post Malone", group: "Pop", era: "2010s–2020s", color: "#fde68a", tags: ["pop rap", "trap", "emo rap", "melodic rap", "rock influences", "autotune", "introspective"] },

  // ROCK & ALTERNATIVE
  { name: "Radiohead", group: "Rock", era: "1990s–2010s", color: "#6ee7b7", tags: ["alternative rock", "art rock", "electronic rock", "experimental", "orchestral", "melancholic", "post-rock", "falsetto"] },
  { name: "Nirvana", group: "Rock", era: "1990s", color: "#fbbf24", tags: ["grunge", "alternative rock", "punk", "raw", "distorted guitar", "angst", "quiet-loud dynamics"] },
  { name: "Foo Fighters", group: "Rock", era: "1990s–2020s", color: "#f97316", tags: ["rock", "alternative", "post-grunge", "arena rock", "power chords", "anthemic", "energetic"] },
  { name: "Arctic Monkeys", group: "Rock", era: "2000s–2020s", color: "#38bdf8", tags: ["indie rock", "garage rock", "psychedelic", "dry wit", "angular guitar", "post-punk revival", "crooner"] },
  { name: "The Strokes", group: "Rock", era: "2000s–2020s", color: "#a3e635", tags: ["indie rock", "garage rock", "post-punk revival", "lo-fi", "jangly guitar", "NYC cool", "deadpan"] },
  { name: "Nine Inch Nails", group: "Rock", era: "1990s–2010s", color: "#e879f9", tags: ["industrial", "electronic", "alternative metal", "dark", "abrasive", "synth-driven", "aggressive"] },
  { name: "Fleetwood Mac", group: "Rock", era: "1970s–1990s", color: "#fb923c", tags: ["classic rock", "soft rock", "folk rock", "pop rock", "harmonies", "melancholic", "piano-driven"] },
  { name: "David Bowie", group: "Rock", era: "1970s–2010s", color: "#f472b6", tags: ["glam rock", "art rock", "electronic", "soul", "experimental", "character-driven", "theatric", "psychedelic"] },

  // HIP-HOP & R&B
  { name: "Kendrick Lamar", group: "Hip-Hop", era: "2010s–2020s", color: "#fbbf24", tags: ["conscious hip-hop", "jazz rap", "West Coast", "spoken word", "storytelling", "introspective", "orchestral hip-hop"] },
  { name: "Drake", group: "Hip-Hop", era: "2010s–2020s", color: "#818cf8", tags: ["hip-hop", "R&B", "trap", "melodic rap", "introspective", "party", "autotune", "Toronto sound"] },
  { name: "Kanye West", group: "Hip-Hop", era: "2000s–2020s", color: "#f59e0b", tags: ["hip-hop", "soul samples", "experimental", "orchestral", "gospel rap", "maximalist", "chipmunk soul"] },
  { name: "Frank Ocean", group: "Hip-Hop", era: "2010s–2020s", color: "#6ee7b7", tags: ["R&B", "neo soul", "indie R&B", "experimental", "confessional", "lo-fi", "introspective", "falsetto"] },
  { name: "Tyler the Creator", group: "Hip-Hop", era: "2010s–2020s", color: "#4ade80", tags: ["hip-hop", "neo-soul", "alternative rap", "psychedelic", "jazz influences", "orchestral", "colorful"] },
  { name: "SZA", group: "Hip-Hop", era: "2010s–2020s", color: "#f9a8d4", tags: ["R&B", "neo soul", "indie R&B", "trap soul", "breathy vocals", "melancholic", "confessional"] },
  { name: "Childish Gambino", group: "Hip-Hop", era: "2010s–2020s", color: "#fb923c", tags: ["hip-hop", "neo soul", "funk", "alternative", "psychedelic", "G-funk", "storytelling"] },

  // ELECTRONIC & DANCE
  { name: "Daft Punk", group: "Electronic", era: "1990s–2010s", color: "#fde68a", tags: ["electronic", "house", "disco", "French house", "funk", "vocoder", "robotic", "cinematic"] },
  { name: "Aphex Twin", group: "Electronic", era: "1990s–2010s", color: "#a78bfa", tags: ["IDM", "ambient", "techno", "experimental electronic", "glitchy", "breakbeats", "eerie"] },
  { name: "Boards of Canada", group: "Electronic", era: "1990s–2010s", color: "#86d9b5", tags: ["IDM", "ambient", "lo-fi", "psychedelic", "nostalgic", "analog warmth", "drone"] },
  { name: "Massive Attack", group: "Electronic", era: "1990s–2010s", color: "#475569", tags: ["trip-hop", "electronic", "ambient", "dark", "cinematic", "downtempo", "atmospheric"] },
  { name: "Portishead", group: "Electronic", era: "1990s–2000s", color: "#94a3b8", tags: ["trip-hop", "experimental", "dark electronic", "jazz samples", "haunting vocals", "noir", "cinematic"] },
  { name: "The Chemical Brothers", group: "Electronic", era: "1990s–2020s", color: "#f97316", tags: ["big beat", "electronic", "rave", "acid house", "breakbeats", "euphoric", "psych rock elements"] },
  { name: "Skrillex", group: "Electronic", era: "2010s–2020s", color: "#c084fc", tags: ["dubstep", "electro house", "bass music", "EDM", "aggressive", "drop-focused", "wubstep"] },
  { name: "Deadmau5", group: "Electronic", era: "2000s–2020s", color: "#38bdf8", tags: ["progressive house", "techno", "EDM", "melodic", "minimalist electronic", "synth-driven"] },
  { name: "Gorillaz", group: "Electronic", era: "2000s–2020s", color: "#84cc16", tags: ["alternative", "electronic", "hip-hop", "indie", "virtual band", "eclectic", "dub", "Britpop"] },

  // INDIE & ALTERNATIVE
  { name: "Tame Impala", group: "Indie", era: "2010s–2020s", color: "#c084fc", tags: ["psychedelic pop", "synth pop", "dream pop", "lo-fi", "hazy", "reverb-heavy", "indie rock", "disco"] },
  { name: "Vampire Weekend", group: "Indie", era: "2000s–2020s", color: "#fbbf24", tags: ["indie pop", "indie rock", "afrobeat influences", "jangly guitar", "Ivy League", "baroque pop", "witty"] },
  { name: "The National", group: "Indie", era: "2000s–2020s", color: "#94a3b8", tags: ["indie rock", "chamber pop", "melancholic", "literary", "baritone vocals", "orchestral", "introspective"] },
  { name: "Bon Iver", group: "Indie", era: "2000s–2020s", color: "#bae6fd", tags: ["indie folk", "chamber pop", "falsetto", "atmospheric", "winter", "lo-fi", "vocal processing", "Americana"] },
  { name: "LCD Soundsystem", group: "Indie", era: "2000s–2020s", color: "#f87171", tags: ["dance-punk", "electronic rock", "post-punk", "NYC", "disco", "hypnotic", "anthemic"] },
  { name: "Florence + The Machine", group: "Indie", era: "2000s–2020s", color: "#fb923c", tags: ["indie rock", "baroque pop", "art rock", "anthemic", "harp", "operatic", "ethereal", "dramatic"] },
  { name: "Glass Animals", group: "Indie", era: "2010s–2020s", color: "#4ade80", tags: ["psychedelic pop", "indie pop", "electronic", "lo-fi", "tropical", "wavy", "falsetto", "dream pop"] },

  // METAL
  { name: "Metallica", group: "Metal", era: "1980s–2020s", color: "#f97316", tags: ["heavy metal", "thrash metal", "hard rock", "double bass drums", "riff-driven", "aggressive", "power ballad"] },
  { name: "Tool", group: "Metal", era: "1990s–2020s", color: "#78716c", tags: ["progressive metal", "art rock", "psychedelic", "complex rhythms", "dark", "spiritual", "long-form"] },

  // POP PUNK / SCENE / HARDCORE / EMO
  { name: "My Chemical Romance", group: "Pop Punk", era: "2000s–2020s", color: "#e11d48", tags: ["emo", "pop punk", "post-hardcore", "theatrical", "dark", "anthemic", "operatic", "concept album"] },
  { name: "Paramore", group: "Pop Punk", era: "2000s–2020s", color: "#f97316", tags: ["pop punk", "alternative rock", "emo", "powerhouse female vocals", "anthemic", "new wave influences", "synth pop"] },
  { name: "Fall Out Boy", group: "Pop Punk", era: "2000s–2020s", color: "#3b82f6", tags: ["pop punk", "emo", "alternative rock", "arena rock", "witty lyrics", "layered production", "catchy hooks"] },
  { name: "Panic! At The Disco", group: "Pop Punk", era: "2000s–2020s", color: "#a855f7", tags: ["pop punk", "theatrical pop", "baroque pop", "emo", "vaudeville", "piano-driven", "falsetto", "glam"] },
  { name: "Green Day", group: "Pop Punk", era: "1990s–2020s", color: "#84cc16", tags: ["pop punk", "punk rock", "alternative rock", "power trio", "political", "anthemic", "fast tempo", "distorted guitar"] },
  { name: "Blink-182", group: "Pop Punk", era: "1990s–2020s", color: "#38bdf8", tags: ["pop punk", "skate punk", "California", "playful", "teenage angst", "tight harmonies", "fast drums", "power chords"] },
  { name: "Sum 41", group: "Pop Punk", era: "2000s–2010s", color: "#f59e0b", tags: ["pop punk", "heavy metal influences", "hard rock", "Canadian", "fast-paced", "aggressive", "catchy", "power chords"] },
  { name: "Good Charlotte", group: "Pop Punk", era: "2000s–2010s", color: "#1d4ed8", tags: ["pop punk", "emo", "alternative rock", "anthemic", "twin harmonies", "melodic", "skate punk"] },
  { name: "Simple Plan", group: "Pop Punk", era: "2000s–2010s", color: "#dc2626", tags: ["pop punk", "Canadian", "melodic", "teenage angst", "clean production", "power chords", "anthemic chorus"] },
  { name: "New Found Glory", group: "Pop Punk", era: "1990s–2010s", color: "#16a34a", tags: ["pop punk", "melodic hardcore", "Floridian", "fast drums", "sing-along", "upbeat", "tight riffs"] },
  { name: "The Used", group: "Pop Punk", era: "2000s–2010s", color: "#7c3aed", tags: ["post-hardcore", "emo", "screamo", "raw vocals", "emotional", "heavy riffs", "melodic", "confessional"] },
  { name: "Hawthorne Heights", group: "Pop Punk", era: "2000s–2010s", color: "#be185d", tags: ["post-hardcore", "emo", "screamo", "melodic", "dual vocals", "dark", "heartbreak", "Midwest emo"] },
  { name: "Underoath", group: "Pop Punk", era: "2000s–2010s", color: "#0f172a", tags: ["metalcore", "post-hardcore", "Christian rock", "screamo", "atmospheric", "heavy", "melodic", "double bass"] },
  { name: "Bring Me The Horizon", group: "Pop Punk", era: "2000s–2020s", color: "#ef4444", tags: ["metalcore", "post-hardcore", "electronic metal", "synth-heavy", "aggressive", "melodic", "alt metal", "stadium rock"] },
  { name: "Pierce The Veil", group: "Pop Punk", era: "2000s–2010s", color: "#6d28d9", tags: ["post-hardcore", "emo", "Latin influences", "melodic", "falsetto", "intricate guitar", "emotional", "San Diego scene"] },
  { name: "Sleeping With Sirens", group: "Pop Punk", era: "2010s–2020s", color: "#0ea5e9", tags: ["post-hardcore", "pop punk", "emo", "falsetto", "melodic", "acoustic sections", "confessional", "passionate"] },
  { name: "A Day To Remember", group: "Pop Punk", era: "2000s–2020s", color: "#f97316", tags: ["pop punk", "metalcore", "Florida", "heavy breakdown", "catchy chorus", "dual audience", "energetic", "mosh pit"] },
  { name: "Jimmy Eat World", group: "Pop Punk", era: "1990s–2020s", color: "#2563eb", tags: ["emo", "alternative rock", "post-hardcore", "melodic", "heartfelt", "Midwest emo", "jangly guitar", "anthemic"] },
  { name: "Dashboard Confessional", group: "Pop Punk", era: "2000s–2010s", color: "#b45309", tags: ["emo", "acoustic emo", "singer-songwriter", "confessional", "raw", "heartbreak", "crowd sing-along"] },
  { name: "Taking Back Sunday", group: "Pop Punk", era: "2000s–2010s", color: "#b91c1c", tags: ["post-hardcore", "emo", "Long Island", "dual vocals", "angular guitar", "raw energy", "catchy", "introspective"] },
  { name: "Thursday", group: "Pop Punk", era: "2000s–2010s", color: "#374151", tags: ["post-hardcore", "screamo", "New Jersey", "literary lyrics", "atmospheric", "intense", "melodic hardcore"] },
  { name: "Brand New", group: "Pop Punk", era: "2000s–2010s", color: "#1e293b", tags: ["emo", "indie rock", "post-hardcore", "Long Island", "raw", "literary", "experimental", "dark indie"] },
  { name: "Silverstein", group: "Pop Punk", era: "2000s–2020s", color: "#0369a1", tags: ["post-hardcore", "screamo", "Canadian", "melodic hardcore", "dual vocals", "passionate", "intense"] },
  { name: "Escape The Fate", group: "Pop Punk", era: "2000s–2010s", color: "#7f1d1d", tags: ["post-hardcore", "glam metal", "Las Vegas scene", "screamo", "melodic", "aggressive", "theatric"] },

  // COUNTRY & FOLK
  { name: "Johnny Cash", group: "Country", era: "1950s–2000s", color: "#92400e", tags: ["outlaw country", "folk", "Americana", "storytelling", "baritone", "acoustic", "sparse", "dark country"] },
  { name: "Kacey Musgraves", group: "Country", era: "2010s–2020s", color: "#fde68a", tags: ["country-pop", "indie folk", "dreamy", "psychedelic country", "cosmic", "confessional", "lush"] },
  { name: "Fleet Foxes", group: "Country", era: "2000s–2020s", color: "#d97706", tags: ["folk", "baroque pop", "harmonies", "acoustic", "pastoral", "Appalachian", "reverb", "orchestral"] },
  { name: "Iron & Wine", group: "Country", era: "2000s–2020s", color: "#a78bfa", tags: ["folk", "indie folk", "Americana", "acoustic", "whispery vocals", "intimate", "lo-fi", "fingerpicking"] },

  // JAZZ & SOUL
  { name: "Amy Winehouse", group: "Jazz/Soul", era: "2000s", color: "#fbbf24", tags: ["soul", "jazz", "R&B", "retro", "Motown", "confessional", "bluesy", "raw vocals"] },
  { name: "D'Angelo", group: "Jazz/Soul", era: "1990s–2010s", color: "#f97316", tags: ["neo soul", "funk", "R&B", "smooth", "gospel", "psychedelic soul", "lush production"] },
  { name: "Erykah Badu", group: "Jazz/Soul", era: "1990s–2020s", color: "#84cc16", tags: ["neo soul", "jazz", "R&B", "experimental", "afrocentric", "spoken word", "earthy", "layered vocals"] },
  { name: "Nina Simone", group: "Jazz/Soul", era: "1960s–1990s", color: "#c084fc", tags: ["jazz", "soul", "blues", "classical piano", "protest songs", "emotional depth", "sultry", "timeless"] },
  { name: "Stevie Wonder", group: "Jazz/Soul", era: "1970s–2000s", color: "#fde68a", tags: ["soul", "R&B", "funk", "pop", "Motown", "harmonica", "joyful", "orchestral", "prophetic"] },
  { name: "Marvin Gaye", group: "Jazz/Soul", era: "1960s–1980s", color: "#f9a8d4", tags: ["soul", "R&B", "Motown", "smooth", "romantic", "political", "orchestral soul", "falsetto"] },
  { name: "Aretha Franklin", group: "Jazz/Soul", era: "1960s–2010s", color: "#fb923c", tags: ["soul", "gospel", "R&B", "jazz", "powerhouse vocals", "piano", "blues", "Motown", "Queen of Soul"] },
  { name: "Bill Withers", group: "Jazz/Soul", era: "1970s–1980s", color: "#6ee7b7", tags: ["soul", "R&B", "acoustic", "storytelling", "warm", "bluesy", "intimate", "folk soul"] },
  { name: "John Coltrane", group: "Jazz/Soul", era: "1950s–1960s", color: "#818cf8", tags: ["jazz", "modal jazz", "free jazz", "saxophone", "spiritual", "avant-garde", "complex harmony", "meditative"] },
  { name: "Miles Davis", group: "Jazz/Soul", era: "1950s–1990s", color: "#94a3b8", tags: ["jazz", "modal jazz", "cool jazz", "trumpet", "fusion", "ambient", "cinematic", "minimalist", "innovative"] },

  // COUNTRY (additions)
  { name: "Dolly Parton", group: "Country", era: "1970s–2020s", color: "#fde68a", tags: ["country", "pop-country", "bluegrass", "storytelling", "warm", "piano", "heartfelt", "iconic"] },
  { name: "Willie Nelson", group: "Country", era: "1970s–2020s", color: "#86efac", tags: ["outlaw country", "folk", "jazz influences", "Americana", "acoustic", "weathered vocals", "storytelling", "Texas"] },
  { name: "Garth Brooks", group: "Country", era: "1990s–2020s", color: "#f97316", tags: ["country", "arena country", "pop-country", "anthemic", "theatrical", "rock influences", "storytelling"] },
  { name: "Luke Combs", group: "Country", era: "2010s–2020s", color: "#a3e635", tags: ["country", "modern country", "bro-country", "baritone", "arena country", "heartland", "Southern rock"] },
  { name: "Morgan Wallen", group: "Country", era: "2010s–2020s", color: "#fbbf24", tags: ["country", "country pop", "trap country", "Southern", "melodic", "modern country", "confessional"] },
  { name: "Zac Brown Band", group: "Country", era: "2000s–2020s", color: "#34d399", tags: ["country", "Southern rock", "Americana", "beach country", "bluegrass", "eclectic", "harmonies", "acoustic"] },

  // POP (additions)
  { name: "Bruno Mars", group: "Pop", era: "2010s–2020s", color: "#fbbf24", tags: ["pop", "funk", "R&B", "soul", "retro", "disco", "showmanship", "hook-driven", "danceable"] },
  { name: "Harry Styles", group: "Pop", era: "2010s–2020s", color: "#fb7185", tags: ["pop", "soft rock", "glam rock", "indie pop", "guitar-driven", "70s revival", "anthemic", "romantic"] },

  // ROCK (additions)
  { name: "Pearl Jam", group: "Rock", era: "1990s–2020s", color: "#a3a3a3", tags: ["grunge", "alternative rock", "hard rock", "post-grunge", "earnest", "arena rock", "baritone vocals", "guitar-driven"] },
  { name: "The White Stripes", group: "Rock", era: "2000s", color: "#ef4444", tags: ["garage rock", "blues rock", "lo-fi", "minimalist", "raw", "two-piece", "Delta blues", "riff-heavy"] },

  // HIP-HOP (additions)
  { name: "J. Cole", group: "Hip-Hop", era: "2010s–2020s", color: "#fbbf24", tags: ["conscious hip-hop", "storytelling", "introspective", "jazz samples", "boom bap", "self-produced", "Southern rap"] },
  { name: "Eminem", group: "Hip-Hop", era: "2000s–2020s", color: "#94a3b8", tags: ["rap", "horrorcore", "fast rap", "technical", "Detroit", "confessional", "aggressive", "pop rap"] },
  { name: "Lauryn Hill", group: "Hip-Hop", era: "1990s–2000s", color: "#4ade80", tags: ["hip-hop", "neo soul", "R&B", "reggae", "conscious", "powerhouse vocals", "acoustic", "spoken word"] },

  // ELECTRONIC (addition)
  { name: "Four Tet", group: "Electronic", era: "2000s–2020s", color: "#38bdf8", tags: ["IDM", "folktronica", "ambient", "electronic", "warm textures", "samples", "organic beats", "introspective"] },

  // INDIE (additions)
  { name: "Arcade Fire", group: "Indie", era: "2000s–2020s", color: "#f97316", tags: ["indie rock", "baroque pop", "art rock", "orchestral", "anthemic", "Canadian", "existential", "multi-instrumental"] },
  { name: "Beach House", group: "Indie", era: "2000s–2020s", color: "#93c5fd", tags: ["dream pop", "shoegaze", "lo-fi", "reverb-drenched", "melancholic", "hazy", "organ-driven", "female vocals"] },
  { name: "Sufjan Stevens", group: "Indie", era: "2000s–2020s", color: "#c4b5fd", tags: ["indie folk", "chamber pop", "orchestral", "confessional", "spiritual", "baroque", "fingerpicking", "falsetto"] },

  // METAL (additions)
  { name: "Black Sabbath", group: "Metal", era: "1970s–1990s", color: "#1c1c1c", tags: ["heavy metal", "doom metal", "hard rock", "blues rock", "dark", "riff-driven", "occult", "slow tempo"] },
  { name: "Iron Maiden", group: "Metal", era: "1980s–2020s", color: "#ef4444", tags: ["heavy metal", "NWOBHM", "power metal", "galloping bass", "operatic vocals", "dual guitar", "epic", "concept albums"] },
  { name: "Slayer", group: "Metal", era: "1980s–2010s", color: "#7f1d1d", tags: ["thrash metal", "speed metal", "aggressive", "dark", "fast picking", "double bass drums", "brutal", "political"] },
  { name: "System of a Down", group: "Metal", era: "2000s–2020s", color: "#dc2626", tags: ["alternative metal", "nu-metal", "progressive", "political", "Armenian", "off-kilter", "dynamic", "heavy"] },
  { name: "Slipknot", group: "Metal", era: "2000s–2020s", color: "#78716c", tags: ["nu-metal", "alternative metal", "percussive", "aggressive", "masked", "intense", "DJ elements", "heavy"] },
  { name: "Lamb of God", group: "Metal", era: "2000s–2020s", color: "#a3a3a3", tags: ["groove metal", "thrash metal", "aggressive", "Southern metal", "double bass", "technical", "riff-heavy"] },
  { name: "Pantera", group: "Metal", era: "1990s–2000s", color: "#f97316", tags: ["groove metal", "thrash metal", "heavy", "aggressive", "power", "Southern metal", "down-tuned", "headbanger"] },
  { name: "Megadeth", group: "Metal", era: "1980s–2020s", color: "#6b7280", tags: ["thrash metal", "speed metal", "technical", "political", "complex riffs", "progressive metal", "guitar-driven"] },

  // CLASSIC (additions)
  { name: "Michael Jackson", group: "Classic", era: "1970s–2000s", color: "#fbbf24", tags: ["pop", "R&B", "funk", "soul", "dance", "Motown", "theatrical", "iconic", "vocal runs"] },
  { name: "Madonna", group: "Classic", era: "1980s–2010s", color: "#f9a8d4", tags: ["pop", "dance pop", "electropop", "disco", "provocative", "reinvention", "synth pop", "theatrical"] },
  { name: "Queen", group: "Classic", era: "1970s–1990s", color: "#fbbf24", tags: ["classic rock", "glam rock", "operatic", "arena rock", "harmonies", "piano-driven", "theatrical", "anthemic"] },
  { name: "Led Zeppelin", group: "Classic", era: "1970s", color: "#f97316", tags: ["hard rock", "blues rock", "folk rock", "heavy metal", "psychedelic", "riff-driven", "epic", "drum-heavy"] },
  { name: "The Beatles", group: "Classic", era: "1960s", color: "#fde68a", tags: ["rock", "pop", "Britpop", "psychedelic", "folk", "experimental", "harmonies", "iconic", "songwriting"] },
  { name: "Bob Dylan", group: "Classic", era: "1960s–2010s", color: "#a3a3a3", tags: ["folk", "rock", "Americana", "protest songs", "storytelling", "poetic", "acoustic", "harmonica", "literary"] },
  { name: "Elton John", group: "Classic", era: "1970s–2020s", color: "#818cf8", tags: ["pop", "rock", "glam rock", "piano-driven", "theatrical", "anthemic", "ballads", "flamboyant", "orchestral"] },
  { name: "Bruce Springsteen", group: "Classic", era: "1970s–2020s", color: "#ef4444", tags: ["heartland rock", "rock", "Americana", "storytelling", "working class", "saxophone", "anthemic", "arena rock"] },
  { name: "Prince", group: "Classic", era: "1980s–2010s", color: "#a855f7", tags: ["funk", "pop", "R&B", "rock", "psychedelic", "new wave", "guitar virtuoso", "falsetto", "Minneapolis sound"] },
  { name: "The Rolling Stones", group: "Classic", era: "1960s–2020s", color: "#f59e0b", tags: ["rock", "blues rock", "classic rock", "swagger", "riff-driven", "raw", "legendary", "British Invasion"] },
];
