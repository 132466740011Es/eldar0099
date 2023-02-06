const second = () => {

  const swiper = new Swiper(".secondSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,

    // effect: 'fade',

    // effect: "cube",
    // grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    // effect: 'flip',
    // grapCursor: true,

    // effect: 'cards',
    // grapCursor: true,


    // autoplay: {
    //     delay:2500,
    //     diabaleOnInteraction: true,
    // }

    // slidesPerView: 3,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });



  const data = [
    {
      name: 'Paris',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87FBjr0aPo750AnU80H86aWGZSDjEEhqotQ&usqp=CAU'
    },
    {
      name: 'Italia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E2HprvkUH_1Cfor4ms-ubbVnRg0KdR9BOg&usqp=CAU'
    },
    {
      name: 'New York',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNt5xVj_FHcXiJa4g0wTL8N8NHQ6B1bgIfA&usqp=CAU'
    },
    {
      name: 'London',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7kHJh34eJNQeSOZB_Y1FhwfSKxBgUDPKPg&usqp=CAU'
    }
  ]






  const output = document.querySelectorAll('.swiper-wrapper')[1]


  data.forEach(el => {
    const slide = document.createElement('div')
    const text = document.createElement('p')
    const image = document.createElement('img')


    slide.className = 'swiper-slide'
    text.textContent = el.name
    image.src = el.img

    output.append(slide)
    slide.append(text, image)


  });





}

second()