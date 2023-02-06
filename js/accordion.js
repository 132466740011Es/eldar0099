// Accordion All tabs open
// const accordion = () =>{
//     const accordion = document.querySelectorAll('.accordion__wrap')


//         accordion.forEach(el=>{
//             el.addEventListener('click',()=>{
//                 el.classList.toggle('accordion__active')
//              })
//         })
//         }
// accordion()
// Accordion All tabs open

    

const accordionSection = () => {
    const output = document.querySelector('.accordion')
    
    const data = [
        {
            title: 'first',
            text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
            Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
        },
        {
            title: 'second',
            text: `Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Captain America, Thor, Doctor Strange, Hulk, Wolverine, and Captain Marvel, as well as popular superhero teams such as the Avengers, the X-Men, the Fantastic Four, and the Guardians of the Galaxy. Its stable of well-known supervillains includes the likes of Doctor Doom, Magneto, Ultron, Thanos, Green Goblin, Galactus, Loki, and Kingpin. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City.[4] Additionally, Marvel has published several licensed properties from other companies.
             This includes Star Wars comics twice from 1977 to 1986 and again since 2015.`,
        },
        {
            title: 'third',
            text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
            Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
        },
        {
            title: 'fourth',
            text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
            Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
        },
    
    ]
    
    const accordionRender = () => {
        data.forEach(el => {
            const wrap = document.createElement('div')
            const header = document.createElement('div')
            const name = document.createElement('p')
            const img = document.createElement('img')
            const contentWrap = document.createElement('div')
            const content = document.createElement('p')
    
            wrap.className = 'accordion__wrap'
            header.className = 'accordion__name'
            img.className = 'plus'
            img.src = './plus.png'
            contentWrap.className = 'accordion__content'
    
            name.textContent = el.title
            content.textContent = el.text
    
            contentWrap.append(content)
            header.append(name, img)
            wrap.append(header, contentWrap)
            output.append(wrap)
        })
    }
    accordionRender()
    
    
    const accordion = () => {
        const accordion = document.querySelectorAll('.accordion__wrap')
        console.log(accordion);
        for (let i = 0; i < accordion.length; i++) {
            // console.log(`first: ${i}`);
    
            accordion[i].addEventListener('click', () => {
                accordion.forEach((el, index) => {
                    // console.log(`second:${index}`);
                    if (i === index) {
                        el.classList.toggle('accordion__active')
                    } else {
                        console.log('accordion close ' + index);
                        el.classList.remove('accordion__active')
                    }
                })
            })
        }
    }
    
    accordion()
    }
    accordionSection()
    
    
    
    
    
    // e.stopPropagation()
    
    