const csvString = `Date,Name,Year,Letterboxd URI
2021-07-14,Your Name Engraved Herein,2020,https://boxd.it/qWwA
2021-07-14,Parasite,2019,https://boxd.it/hTha
2021-07-14,Joker,2019,https://boxd.it/h4cS
2021-07-14,Inception,2010,https://boxd.it/1skk
2021-07-14,Get Out,2017,https://boxd.it/eOCm
2021-07-14,Fight Club,1999,https://boxd.it/2a9q
2021-07-14,Lady Bird,2017,https://boxd.it/dGNE
2021-07-14,La La Land,2016,https://boxd.it/a5fa
2021-07-14,The Grand Budapest Hotel,2014,https://boxd.it/3ZqO
2021-07-14,Interstellar,2014,https://boxd.it/4VZ8
2021-07-14,Inglourious Basterds,2009,https://boxd.it/1JzG
2021-07-14,The Wolf of Wall Street,2013,https://boxd.it/3C1m
2021-07-14,Her,2013,https://boxd.it/4O24
2021-07-14,Spirited Away,2001,https://boxd.it/2b4m
2021-07-14,Arrival,2016,https://boxd.it/aNGk
2021-07-14,Eternal Sunshine of the Spotless Mind,2004,https://boxd.it/6YK
2021-07-14,The Social Network,2010,https://boxd.it/17ue
2021-07-14,Call Me by Your Name,2017,https://boxd.it/dYmm
2021-07-14,Moonlight,2016,https://boxd.it/d6bE
2021-07-14,1917,2019,https://boxd.it/jj4y
2021-07-14,The Truman Show,1998,https://boxd.it/18U8
2021-07-14,Soul,2020,https://boxd.it/ioLA
2021-07-14,Forrest Gump,1994,https://boxd.it/728
2021-07-14,The Matrix,1999,https://boxd.it/2a1m
2021-07-14,Coco,2017,https://boxd.it/bYJQ
2021-07-14,Taxi Driver,1976,https://boxd.it/2b8y
2021-07-14,Tenet,2020,https://boxd.it/leq4
2021-07-14,Back to the Future,1985,https://boxd.it/2b8e
2021-07-14,The Shawshank Redemption,1994,https://boxd.it/2aHi
2021-07-14,Portrait of a Lady on Fire,2019,https://boxd.it/jkPq
2021-07-14,The Shape of Water,2017,https://boxd.it/dZ5m
2021-07-14,Shutter Island,2010,https://boxd.it/1U82
2021-07-14,It,2017,https://boxd.it/bC8e
2021-07-14,2001: A Space Odyssey,1968,https://boxd.it/2bf0
2021-07-14,Birdman or (The Unexpected Virtue of Ignorance),2014,https://boxd.it/5RFA
2021-07-14,BlacKkKlansman,2018,https://boxd.it/hxL8
2021-07-14,Ratatouille,2007,https://boxd.it/27ww
2021-07-14,Up,2009,https://boxd.it/1OEc
2021-07-14,WALL·E,2008,https://boxd.it/1VEo
2021-07-14,The Martian,2015,https://boxd.it/8SeG
2021-07-14,Donnie Darko,2001,https://boxd.it/2b2A
2021-07-14,Toy Story,1995,https://boxd.it/29qA
2021-07-14,Bohemian Rhapsody,2018,https://boxd.it/f1TK
2021-07-14,A Clockwork Orange,1971,https://boxd.it/2aVE
2021-07-14,Memento,2000,https://boxd.it/2bcK
2021-07-14,The Breakfast Club,1985,https://boxd.it/27q4
2021-07-14,The Perks of Being a Wallflower,2012,https://boxd.it/2ZA8
2021-07-14,Titanic,1997,https://boxd.it/2a2k
2021-07-14,Harry Potter and the Prisoner of Azkaban,2004,https://boxd.it/29Qy
2021-07-14,Moonrise Kingdom,2012,https://boxd.it/2Wng
2021-07-14,Harry Potter and the Philosopher's Stone,2001,https://boxd.it/29QS
2021-07-14,Finding Nemo,2003,https://boxd.it/72i
2021-07-14,Good Will Hunting,1997,https://boxd.it/2ahY
2021-07-14,Fantastic Mr. Fox,2009,https://boxd.it/1WyQ
2021-07-14,The Prestige,2006,https://boxd.it/293w
2021-07-14,"Monsters, Inc.",2001,https://boxd.it/2a46
2021-07-14,The Florida Project,2017,https://boxd.it/dMG0
2021-07-14,Split,2016,https://boxd.it/dgSy
2021-07-14,A Star Is Born,2018,https://boxd.it/aXgc
2021-07-14,Dead Poets Society,1989,https://boxd.it/2aSg
2021-07-14,Amélie,2001,https://boxd.it/2aUc
2021-07-14,Isle of Dogs,2018,https://boxd.it/dZrW
2021-07-14,Requiem for a Dream,2000,https://boxd.it/29VI
2021-07-14,Avatar,2009,https://boxd.it/1Efm
2021-07-14,Zootopia,2016,https://boxd.it/84xS
2021-07-14,Pan's Labyrinth,2006,https://boxd.it/28No
2021-07-14,Catch Me If You Can,2002,https://boxd.it/29VS
2021-07-14,Harry Potter and the Deathly Hallows: Part 2,2011,https://boxd.it/1RYk
2021-07-14,Room,2015,https://boxd.it/7T0y
2021-07-14,Toy Story 3,2010,https://boxd.it/1WRe
2021-07-14,Little Miss Sunshine,2006,https://boxd.it/29EW
2021-07-14,Harry Potter and the Chamber of Secrets,2002,https://boxd.it/29QI
2021-07-14,Harry Potter and the Goblet of Fire,2005,https://boxd.it/29Qo
2021-07-14,Toy Story 4,2019,https://boxd.it/9ALu
2021-07-14,Gravity,2013,https://boxd.it/GZY
2021-07-14,Shrek,2001,https://boxd.it/29zi
2021-07-14,Ferris Bueller's Day Off,1986,https://boxd.it/1YPY
2021-07-14,10 Things I Hate About You,1999,https://boxd.it/23AO
2021-07-14,Howl's Moving Castle,2004,https://boxd.it/23De
2021-07-14,Princess Mononoke,1997,https://boxd.it/2b4w
2021-07-14,Harry Potter and the Order of the Phoenix,2007,https://boxd.it/29Qe
2021-07-14,Boyhood,2014,https://boxd.it/3178
2021-07-14,Toy Story 2,1999,https://boxd.it/29qq
2021-07-14,Harry Potter and the Deathly Hallows: Part 1,2010,https://boxd.it/1RYu
2021-07-14,The Great Gatsby,2013,https://boxd.it/JY
2021-07-14,Harry Potter and the Half-Blood Prince,2009,https://boxd.it/29FU
2021-07-14,The Imitation Game,2014,https://boxd.it/6aig
2021-07-14,Your Name.,2016,https://boxd.it/cUqs
2021-07-14,Edward Scissorhands,1990,https://boxd.it/2aZc
2021-07-14,Children of Men,2006,https://boxd.it/1Y2i
2021-07-14,The Nightmare Before Christmas,1993,https://boxd.it/1YzQ
2021-07-14,Brokeback Mountain,2005,https://boxd.it/2b2q
2021-07-14,Scarface,1983,https://boxd.it/2b7g
2021-07-14,The Royal Tenenbaums,2001,https://boxd.it/1YHU
2021-07-14,V for Vendetta,2005,https://boxd.it/29Ik
2021-07-14,Fantastic Beasts and Where to Find Them,2016,https://boxd.it/7FPC
2021-07-14,Green Book,2018,https://boxd.it/hErk
2021-07-14,Coraline,2009,https://boxd.it/1NhQ
2021-07-14,Bird Box,2018,https://boxd.it/eh1i
2021-07-14,Tangled,2010,https://boxd.it/15gO
2021-07-14,Shrek 2,2004,https://boxd.it/29z8
2021-07-14,Rocketman,2019,https://boxd.it/iehK
2021-07-14,mid90s,2018,https://boxd.it/fxIa
2021-07-14,The Queen's Gambit,2020,https://boxd.it/s1Ym
2021-07-14,Perfect Blue,1997,https://boxd.it/1W7A
2021-07-14,Inside Llewyn Davis,2013,https://boxd.it/34Ro
2021-07-14,Being John Malkovich,1999,https://boxd.it/2ahu
2021-07-14,Life of Pi,2012,https://boxd.it/37pC
2021-07-14,Luca,2021,https://boxd.it/ipjC
2021-07-14,The Pianist,2002,https://boxd.it/2aqc
2021-07-14,Charlie and the Chocolate Factory,2005,https://boxd.it/2b68
2021-07-14,City of God,2002,https://boxd.it/2a2a
2021-07-14,Back to the Future Part II,1989,https://boxd.it/2aYI
2021-07-14,Magnolia,1999,https://boxd.it/2aze
2021-07-14,How to Train Your Dragon,2010,https://boxd.it/1WRy
2021-07-14,About Time,2013,https://boxd.it/43bI
2021-07-14,Dallas Buyers Club,2013,https://boxd.it/4O8G
2021-07-14,Stand by Me,1986,https://boxd.it/2aOe
2021-07-14,Grave of the Fireflies,1988,https://boxd.it/1RUM
2021-07-14,The Devil All the Time,2020,https://boxd.it/i2tY
2021-07-14,Chungking Express,1994,https://boxd.it/1UDa
2021-07-14,Hidden Figures,2016,https://boxd.it/dgS4
2021-07-14,The Tree of Life,2011,https://boxd.it/1Zu8
2021-07-14,Persona,1966,https://boxd.it/29B4
2021-07-14,Into the Wild,2007,https://boxd.it/22m2
2021-07-14,Almost Famous,2000,https://boxd.it/29CQ
2021-07-14,Swiss Army Man,2016,https://boxd.it/bDG2
2021-07-14,The Virgin Suicides,1999,https://boxd.it/28JG
2021-07-14,Beautiful Boy,2018,https://boxd.it/g76Q
2021-07-14,We Need to Talk About Kevin,2011,https://boxd.it/2pTS
2021-07-14,Big Fish,2003,https://boxd.it/2a3M
2021-07-14,Corpse Bride,2005,https://boxd.it/24WQ
2021-07-14,"Paris, Texas",1984,https://boxd.it/29Ts
2021-07-14,Rushmore,1998,https://boxd.it/1TAO
2021-07-14,Les Misérables,2012,https://boxd.it/2TT4
2021-07-14,Ponyo,2008,https://boxd.it/1S0A
2021-07-14,Alice in Wonderland,2010,https://boxd.it/1Spq
2021-07-14,Back to the Future Part III,1990,https://boxd.it/2aTS
2021-07-14,A Bug's Life,1998,https://boxd.it/1Yyy
2021-07-14,Captain Fantastic,2016,https://boxd.it/b2K2
2021-07-14,The Darjeeling Limited,2007,https://boxd.it/24as
2021-07-14,Enola Holmes,2020,https://boxd.it/hX2o
2021-07-14,El Camino: A Breaking Bad Movie,2019,https://boxd.it/kv0q
2021-07-14,Lilo & Stitch,2002,https://boxd.it/1TAY
2021-07-14,Mommy,2014,https://boxd.it/7Uau
2021-07-14,Lucy,2014,https://boxd.it/75hu
2021-07-14,Twelve Monkeys,1995,https://boxd.it/2beQ
2021-07-14,The Seventh Seal,1957,https://boxd.it/2ahO
2021-07-14,Sing Street,2016,https://boxd.it/cOo6
2021-07-14,Atonement,2007,https://boxd.it/24ui
2021-07-14,Dog Day Afternoon,1975,https://boxd.it/29bg
2021-07-14,Romeo + Juliet,1996,https://boxd.it/2ama
2021-07-14,Rango,2011,https://boxd.it/QPk
2021-07-14,The Fault in Our Stars,2014,https://boxd.it/6BQa
2021-07-14,Maleficent,2014,https://boxd.it/3v1u
2021-07-14,"Girl, Interrupted",1999,https://boxd.it/25ds
2021-07-14,Matilda,1996,https://boxd.it/1VhY
2021-07-14,The Aviator,2004,https://boxd.it/26BU
2021-07-14,The Second Mother,2015,https://boxd.it/9Ydm
2021-07-14,Sense8: Happy F*cking New Year,2016,https://boxd.it/rP4w
2021-07-14,Cléo from 5 to 7,1962,https://boxd.it/2agm
2021-07-14,Summer of 85,2020,https://boxd.it/oxQ2
2021-07-14,God's Own Country,2017,https://boxd.it/faZM
2021-07-14,Maurice,1987,https://boxd.it/1tZy
2021-07-14,Free Fall,2013,https://boxd.it/5bQc
2021-07-14,Shelter,2007,https://boxd.it/1IBQ
2021-07-14,Center of My World,2016,https://boxd.it/chb4
2021-07-14,"Love, Simon",2018,https://boxd.it/g02s
2021-07-14,Weekend,2011,https://boxd.it/2Kzu
2021-07-14,Beautiful Thing,1996,https://boxd.it/1V20
2021-07-14,The Way He Looks,2014,https://boxd.it/70yA
2021-07-14,And Then We Danced,2019,https://boxd.it/m0e6
2021-07-14,In a Heartbeat,2017,https://boxd.it/ggzW
2021-07-14,Boys,2014,https://boxd.it/7aAQ
2021-07-14,My Own Private Idaho,1991,https://boxd.it/2ak4
2021-07-14,Being 17,2016,https://boxd.it/d6U0
2021-07-14,Handsome Devil,2016,https://boxd.it/ewKs
2021-07-14,Alex Strangelove,2018,https://boxd.it/iwqA
2021-07-14,Boy Erased,2018,https://boxd.it/gWxe
2021-07-14,Closet Monster,2015,https://boxd.it/bU3c
2021-07-14,North Sea Texas,2011,https://boxd.it/3s8W
2021-07-14,Giant Little Ones,2018,https://boxd.it/jAp4
2021-07-14,A Single Man,2009,https://boxd.it/1dx4
2021-07-14,Hidden Kisses,2016,https://boxd.it/e7aO
2021-07-14,Happy Together,1997,https://boxd.it/1Ha0
2021-07-14,I Killed My Mother,2009,https://boxd.it/1ubO
2021-07-14,El Angel,2018,https://boxd.it/ilA0
2021-07-14,Beach Rats,2017,https://boxd.it/f5m6
2021-07-14,Heartstone,2016,https://boxd.it/bJnU
2021-07-14,The 400 Blows,1959,https://boxd.it/2b1C
2021-07-14,Le Trou,1960,https://boxd.it/1nSw
2021-07-14,The Outsiders,1983,https://boxd.it/2aPw
2021-07-14,A Trip to the Moon,1902,https://boxd.it/29EC
2021-07-14,Metropolis,1927,https://boxd.it/71a
2021-07-14,M,1931,https://boxd.it/29vq
2021-07-14,Rebel Without a Cause,1955,https://boxd.it/2aQu
2021-07-14,La Jetée,1962,https://boxd.it/29Sk
2021-07-14,Heartbeats,2010,https://boxd.it/BPu
2021-07-14,Three Colors: Blue,1993,https://boxd.it/2b7K
2021-07-14,The Lion King,1994,https://boxd.it/201Q
2021-07-14,Three Colors: Red,1994,https://boxd.it/2b7q
2021-07-14,Nostalgia,1983,https://boxd.it/28Qi
2021-07-14,Talk to Her,2002,https://boxd.it/2beG
2021-07-14,Bad Education,2004,https://boxd.it/2b2K
2021-07-14,Law of Desire,1987,https://boxd.it/24Pg
2021-07-14,Angel's Egg,1985,https://boxd.it/1LeA
2021-07-14,The Elephant Man,1980,https://boxd.it/27LQ
2021-07-14,The Enigma of Kaspar Hauser,1974,https://boxd.it/1Tba
2021-07-14,Barton Fink,1991,https://boxd.it/2aFQ
2021-07-14,A.I. Artificial Intelligence,2001,https://boxd.it/29Ve
2021-07-14,Song of Love,1950,https://boxd.it/36Om
2021-07-14,The Blonde One,2019,https://boxd.it/lnUs
2021-07-14,Benjamin,2018,https://boxd.it/jUf4
2021-07-14,Sorry Angel,2018,https://boxd.it/hs4o
2021-07-14,Every Day,2018,https://boxd.it/gEhC
2021-07-14,Seashore,2015,https://boxd.it/atu4
2021-07-14,A Dog's Will,1999,https://boxd.it/pRBe
2021-07-14,Over the Garden Wall,2014,https://boxd.it/eqFw
2021-07-14,I Told Sunset About You,2020,https://boxd.it/t8dE
2021-07-14,Euphoria: F*ck Anyone Who’s Not a Sea Blob,2021,https://boxd.it/tMkU
2021-07-14,Stalker,1979,https://boxd.it/28PO
2021-07-14,Cosmos: A SpaceTime Odyssey,2014,https://boxd.it/8fw2
2021-07-15,Billy Elliot,2000,https://boxd.it/2bdy
2021-07-15,Ghost,1990,https://boxd.it/2aLE
2021-07-15,Mean Girls,2004,https://boxd.it/1VNg
2021-07-15,Home Alone,1990,https://boxd.it/29Fg
2021-07-15,The Karate Kid,1984,https://boxd.it/27Wk
2021-07-15,Mr. Nobody,2009,https://boxd.it/1k44
2021-07-15,Nowhere Boy,2009,https://boxd.it/1flk
2021-07-15,Get Real,1998,https://boxd.it/1xoG
2021-07-15,Fallen Angels,1995,https://boxd.it/1UkW
2021-07-15,Scent of a Woman,1992,https://boxd.it/1YAu
2021-07-15,L'Avventura,1960,https://boxd.it/23hs
2021-07-15,Bicycle Thieves,1948,https://boxd.it/23hW
2021-07-15,Assault on the Pay Train,1962,https://boxd.it/33Qu
2021-07-15,The Road Within,2014,https://boxd.it/6JtS
2021-07-15,The Danish Girl,2015,https://boxd.it/9Ohy
2021-07-15,The Fundamentals of Caring,2016,https://boxd.it/aiai
2021-07-15,Life,2017,https://boxd.it/dRqG
2021-07-15,The United States vs. Billie Holiday,2021,https://boxd.it/kKmQ
2021-07-15,Demokratie unter Druck,2019,https://boxd.it/meks
2021-07-15,Looks That Kill,2020,https://boxd.it/mxWA
2021-07-15,Poison,1991,https://boxd.it/Khm
2021-07-15,Isle of Flowers,1989,https://boxd.it/POU
2021-07-15,Give Me Your Hand,2008,https://boxd.it/11Qe
2021-07-15,Lan Yu,2001,https://boxd.it/1sBU
2021-07-15,Meshes of the Afternoon,1943,https://boxd.it/1sEE
2021-07-15,Yossi & Jagger,2002,https://boxd.it/1ImQ
2021-07-15,Hair,1979,https://boxd.it/1VIA
2021-07-15,The Science of Sleep,2006,https://boxd.it/2aEe
2021-07-15,Three Colors: White,1994,https://boxd.it/2b7A
2021-07-15,Voyage of Time: Life's Journey,2016,https://boxd.it/34Sw
2021-07-15,The Young and Prodigious T.S. Spivet,2013,https://boxd.it/4WDi
2021-07-15,I Am Heath Ledger,2017,https://boxd.it/g4Ii
2021-07-15,Wayne,2018,https://boxd.it/jtN4
2021-07-15,Love! Valour! Compassion!,1997,https://boxd.it/ak
2021-07-15,We Were One Man,1979,https://boxd.it/2uw
2021-07-15,Limitless,2011,https://boxd.it/Aly
2021-07-15,A Night in the Life of Jimmy Reardon,1988,https://boxd.it/JNQ
2021-07-15,Enter the Void,2009,https://boxd.it/1dy2
2021-07-15,Another Country,1984,https://boxd.it/1i4w
2021-07-15,Killer of Sheep,1978,https://boxd.it/1rPc
2021-07-15,The Man Who Loved Yngve,2008,https://boxd.it/1PN0
2021-07-15,Buffalo '66,1998,https://boxd.it/1YC6
2021-07-15,The Double,2013,https://boxd.it/4DLW
2021-07-15,Kill Your Darlings,2013,https://boxd.it/4VRS
2021-07-15,Variant Chants,1983,https://boxd.it/aaq8
2021-07-15,Life in a Day 2020,2021,https://boxd.it/r6Nw
2021-07-15,Total Eclipse,1995,https://boxd.it/19Ii
2021-07-15,The Sacrifice,1986,https://boxd.it/1xg8
2021-07-15,Lupin the Third: The Castle of Cagliostro,1979,https://boxd.it/1Mn4
2021-07-15,October Sky,1999,https://boxd.it/1Q7u
2021-07-15,Birdy,1984,https://boxd.it/1Ucy
2021-07-15,Castle in the Sky,1986,https://boxd.it/1W4G
2021-07-15,The Dreamlife of Angels,1998,https://boxd.it/1XGm
2021-07-15,The Dreamers,2003,https://boxd.it/28X4
2021-07-15,Predestination,2014,https://boxd.it/6bJM
2021-07-15,I Origins,2014,https://boxd.it/7aRM
2021-07-15,The Heroes of Evil,2015,https://boxd.it/aRVe
2021-07-15,The Last Black Man in San Francisco,2019,https://boxd.it/iWAw
2021-07-15,The Thing Called Love,1993,https://boxd.it/1qWw
2021-07-15,Running on Empty,1988,https://boxd.it/1How
2021-07-15,Little Nikita,1988,https://boxd.it/1RQg
2021-07-15,Picnic at Hanging Rock,1975,https://boxd.it/1UQe
2021-07-15,Freedom Writers,2007,https://boxd.it/28p2
2021-07-15,Mirror,1975,https://boxd.it/28Q8
2021-07-15,The Fountain,2006,https://boxd.it/28RU
2021-07-15,The Thirteenth Floor,1999,https://boxd.it/294Y
2021-07-15,The Giver,2014,https://boxd.it/6HWo
2021-07-15,La Belle Époque,2019,https://boxd.it/lXCE
2021-07-15,Dogfight,1991,https://boxd.it/1NCk
2021-07-15,The Mosquito Coast,1986,https://boxd.it/1UAA
2021-07-15,The Cure,1995,https://boxd.it/21nI
2021-07-15,I Love You to Death,1990,https://boxd.it/25JI
2021-07-15,Heathers,1989,https://boxd.it/26x4
2021-07-15,Schindler's List,1993,https://boxd.it/2aq2
2021-07-15,Insomnia,2002,https://boxd.it/2aB0
2021-07-15,Super Dark Times,2017,https://boxd.it/dTle
2021-07-15,To the Bone,2017,https://boxd.it/e5AK
2021-07-15,The Most Hated Woman in America,2017,https://boxd.it/e7fE
2021-07-15,The Invisible Guest,2016,https://boxd.it/euce
2021-07-15,The Guernsey Literary & Potato Peel Pie Society,2018,https://boxd.it/g68w
2021-07-15,The Goldfinch,2019,https://boxd.it/gX6I
2021-07-15,Horse Girl,2020,https://boxd.it/oioi
2021-07-15,Pink Narcissus,1971,https://boxd.it/WKU
2021-07-15,Dorian Blues,2004,https://boxd.it/1h9U
2021-07-15,Fantastic Planet,1973,https://boxd.it/1KnQ
2021-07-15,Poison Ivy,1992,https://boxd.it/1Z7y
2021-07-15,Chasing Amy,1997,https://boxd.it/274W
2021-07-15,The Talented Mr. Ripley,1999,https://boxd.it/2924
2021-07-15,Heavenly Creatures,1994,https://boxd.it/2974
2021-07-15,The City of Lost Children,1995,https://boxd.it/29k8
2021-07-15,Pride,2014,https://boxd.it/6TwM
2021-07-15,Miss Peregrine's Home for Peculiar Children,2016,https://boxd.it/8KPu
2021-07-15,Me and Earl and the Dying Girl,2015,https://boxd.it/9SAE
2021-07-15,The Man Who Knew Infinity,2015,https://boxd.it/bTpm
2021-07-15,BPM (Beats per Minute),2017,https://boxd.it/g796
2021-07-15,The Wild Boys,2017,https://boxd.it/h1kY
2021-07-15,My Life with James Dean,2017,https://boxd.it/iwry
2021-07-15,Daffodils,2019,https://boxd.it/kNiW
2021-07-15,Le Bonheur,1965,https://boxd.it/xyk
2021-07-15,Scorpio Rising,1963,https://boxd.it/Mks
2021-07-15,Fox and His Friends,1975,https://boxd.it/Xma
2021-07-15,Agora,2009,https://boxd.it/1tVc
2021-07-15,The Curious Case of Benjamin Button,2008,https://boxd.it/23Fk
2021-07-15,And the Band Played On,1993,https://boxd.it/26a0
2021-07-15,What's Eating Gilbert Grape,1993,https://boxd.it/28xg
2021-07-15,Contact,1997,https://boxd.it/29OM
2021-07-15,The East,2013,https://boxd.it/35Cu
2021-07-15,Dream Work,2001,https://boxd.it/4ASA
2021-07-15,Death of a Shadow,2012,https://boxd.it/4F9K
2021-07-15,My Own Private River,2011,https://boxd.it/56zA
2021-07-15,Prora,2012,https://boxd.it/6eNC
2021-07-15,Jamie Marks Is Dead,2014,https://boxd.it/7bno
2021-07-15,The Boy and the Wind,1967,https://boxd.it/7D7S
2021-07-15,The Deceased,1965,https://boxd.it/7DUg
2021-07-15,Macadam Stories,2015,https://boxd.it/b6uC
2021-07-15,Belladonna of Sadness,1973,https://boxd.it/2q
2021-07-15,Valerie and Her Week of Wonders,1970,https://boxd.it/NsC
2021-07-15,The Blood of a Poet,1932,https://boxd.it/19Bw
2021-07-15,Tropical Malady,2004,https://boxd.it/1TCA
2021-07-15,C.R.A.Z.Y.,2005,https://boxd.it/1TSI
2021-07-15,Mysterious Skin,2004,https://boxd.it/1UsG
2021-07-15,Explorers,1985,https://boxd.it/1XE6
2021-07-15,This Boy's Life,1993,https://boxd.it/20yg
2021-07-15,The Butterfly Effect,2004,https://boxd.it/27M0
2021-07-15,Dark Blood,2012,https://boxd.it/4pbU
2021-07-15,The Dance of Reality,2013,https://boxd.it/4qFw
2021-07-15,The Kings of Summer,2013,https://boxd.it/4V3e
2021-07-15,Living Still Life,2012,https://boxd.it/avqo
2021-07-15,Endless Poetry,2016,https://boxd.it/aANs
2021-07-15,Being Charlie,2015,https://boxd.it/cajg
2021-07-15,Maleficent: Mistress of Evil,2019,https://boxd.it/eSig
2021-07-15,Partner,1968,https://boxd.it/WpM
2021-07-15,Little Ashes,2008,https://boxd.it/1jp6
2021-07-15,Wild Reeds,1994,https://boxd.it/1sR4
2021-07-15,The Arrival,1996,https://boxd.it/1VZw
2021-07-15,The Holy Mountain,1973,https://boxd.it/20mu
2021-07-15,The Man Who Fell to Earth,1976,https://boxd.it/298w
2021-07-15,La Strada,1954,https://boxd.it/2asi
2021-07-15,Shame for Swedish: Magnus Betnér och Soran Ismail,2016,https://boxd.it/d5DW
2021-07-15,Words on Bathroom Walls,2020,https://boxd.it/j1iW
2021-07-15,Euphoria: Trouble Don't Last Always,2020,https://boxd.it/ta4a
2021-07-15,Cousins,2019,https://boxd.it/mGF4
2021-07-15,"Everything, Everything",2017,https://boxd.it/eKx8
2021-07-15,Hot Summer Nights,2017,https://boxd.it/bFIE
2021-07-15,Paper Towns,2015,https://boxd.it/8T5g
2021-07-15,Big Eyes,2014,https://boxd.it/36ms
2021-07-15,Suicide Room,2011,https://boxd.it/2oiG
2021-07-15,Dream Boy,2008,https://boxd.it/10BC
2021-07-15,The Mudge Boy,2003,https://boxd.it/1sVA
2021-07-15,Happy as Lazzaro,2018,https://boxd.it/hiVs
2021-07-15,Central Station,1998,https://boxd.it/29RG
2021-07-15,Modern Times,1936,https://boxd.it/25MC
2021-07-15,The Kid,1921,https://boxd.it/1X5U
2021-07-15,The Spirit of the Beehive,1973,https://boxd.it/24eY
2021-07-15,Capernaum,2018,https://boxd.it/iM3s
2021-07-16,To All the Boys I've Loved Before,2018,https://boxd.it/gHec
2021-07-16,Wonder,2017,https://boxd.it/ekeY
2021-07-16,The Space Between Us,2017,https://boxd.it/cF0u
2021-07-16,The Discovery,2017,https://boxd.it/d4gC
2021-07-16,Tim Maia,2014,https://boxd.it/8Skk
2021-07-16,Gone Girl,2014,https://boxd.it/6hQu
2021-07-16,Rio 2,2014,https://boxd.it/5jfy
2021-07-16,The Book Thief,2013,https://boxd.it/67wO
2021-07-16,We're So Young,2013,https://boxd.it/5LW6
2021-07-16,Brave,2012,https://boxd.it/bVG
2021-07-16,Madagascar 3: Europe's Most Wanted,2012,https://boxd.it/2NF6
2021-07-16,Phineas and Ferb: The Movie: Across the 2nd Dimension,2011,https://boxd.it/2ql8
2021-07-16,Arthur 3: The War of the Two Worlds,2010,https://boxd.it/VFO
2021-07-16,The Karate Kid,2010,https://boxd.it/15HA
2021-07-16,Shrek Forever After,2010,https://boxd.it/1WRo
2021-07-16,Diary of a Wimpy Kid,2010,https://boxd.it/1fUa
2021-07-16,Planet 51,2009,https://boxd.it/1JA0
2021-07-16,2012,2009,https://boxd.it/1OE2
2021-07-16,The Blind Side,2009,https://boxd.it/1zWg
2021-07-16,Ice Age: Dawn of the Dinosaurs,2009,https://boxd.it/20iC
2021-07-16,17 Again,2009,https://boxd.it/1Jnq
2021-07-16,The Diary of Anne Frank,2009,https://boxd.it/4k0M
2021-07-16,Bolt,2008,https://boxd.it/1QXg
2021-07-16,The Boy in the Striped Pyjamas,2008,https://boxd.it/1NOK
2021-07-16,Bee Movie,2007,https://boxd.it/22Vw
2021-07-16,Shrek the Third,2007,https://boxd.it/29yY
2021-07-16,Bridge to Terabithia,2007,https://boxd.it/28YG
2021-07-16,Arthur and the Invisibles,2006,https://boxd.it/1Xm2
2021-07-16,Click,2006,https://boxd.it/1YVM
2021-07-16,Ice Age: The Meltdown,2006,https://boxd.it/2wRk
2021-07-16,Chicken Little,2005,https://boxd.it/1Xnu
2021-07-16,Nanny McPhee,2005,https://boxd.it/1Uek
2021-07-16,"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",2005,https://boxd.it/2ark
2021-07-16,Two Sons of Francisco,2005,https://boxd.it/Geo
2021-07-16,The SpongeBob SquarePants Movie,2004,https://boxd.it/1SYq
2021-07-16,Stuart Little,1999,https://boxd.it/1WZW
2021-07-16,Babe: Pig in the City,1998,https://boxd.it/1YEQ
2021-07-16,Sneakers,1992,https://boxd.it/26VU
2021-07-16,Maioria Absoluta,1964,https://boxd.it/aydi
2021-07-16,A Velha a Fiar,1964,https://boxd.it/aM32
2021-07-16,Intrigues (V),1981,https://boxd.it/eJ1U
2021-07-16,Juliet of the Spirits,1965,https://boxd.it/1FF6
2021-07-16,The Secret of Kells,2009,https://boxd.it/1sMI
2021-07-16,Submarine,2010,https://boxd.it/H4a
2021-07-16,What Dreams May Come,1998,https://boxd.it/1SoM
2021-07-16,East of Eden,1955,https://boxd.it/2aQE
2021-07-16,Aruanda,1960,https://boxd.it/aNpo
2021-07-16,Blahblahblah,1968,https://boxd.it/74f8
2021-07-16,Primer,2004,https://boxd.it/6YA
2021-07-16,Sleepers,1996,https://boxd.it/29xw
2021-07-16,Nineteen Eighty-Four,1984,https://boxd.it/1YZE
2021-07-16,Hugo,2011,https://boxd.it/R08
2021-07-16,The Blue Lagoon,1980,https://boxd.it/22KS
2021-07-16,Rio,2011,https://boxd.it/NKc
2021-07-16,Behind Her Eyes,2021,https://boxd.it/qin4
2021-07-17,Fair Haven,2016,https://boxd.it/dW7a
2021-07-17,What Happened to Monday,2017,https://boxd.it/ejUu
2021-07-17,"I'm a Cyborg, But That's OK",2006,https://boxd.it/2328
2021-07-17,Eaux d'artifice,1953,https://boxd.it/3FA
2021-07-17,iBoy,2017,https://boxd.it/eBQq
2021-07-17,The Sorcerer's Apprentice,2010,https://boxd.it/1sGg
2021-07-17,The Little Prince,2015,https://boxd.it/9WbS
2021-07-17,Oz the Great and Powerful,2013,https://boxd.it/2cAI
2021-07-17,The Internship,2013,https://boxd.it/3SWS
2021-07-17,Lolita,1997,https://boxd.it/1XR0
2021-07-17,Guardians of the Galaxy,2014,https://boxd.it/3VH2
2021-07-17,Mowgli: Legend of the Jungle,2018,https://boxd.it/el2E
2021-07-17,Valerian and the City of a Thousand Planets,2017,https://boxd.it/biYY
2021-07-17,Animal Farm,1999,https://boxd.it/29ya
2021-07-17,They Live,1988,https://boxd.it/20lm
2021-07-17,Departure,2015,https://boxd.it/ciKk
2021-07-17,Steven Universe: The Movie,2019,https://boxd.it/jyE2
2021-07-17,if....,1968,https://boxd.it/1Nna
2021-07-17,K-12,2019,https://boxd.it/mNZA
2021-07-17,Black Swan,2010,https://boxd.it/Sw0
2021-07-17,Death Note,2017,https://boxd.it/bOS4
2021-07-17,The Theory of Everything,2014,https://boxd.it/7YtA
2021-07-17,Three Identical Strangers,2018,https://boxd.it/hDNO
2021-07-17,The Phantom of the Opera,1925,https://boxd.it/29bU
2021-07-17,The Illusionist,2010,https://boxd.it/ZWY
2021-07-17,Pirates of Silicon Valley,1999,https://boxd.it/25vm
2021-07-17,Bacurau,2019,https://boxd.it/fSUG
2021-07-17,The Basketball Diaries,1995,https://boxd.it/1WaO
2021-07-17,Being There,1979,https://boxd.it/1WxS
2021-07-17,The Imaginarium of Doctor Parnassus,2009,https://boxd.it/20DA
2021-07-17,The King,2019,https://boxd.it/ieZs
2021-07-17,Gandhi,1982,https://boxd.it/29Dk
2021-07-17,Blinded by the Light,2019,https://boxd.it/jrYO
2021-07-17,Miss Stevens,2016,https://boxd.it/bBq2
2021-07-17,Frankenstein,1931,https://boxd.it/25Te
2021-07-17,Frankenweenie,2012,https://boxd.it/bPS
2021-07-17,Snowden,2016,https://boxd.it/9CWO
2021-07-17,The Illusionist,2006,https://boxd.it/28H6
2021-07-17,The Machinist,2004,https://boxd.it/248c
2021-07-17,Primal Fear,1996,https://boxd.it/28ws
2021-07-17,Modern Life Is Rubbish,2017,https://boxd.it/ewrg
2021-07-17,The Wizard of Oz,1939,https://boxd.it/29Xu
2021-07-17,Four Adventures of Reinette and Mirabelle,1987,https://boxd.it/18QA
2021-07-17,My Beautiful Laundrette,1985,https://boxd.it/1UhI
2021-07-17,I Don't Want to Go Back Alone,2010,https://boxd.it/2nQC
2021-07-17,My Life in Pink,1997,https://boxd.it/1sx4
2021-07-17,Cazuza: Time Doesn't Stop,2004,https://boxd.it/hZa
2021-07-17,The Man from the Future,2011,https://boxd.it/2vkO
2021-07-17,Band of Outsiders,1964,https://boxd.it/20Aw
2021-07-17,My Uncle Killed a Guy,2004,https://boxd.it/2GVw
2021-07-17,"Black Mirror: Rachel, Jack and Ashley Too",2019,https://boxd.it/mltQ
2021-07-17,Black Mirror: Striking Vipers,2019,https://boxd.it/mlse
2021-07-17,Black Mirror: White Bear,2013,https://boxd.it/hRpG
2021-07-17,Black Mirror: Smithereens,2019,https://boxd.it/mltc
2021-07-17,Black Mirror: Arkangel,2017,https://boxd.it/hQXW
2021-07-17,Black Mirror: Bandersnatch,2018,https://boxd.it/kTDG
2021-07-17,Black Mirror: Hated in the Nation,2016,https://boxd.it/hSBI
2021-07-17,Black Mirror: Hang the DJ,2017,https://boxd.it/hQYA
2021-07-17,Black Mirror: USS Callister,2017,https://boxd.it/hQXi
2021-07-17,Black Mirror: Metalhead,2017,https://boxd.it/hRqk
2021-07-17,Black Mirror: Men Against Fire,2016,https://boxd.it/hSBS
2021-07-17,Black Mirror: White Christmas,2014,https://boxd.it/udfW
2021-07-17,Black Mirror: Crocodile,2017,https://boxd.it/hRoS
2021-07-17,Black Mirror: Black Museum,2017,https://boxd.it/hRqu
2021-07-17,Black Mirror: San Junipero,2016,https://boxd.it/h634
2021-07-17,Black Mirror: Be Right Back,2013,https://boxd.it/hRpw
2021-07-17,Black Mirror: The Entire History of You,2011,https://boxd.it/hQZ4
2021-07-17,Black Mirror: Nosedive,2016,https://boxd.it/hK9G
2021-07-17,Black Mirror: Playtest,2016,https://boxd.it/hRR6
2021-07-17,Black Mirror: The National Anthem,2011,https://boxd.it/hQYK
2021-07-17,Black Mirror: Fifteen Million Merits,2011,https://boxd.it/hQYU
2021-07-17,Black Mirror: The Waldo Moment,2013,https://boxd.it/hRpQ
2021-07-17,Black Mirror: Shut Up and Dance,2016,https://boxd.it/hRRq
2021-07-17,The Spiderwick Chronicles,2008,https://boxd.it/20v2
2021-07-17,Arthur and the Revenge of Maltazard,2009,https://boxd.it/1tKI
2021-07-17,Reaching for the Moon,2013,https://boxd.it/5bWY
2021-07-17,Nausicaä of the Valley of the Wind,1984,https://boxd.it/2bc6
2021-07-18,Beau Travail,1999,https://boxd.it/1NI8
2021-07-19,Spider-Man,2002,https://boxd.it/2a8i
2021-07-19,Spider-Man 2,2004,https://boxd.it/2a88
2021-07-19,Enchanted,2007,https://boxd.it/24co
2021-07-19,Cars,2006,https://boxd.it/29ho
2021-07-19,Cars 3,2017,https://boxd.it/7IPq
2021-07-19,Finding Dory,2016,https://boxd.it/4aAA
2021-07-19,The Good Dinosaur,2015,https://boxd.it/3AD4
2021-07-19,A Dog's Will,2000,https://boxd.it/12u4
2021-07-20,"Patrik, Age 1.5",2008,https://boxd.it/1MFi
2021-07-23,Pain and Glory,2019,https://boxd.it/iOBQ
2021-07-25,Volver,2006,https://boxd.it/2aQO
2021-07-27,The Silent Revolution,2018,https://boxd.it/gedO
2021-07-29,El sur,1983,https://boxd.it/JbM
`
const lines = csvString.split('\n');
let types = lines.shift().split(',')
types = types.map(type => { 
  type = type.toLowerCase()
  let words = type.split(' ')
  if(words.length > 1){
    let secondWord = words[1].split('')
    secondWord[0] = secondWord[0].toUpperCase()
    secondWord = secondWord.join('')
    type = words[0] + secondWord
  }
  return type
})
console.log(types)

lines.forEach(line => {
  let splittedLine = line.split(',')
  let letterboxdURI = splittedLine.pop()
  let year = splittedLine.pop()
  let date = splittedLine.shift()
  let name = splittedLine.join()
  //console.log({date: date, name: name, year: year, letterboxdURI: letterboxdURI})
})

const movies = `Date,Name,Year,Letterboxd URI
2021-07-14,Your Name Engraved Herein,2020,https://boxd.it/qWwA
2021-07-14,Parasite,2019,https://boxd.it/hTha
2021-07-14,Joker,2019,https://boxd.it/h4cS
2021-07-14,Inception,2010,https://boxd.it/1skk
2021-07-14,Get Out,2017,https://boxd.it/eOCm
2021-07-14,Fight Club,1999,https://boxd.it/2a9q
2021-07-14,Lady Bird,2017,https://boxd.it/dGNE
2021-07-14,La La Land,2016,https://boxd.it/a5fa
2021-07-14,The Grand Budapest Hotel,2014,https://boxd.it/3ZqO
2021-07-14,Interstellar,2014,https://boxd.it/4VZ8
2021-07-14,Inglourious Basterds,2009,https://boxd.it/1JzG
2021-07-14,The Wolf of Wall Street,2013,https://boxd.it/3C1m
2021-07-14,Her,2013,https://boxd.it/4O24
2021-07-14,Spirited Away,2001,https://boxd.it/2b4m
2021-07-14,Arrival,2016,https://boxd.it/aNGk
2021-07-14,Eternal Sunshine of the Spotless Mind,2004,https://boxd.it/6YK
2021-07-14,The Social Network,2010,https://boxd.it/17ue
2021-07-14,"Love, Simon",2018,https://boxd.it/g02s
2021-07-14,"Paris, Texas",1984,https://boxd.it/29Ts
2021-07-14,"Girl, Interrupted",1999,https://boxd.it/25ds
2021-07-14,Moonlight,2016,https://boxd.it/d6bE
2021-07-14,1917,2019,https://boxd.it/jj4y
2021-07-14,The Truman Show,1998,https://boxd.it/18U8
2021-07-14,Soul,2020,https://boxd.it/ioLA
2021-07-14,Forrest Gump,1994,https://boxd.it/728
2021-07-14,The Matrix,1999,https://boxd.it/2a1m
2021-07-14,Coco,2017,https://boxd.it/bYJQ
2021-07-14,Taxi Driver,1976,https://boxd.it/2b8y
2021-07-14,Tenet,2020,https://boxd.it/leq4
2021-07-14,Back to the Future,1985,https://boxd.it/2b8e
2021-07-14,The Shawshank Redemption,1994,https://boxd.it/2aHi
2021-07-14,Portrait of a Lady on Fire,2019,https://boxd.it/jkPq
2021-07-14,The Shape of Water,2017,https://boxd.it/dZ5m
2021-07-14,Shutter Island,2010,https://boxd.it/1U82
2021-07-14,It,2017,https://boxd.it/bC8e
2021-07-14,2001: A Space Odyssey,1968,https://boxd.it/2bf0
2021-07-14,Birdman or (The Unexpected Virtue of Ignorance),2014,https://boxd.it/5RFA
2021-07-14,BlacKkKlansman,2018,https://boxd.it/hxL8
2021-07-14,Ratatouille,2007,https://boxd.it/27ww
2021-07-14,Up,2009,https://boxd.it/1OEc
2021-07-14,WALL·E,2008,https://boxd.it/1VEo
2021-07-14,The Martian,2015,https://boxd.it/8SeG
2021-07-14,Donnie Darko,2001,https://boxd.it/2b2A
2021-07-14,Toy Story,1995,https://boxd.it/29qA
2021-07-14,Bohemian Rhapsody,2018,https://boxd.it/f1TK
2021-07-14,A Clockwork Orange,1971,https://boxd.it/2aVE
2021-07-14,Memento,2000,https://boxd.it/2bcK
2021-07-14,M,1931,https://boxd.it/29vq
2021-07-14,The Breakfast Club,1985,https://boxd.it/27q4
2021-07-14,The Perks of Being a Wallflower,2012,https://boxd.it/2ZA8
2021-07-14,Titanic,1997,https://boxd.it/2a2k
2021-07-15,Get Real,1998,https://boxd.it/1xoG
2021-07-15,Fallen Angels,1995,https://boxd.it/1UkW
2021-07-15,Scent of a Woman,1992,https://boxd.it/1YAu
2021-07-15,L'Avventura,1960,https://boxd.it/23hs
2021-07-14,Good Will Hunting,1997,https://boxd.it/2ahY
2021-07-14,Fantastic Mr. Fox,2009,https://boxd.it/1WyQ
2021-07-14,The Prestige,2006,https://boxd.it/293w
2021-07-14,"Monsters, Inc.",2001,https://boxd.it/2a46
2021-07-14,The Florida Project,2017,https://boxd.it/dMG0
2021-07-14,Brokeback Mountain,2005,https://boxd.it/2b2q
`

/* 1 Cria uma função chamada convertCsvToObject   que converte a string acima em um array de objetos, e cada objeto são informações de um filme. As chaves que o objeto deve ter estão na primeira linha. Obs: leve em consideração que há filmes que tem virgula no nome.
2 Crie uma função que retorne o array de objetos criado no exercicio 1 em ordem alfabética
3 Crie uma função que retorne o nome e a data de lançamento do filme mais antigo da lista
4 Crie retorne o nome e a data de lançamento do filme com o maior título
5 Crie uma função que retorne um array com todos os títulos em Camel Case. Por exemplo, "yourNameEngravedHerein"
 */
function convertCsvToObject(string){
  const lines = string.split('\n');
  lines.forEach(line => {
    let splittedLine = line.split(',')
    let letterboxdURI = splittedLine.pop()
    let year = splittedLine.pop()
    let date = splittedLine.shift()
    let name = splittedLine.join()
    if (name.startsWith('"') && name.endsWith('"')){
      name = name.split('')
      name.pop()
      name.shift()
      name = name.join('')
    } 
    console.log({date: date, name: name, year: year, letterboxdURI: letterboxdURI})
  })
}
convertCsvToObject(movies)