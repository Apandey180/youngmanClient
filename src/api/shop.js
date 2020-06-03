/**
 * Mocking client-server processing
 */
import apiClient from './apiclient';


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

const _recent = [
  {
    id: 1,
    title: "Item Name",
    image: "img/theme/img-1-1000x900.jpg",
    alt: "Image Placeholder",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)"
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
  }
]
  
  export default {
    getProducts (cb) {
      cb([
        {
            "id": 1,
            "title": "Ladder",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua consequat.",
            "inventory": 21,
            "price": 7500,
            "original_price": 8000,
            "image": "https://images-na.ssl-images-amazon.com/images/I/713kcEI7hjL._SL1500_.jpg",
            "rating": 4,
            "offer": "FLAT 5% Off",
            "created_at": "2020-06-01T07:11:18.000000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "id": 2,
            "title": "Scaffolding",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua consequat.",
            "inventory": 21,
            "price": 7500,
            "original_price": 8000,
            "image": "https://youngman.co.in/wp-content/uploads/2017/10/30233000_PI.jpeg",
            "rating": 4,
            "offer": "FLAT 5% Off",
            "created_at": "2020-06-01T07:11:18.000000Z",
            "updated_at": null,
            "deleted_at": null
        },
        {
            "id": 3,
            "title": "WorkPlatform",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua consequat.",
            "inventory": 21,
            "price": 8000,
            "original_price": 8000,
            "image": "https://images-na.ssl-images-amazon.com/images/I/717y8K5Tl2L._SL1500_.jpg",
            "rating": 4,
            "offer": null,
            "created_at": "2020-06-01T07:11:18.000000Z",
            "updated_at": null,
            "deleted_at": null
        }
    ])
    },
  
    getProductById (id) {
      const product = {
        "id": 1,
            "title": "Ladder",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua consequat.",
            "inventory": 21,
            "price": 7500,
            "original_price": 8000,
            "image": "https://images-na.ssl-images-amazon.com/images/I/713kcEI7hjL._SL1500_.jpg",
            "rating": 4,
            "offer": "FLAT 5% Off",
            "created_at": "2020-06-01T07:11:18.000000Z",
            "updated_at": null,
            "deleted_at": null,
        images: [
          {
            id: 1,
            thumb_url:
              "https://webcomicms.net/sites/default/files/clipart/146321/blue-square-cliparts-146321-2629400.png",
            image_url:
              "https://webcomicms.net/sites/default/files/clipart/146321/blue-square-cliparts-146321-2629400.png"
          },
          {
            id: 3,
            thumb_url:
              "https://3.imimg.com/data3/BE/CA/MY-10669832/red-colour-500x500.jpg",
            image_url:
              "https://3.imimg.com/data3/BE/CA/MY-10669832/red-colour-500x500.jpg"
          },
          {
            id: 4,
            thumb_url:
              "https://cdn.shopify.com/s/files/1/0361/8133/products/product-cropping-test-001_1024x1024_cropped.png?v=1440430124",
            image_url:
              "https://cdn.shopify.com/s/files/1/0361/8133/products/product-cropping-test-001_1024x1024_cropped.png?v=1440430124"
          }
        ]
      };

      return product;
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

    getRecentProducts(cb) {
      setTimeout(() => cb(_recent), 100)
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