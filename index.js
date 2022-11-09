const buttons = document.querySelectorAll("button");

[].forEach.call(buttons, function (button) {
  button.addEventListener(
    "click",
    function () {
      //Lägg in och fyll datalagret vid checkout
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "order_food",
        formLocation: "footer",
      });

      window.location =
        "thankyou.html?product=" +
        button.getAttribute("data-product") +
        "&price=" +
        button.getAttribute("data-price");
    },
    false
  );
});
