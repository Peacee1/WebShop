document.addEventListener("DOMContentLoaded", function () {
  //click cho picsbutton and memebutton
  const productPicsElement = document.getElementById("product-pics");
  productPicsElement.addEventListener("click", () => {
    const picsSpace = [
      { id: "1", name: "cat meme #1", price: 2, srcpic: "./pics/pic1.jpg" },
      { id: "2", name: "cat meme #2", price: 2, srcpic: "./pics/pic2.jpg" },
      { id: "3", name: "cat meme #3", price: 2, srcpic: "./pics/pic3.jpg" },
      { id: "4", name: "cat meme #4", price: 2, srcpic: "./pics/pic4.jpg" },
      { id: "5", name: "cat meme #5", price: 2, srcpic: "./pics/pic5.jpg" },
      { id: "6", name: "cat meme #6", price: 2, srcpic: "./pics/pic6.jpg" },
      { id: "7", name: "cat meme #7", price: 2, srcpic: "./pics/pic7.jpg" },
      { id: "8", name: "cat meme #8", price: 2, srcpic: "./pics/pic8.jpg" },
      { id: "9", name: "cat meme #9", price: 2, srcpic: "./pics/pic9.jpg" },
      { id: "10", name: "cat meme #10", price: 2, srcpic: "./pics/pic10.jpg" },
      { id: "11", name: "cat meme #11", price: 2, srcpic: "./pics/pic11.jpg" },
      { id: "12", name: "cat meme #12", price: 2, srcpic: "./pics/pic12.jpg" },
      { id: "13", name: "cat meme #13", price: 2, srcpic: "./pics/pic13.jpg" },
      { id: "14", name: "cat meme #14", price: 2, srcpic: "./pics/pic14.jpg" },
      { id: "15", name: "cat meme #15", price: 2, srcpic: "./pics/pic15.jpg" },
      { id: "16", name: "cat meme #16", price: 2, srcpic: "./pics/pic16.jpg" },
      { id: "17", name: "cat meme #17", price: 2, srcpic: "./pics/pic17.jpg" },
      { id: "18", name: "cat meme #18", price: 2, srcpic: "./pics/pic18.jpg" },
      { id: "19", name: "cat meme #19", price: 2, srcpic: "./pics/pic19.jpg" },
      { id: "20", name: "cat meme #20", price: 2, srcpic: "./pics/pic20.jpg" },
      { id: "21", name: "cat meme #21", price: 2, srcpic: "./pics/pic21.jpg" },
    ];
    const picsButton = document.getElementById("nonedisplaybox1");
    const memeButton = document.getElementById("nonedisplaybox2");
    if (picsButton.style.display !== "flex") {
      picsButton.style.display = "flex";
    } else {
      picsButton.style.display = "none";
    }
    memeButton.style.display = "none";
    let dataPics = "";
    picsSpace.forEach((obj) => {
      dataPics += `
      <div class="element">
        <img src="${obj.srcpic}" alt="cat meme" />
        <p>${obj.name}</p>
        <p>Price: ${obj.price}$</p>
      <button id="pic${obj.id}">Buy</button></div>
      `;
    });
    document.getElementById("nonedisplaybox1").innerHTML = dataPics;
  });

  const productMemeElement = document.getElementById("product-meme");
  productMemeElement.addEventListener("click", () => {
    const picsButton = document.getElementById("nonedisplaybox1");
    const memeButton = document.getElementById("nonedisplaybox2");
    if (memeButton.style.display !== "flex") {
      memeButton.style.display = "flex";
    } else {
      memeButton.style.display = "none";
    }
    picsButton.style.display = "none";
  });
  //tạo sự kiện click cho giỏ hàng
  const cart = document.getElementById("cart");
  cart.addEventListener("click", function () {
    const cartbox = document.getElementById("cartbox");
    if (cartbox.style.transform !== "translateY(0%)") {
      cartbox.style.transform = "translateY(0%)";
    } else {
      cartbox.style.transform = "translateY(100%)";
    }
  });
  const yourcart = [];
});
