import React from "react";
import { useEffect, useState } from "react";
import "../style/planScreen.scss";
import db from "../firebase";
import { Firestore, query, where,addDoc  } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// import { getProducts } from "@stripe/firestore-stripe-payments";
import { useSelector } from "react-redux";

import { selectUser } from "../features/userSlice";
import {loadStripe} from '@stripe/stripe-js';
// import { createCheckoutSession } from "@stripe/firestore-stripe-payments";

const PlanScreen = () => {

  const user = useSelector(selectUser)
  const [products, setProducts] = useState([]);



// const payments = getStripePayments(db, {
//   productsCollection: "products",
//   customersCollection: "customers",
// });


  useEffect(() => {
    const collectionRef = collection(db, "products");
    const q = query(collection(db, "products"), where("active", "==", true));

    const fetchProducts = async () => {
      const querySnapshot = await getDocs(q);
      const productsinfo = {};
      querySnapshot.forEach(async (doc) => {
        products[doc.id] = doc.data();
        // console.log(doc.data());

        const priceSnap = await getDocs(collection(doc.ref, "prices"));
        priceSnap.docs.forEach((price) => {
          products[doc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
    };

    setProducts(products);
    fetchProducts();
  }, []);

  console.log(products);

  

  



  const loadCheckout = async (priceId) => {

    
// const products = await getProducts(payments, {
//   active: true,
// });



//     const session = await createCheckoutSession( {
//       price: priceId,
//       success_url: window.location.origin,
//       cancel_url: window.location.origin,
//     });
//     window.location.assign(session.url);

 await addDoc(collection(db, "customers",user.uid, "checkout_session"))

   
     
const docRef = await addDoc(collection(db, "checkout_session"), {
  price: priceId,
  success_url : window.location.origin,
  cancel_url : window.location.origin,
});

    docRef.onSnapshot(async(snap)=>{
      const{error,sessionId}=snap.data()
      if (error) {
        alert(`An error occured: ${error.message} ` )
      }


      if (sessionId)
      {
        const stripe = await loadStripe("pk_live_51MwihKSFqyJuaFkiHxSPqs1g6pahULC17vhHHG6E4af75gLJWV6Wsk9YMgHDyjmkflAcl3ufLFFvcNcFrdgk7JyT00PpMgRFAR")
        stripe.redirectToCheckout({
          sessionId
        })
      }
    })
  };


  return (
    <div className="PlanScreen">
      PlanScreen
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="planScreen_plans">
            <div key={productId} className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen;
