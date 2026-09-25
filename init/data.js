const sampleListings = [
  // 1. Jaipur, Rajasthan
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
  // 2. Goa
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
  // 3. Udaipur, Rajasthan
  {
    title: "Lake Pichola Palace Villa",
    description: "Perched right over the shimmering waters of Lake Pichola, this regal villa offers unobstructed views of the City Palace and the Jag Mandir Island. Adorned with Mewari archways, hand-carved jali windows, and a romantic rooftop terrace ideal for candlelit dining.",
    image: {
      filename: "udaipur-main",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "udaipur-terrace",
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "udaipur-suite",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "udaipur-dining",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 8800,
    location: "Udaipur, Rajasthan",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [73.6844, 24.5854]
    }
  },
  // 4. Manali, Himachal Pradesh
  {
    title: "Himalayan Pine Forest Chalet",
    description: "Nestled high amidst towering cedar and deodar pines in Old Manali, this handcrafted cedar-wood cabin offers panoramic views of snow-capped Pir Panjal peaks. Complete with a crackling stone fireplace, cozy attic bedroom, and expansive glass facade.",
    image: {
      filename: "manali-main",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "manali-cabin",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "manali-interior",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "manali-snow",
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4500,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396]
    }
  },
  // 5. Alleppey, Kerala
  {
    title: "Luxury Backwater Houseboat Suite",
    description: "Glide serenely through Kerala's tranquil backwaters on an air-conditioned luxury Kettuvallam crafted from natural teak and coir. Savor freshly prepared Karimeen Pollichathu and Malabar curry cooked onboard by your private chef while floating past paddy fields.",
    image: {
      filename: "alleppey-main",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "alleppey-deck",
        url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "alleppey-suite",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "alleppey-water",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
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
  // 6. Varanasi, Uttar Pradesh
  {
    title: "Ganga Ghat Heritage Retreat",
    description: "Witness the timeless spiritual magic of Varanasi from this heritage riverside residence overlooking Assi Ghat. Watch the mesmerizing morning Subah-e-Banaras aarti and evening Ganga aarti right from your private river-facing balcony.",
    image: {
      filename: "varanasi-main",
      url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "varanasi-balcony",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "varanasi-room",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "varanasi-aarti",
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3800,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [82.9739, 25.3176]
    }
  },
  // 7. Rishikesh, Uttarakhand
  {
    title: "Riverside Yoga & Wellness Ashram Villa",
    description: "Perched on the tranquil banks of the turquoise Ganga in Tapovan, this wellness retreat features open-air yoga shalas with mountain views, Ayurvedic treatment cabanas, and private access to pristine riverfront beaches.",
    image: {
      filename: "rishikesh-main",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "rishikesh-yoga",
        url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "rishikesh-river",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "rishikesh-room",
        url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4200,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [78.3247, 30.1340]
    }
  },
  // 8. Mumbai, Maharashtra
  {
    title: "Sea-Facing Marine Drive Luxury Apartment",
    description: "Enjoy panoramic 180-degree vistas of the Queen's Necklace and Arabian Sea sunsets from this designer high-rise apartment in South Mumbai. Floor-to-ceiling windows, Italian marble flooring, and walkability to top art deco heritage cafes.",
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
        filename: "mumbai-bedroom",
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mumbai-sea",
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 9500,
    location: "Marine Drive, Mumbai",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [72.8236, 18.9432]
    }
  },
  // 9. Ladakh
  {
    title: "Starlit Mountain Glamping Dome",
    description: "Experience the ultimate cosmic luxury under the world's clearest night skies in the Nubra Valley. Geodesic insulated glass domes equipped with heated wooden floors, plush bedding, and high-powered stargazing telescopes.",
    image: {
      filename: "ladakh-main",
      url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "ladakh-dome",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ladakh-sky",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ladakh-mountains",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 7900,
    location: "Leh, Ladakh",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526]
    }
  },
  // 10. Munnar, Kerala
  {
    title: "Tea Plantation Mist Manor",
    description: "Wake up enveloped in emerald rolling tea gardens and cool mountain mist. This colonial-style planter's bungalow features wooden verandahs, organic farm-to-table cuisine, guided morning tea-tasting sessions, and bonfire evenings.",
    image: {
      filename: "munnar-main",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "munnar-gardens",
        url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "munnar-room",
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "munnar-terrace",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4800,
    location: "Munnar, Kerala",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889]
    }
  },
  // 11. Pondicherry
  {
    title: "French Colonial Heritage Maison",
    description: "Located in the quiet cobblestone lanes of the French Quarter (White Town), this sunlit boutique maison showcases mustard-yellow facades, bougainvillea-draped courtyards, vintage brass four-poster beds, and high ceilings with wooden rafters.",
    image: {
      filename: "pondi-main",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "pondi-patio",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pondi-bedroom",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pondi-street",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4600,
    location: "White Town, Pondicherry",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [79.8344, 11.9340]
    }
  },
  // 12. Coorg, Karnataka
  {
    title: "Coffee Estate Wooden Cottage",
    description: "Immerse yourself in lush 50-acre aromatic coffee and spice plantations in the Scotland of India. Cozy wooden chalets with private balconies looking out to bird sanctuaries, private stream walking trails, and fresh Kodava roasted Arabica coffee.",
    image: {
      filename: "coorg-main",
      url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "coorg-cottage",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "coorg-estate",
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "coorg-room",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3900,
    location: "Madikeri, Coorg, Karnataka",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [75.7382, 12.4244]
    }
  },
  // 13. Shimla, Himachal Pradesh
  {
    title: "Colonial British Cedar Villa",
    description: "A heritage British-era wooden manor built in 1912 on Mashobra ridge near Shimla. Surrounded by thick Himalayan cedar woods with vintage fireplace, library lounge, brass fittings, and panoramic views of the Shivalik range.",
    image: {
      filename: "shimla-main",
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "shimla-lounge",
        url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shimla-bedroom",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shimla-snow",
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5100,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048]
    }
  },
  // 14. Darjeeling, West Bengal
  {
    title: "Kanchenjunga View Heritage Cottage",
    description: "Greet the majestic golden sunrise over Mount Kanchenjunga from your heated bay windows. Features polished oak floors, antique Victorian furniture, handcrafted Darjeeling First Flush tea service, and garden pathways lined with rhododendrons.",
    image: {
      filename: "darjeeling-main",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "darjeeling-window",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "darjeeling-suite",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "darjeeling-mountains",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4300,
    location: "Darjeeling, West Bengal",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.0410]
    }
  },
  // 15. Gokarna, Karnataka
  {
    title: "Om Beach Clifftop Bamboo Eco-Villa",
    description: "Perched dramatically upon the red laterite cliffs between Kudle Beach and Om Beach. Natural bamboo architecture, open-air rainwater showers, yoga deck overlooking the Arabian ocean waves, and hammock groves under coconut palms.",
    image: {
      filename: "gokarna-main",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "gokarna-cliff",
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gokarna-deck",
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gokarna-sunset",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
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
  // 16. Lonavala, Maharashtra
  {
    title: "Infinity Pool Monsoon Villa",
    description: "A state-of-the-art modernist luxury villa in the Sahyadri hills with an infinity cantilevered glass pool overlooking lush green waterfalls and monsoon mist. Features 4 ensuite bedrooms, BBQ gazebo, and high-speed fiber internet.",
    image: {
      filename: "lonavala-main",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "lonavala-pool",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "lonavala-living",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "lonavala-lawn",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
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
  // 17. Agra, Uttar Pradesh
  {
    title: "Taj Mahal View Luxury Penthouse",
    description: "Experience the monument of love from your private rooftop jacuzzi and lounge terrace. Located just 900 meters from the East Gate of the Taj Mahal with unobstructed marble dome views, luxury king suites, and personal butler service.",
    image: {
      filename: "agra-main",
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "agra-terrace",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "agra-bedroom",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "agra-monument",
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 7400,
    location: "Tajganj, Agra, Uttar Pradesh",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [78.0421, 27.1751]
    }
  },
  // 18. Andaman & Nicobar
  {
    title: "Havelock Island Beachfront Cabana",
    description: "Step directly onto turquoise crystal waters and pure white sands of Radhanagar Beach. Eco-luxury timber cabana with open-air tropical showers, scuba diving excursions, bioluminescent kayak tours, and fresh seafood grill.",
    image: {
      filename: "andaman-main",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "andaman-water",
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "andaman-room",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "andaman-sunset",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 8200,
    location: "Havelock Island, Andaman",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [92.9796, 11.9761]
    }
  },
  // 19. Jodhpur, Rajasthan
  {
    title: "Blue City Sun Fortress Palace",
    description: "An awe-inspiring heritage stay tucked under the mighty Mehrangarh Fort. Marvel at the indigo-painted courtyards, hand-chiseled sandstone architecture, authentic Marwari dining, and evening folk music performances.",
    image: {
      filename: "jodhpur-main",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "jodhpur-fort",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jodhpur-terrace",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jodhpur-interior",
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4900,
    location: "Jodhpur, Rajasthan",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [73.0169, 26.2968]
    }
  },
  // 20. Hampi, Karnataka
  {
    title: "Bouldered River Heritage Resort",
    description: "Surrounded by surreal prehistoric granite boulders and the Tungabhadra river. Banana plantations, open-air stone pavilions, traditional South Indian thali dining, and guided bouldering and heritage coracle boat rides.",
    image: {
      filename: "hampi-main",
      url: "https://images.unsplash.com/photo-1600100397608-f010f443b79f?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "hampi-boulders",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "hampi-resort",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "hampi-ruins",
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3600,
    location: "Hampi, Karnataka",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [76.4600, 15.3350]
    }
  },
  // 21. Srinagar, Kashmir
  {
    title: "Dal Lake Handcrafted Cedar Houseboat",
    description: "Float upon the mirror-like waters of Dal Lake in an intricately wood-carved Kashmiri houseboat. Enjoy Shikara rides, fragrant Kahwa tea by the walnut wood hearth, and snow-dusted vistas of the Zabarwan mountain range.",
    image: {
      filename: "kashmir-main",
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "kashmir-shikara",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kashmir-interior",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kashmir-mountains",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 6100,
    location: "Srinagar, Jammu & Kashmir",
    country: "India",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [74.8360, 34.0837]
    }
  },
  // 22. Shillong, Meghalaya
  {
    title: "Pine Valley Cloud Cottage",
    description: "Nestled in the Scotland of the East with sweeping views of the Khasi Hills and cascading waterfalls. Polished pine interiors, warm indoor fireplace, curated vinyl record player, and private hiking access to living root bridges.",
    image: {
      filename: "shillong-main",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "shillong-valley",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shillong-room",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "shillong-nature",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4100,
    location: "Shillong, Meghalaya",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [91.8933, 25.5788]
    }
  },
  // 23. Jaisalmer, Rajasthan
  {
    title: "Golden Sand Dunes Royal Desert Camp",
    description: "Experience the magic of the Thar Desert under a billion stars. Luxury Swiss tents with attached royal bathrooms, sunset camel safaris over golden dunes, Kalbelia folk dance around bonfire, and Rajasthani feast.",
    image: {
      filename: "jaisalmer-main",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "jaisalmer-tents",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jaisalmer-camel",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "jaisalmer-interior",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5500,
    location: "Sam Sand Dunes, Jaisalmer, Rajasthan",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [70.5283, 26.8289]
    }
  },
  // 24. Mussoorie, Uttarakhand
  {
    title: "Mist Valley Heritage Cottage",
    description: "Perched high on the Queen of the Hills overlooking the glittering Doon Valley at night. Cozy oakwood bedrooms, sunlit glass greenhouse conservatory, roaring stone fireplace, and scenic forest walking trails.",
    image: {
      filename: "mussoorie-main",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "mussoorie-view",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mussoorie-room",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mussoorie-terrace",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4700,
    location: "Mussoorie, Uttarakhand",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [78.0700, 30.4598]
    }
  },
  // 25. Ooty, Tamil Nadu
  {
    title: "Nilgiri Tea Garden Heritage Bungalow",
    description: "An authentic 19th-century colonial tea bungalow perched in the Blue Mountains. Manicured English gardens, eucalyptus woods, antique fireplace, high tea on the lawn, and Nilgiri Mountain Railway toy train views.",
    image: {
      filename: "ooty-main",
      url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "ooty-gardens",
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ooty-living",
        url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ooty-room",
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4900,
    location: "Ooty, Tamil Nadu",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [76.6950, 11.4100]
    }
  },
  // 26. Kodaikanal, Tamil Nadu
  {
    title: "Misty Lakeview Pine Chalet",
    description: "Tucked away in the Princess of Hill Stations with stunning views of Kodaikanal Lake and cedar pine forests. Features a private glass conservatory, eucalyptus wood-burning fireplace, star-gazing deck, and walking distance to Coaker's Walk.",
    image: {
      filename: "kodai-main",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "kodai-lake",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kodai-interior",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kodai-balcony",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4400,
    location: "Kodaikanal, Tamil Nadu",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [77.4892, 10.2381]
    }
  },
  // 27. Chikmagalur, Karnataka
  {
    title: "Mullayanagiri Peak Coffee Retreat",
    description: "Wake up atop Karnataka's highest peak surrounded by organic Arabica plantations and misty cloud forests. Enjoy private coffee cupping tours, bird watching, an outdoor infinity jacuzzi, and traditional Malnad home-cooked delicacies.",
    image: {
      filename: "chikmagalur-main",
      url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "chikmagalur-plantation",
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "chikmagalur-chalet",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "chikmagalur-suite",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4800,
    location: "Chikmagalur, Karnataka",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [75.7720, 13.3161]
    }
  },
  // 28. Kasol, Himachal Pradesh
  {
    title: "Parvati River Stone & Wood Cabin",
    description: "Located right on the rushing emerald waters of the Parvati River in Kasol. Crafted with local Himalayan river stones and fragrant pine wood, offering riverside bonfire pit, private apple orchard trails, and views of soaring pine ridges.",
    image: {
      filename: "kasol-main",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "kasol-river",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kasol-cabin",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kasol-mountains",
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3200,
    location: "Kasol, Himachal Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [77.3152, 32.0100]
    }
  },
  // 29. Ranthambore, Rajasthan
  {
    title: "Tiger Reserve Royal Safari Camp",
    description: "Luxurious royal safari tents situated on the border of Ranthambore National Park. Featuring canopied four-poster beds, private teakwood verandahs, open-air bush dining under lantern light, and private guided morning tiger safaris.",
    image: {
      filename: "ranthambore-main",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "ranthambore-tent",
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ranthambore-safari",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ranthambore-pool",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 7500,
    location: "Sawai Madhopur, Ranthambore, Rajasthan",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [76.5026, 26.0173]
    }
  },
  // 30. Kumarakom, Kerala
  {
    title: "Vembanad Lake Heritage Water Villa",
    description: "A breathtaking waterfront retreat on the shores of Vembanad Lake. Traditional Kerala architectural woodwork with private plunge pool, open-to-sky lotus courtyards, Ayurvedic wellness spa, and sunset country boat cruises.",
    image: {
      filename: "kumarakom-main",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "kumarakom-lake",
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kumarakom-pool",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kumarakom-suite",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 6200,
    location: "Kumarakom, Kerala",
    country: "India",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [76.4300, 9.6176]
    }
  },
  // 31. Spiti Valley, Himachal Pradesh
  {
    title: "Kaza High-Altitude Mudhouse Homestay",
    description: "An authentic, eco-insulated Himalayan mudhouse at 12,000 feet in the trans-Himalayan desert of Spiti. Traditional Bukhari heating, handmade Tibetan yak-wool rugs, panoramic views of Key Monastery, and star-filled night skies.",
    image: {
      filename: "spiti-main",
      url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "spiti-landscape",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "spiti-monastery",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "spiti-room",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3600,
    location: "Kaza, Spiti Valley, Himachal Pradesh",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [78.0410, 32.2276]
    }
  },
  // 32. Pushkar, Rajasthan
  {
    title: "Sacred Lake Heritage Palace",
    description: "Overlooking the sacred 52 ghats of Pushkar Lake with marble arcades, hand-painted floral murals, rooftop yoga pavilion, and magical desert sunset vistas over the rose gardens of Pushkar.",
    image: {
      filename: "pushkar-main",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "pushkar-courtyard",
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pushkar-ghat",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pushkar-suite",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3800,
    location: "Pushkar, Rajasthan",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [74.5511, 26.4897]
    }
  },
  // 33. Wayanad, Kerala
  {
    title: "Vythiri Rainforest Treehouse Estate",
    description: "Suspended 60 feet high in the lush evergreen rainforest canopy of Wayanad. Built by indigenous tribal craftsmen using sustainable bamboo and teak, with natural spring-water streams, mist-kissed balconies, and bird calls.",
    image: {
      filename: "wayanad-main",
      url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "wayanad-canopy",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "wayanad-interior",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "wayanad-forest",
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5900,
    location: "Vythiri, Wayanad, Kerala",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [76.1320, 11.6854]
    }
  },
  // 34. Kaziranga, Assam
  {
    title: "Brahmaputra Valley Eco Safari Lodge",
    description: "A stunning eco-retreat in Assam bordering the world-famous UNESCO Kaziranga habitat. Thatched bamboo cottages, Assamese silk decor, open-air tea verandas looking onto floodplains, and private Rhino safari bookings.",
    image: {
      filename: "kaziranga-main",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "kaziranga-cottage",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kaziranga-view",
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "kaziranga-room",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4600,
    location: "Kaziranga, Assam",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [93.1711, 26.5775]
    }
  },
  // 35. Dharamshala, Himachal Pradesh
  {
    title: "Dhauladhar Mountain Monastery View Villa",
    description: "Set in McLeod Ganj amidst tall deodars with direct sightlines to the Namgyal Monastery and snowy Dhauladhar crests. Features Tibetan brass artworks, cedar wood interiors, private yoga terrace, and cozy herbal tea room.",
    image: {
      filename: "dharamshala-main",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "dharamshala-peaks",
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "dharamshala-living",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "dharamshala-bedroom",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3700,
    location: "McLeod Ganj, Dharamshala, Himachal Pradesh",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [76.3244, 32.2426]
    }
  },
  // 36. Mahabalipuram, Tamil Nadu
  {
    title: "Coromandel Coast Ocean Breeze Villa",
    description: "Located along the scenic East Coast Road near ancient UNESCO shore temples. Direct sandy beach walkway, private sea-facing infinity pool, coconut palm groves, and fresh grilled lobster under sea breeze pavilions.",
    image: {
      filename: "mahabalipuram-main",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "mahabs-pool",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mahabs-beach",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mahabs-suite",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4900,
    location: "Mahabalipuram, Tamil Nadu",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [80.1983, 12.6269]
    }
  },
  // 37. Mount Abu, Rajasthan
  {
    title: "Aravalli Hilltop Sunset Bungalow",
    description: "Rajasthan's only hill station retreat nestled on a granite ridge near Nakki Lake. Colonial stone construction, lush tiered gardens, vintage fireplaces, and dramatic views of orange desert sunsets over the Aravalli mountains.",
    image: {
      filename: "mountabu-main",
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "mountabu-garden",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mountabu-living",
        url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mountabu-terrace",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4200,
    location: "Mount Abu, Rajasthan",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [72.7156, 24.5926]
    }
  },
  // 38. Gangtok, Sikkim
  {
    title: "Himalayan Ridge Boutique Suite",
    description: "Overlooking the vibrant capital of Sikkim and the majestic Kanchendzonga snow massif. Contemporary Himalayan wood design, private sunrise balcony, Sikkimese organic farm breakfasts, and walking distance to MG Marg.",
    image: {
      filename: "gangtok-main",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "gangtok-snow",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gangtok-suite",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gangtok-balcony",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4500,
    location: "Gangtok, Sikkim",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [88.6138, 27.3314]
    }
  },
  // 39. Varkala, Kerala
  {
    title: "Red Cliff Beach Bohemian Villa",
    description: "Perched atop the world-renowned Varkala North Cliff. Direct steps leading to the Arabian beach, bohemian macrame hammocks, private rooftop sea-view yoga floor, and fresh juice cafe on site.",
    image: {
      filename: "varkala-main",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "varkala-cliff",
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "varkala-room",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "varkala-sunset",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3600,
    location: "North Cliff, Varkala, Kerala",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [76.7163, 8.7379]
    }
  },
  // 40. Coonoor, Tamil Nadu
  {
    title: "Sim's Park Heritage Tea Estate Villa",
    description: "A private English country manor set within rolling tea bushes in Upper Coonoor. Featuring vintage rosewood furniture, bay window daybeds overlooking the Nilgiri hills, tea sommelier sessions, and a cozy library hearth.",
    image: {
      filename: "coonoor-main",
      url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "coonoor-tea",
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "coonoor-living",
        url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "coonoor-suite",
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5100,
    location: "Coonoor, Nilgiris, Tamil Nadu",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [76.7959, 11.3530]
    }
  },
  // 41. Ziro Valley, Arunachal Pradesh
  {
    title: "Apatani Pine Valley Wooden Cottage",
    description: "Immerse yourself in the UNESCO tentative world heritage valley of Ziro. Handcrafted bamboo and timber chalets overlooking tiered green rice paddy terraces, pine groves, and tribal hearth cooking.",
    image: {
      filename: "ziro-main",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "ziro-landscape",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ziro-paddys",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "ziro-cottage",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3400,
    location: "Ziro, Arunachal Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [93.8340, 27.5947]
    }
  },
  // 42. Alibaug, Maharashtra
  {
    title: "Mandwa Private Pool Luxury Haven",
    description: "Just a 20-minute speedboat ride from Gateway of India Mumbai. A sleek 4-bedroom designer estate with a 40-foot private swimming pool, sunken bar lounge, lush tropical lawns, and private in-house chef.",
    image: {
      filename: "alibaug-main",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "alibaug-pool",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "alibaug-living",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "alibaug-garden",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 7800,
    location: "Mandwa, Alibaug, Maharashtra",
    country: "India",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 18.6414]
    }
  },
  // 43. Tawang, Arunachal Pradesh
  {
    title: "Monastery Foothills Cloud Chalet",
    description: "Located near the 400-year-old Tawang Monastery at 10,000 feet. Features heated Tibetan timber suites, handcrafted butter lamps, prayer flag verandas, and dramatic views of snowy high-Himalayan passes.",
    image: {
      filename: "tawang-main",
      url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "tawang-peaks",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "tawang-interior",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "tawang-night",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4300,
    location: "Tawang, Arunachal Pradesh",
    country: "India",
    category: "views",
    geometry: {
      type: "Point",
      coordinates: [91.8687, 27.5861]
    }
  },
  // 44. Pachmarhi, Madhya Pradesh
  {
    title: "Satpura Forest British Heritage Lodge",
    description: "Queen of the Satpuras hill lodge dating to the colonial era. Teak wood flooring, sprawling wrap-around verandahs, private access to Bee Falls trails, and tiger reserve buffer zone birdwatching.",
    image: {
      filename: "pachmarhi-main",
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "pachmarhi-forest",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pachmarhi-living",
        url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "pachmarhi-room",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3900,
    location: "Pachmarhi, Madhya Pradesh",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [78.4329, 22.4674]
    }
  },
  // 45. Gokarna Beachfront Villa
  {
    title: "Kudle Beach Bohemian Coconut Palms Villa",
    description: "Direct walk-on access to the golden crescent sands of Kudle Beach. Thatched eco-cottage with hammock verandahs, sea-breeze bedrooms, private surfboard rentals, and sunset seafood barbeque under the stars.",
    image: {
      filename: "gokarnabeach-main",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "gokarnabeach-water",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gokarnabeach-deck",
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gokarnabeach-room",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 3500,
    location: "Kudle Beach, Gokarna, Karnataka",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [74.3168, 14.5426]
    }
  },
  // 46. Daman & Diu
  {
    title: "Portuguese Fort Coastal Seaside Retreat",
    description: "Overlooking the historic sea battlements of Moti Daman fort and the Arabian sea. Portuguese colonial tiles, high-arched courtyards, private swimming pool, and fresh coastal fish curries.",
    image: {
      filename: "daman-main",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "daman-pool",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "daman-fort",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "daman-room",
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4100,
    location: "Daman, Daman and Diu",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [72.8397, 20.3974]
    }
  },
  // 47. Gulmarg, Kashmir
  {
    title: "Aphrawat Peak Snow Chalet",
    description: "Ski-in ski-out luxury timber chalet located next to the Gulmarg Gondola at 9,000 feet. Heated pine wood floors, stone fireplace, ski equipment lockers, steam sauna, and views of pristine powder slopes.",
    image: {
      filename: "gulmarg-main",
      url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "gulmarg-chalet",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gulmarg-interior",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "gulmarg-snow",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 8200,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [74.3805, 34.0484]
    }
  },
  // 48. Jim Corbett, Uttarakhand
  {
    title: "Kosi Riverfront Jungle Safari Villa",
    description: "Private riverfront stone villa nestled in the lush Sal forests of Corbett. Watch wild elephants drink from the Kosi River from your private swimming deck, accompanied by bonfire BBQ and guided naturalist walks.",
    image: {
      filename: "corbett-main",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "corbett-river",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "corbett-pool",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "corbett-suite",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 6700,
    location: "Ramnagar, Jim Corbett, Uttarakhand",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [79.1325, 29.5300]
    }
  },
  // 49. Panchgani, Maharashtra
  {
    title: "Table Land Valley View Infinity Villa",
    description: "A cliffside luxury glass villa in Panchgani looking across Dhom Dam waters and Krishna River valley. Features a temperature-controlled infinity pool, strawberry garden patch, pool table lounge, and stargazing terrace.",
    image: {
      filename: "panchgani-main",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "panchgani-pool",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "panchgani-living",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "panchgani-view",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 5600,
    location: "Panchgani, Maharashtra",
    country: "India",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [73.8016, 17.9237]
    }
  },
  // 50. Mandawa, Shekhawati, Rajasthan
  {
    title: "Open Air Art Gallery Fresco Haveli",
    description: "Step inside Shekhawati's world-famous painted havelis in Mandawa. Marvel at the 150-year-old preserved natural pigment wall frescoes, intricately carved brass-studded doors, inner zenana courtyards, and royal Marwari banquets.",
    image: {
      filename: "mandawa-main",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    },
    otherImages: [
      {
        filename: "mandawa-fresco",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mandawa-courtyard",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      },
      {
        filename: "mandawa-room",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
    ],
    price: 4500,
    location: "Mandawa, Shekhawati, Rajasthan",
    country: "India",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [75.1485, 28.0551]
    }
  }
];

module.exports = { data: sampleListings };