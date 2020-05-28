/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 1,
    title: "Item Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)",
    price: "7500",
    offer: "FLAT 5% off",
    original_price: "8100",
    rating: "4"
  },
  {
    id: 2,
    title: "Item Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (2)"
  },
  {
    id: 3,
    title: "Item Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (3)"
  },
  {
    id: 4,
    title: "Item Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (4)"
  },
  {
    id: 5,
    title: "Category Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (5)"
  },
  {
    id: 6,
    title: "Category Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (6)"
  },
  {
    id: 7,
    title: "Category Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (7)"
  },
  {
    id: 8,
    title: "Category Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (8)"
  }
]

const _categories_options = [
  {
      value:1,
      text:"All",
  },
  {
      value:2,
      text:"Scaffold",
  },
  {
      value:3,
      text:"Ladder",
  },
  {
      value:4,
      text:"Work Platforms",
  }
]

const _materials_options = [
  {value:1,text:"FRP"},
  {value:2,text:"Aluminium"}
]     

const _additional_options = [
{ text: 'Tool Tray', value: 1 },
{ text: 'Wheels', value: 2 },
{ text: 'Side Support', value: 3 },
{ text: 'Guardrail', value: 4 }
]

const _width_options = [
{ text: 'Single Width(700MM)', value: 1},
{ text: 'Double Width(1450MM)', value: 2},
]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    getAllCategories (cb) {
      setTimeout(() => cb(_categories_options), 100)
    },

    getAllMaterials (cb) {
      setTimeout(() => cb(_materials_options), 100)
    },

    getAllAdditional (cb) {
      setTimeout(() => cb(_additional_options), 100)
    },

    getAllWidth (cb) {
      setTimeout(() => cb(_width_options), 100)
    },

    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }