import { g, auth, config } from "@grafbase/sdk";

// import { g, config } from "@grafbase/sdk";
// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
const authProvider = auth.JWT({
  issuer: g.env("ISSUER_URL"),
  secret: g.env("JWT_SECRET"),
});

// Define Data Models
// https://grafbase.com/docs/database

// const post = g
//   .model("Post", {
//     title: g.string(),
//     slug: g.string().unique(),
//     content: g.string().optional(),
//     publishedAt: g.datetime().optional(),
//     comments: g
//       .relation(() => comment)
//       .optional()
//       .list()
//       .optional(),
//     likes: g.int().default(0),
//     tags: g.string().optional().list().length({ max: 5 }),
//     author: g.relation(() => user).optional(),
//   })
//   .search();

// const comment = g.model("Comment", {
//   post: g.relation(post),
//   body: g.string(),
//   likes: g.int().default(0),
//   author: g.relation(() => user).optional(),
// });

const user = g.model("User", {
  name: g.string(),
  email: g.email().unique(),
  location: g.string().optional(),
  passwordHash: g.string(),
  // posts: g.relation(post).optional().list(),
  // comments: g.relation(comment).optional().list(),

  // Extend models with resolvers
  // https://grafbase.com/docs/edge-gateway/resolvers
  // gravatar: g.url().resolver('user/gravatar')
});
// .auth((rules) => {
// rules.private().read();
// rules.owner().update();
// });

const productCategory = g.model("ProductCategory", {
  name: g.string(),
  slug: g.string().unique(),
  description: g.string().optional(),
  products: g
    .relation(() => product)
    .optional()
    .list()
    .optional(),
});

const specification = g.model("Specification", {
  text: g.string(),
  product: g
    .relation(() => product)
    .optional()
    .list()
    .optional(),
});

const product = g
  .model("Product", {
    name: g.string(),
    slug: g.string().unique(),
    description: g.string().optional(),
    phone: g.string().optional(),
    imageUrl: g.string().optional(),
    location: g.string(),
    price: g.decimal().optional(),
    currency: g.string().optional(),
    condition: g.string().optional(),
    specifications: g
      .relation(() => specification)
      .optional()
      .list()
      .optional(),
    category: g.relation(() => productCategory).optional(),
    owner: g.relation(() => user).optional(),
  })
  .search();
// .auth((rules) => {
// rules.owner().create().update();
// });

export default config({
  schema: g,
  // Integrate Auth
  // https://grafbase.com/docs/auth
  auth: {
    providers: [authProvider],
    rules: (rules) => {
      // rules.public().read();
    },
  },
});

// {
//   "input": {
//     "category": {
//       "link": 1
//     },
//     "name": "Samsung All New 43 Inch 5300 FHD Smart Television",
//     "slug": "samsung-all-new-43-inch-5300-FHD-smart-television",
//     "location": "Lagos",
//     "phone": "+ 234 813 1210 163",
//     "price": 98000.00,
//     "currency": "N",
//     "description": "The T5300 has built-in Wi-Fi and Ethernet connectivity to allow access to your favorite apps and internet-based content, plus content-sharing and screen-mirroring with other smart devices such as your smartphone or tablet.",
//     "specifications": [{
//       "create" : {
//         "text": "SKU: SA948EA29N628NAFAMZ"
//       }
//     }, {
//       "create": {
//         "text": "Product Line: Kaylas Mart Electronics"
//       }
//     }, {
//       "create": {
//         "text": "Model: Samsung 5300"
//       }
//     }]
//   }
// }
