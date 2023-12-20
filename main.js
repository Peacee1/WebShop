document.addEventListener("DOMContentLoaded", function () {
  //click cho picsbutton and memebutton
  const productPicsElement = document.getElementById("product-pics");
  productPicsElement.addEventListener("click", () => {
    console.log(productPicsElement);
    const picsButton = document.getElementById("nonedisplaybox1");
    const memeButton = document.getElementById("nonedisplaybox2");
    if (picsButton.style.display !== "flex") {
      picsButton.style.display = "flex";
    } else {
      picsButton.style.display = "none";
    }
    memeButton.style.display = "none";
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
  //Làm giỏ hàng
});

