
const menu = [
    {
      id: 1,
      title: "ponganal with Chetney",
      category: "breakfast",
      price: 35.99,
      img: "https://imgmedia.lbb.in/media/2019/07/5d1b64db6151477f50f5de04_1562076379805.jpg",
      desc: `Gunta Ponganalu is one of the renowned breakfast in South India. It is a healthy breakfast which is also served as an evening snack with chai (tea).
      This light breakfast tastes delicious with any podi, allam pachadi (ginger chutney) or any coconut chutney.
       `,
    },
    {
      id: 2,
      title: "Full Meals",
      category: "lunch",
      price: 100.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlkkEs6AqzQ2kF_JwhdvEaSsjzKhLhzpdJw&s",
      desc: `Bhojanam is also used to refer to an Indian-style meal made up of a selection of various dishes which are served on a platter.Bhojanam is also used in south Asia for ceremonial purposes. `,
    },
    {
      id: 3,
      title: "Oninon Samosa",
      category: "shakes",
      price: 10.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA5swSrmThV69LTi3C343RrthIMpj_BB7tQ&s",
      desc: `The samosa is prepared with an all-purpose flour  and stuffed with a filling, often  cooked or mashed boiled potato, onions,  ginger, spices and green chili. A samosa can be vegetarian or non-vegetarian`,
    },
    {
      id: 4,
      title: "Idly Chetney",
      category: "breakfast",
      price: 30.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9aDOx8v11KEADwPXiukt3IrdLvEI0-khe993s0ICUgbEtrZk0krAEBExtw&s",
      desc: `Idli is a type of steamed fluffy cake that is made of a batter of Urad Dal (black gram) and Rice. It is a very popular food in whole India and not only in India perhaps in other countries too. According to many people, `,
    },
    {
      id: 5,
      title: "egg Biriyani",
      category: "lunch",
      price: 122.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-uPrB29Dsg-Vw2605Bh7Nbs9D_sPq0i8Aw&s",
      desc: `Egg dum biryani recipe – Hyderabadi egg dum biryani made with basmati rice, spice. Biryani  had been loved across the globe for its unique aroma, flavor & taste. `,
    },
    {
      id: 6,
      title: "Mysore Bonda",
      category: "shakes",
      price: 35.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGSN5pHQfJfsNBMUQeoDjS1ZIkZGNZ0a3zw&s",
      desc: `Mysore Bonda is made with.The taste and texture of these is good & fluffy even made with wheat Flour`,
    },
    {
      id: 7,
      title: "Masala Dosa",
      category: "breakfast",
      price: 70.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z8pl8IOsfUFTM6uel-T3hieeH9cx86rMKQ&s",
      desc: `Masala Dosa is one of the most popular South Indian breakfast dishes served in restaurants and tiffin centres. Dosa is a crepe made using fermented rice and lentil batter. Masala Dosa is one that is crisp, and has a potato masala or spiced  potatoes stuffed in it. `,
    },
    {
      id: 8,
      title: "lunch Meals",
      category: "lunch",
      price: 110.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKVyoTTgINEYESBDwrc6dJwhOaBixwyJj8A&s",
      desc: `Lunch is the meal you eat in the middle of the day. If you only have a short lunch break   `,
    },
    {
      id: 9,
      title: "Chilli Bhajji",
      category: "shakes",
      price: 20.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4J4uK9IglU0CmAyyCLWIskuDPIsw7H9hoUg&s",
      desc: `It is a perfect evening snack with a cup of tea or coffee, especially during monsoon or winter season. it is generally eaten as it is without any sides but tastes great with dips like green chutney, tomato sauce or schezwan chutney.`,
    },
    {
      id: 10,
      title: "Chicken curry with ragi ball",
      category: "dinner",
      price: 150.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7godj3zYXFpCDNS1C68ZQ1ytIGi8TodK3pQ&s",
      desc: `Ragi Mudde are gluten-free traditional balls made with finger millet flour. Finger millet is known as ragi in South India, and mudde is a Kannada word for soft ball. Ragi mudde are nutritious, healthy and a wholesome every day food of a large rural population in Karnataka..`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }