let data = [];

// gallery image name must be a number in increasing order.
// on image update in gallery, array length must be updated in for loop.

(() => {
  for (let i = 1; i < 61; i++) {
    data.push({ image: `./assets/gallery/${i}.jpeg` });
  }
})();

export default data;
