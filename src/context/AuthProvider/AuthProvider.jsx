// @ts-nocheck
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/auth/firbase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //=========================  declare all state =================
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //========== for header context===========
  const headers = [
    {
      id: "1",
      name: "Home",
      path: "/",
    },
    {
      id: "2",
      name: "About",
      path: "/about",
    },
    {
      id: "3",
      name: "Room",
      path: "/room",
    },
    {
      id: "4",
      name: "Contact",
      path: "/contact",
    },
  ];

  // ==========Sliders data context ==========
  const sliders =  [
      {
          id: "474070-1", 
          title: "World Heritage Resort", 
          description: "Take a tour in IdleKids and you will find the best school in the state.The video will take you to every places in this school", 
          img: "https://wallpaperaccess.com/full/7080711.jpg",
          btn: "Take a tour"
      },
  
      {
          id: "474072-2", 
          title: "Adventure Resort", 
          description: "Take a tour in IdleKids and you will find the best school in the state.The video will take you to every places in this school", 
          img: "https://c4.wallpaperflare.com/wallpaper/955/326/467/leisure-areas-restaurants-wallpaper-thumb.jpg",
          
          btn: "Book Now"
      },
  
      {
          id: "474073-3", 
          title: "Romantic Sceanary Resort ", 
          description: "Take a tour in IdleKids and you will find the best school in the state.The video will take you to every places in this school", 
          img: "https://c4.wallpaperflare.com/wallpaper/295/606/441/bali-bungalow-cities-hotel-wallpaper-preview.jpg",
          btn: "Book Now"
      },
  
      {
          id: "474074-4", 
           title: "Cox's Heritage Resort", 
           description: "Take a tour in IdleKids and you will find the best school in the state.The video will take you to every places in this school", 
           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmfXrZSwi6TaDHITVZxiKBE62yvkcHcRNrw&usqp=CAU",
           btn: "Book Now"
      }

    
  ]

  // ===========Hotel Room ===============
  const hotelRooms = [
    {
      id: "1",
      title: "Single Room",
      room_img:
        "https://3.imimg.com/data3/HL/MM/MY-10413033/single-bed-room-services-500x500.jpg",
      booking_price: {
        per_day: "$ 30",
        per_night: "$ 100",
        per_month: "$ 2458",
      },
      "book": "Book Now"
    },
    {
      id: "2",
      title: "Couple Room",
      room_img: "http://dimg04.c-ctrip.com/images/0AD52120008w2axelDC58.jpg",
      booking_price: {
        per_day: "$ 60",
        per_night: "$ 200",
        per_month: "$ 5000",
      },
      "book": "Book Now"
    },
    {
      id: "3",
      title: "Family Room",
      room_img:
        "https://www.landmarklondon.co.uk/wp-content/uploads/2018/01/Rooms-Suites-3-1.jpg",
      booking_price: {
        per_day: "$ 100",
        per_night: "$ 350",
        per_month: "$ 8990",
      },
      "book": "Book Now"
    },
    {
      id: "4",
      title: "Guest Room",
      room_img:
        "https://design.holidayinnexpress.com/assets/img/gallery/4-guest-room-alt-view.jpg",
      booking_price: {
        per_day: "$ 80",
        per_night: "$ 200",
        per_month: "$ 6849",
      },
      "book": "Book Now"
    },
  ];

  /*
    ========================Register Section context ==================
    */

    // all provider 
    // google provider
    const googleProvider = new GoogleAuthProvider;

    const githubProvider = new GithubAuthProvider;

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ================

  // email verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // ================

  // sign in method
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ================

  // Log oUt section
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
 //==================
//  forgot password method

const forgotPassword =  (currentEmail) => {
    setLoading(true)
    return sendPasswordResetEmail(auth,currentEmail)
}



//  google sign in method
 const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
 }

 //github login method
 const githubLogin = () => {
  setLoading(true)
  return signInWithPopup(auth, githubProvider)
 }


//  set observer
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("current user state ", currentUser);
        // without verify email no one cannot login
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
        }
        setLoading(false)
    })
    return () => {
        unSubscribe();
    }
},[])

  const authInfo = {
    headers,
    sliders,
    hotelRooms,
    createUser,
    verifyEmail,
    logIn,
    logOut,
    googleSignIn,
    forgotPassword,
    user,
    setUser,
    loading,
    setLoading,
    githubLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
