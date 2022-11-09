const buttons = document.querySelectorAll("button");

[].forEach.call(buttons, function (button) {
  button.addEventListener(
    "click",
    function () {
      //Lägg in och fyll datalagret vid checkout
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event': 'order',
       'product_ordered': button.getAttribute()
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
