$(document).ready(function() {
  $("#view").click(function() {
    $(".products").toggleClass("products-table");
  });

  // Array of objects containing product details including paragraph
  var products = [
    {
      name: "Product 1",
      description: "Description for Product 1",
      price: "$19.99",
      image: "path/to/product1.jpg",
      paragraph: ["LIFE SO SHIT", "LIFE SO GREAT", "LIFE SO SHIT"],
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: "$29.99",
      image: "path/to/product2.jpg",
      paragraph: ["Hello how are you", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "LIFE SO SHIT"],
    },
    // Add more products as needed
  ];

  // Add click event to each product
  $(".product").click(function() {
    // Get product index based on the clicked product's position
    var productIndex = $(".product").index(this);
    var product = products[productIndex];

    // Update modal content
    $("#modalTitle").text(product.name);
    $("#modalDescription").text(product.description);
    $("#modalPrice").text(product.price);
    $("#modalImage").attr("src", product.image);

    // Update modal paragraph list
    var modalParagraphList = $("#modalParagraphList");
    modalParagraphList.empty();
    product.paragraph.forEach(function(paragraph) {
      $("<li>").text(paragraph).appendTo(modalParagraphList);
    });

    // Show the modal
    $("#productModal").css("display", "block");

    // Add click event to close the modal when clicking on the overlay
    $(".modal").click(function(event) {
      if (event.target === this) {
        $("#productModal").css("display", "none");
        $(this).off("click"); // Remove the click event to prevent unwanted behavior
      }
    });
  });

  // Add click event to close the modal when clicking the close button
  $(".close").click(function() {
    $("#productModal").css("display", "none");
  });
});