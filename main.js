document.addEventListener("DOMContentLoaded", function () {
  const user_logint = `<button class="log_in">Log in</button>
  <button class="sign_up">Sign up</button>`;
  let userSpace = document.querySelector(".user");
  userSpace.innerHTML = user_logint;
  const header = `<div class="head2">
  <div class="search">
    <i class="bx bx-search"></i>
    <input id="search" placeholder="Search..." type="text" />
  </div>
  <div id="cart" class="cart"><i class="bx bx-cart"></i></div>
</div>
<div class="product">
  <div class="option">
    <a class="op-button" id="product-pics">Pics</a>
    <a class="op-button" id="product-meme">Meme</a>
    <a class="op-button" href="">Post</a>
  </div>
  <div id="nonedisplaybox1" class="nonedisplaybox"></div>
  <div id="nonedisplaybox2" class="nonedisplaybox"></div>
  <div id="searchSpace" class="nonedisplaybox"></div>
</div>`;
  let container = document.querySelector(".container");
  container.innerHTML = header;
  const User = [
    { user: "peacee1Admin", password: "saocxdc", maccount_balance: "1000000" },
  ];
  const url = "http://localhost:8000/users";
  let loginBox = document.querySelector(".loginBox");
  const picsSpace = [
    { id: "P1", name: "cat pics #1", price: 2, srcpic: "./pics/pic1.jpg" },
    { id: "P2", name: "cat pics #2", price: 2, srcpic: "./pics/pic2.jpg" },
    { id: "P3", name: "cat pics #3", price: 2, srcpic: "./pics/pic3.jpg" },
    { id: "P4", name: "cat pics #4", price: 2, srcpic: "./pics/pic4.jpg" },
    { id: "P5", name: "cat pics #5", price: 2, srcpic: "./pics/pic5.jpg" },
    { id: "P6", name: "cat pics #6", price: 2, srcpic: "./pics/pic6.jpg" },
    { id: "P7", name: "cat pics #7", price: 2, srcpic: "./pics/pic7.jpg" },
    { id: "P8", name: "cat pics #8", price: 2, srcpic: "./pics/pic8.jpg" },
    { id: "P9", name: "cat pics #9", price: 2, srcpic: "./pics/pic9.jpg" },
    { id: "P10", name: "cat pics #10", price: 2, srcpic: "./pics/pic10.jpg" },
    { id: "P11", name: "cat pics #11", price: 2, srcpic: "./pics/pic11.jpg" },
    { id: "P12", name: "cat pics #12", price: 2, srcpic: "./pics/pic12.jpg" },
    { id: "P13", name: "cat pics #13", price: 2, srcpic: "./pics/pic13.jpg" },
    { id: "P14", name: "cat pics #14", price: 2, srcpic: "./pics/pic14.jpg" },
    { id: "P15", name: "cat pics #15", price: 2, srcpic: "./pics/pic15.jpg" },
    { id: "P16", name: "cat pics #16", price: 2, srcpic: "./pics/pic16.jpg" },
    { id: "P17", name: "cat pics #17", price: 2, srcpic: "./pics/pic17.jpg" },
    { id: "P18", name: "cat pics #18", price: 2, srcpic: "./pics/pic18.jpg" },
    { id: "P19", name: "cat pics #19", price: 2, srcpic: "./pics/pic19.jpg" },
    { id: "P20", name: "cat pics #20", price: 2, srcpic: "./pics/pic20.jpg" },
    { id: "P21", name: "cat pics #21", price: 2, srcpic: "./pics/pic21.jpg" },
  ];
  const memeSpace = [
    { id: "M1", name: "cat meme #1", price: 2, srcpic: "./meme/meme1.jpg" },
    { id: "M2", name: "cat meme #2", price: 2, srcpic: "./meme/meme2.jpg" },
    { id: "M3", name: "cat meme #3", price: 2, srcpic: "./meme/meme3.jpg" },
    { id: "M4", name: "cat meme #4", price: 2, srcpic: "./meme/meme4.jpg" },
    { id: "M5", name: "cat meme #5", price: 2, srcpic: "./meme/meme5.jpg" },
    { id: "M6", name: "cat meme #6", price: 2, srcpic: "./meme/meme6.jpg" },
    { id: "M7", name: "cat meme #7", price: 2, srcpic: "./meme/meme7.jpg" },
  ];

  const productSpace = [...picsSpace, ...memeSpace];
  const picsButton = document.getElementById("nonedisplaybox1");
  const memeButton = document.getElementById("nonedisplaybox2");
  const renderListProduct = (wrapperElement, data) => {
    // wrapperElement: div mình apppend element vào
    // data: danh sách
    wrapperElement.innerHTML = "";
    data.forEach((obj) => {
      const element = document.createElement("div");
      element.className = "element";
      const elementpics = document.createElement("img");
      elementpics.src = `${obj.srcpic}`;
      elementpics.alt = "cat meme";
      const elementName = document.createElement("p");
      elementName.innerHTML = `${obj.name}`;
      const elementPrice = document.createElement("p");
      elementPrice.innerHTML = `Price: ${obj.price}$`;
      const Buybtn = document.createElement("button");
      Buybtn.className = "add";
      Buybtn.id = `${obj.id}`;
      Buybtn.innerHTML = "Buy";
      element.appendChild(elementpics);
      element.appendChild(elementName);
      element.appendChild(elementPrice);
      element.appendChild(Buybtn);
      wrapperElement.appendChild(element);
    });
  };
  function renderCart(cartSpace, cartList) {
    cartSpace.innerHTML = "";
    cartList.forEach((cartobj) => {
      let cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      let item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `${cartobj.name} price:${cartobj.price}$`;
      let addBtn = document.createElement("a");
      addBtn.className = "add-item";
      addBtn.innerHTML = "+";
      addBtn.id = `A${cartobj.id}`;
      let reduceBtn = document.createElement("a");
      reduceBtn.className = "reduce-item";
      reduceBtn.innerHTML = "-";
      reduceBtn.id = `R${cartobj.id}`;
      let deleteBtn = document.createElement("a");
      deleteBtn.className = "delete-item";
      deleteBtn.innerHTML = "x";
      deleteBtn.id = `D${cartobj.id}`;
      let quantity = document.createElement("p");
      quantity.innerHTML = `SL:${cartobj.quantity}`;
      cartItem.appendChild(item);
      cartItem.appendChild(quantity);
      cartItem.appendChild(addBtn);
      cartItem.appendChild(reduceBtn);
      cartItem.appendChild(deleteBtn);
      cartSpace.appendChild(cartItem);
    });
  }
  //click cho picsbutton and memebutton
  const productPicsElement = document.getElementById("product-pics");
  productPicsElement.addEventListener("click", () => {
    if (picsButton.style.display !== "flex") {
      picsButton.style.display = "flex";
    } else {
      picsButton.style.display = "none";
    }
    memeButton.style.display = "none";
    searchSpace.style.display = "none";
    picsSpace.forEach((obj) => {
      renderListProduct(picsButton, picsSpace);
      let search = document.getElementById("search");
      if (picsButton.style.display == "flex") {
        search.placeholder = "Search in pics...";
      } else {
        search.placeholder = "Search...";
      }
    });
  });
  //click cho picsbutton and memebutton
  const productMemeElement = document.getElementById("product-meme");
  productMemeElement.addEventListener("click", () => {
    if (memeButton.style.display !== "flex") {
      memeButton.style.display = "flex";
    } else {
      memeButton.style.display = "none";
    }
    picsButton.style.display = "none";
    searchSpace.style.display = "none";
    memeSpace.forEach((obj) => {
      renderListProduct(memeButton, memeSpace);
      let search = document.getElementById("search");
      if (memeButton.style.display == "flex") {
        search.placeholder = "Search in meme...";
      } else {
        search.placeholder = "Search...";
      }
    });
  });
  /*   tạo sự kiện click cho giỏ hàng */
  const cart = document.getElementById("cart");
  cart.addEventListener("click", function () {
    const cartbox = document.getElementById("cartbox");
    if (cartbox.style.transform !== "translateY(0%)") {
      cartbox.style.transform = "translateY(0%)";
    } else {
      cartbox.style.transform = "translateY(100%)";
    }
  });

  //logIn
  document.querySelector(".log_in").addEventListener("click", () => {
    const log_in = document.createElement("div");
    log_in.className = "login";
    const Ech_img = document.createElement("img");
    Ech_img.src = "./echngu.png";
    log_in.appendChild(Ech_img);
    const log_in_container = document.createElement("div");
    log_in_container.className = "login-box";
    log_in.appendChild(log_in_container);
    const username = document.createElement("input");
    const password = document.createElement("input");
    username.placeholder = "user";
    username.type = "text";
    password.placeholder = "password";
    password.type = "password";
    log_in_container.appendChild(username);
    log_in_container.appendChild(password);
    const loginBTN = document.createElement("button");
    loginBTN.innerHTML = "Log in";
    log_in_container.appendChild(loginBTN);
    loginBox.innerHTML = "";
    loginBox.appendChild(log_in);
    loginBTN.addEventListener("click", () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.forEach((user) => {
            if (
              username.value == user.username &&
              password.value == user.password
            ) {
              userSpace.innerHTML = `user: ${user.username} <br> Account balance:${user.account_balance}$ `;
              loginBox.innerHTML = "";
              user.account_status = "1";
            }
          });
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu:", error);
        });
    });
  });
  //signUp
  document.querySelector(".sign_up").addEventListener("click", () => {
    const sign_up = document.createElement("div");
    sign_up.className = "login";
    const Ech_img = document.createElement("img");
    Ech_img.src = "./echngu.png";
    sign_up.appendChild(Ech_img);
    const sign_up_container = document.createElement("div");
    sign_up_container.className = "login-box";
    sign_up.appendChild(sign_up_container);
    const username = document.createElement("input");
    const password = document.createElement("input");
    username.placeholder = "user";
    username.type = "text";
    password.placeholder = "password";
    password.type = "password";
    sign_up_container.appendChild(username);
    sign_up_container.appendChild(password);
    const signupBTN = document.createElement("button");
    signupBTN.innerHTML = "Sign up";
    sign_up_container.appendChild(signupBTN);
    loginBox.innerHTML = "";
    loginBox.appendChild(sign_up);
    signupBTN.addEventListener("click", () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("Dữ liệu từ server:", data);

          // Duyệt qua từng phần tử trong mảng
          let peacee1 = 0;
          data.forEach((user) => {
            if (username.value == user.username) {
              peacee1 += 1;
              alert("Username đã tồn tại");
            }
            if (username.value == "" || password.value == "") {
              peacee1 += 1;
              alert("Bỏ trống");
            }
          });
          if (peacee1 == 0) {
            const userData = {
              username: username.value,
              password: password.value,
              account_balance: "0",
              account_status: "0",
            };
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((response) => response.json())
              .then((data) => {
                alert(`Đã thêm người dùng mới:${userData.username}`, data);
                loginBox.innerHTML = "";
              })
              .catch((error) => {
                alert("Lỗi khi thêm người dùng:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu:", error);
        });
    });
  });
  /* edit giỏ hàng ở pics*/
  const yourcart = [];
  let total = 0;
  document
    .querySelector("#nonedisplaybox1")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("add")) {
        const i = event.target.getAttribute("id");
        picsSpace.forEach((obj) => {
          if (obj.id == i) {
            const check = yourcart.find((item) => item.id === i);
            if (!check) {
              obj.quantity = 1;
              yourcart.push(obj);
              total += obj.price;
            } else {
              total += obj.price;
              obj.quantity = obj.quantity + 1;
            }
          }
        });
      }
      const cartPro = document.getElementById("cart-product");
      renderCart(cartPro, yourcart);
      document.getElementById("total").innerHTML = total;
    });
  /*edit giỏ hàng ở meme */
  document
    .querySelector("#nonedisplaybox2")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("add")) {
        const i = event.target.getAttribute("id");
        memeSpace.forEach((obj) => {
          if (obj.id == i) {
            const check = yourcart.find((item) => item.id === i);
            if (!check) {
              obj.quantity = 1;
              yourcart.push(obj);
              total += obj.price;
            } else {
              total += obj.price;
              obj.quantity = obj.quantity + 1;
            }
          }
        });
      }
      const cartPro = document.getElementById("cart-product");
      renderCart(cartPro, yourcart);

      document.getElementById("total").innerHTML = total;
    });
  //Nút clear
  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#cart-product").innerHTML = "";
    total = 0;
    document.getElementById("total").innerHTML = total;
    yourcart.splice(0, yourcart.length);
  });
  // thêm sửa xoá giỏ hàng
  const cartPro = document.getElementById("cart-product");
  cartPro.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-item")) {
      let i = event.target.getAttribute("id").slice(1);
      yourcart.forEach((item, index) => {
        if (item.id == i) {
          yourcart.splice(index, 1);
          total -= item.price * item.quantity;
          renderCart(cartPro, yourcart);
          document.getElementById("total").innerHTML = total;
        }
      });
    }
    if (event.target.classList.contains("add-item")) {
      let i = event.target.getAttribute("id").slice(1);
      yourcart.forEach((item, index) => {
        if (item.id == i) {
          item.quantity = item.quantity + 1;
          total += item.price;
          renderCart(cartPro, yourcart);
          document.getElementById("total").innerHTML = total;
        }
      });
    }
    if (event.target.classList.contains("reduce-item")) {
      let i = event.target.getAttribute("id").slice(1);
      yourcart.forEach((item, index) => {
        if (item.id == i) {
          item.quantity = item.quantity - 1;
          total -= item.price;
          if (item.quantity == 0) {
            yourcart.splice(index, 1);
          }
          renderCart(cartPro, yourcart);
          document.getElementById("total").innerHTML = total;
        }
      });
    }
  });
  //Thanh tìm kiếm
  const searchSpace = document.getElementById("searchSpace");
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keydown", (event) => {
    const searchItem = [];
    if (event.key === "Enter") {
      searchSpace.innerHTML = "";
      picsButton.style.display = "none";
      memeButton.style.display = "none";
      searchSpace.style.display = "none";

      if (searchSpace.style.display !== "flex") {
        searchSpace.style.display = "flex";
      }
      const search_input_value = searchInput.value;
      productSpace.find((item) => {
        //so sanh bang
        if (item.name.includes(search_input_value)) {
          searchItem.push(item);
        }
        //index of js

        //includes js

        //tim kiem khong dau js
      });
      console.log(productSpace);
      if (searchItem.length == 0) {
        const search_notification = document.createElement("p");
        search_notification.className = "search-notification";
        search_notification.innerHTML = "Không tìm thấy sản phẩm nào!!!";
        searchSpace.appendChild(search_notification);
      } else {
        renderListProduct(searchSpace, searchItem);
      }
    }
    //edit giỏ hàng ở search
    document
      .querySelector("#searchSpace")
      .addEventListener("click", (event) => {
        if (event.target.classList.contains("add")) {
          const i = event.target.getAttribute("id");
          searchItem.forEach((obj) => {
            if (obj.id == i) {
              const check = yourcart.find((item) => item.id === i);
              if (!check) {
                obj.quantity = 1;
                yourcart.push(obj);
                total += obj.price;
              } else {
                total += obj.price;
                obj.quantity = obj.quantity + 1;
              }
            }
          });
        }
        const cartPro = document.getElementById("cart-product");
        renderCart(cartPro, yourcart);

        document.getElementById("total").innerHTML = total;
      });
  });
  const buyBTN = document.querySelector(".buy");
  buyBTN.addEventListener("click", () => {
    console.log(6);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((user) => {
          if (user.account_balance < total) {
            alert("Bạn ko đủ tiền");
          } else {
          }
        });
      });
  });
});
