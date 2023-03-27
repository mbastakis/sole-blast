module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    aboutus: {
      entry: "src/pages/AboutUs/AboutUs.js",
      template: "public/index.html",
      title: "About Us",
      filename: "aboutus.html",
      chunks: ["chunk-vendors", "chunk-common", "aboutus"],
    },
    faq: {
      entry: "src/pages/FAQ/FAQ.js",
      template: "public/index.html",
      title: "FAQ",
      filename: "faq.html",
      chunks: ["chunk-vendors", "chunk-common", "faq"],
    },
    gallery: {
      entry: "src/pages/Gallery/Gallery.js",
      template: "public/index.html",
      title: "Gallery",
      filename: "gallery.html",
      chunks: ["chunk-vendors", "chunk-common", "gallery"],
    },
    yoursole: {
      entry: "src/pages/YourSole/YourSole.js",
      template: "public/index.html",
      title: "Your Sole",
      filename: "yoursole.html",
      chunks: ["chunk-vendors", "chunk-common", "yoursole"],
    },
  },
};
