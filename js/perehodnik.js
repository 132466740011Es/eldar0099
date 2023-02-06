const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,

    // effect: "fade",

    // effect: "cube",
    // grabCursor: true,
    // cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },

    // effect: "flip",
    // grabCursor: true,

    // effect: "cards",
    // grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },

    slidesPerView: 4,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
   
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        }
    
      }
}); 




// const data = [
//     {
//       name: 'burgers',
//       img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg'
//     },
//     {
//       name: 'pizzas',
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_l2d_jlbEtZK0n_Vk9sPpKcVtWIFjw3fUMg&usqp=CAU'
//     },
//     {
//       name: 'drinks',
//       img: 'https://c4.wallpaperflare.com/wallpaper/97/512/27/a-glass-of-beer-wallpaper-preview.jpg'
//     },
//     {
//       name: 'COCKTAILS',
//       img: 'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg'
//     }
//   ]
  
  
  const swiperRender = (api) => {
    const sliderWrap = document.querySelector('.myWrapper')
    api.forEach(el => {
      const slide = document.createElement('div')
      const image = document.createElement('div')
  
      slide.className = 'swiper-slide'
      image.className = 'swiper-image'
  
      slide.style.backgroundImage = `url('${el.img}')`
  
  
  
      slide.append(image)
      sliderWrap.append(slide)
    })
  }
  swiperRender(data)