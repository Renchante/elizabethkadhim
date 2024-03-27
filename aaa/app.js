$(document).ready(function() {
  $("#view").click(function() {
    $(".products").toggleClass("products-table");
  });

  // Array of objects containing product details including paragraph
  var products = [
    {
      name: "Derm Detector",
      description: "An image-classifciation AI that\
      can tell user's what skin disease they have.",
      price: "My biggest challenge was the time constraint. Having little experience\
      with creating any form of AI model, I had about 24 hours to create this model. My biggest thanks goes to coffee and Monster.\
      I created this as follows:",
      image: "images/derm_detec.png",
      width: 300, 
      height: 250,
      paragraph: ["Implemented MobileNet’s pretrained model with Tensorflow.js to develop a model using\
      images from the HAM10000 dataset.", "Used Tensorflow’s ImageDataGenerator for data preprocessing and augmentation.", "Compiled\
      the model with Adam optimization algorithm to minimize cross-entropy loss."],
      github: "https://github.com/Renchante/DermDetect",
    },
    {
      name: "B.R.E.A.K",
      description: "Developed a program designed for the removal of inherent biases in job applications by temporarily withholding\
      information that could otherwise create bias.",
      price: "This project was for my first hackathon. I ended up winning first on the coding stream which is the main.\
      My biggest headache with this project was the SQL database. I ended up learning how to use SQL later but as an alternative\
      I used SQLite since it was a lot easier than SQL. I created this as follows:",
      image: "images/break_project.jpg",
      width: 300, 
      height: 300,
      paragraph: ["Written in Python.", "GUI made using Tkinter.", "pytesseract for OCR pdf parsing.","smtplib automated emailing.\
      ", "SQLite database to hold applications information"],
      github: "https://github.com/aditya-s3n/HTR-2021"
    },

    {
      name: "Personal Portfolio Website",
      description: "Developed a website to include my resume and holds my projects.",
      price: "Like all programers, I needed my own site. But I wanted to standout. I spent so long researching\
      on UI & UX forums on how to make make my website better. I also wanted to add elements that stood out for\
      example, the button. The shimmer button, the title, the glitch sign, the glitch cards, and the modal\
      took a lot of work to make. Aside from the programming aspects, designing was challenging.\
      The iterations and changes I made to this website were detailed and nitpicky. I have changed the title color\
      around 6 times and the entire color scheme so much more. I found hosting really easy since I had prior experience\
      from prior projects using Firebase.",
      image: "images/better_image.png",
      width: 300, 
      height: 300,
      paragraph: ["Implemented UX elements to create a parallax website featuring a neo-glass aesthetic and nord theme.\
      ", "Configured website hosting on Firebase, integrating jQuery and Bootstrap, with a Firebase database."],
      github: "https://github.com/Renchante/elizabethkadhim",
    },
    {
      name: "Sims Website",
      description: "Made a website with my friend for a project that revolved around creating an event for any company.",
      price: "This was the first time I worked on Firebase and Typescript. Implementing Firebase with an emulator\
      was quite simple but creating the database to store users answers was difficult. I used Firebase realtime database\
      to get real-time updates and store user's answers. This allowed us to give the first trivia winners some prizes.\
      The themeing for this website was very simple since I had to follow the design and color theme made already by Sims.",
      image: "path/to/product2.jpg",
      paragraph: [],
      github: "https://github.com/Renchante/ics4u-project-management",
    },
  ];

  // Add click event to each product
  $(".product").click(function() {
    // Get product index based on the clicked product's position
    var productIndex = $(".product").index(this);
    var product = products[productIndex];

    // Update modal content
    $("#modalTitle").text(product.name).css("font-family", "Raleway",).css("color","rgb(255, 223, 150)");
    $("#modalDescription").text(product.description).css("font-family", "Raleway").css("color","rgba(255, 223, 150,.8)");
    $("#modalPrice").text(product.price).css("font-family", "Raleway");
    $("#modalImage").attr("src", product.image).attr("width", product.width).attr("height", product.height);
    $("")

    // Update modal paragraph list
    var modalParagraphList = $("#modalParagraphList");
    modalParagraphList.empty();
    product.paragraph.forEach(function(paragraph) {
      $("<li>").html("<br>").text(paragraph).css("font-family", "Raleway").appendTo(modalParagraphList);
      $("<br>").appendTo(modalParagraphList);
    
    });
    if (product.github) {
      $("<div>").html("<a color='red' href='" + product.github + "' target='_blank' style='color: rgba(255, 97, 197, 1)'>Check out the project on GitHub.</a><br>").css("font-family", "Raleway").appendTo(modalParagraphList);
    }

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