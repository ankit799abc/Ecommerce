const { Cart } = require('../model/Cart');

exports.fetchCartByUser = async (req, res) => {
  const {user} = req.params// change body
  try {
    const cartItems = await Cart.find({user}).populate('product').exec();

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchCheckCartByUser = async (req, res) => {
  const { user,product } = req.body;//change body
  try {
    const favoriteItems = await Cart.findOne({ user , product });

    res.status(200).json(favoriteItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
  //const {id} = req.body;  
  const cart = new Cart(req.body);
  try {
    const doc = await cart.save();
    
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteFromCart = async (req, res) => {
  const {product,user} = req.body;
    try {
    const doc = await Cart.deleteOne({user,product});
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateCart = async (req, res) => {
 
  try {
    const {user , product , quantity}=req.body;
    const cart = await Cart.findOneAndUpdate({user, product}, {
      
        $set: {
          quantity: quantity, 
        },
      
    }, {
      upsert: true,
      returnDocument: 'after', // this is new !
    }
    );
   // const result = await cart.populate('product');

    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
};
