const sampleListings = [
  {
    title: "The Royal Heritage Haveli",
    description: "Step into the grandeur of Rajasthan with this beautifully restored 18th-century Haveli in the Pink City. Featuring hand-painted fresco ceilings, intricately carved stone jharokhas, a marble courtyard with a classical fountain, and authentic Rajasthani royal dining under starlit skies. Located just minutes from the iconic Hawa Mahal and City Palace.",
    image: {
      filename: "jaipur-main",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "jaipur-room",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jaipur-courtyard",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jaipur-terrace",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 6500,
    location: "Jaipur, Rajasthan",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    }
  },
  {
    title: "Oceanfront Sunset Villa",
    description: "Wake up to gentle Arabian Sea waves and coconut palms swaying in the coastal breeze. This private beach villa features direct private beach access, Portuguese-inspired arched balconies, a private plunge pool, and expansive sun decks perfect for evening cocktails and sunset dinners.",
    image: {
      filename: "goa-main",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "goa-pool",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "goa-room",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "goa-balcony",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5200,
    location: "Calangute, Goa",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.7553, 15.5439]
    }
  },
  {
    title: "Lakeview Palace Suite",
    description: "Overlooking the tranquil waters of Lake Pichola and the majestic Aravalli hills, this palace suite offers regal Mewari luxury. Enjoy panoramic views of the Lake Palace from your private marble balcony, hand-crafted teak furniture, opulent royal baths, and candlelit courtyard dinners.",
    image: {
      filename: "udaipur-main",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "udaipur-view",
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "udaipur-room",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "udaipur-pool",
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 9800,
    location: "Udaipur, Rajasthan",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854]
    }
  },
  {
    title: "Cedar Wood Mountain Chalet",
    description: "Nestled amidst towering deodar and cedar forests with sweeping vistas of snow-capped Himalayan peaks. Features warm pine-wood interiors, a wood-burning stone fireplace, panoramic bay windows, and a sprawling garden with organic apple trees and starry bonfire evenings.",
    image: {
      filename: "manali-main",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "manali-cabin",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "manali-interior",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "manali-snow",
        url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4200,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396]
    }
  },
  {
    title: "Traditional Backwater Houseboat & Villa",
    description: "Glide through the serene palm-fringed backwaters of Vembanad Lake. Crafted from natural anjili wood and coir, this eco-luxury waterfront haven offers authentic Ayurvedic massages, freshly caught Karimeen fish delicacies, and idyllic wooden verandahs floating over emerald waters.",
    image: {
      filename: "alleppey-main",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "alleppey-houseboat",
        url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "alleppey-room",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "alleppey-backwater",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 7200,
    location: "Alleppey, Kerala",
    country: "India",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981]
    }
  },
  {
    title: "Ganga Ghat Sunrise Heritage Retreat",
    description: "Perched directly above the historic Dashashwamedh Ghat, this spiritual sanctuary provides unmatched vistas of the holy river Ganga. Witness the sacred dawn rituals and the mesmerizing evening Maha Aarti directly from your private rooftop terrace with brass bells and classical sitar tunes.",
    image: {
      filename: "varanasi-main",
      url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "varanasi-ghat",
        url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "varanasi-suite",
        url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "varanasi-balcony",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3500,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [82.9739, 25.3176]
    }
  },
  {
    title: "Riverside Yoga & Wellness Ashram",
    description: "Where the pristine Ganga meets the Shivalik foothills. Immerse yourself in serenity with daily sunrise yoga sessions, an organic Sattvic cafe, tranquil white pebble beach walks, and unobstructed mountain and river views in the yoga capital of the world.",
    image: {
      filename: "rishikesh-main",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "rishikesh-river",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "rishikesh-room",
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "rishikesh-view",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3800,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869]
    }
  },
  {
    title: "Arabian Sea Horizon Penthouse",
    description: "A chic, designer penthouse nestled in the heart of trendy Bandra West with floor-to-ceiling glass windows framing endless Arabian Sea sunsets. Walk to bustling cafes, seaside promenades, and art galleries in Mumbai's most vibrant and fashionable neighborhood.",
    image: {
      filename: "mumbai-main",
      url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "mumbai-living",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mumbai-bed",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mumbai-skyline",
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 11500,
    location: "Bandra, Mumbai",
    country: "India",
    category: "room",
    geometry: {
      type: "Point",
      coordinates: [72.8258, 19.0596]
    }
  },
  {
    title: "Nomadic Pangong Luxury Campsite",
    description: "Experience the ethereal high-altitude desert of Ladakh at 11,500 feet. Insulated luxury glamping tents with ensuite heated bathrooms, plush Tibetan rugs, warm stews by the bonfire, and an unobstructed view of jagged Himalayan peaks and crystal-clear Milky Way night skies.",
    image: {
      filename: "ladakh-main",
      url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "ladakh-lake",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ladakh-tent",
        url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ladakh-night",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 6800,
    location: "Leh, Ladakh",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526]
    }
  },
  {
    title: "Colonial Tea Estate Bungalow",
    description: "Set in the middle of rolling emerald green tea plantations dating back to the British Raj. Enjoy aromatic morning tea tastings on the veranda, antique rosewood furniture, private estate walking trails, and cool mountain mists rolling over the Nilgiris.",
    image: {
      filename: "munnar-main",
      url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "munnar-tea",
        url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "munnar-room",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "munnar-hills",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5500,
    location: "Munnar, Kerala",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889]
    }
  },
  {
    title: "French Colonial Villa in White Town",
    description: "Step inside pastel mustard-yellow walls, cobblestone alleyways, and bougainvillea-draped arches in the heart of Pondicherry's French Quarter. High ceilings, vintage louvre windows, rattan chairs, and just a two-minute stroll to the famous Promenade Beach.",
    image: {
      filename: "pondi-main",
      url: "https://images.unsplash.com/photo-1582650625119-3a31f841807d?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "pondi-courtyard",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pondi-bedroom",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pondi-balcony",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4600,
    location: "Pondicherry",
    country: "India",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [79.8083, 11.9416]
    }
  },
  {
    title: "Coffee Country Plantation Estate",
    description: "Immerse yourself in 50 acres of lush Arabica coffee and spice plantations in Coorg. Features traditional Kodava wooden architecture, red-oxide polished floors, open-air birdwatching patios, and rich home-cooked Kodagu delicacies flavored with fresh pepper and cardamom.",
    image: {
      filename: "coorg-main",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "coorg-garden",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "coorg-cottage",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "coorg-room",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4800,
    location: "Coorg, Karnataka",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [75.7382, 12.4244]
    }
  },
  {
    title: "Himalayan Pine Forest Cottage",
    description: "Perched along the peaceful Mashobra ridge away from tourist crowds, this authentic wooden cottage overlooks mist-laden valleys and oak groves. Cozy up by the brick fireplace with hot cocoa or take leisurely walks along scenic Himalayan nature trails.",
    image: {
      filename: "shimla-main",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "shimla-terrace",
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shimla-room",
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shimla-pine",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3900,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048]
    }
  },
  {
    title: "Heritage Tea Planter's Cottage",
    description: "Gaze at the majestic snow-gilded peaks of Mount Kanchenjunga from your sun-drenched sunroom. Enjoy heritage fireplace lounges, original British-era woodwork, and freshly brewed first-flush Darjeeling tea served right to your bed every morning.",
    image: {
      filename: "darjeeling-main",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "darjeeling-peaks",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "darjeeling-room",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "darjeeling-garden",
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4400,
    location: "Darjeeling, West Bengal",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.0410]
    }
  },
  {
    title: "Clifftop Ocean Eco-Resort",
    description: "Perched high atop the cliffs overlooking the famous Om Beach and Kudle Beach in Gokarna. Eco-friendly terracotta tiled cottages surrounded by lush coconut groves, hammock lounges, and a private stone pathway leading directly down to pristine golden sands.",
    image: {
      filename: "gokarna-main",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "gokarna-sunset",
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gokarna-cottage",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gokarna-interior",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3400,
    location: "Gokarna, Karnataka",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [74.3188, 14.5479]
    }
  },
  {
    title: "Infinity Pool Luxury Ghats Villa",
    description: "A contemporary architectural masterpiece perched atop the Sahyadri mountains with an infinity pool that merges seamlessly with the misty valley horizon. The ideal luxury escape with sunken outdoor conversation pits, rain showers, and lush private lawns.",
    image: {
      filename: "lonavala-main",
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "lonavala-pool",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "lonavala-deck",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "lonavala-room",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 8500,
    location: "Lonavala, Maharashtra",
    country: "India",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [73.4072, 18.7557]
    }
  },
  {
    title: "Taj Vista Presidential Suite",
    description: "Unrivaled, crystal-clear views of the Taj Mahal from your private rooftop jacuzzi and bedroom window. Marble inlay bathrooms, Mughal arched alcoves, and impeccable royal hospitality only 600 meters from the monument of eternal love.",
    image: {
      filename: "agra-main",
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "agra-taj",
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "agra-suite",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "agra-bath",
        url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 8900,
    location: "Agra, Uttar Pradesh",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [78.0081, 27.1767]
    }
  },
  {
    title: "Andaman Coral Reef Beach Villa",
    description: "Barefoot luxury on Radhanagar Beach, renowned as one of Asia's finest shores. Thatched-roof villas crafted from local timber, crystal-clear turquoise waters teeming with corals, private sun decks, and world-class scuba diving right at your doorstep.",
    image: {
      filename: "andaman-main",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "andaman-beach",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "andaman-water",
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "andaman-room",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 9500,
    location: "Havelock Island, Andaman",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [92.9796, 11.9761]
    }
  },
  {
    title: "Blue City Fort View Haveli",
    description: "Gaze up at the colossal Mehrangarh Fort rising majestically above the sea of indigo-blue rooftops. This 200-year-old heritage haveli features stone-carved balconies, traditional jharokhas, antique brass lanterns, and rooftop candlelit dining with authentic Marwari cuisine.",
    image: {
      filename: "jodhpur-main",
      url: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "jodhpur-fort",
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jodhpur-room",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jodhpur-street",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4100,
    location: "Jodhpur, Rajasthan",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389]
    }
  },
  {
    title: "Royal Boulders Heritage Cottage",
    description: "Surrounded by Hampi's surreal UNESCO World Heritage boulder landscapes and ruins of the 14th-century Vijayanagara Empire. Cozy stone cottages with terracotta roofs, sunset viewpoints over the Tungabhadra River, and easy cycling routes to ancient temples.",
    image: {
      filename: "hampi-main",
      url: "https://images.unsplash.com/photo-1600100397608-f010f443b749?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "hampi-landscape",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "hampi-cottage",
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "hampi-ruins",
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3600,
    location: "Hampi, Karnataka",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [76.4600, 15.3350]
    }
  },
  {
    title: "Kashmir Dal Lake Heritage Houseboat",
    description: "Hand-carved cedar wood houseboat anchored peacefully on the lotus-filled waters of Dal Lake. Featuring intricate Kashmiri walnut wood carvings, hand-knotted silk carpets, ornate chandeliers, private shikara rides to floating markets, and a veranda facing the Zabarwan range.",
    image: {
      filename: "kashmir-main",
      url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "kashmir-lake",
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kashmir-houseboat",
        url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kashmir-room",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5800,
    location: "Srinagar, Jammu & Kashmir",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837]
    }
  },
  {
    title: "Cloud Valley Pine Treehouse",
    description: "Live amongst pine canopies in the 'Scotland of the East'. This handcrafted wooden treehouse in Meghalaya features panoramic glass balconies overlooking mist-shrouded Khasi hills, private wood fires, and mossy nature trails leading to crystal clear living root bridges.",
    image: {
      filename: "shillong-main",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "shillong-valley",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shillong-cabin",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shillong-room",
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4300,
    location: "Shillong, Meghalaya",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [91.8933, 25.5788]
    }
  },
  {
    title: "Royal Oasis Desert Camp & Pool",
    description: "Luxury desert oasis amidst the golden Thar desert dunes of Jaisalmer. Features a temperature-controlled sunken courtyard pool surrounded by sand dunes, hand-embroidered royal tents, sunset camel safaris, and lively folk music and Kalbelia dance evenings under star-studded skies.",
    image: {
      filename: "jaisalmer-main",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "jaisalmer-pool",
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jaisalmer-tent",
        url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jaisalmer-sunset",
        url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 6200,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157]
    }
  },
  {
    title: "Queen of Hills Colonial Retreat",
    description: "Perched high on the Mussoorie ridge with breathtaking 180-degree views of the Doon Valley glittering below at night. Vintage oak floors, cozy book nooks, bay windows, and private balconies catching the famous Mussoorie winterline sunsets.",
    image: {
      filename: "mussoorie-main",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "mussoorie-mountain",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mussoorie-room",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mussoorie-terrace",
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4700,
    location: "Mussoorie, Uttarakhand",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [78.0707, 30.4598]
    }
  },
  {
    title: "Nilgiri Mountain Tea Chalet",
    description: "A delightful stone and timber chalet nestled in the Nilgiri Blue Mountains. Surrounded by organic eucalyptus trees and terraced tea gardens, with open fireplaces, heritage floral wallpaper, and cool mountain breezes year-round.",
    image: {
      filename: "ooty-main",
      url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "ooty-tea",
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ooty-cottage",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ooty-interior",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3900,
    location: "Ooty, Tamil Nadu",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [76.6950, 11.4102]
    }
  }
];

module.exports = { data: sampleListings };