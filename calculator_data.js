const nutritionData = {
  "bases": [
    {
      "id": "ic",
      "name": "Ice Cream",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 440,
          "total_fat": 28,
          "saturated_fat": 20,
          "cholesterol": 80,
          "sodium": 140,
          "protein": 8,
          "sugar": 28
        },
        "regular": {
          "grams": 240,
          "calories": 528,
          "total_fat": 34,
          "saturated_fat": 24,
          "cholesterol": 96,
          "sodium": 168,
          "protein": 10,
          "sugar": 34
        },
        "large": {
          "grams": 280,
          "calories": 616,
          "total_fat": 39,
          "saturated_fat": 28,
          "cholesterol": 112,
          "sodium": 196,
          "protein": 11,
          "sugar": 39
        },
        "pint": {
          "grams": 440,
          "calories": 968,
          "total_fat": 62,
          "saturated_fat": 44,
          "cholesterol": 176,
          "sodium": 308,
          "protein": 18,
          "sugar": 62
        },
        "quart": {
          "grams": 880,
          "calories": 1936,
          "total_fat": 123,
          "saturated_fat": 88,
          "cholesterol": 352,
          "sodium": 616,
          "protein": 35,
          "sugar": 123
        }
      }
    },
    {
      "id": "y",
      "name": "Yogurt",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 240,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 10,
          "sodium": 150,
          "protein": 10,
          "sugar": 32
        },
        "regular": {
          "grams": 240,
          "calories": 288,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 12,
          "sodium": 180,
          "protein": 12,
          "sugar": 38
        },
        "large": {
          "grams": 280,
          "calories": 336,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 14,
          "sodium": 210,
          "protein": 14,
          "sugar": 45
        },
        "pint": {
          "grams": 440,
          "calories": 528,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 22,
          "sodium": 330,
          "protein": 22,
          "sugar": 70
        },
        "quart": {
          "grams": 880,
          "calories": 1056,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 44,
          "sodium": 660,
          "protein": 44,
          "sugar": 141
        }
      }
    },
    {
      "id": "ns",
      "name": "No Sugar",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 260,
          "total_fat": 10,
          "saturated_fat": 7,
          "cholesterol": 30,
          "sodium": 160,
          "protein": 10,
          "sugar": 0
        },
        "regular": {
          "grams": 240,
          "calories": 312,
          "total_fat": 12,
          "saturated_fat": 8,
          "cholesterol": 36,
          "sodium": 192,
          "protein": 12,
          "sugar": 0
        },
        "large": {
          "grams": 280,
          "calories": 364,
          "total_fat": 14,
          "saturated_fat": 10,
          "cholesterol": 42,
          "sodium": 224,
          "protein": 14,
          "sugar": 0
        },
        "pint": {
          "grams": 440,
          "calories": 572,
          "total_fat": 22,
          "saturated_fat": 15,
          "cholesterol": 66,
          "sodium": 352,
          "protein": 22,
          "sugar": 0
        },
        "quart": {
          "grams": 880,
          "calories": 1144,
          "total_fat": 44,
          "saturated_fat": 31,
          "cholesterol": 132,
          "sodium": 704,
          "protein": 44,
          "sugar": 0
        }
      }
    },
    {
      "id": "almond_milk",
      "name": "Almond",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 58,
          "total_fat": 3,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 124,
          "protein": 1,
          "sugar": 7
        },
        "regular": {
          "grams": 240,
          "calories": 69,
          "total_fat": 4,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 148,
          "protein": 1,
          "sugar": 8
        },
        "large": {
          "grams": 280,
          "calories": 81,
          "total_fat": 5,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 173,
          "protein": 1,
          "sugar": 9
        },
        "pint": {
          "grams": 440,
          "calories": 127,
          "total_fat": 7,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 272,
          "protein": 2,
          "sugar": 14
        },
        "quart": {
          "grams": 880,
          "calories": 253,
          "total_fat": 14,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 543,
          "protein": 4,
          "sugar": 29
        }
      }
    },
    {
      "id": "oat_milk",
      "name": "Oat",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 143,
          "total_fat": 6,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 128,
          "protein": 3,
          "sugar": 2
        },
        "regular": {
          "grams": 240,
          "calories": 172,
          "total_fat": 8,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 153,
          "protein": 4,
          "sugar": 3
        },
        "large": {
          "grams": 280,
          "calories": 201,
          "total_fat": 9,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 178,
          "protein": 4,
          "sugar": 3
        },
        "pint": {
          "grams": 440,
          "calories": 316,
          "total_fat": 14,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 280,
          "protein": 7,
          "sugar": 5
        },
        "quart": {
          "grams": 880,
          "calories": 631,
          "total_fat": 28,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 561,
          "protein": 14,
          "sugar": 10
        }
      }
    },
    {
      "id": "coconut_milk",
      "name": "Coconut",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 244,
          "total_fat": 4,
          "saturated_fat": 4,
          "cholesterol": 1,
          "sodium": 212,
          "protein": 2,
          "sugar": 38
        },
        "regular": {
          "grams": 240,
          "calories": 293,
          "total_fat": 4,
          "saturated_fat": 4,
          "cholesterol": 1,
          "sodium": 254,
          "protein": 2,
          "sugar": 45
        },
        "large": {
          "grams": 280,
          "calories": 342,
          "total_fat": 5,
          "saturated_fat": 5,
          "cholesterol": 1,
          "sodium": 297,
          "protein": 2,
          "sugar": 53
        },
        "pint": {
          "grams": 440,
          "calories": 537,
          "total_fat": 8,
          "saturated_fat": 8,
          "cholesterol": 2,
          "sodium": 466,
          "protein": 4,
          "sugar": 83
        },
        "quart": {
          "grams": 880,
          "calories": 1074,
          "total_fat": 16,
          "saturated_fat": 16,
          "cholesterol": 4,
          "sodium": 933,
          "protein": 8,
          "sugar": 165
        }
      }
    },
    {
      "id": "t",
      "name": "Tart",
      "sizes": {
        "small": {
          "grams": 200,
          "calories": 66,
          "total_fat": 4,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 107,
          "protein": 1,
          "sugar": 7
        },
        "regular": {
          "grams": 240,
          "calories": 79,
          "total_fat": 5,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 128,
          "protein": 1,
          "sugar": 8
        },
        "large": {
          "grams": 280,
          "calories": 92,
          "total_fat": 6,
          "saturated_fat": 5,
          "cholesterol": 0,
          "sodium": 150,
          "protein": 1,
          "sugar": 9
        },
        "pint": {
          "grams": 440,
          "calories": 145,
          "total_fat": 9,
          "saturated_fat": 8,
          "cholesterol": 0,
          "sodium": 235,
          "protein": 2,
          "sugar": 14
        },
        "quart": {
          "grams": 880,
          "calories": 290,
          "total_fat": 18,
          "saturated_fat": 16,
          "cholesterol": 0,
          "sodium": 471,
          "protein": 4,
          "sugar": 29
        }
      }
    }
  ],
  "flavors": [
    {
      "id": "banana",
      "name": "Banana",
      "sizes": {
        "small": {
          "grams": 30,
          "calories": 27,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 4
        },
        "regular": {
          "grams": 60,
          "calories": 53,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 1,
          "sugar": 7
        },
        "large": {
          "grams": 60,
          "calories": 53,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 1,
          "sugar": 7
        },
        "pint": {
          "grams": 120,
          "calories": 107,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 2,
          "protein": 1,
          "sugar": 14
        },
        "quart": {
          "grams": 160,
          "calories": 142,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 3,
          "protein": 1,
          "sugar": 19
        }
      }
    },
    {
      "id": "biscotti",
      "name": "Biscotti",
      "sizes": {
        "small": {
          "grams": 31,
          "calories": 176,
          "total_fat": 11,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 67,
          "protein": 1,
          "sugar": 11
        },
        "regular": {
          "grams": 31,
          "calories": 176,
          "total_fat": 11,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 67,
          "protein": 1,
          "sugar": 11
        },
        "large": {
          "grams": 31,
          "calories": 176,
          "total_fat": 11,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 67,
          "protein": 1,
          "sugar": 11
        },
        "pint": {
          "grams": 62,
          "calories": 351,
          "total_fat": 23,
          "saturated_fat": 5,
          "cholesterol": 0,
          "sodium": 134,
          "protein": 2,
          "sugar": 23
        },
        "quart": {
          "grams": 124,
          "calories": 703,
          "total_fat": 45,
          "saturated_fat": 10,
          "cholesterol": 0,
          "sodium": 269,
          "protein": 4,
          "sugar": 45
        }
      }
    },
    {
      "id": "bubble_gum",
      "name": "Bubble Gum",
      "sizes": {
        "small": {
          "grams": 7,
          "calories": 16,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 2,
          "protein": 0,
          "sugar": 4
        },
        "regular": {
          "grams": 7,
          "calories": 16,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 2,
          "protein": 0,
          "sugar": 4
        },
        "large": {
          "grams": 7,
          "calories": 16,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 2,
          "protein": 0,
          "sugar": 4
        },
        "pint": {
          "grams": 14,
          "calories": 32,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 4,
          "protein": 0,
          "sugar": 7
        },
        "quart": {
          "grams": 14,
          "calories": 32,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 4,
          "protein": 0,
          "sugar": 7
        }
      }
    },
    {
      "id": "butter_pecan",
      "name": "Butter Pecan",
      "sizes": {
        "small": {
          "grams": 42,
          "calories": 276,
          "total_fat": 28,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 4,
          "sugar": 1
        },
        "regular": {
          "grams": 42,
          "calories": 276,
          "total_fat": 28,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 4,
          "sugar": 1
        },
        "large": {
          "grams": 63,
          "calories": 414,
          "total_fat": 41,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 6,
          "sugar": 2
        },
        "pint": {
          "grams": 63,
          "calories": 414,
          "total_fat": 41,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 6,
          "sugar": 2
        },
        "quart": {
          "grams": 124,
          "calories": 814,
          "total_fat": 81,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 12,
          "sugar": 4
        }
      }
    },
    {
      "id": "cake_batter",
      "name": "Cake Batter",
      "sizes": {
        "small": {
          "grams": 13,
          "calories": 50,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 108,
          "protein": 1,
          "sugar": 6
        },
        "regular": {
          "grams": 13,
          "calories": 50,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 108,
          "protein": 1,
          "sugar": 6
        },
        "large": {
          "grams": 26,
          "calories": 99,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 217,
          "protein": 1,
          "sugar": 11
        },
        "pint": {
          "grams": 26,
          "calories": 99,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 217,
          "protein": 1,
          "sugar": 11
        },
        "quart": {
          "grams": 52,
          "calories": 198,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 433,
          "protein": 2,
          "sugar": 22
        }
      }
    },
    {
      "id": "chocolate",
      "name": "Chocolate",
      "sizes": {
        "small": {
          "grams": 65,
          "calories": 279,
          "total_fat": 19,
          "saturated_fat": 12,
          "cholesterol": 46,
          "sodium": 151,
          "protein": 2,
          "sugar": 26
        },
        "regular": {
          "grams": 65,
          "calories": 279,
          "total_fat": 19,
          "saturated_fat": 12,
          "cholesterol": 46,
          "sodium": 151,
          "protein": 2,
          "sugar": 26
        },
        "large": {
          "grams": 130,
          "calories": 557,
          "total_fat": 37,
          "saturated_fat": 23,
          "cholesterol": 93,
          "sodium": 302,
          "protein": 5,
          "sugar": 51
        },
        "pint": {
          "grams": 260,
          "calories": 1114,
          "total_fat": 74,
          "saturated_fat": 46,
          "cholesterol": 186,
          "sodium": 604,
          "protein": 9,
          "sugar": 102
        },
        "quart": {
          "grams": 350,
          "calories": 1500,
          "total_fat": 100,
          "saturated_fat": 62,
          "cholesterol": 250,
          "sodium": 812,
          "protein": 12,
          "sugar": 138
        }
      }
    },
    {
      "id": "coffee",
      "name": "Coffee",
      "sizes": {
        "small": {
          "grams": 2,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 3,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 4,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "pint": {
          "grams": 8,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 10,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        }
      }
    },
    {
      "id": "cotton_candy",
      "name": "Cotton Candy",
      "sizes": {
        "small": {
          "grams": 19,
          "calories": 71,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 19
        },
        "regular": {
          "grams": 19,
          "calories": 71,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 19
        },
        "large": {
          "grams": 19,
          "calories": 71,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 19
        },
        "pint": {
          "grams": 38,
          "calories": 141,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 37
        },
        "quart": {
          "grams": 76,
          "calories": 283,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 74
        }
      }
    },
    {
      "id": "dulce_de_leche",
      "name": "Dulce De Leche",
      "sizes": {
        "small": {
          "grams": 62,
          "calories": 124,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 9,
          "sodium": 124,
          "protein": 1,
          "sugar": 11
        },
        "regular": {
          "grams": 62,
          "calories": 124,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 9,
          "sodium": 124,
          "protein": 1,
          "sugar": 11
        },
        "large": {
          "grams": 62,
          "calories": 124,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 9,
          "sodium": 124,
          "protein": 1,
          "sugar": 11
        },
        "pint": {
          "grams": 124,
          "calories": 248,
          "total_fat": 7,
          "saturated_fat": 5,
          "cholesterol": 17,
          "sodium": 248,
          "protein": 2,
          "sugar": 22
        },
        "quart": {
          "grams": 248,
          "calories": 496,
          "total_fat": 15,
          "saturated_fat": 10,
          "cholesterol": 35,
          "sodium": 496,
          "protein": 5,
          "sugar": 45
        }
      }
    },
    {
      "id": "mint",
      "name": "Mint",
      "sizes": {
        "small": {
          "grams": 4,
          "calories": 30,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 4,
          "calories": 30,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 6,
          "calories": 40,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "pint": {
          "grams": 8,
          "calories": 53,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 16,
          "calories": 107,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        }
      }
    },
    {
      "id": "nutella",
      "name": "Nutella",
      "sizes": {
        "small": {
          "grams": 27,
          "calories": 146,
          "total_fat": 8,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 11,
          "protein": 1,
          "sugar": 14
        },
        "regular": {
          "grams": 27,
          "calories": 146,
          "total_fat": 8,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 11,
          "protein": 1,
          "sugar": 14
        },
        "large": {
          "grams": 27,
          "calories": 146,
          "total_fat": 8,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 11,
          "protein": 1,
          "sugar": 14
        },
        "pint": {
          "grams": 54,
          "calories": 292,
          "total_fat": 16,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 22,
          "protein": 3,
          "sugar": 28
        },
        "quart": {
          "grams": 108,
          "calories": 584,
          "total_fat": 32,
          "saturated_fat": 12,
          "cholesterol": 0,
          "sodium": 44,
          "protein": 6,
          "sugar": 55
        }
      }
    },
    {
      "id": "peanut_butter",
      "name": "Peanut Butter",
      "sizes": {
        "small": {
          "grams": 30,
          "calories": 188,
          "total_fat": 15,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 150,
          "protein": 8,
          "sugar": 2
        },
        "regular": {
          "grams": 30,
          "calories": 188,
          "total_fat": 15,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 150,
          "protein": 8,
          "sugar": 2
        },
        "large": {
          "grams": 30,
          "calories": 188,
          "total_fat": 15,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 150,
          "protein": 8,
          "sugar": 2
        },
        "pint": {
          "grams": 60,
          "calories": 375,
          "total_fat": 30,
          "saturated_fat": 7,
          "cholesterol": 0,
          "sodium": 300,
          "protein": 15,
          "sugar": 4
        },
        "quart": {
          "grams": 180,
          "calories": 1125,
          "total_fat": 90,
          "saturated_fat": 20,
          "cholesterol": 0,
          "sodium": 900,
          "protein": 45,
          "sugar": 11
        }
      }
    },
    {
      "id": "salted_caramel",
      "name": "Salted Caramel",
      "sizes": {
        "small": {
          "grams": 46,
          "calories": 133,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 7,
          "sodium": 207,
          "protein": 1,
          "sugar": 20
        },
        "regular": {
          "grams": 46,
          "calories": 133,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 7,
          "sodium": 207,
          "protein": 1,
          "sugar": 20
        },
        "large": {
          "grams": 92,
          "calories": 267,
          "total_fat": 4,
          "saturated_fat": 3,
          "cholesterol": 14,
          "sodium": 414,
          "protein": 2,
          "sugar": 40
        },
        "pint": {
          "grams": 92,
          "calories": 267,
          "total_fat": 4,
          "saturated_fat": 3,
          "cholesterol": 14,
          "sodium": 414,
          "protein": 2,
          "sugar": 40
        },
        "quart": {
          "grams": 184,
          "calories": 534,
          "total_fat": 8,
          "saturated_fat": 6,
          "cholesterol": 28,
          "sodium": 828,
          "protein": 4,
          "sugar": 79
        }
      }
    },
    {
      "id": "strawberry",
      "name": "Strawberry",
      "sizes": {
        "small": {
          "grams": 83,
          "calories": 89,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 17
        },
        "regular": {
          "grams": 83,
          "calories": 89,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 17
        },
        "large": {
          "grams": 125,
          "calories": 134,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 25
        },
        "pint": {
          "grams": 166,
          "calories": 178,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 33
        },
        "quart": {
          "grams": 332,
          "calories": 356,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 66
        }
      }
    },
    {
      "id": "ube",
      "name": "Ube",
      "sizes": {
        "small": {
          "grams": 2,
          "calories": 7,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 9,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 2,
          "calories": 7,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 9,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 3,
          "calories": 10,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 14,
          "protein": 0,
          "sugar": 1
        },
        "pint": {
          "grams": 4,
          "calories": 13,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 18,
          "protein": 0,
          "sugar": 1
        },
        "quart": {
          "grams": 8,
          "calories": 27,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 36,
          "protein": 0,
          "sugar": 2
        }
      }
    },
    {
      "id": "vanilla",
      "name": "Vanilla",
      "sizes": {
        "small": {
          "grams": 5,
          "calories": 12,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 5,
          "calories": 12,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 5,
          "calories": 12,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "pint": {
          "grams": 6,
          "calories": 16,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 8,
          "calories": 21,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        }
      }
    },
    {
      "id": "yodha_matcha",
      "name": "Yodha Matcha",
      "sizes": {
        "small": {
          "grams": 3,
          "calories": 8,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 2,
          "sugar": 0
        },
        "regular": {
          "grams": 3,
          "calories": 8,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 2,
          "sugar": 0
        },
        "large": {
          "grams": 5,
          "calories": 12,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 2,
          "sugar": 0
        },
        "pint": {
          "grams": 6,
          "calories": 15,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 3,
          "sugar": 0
        },
        "quart": {
          "grams": 12,
          "calories": 30,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 6,
          "sugar": 0
        }
      }
    },
    {
      "id": "guava",
      "name": "Guava",
      "sizes": {
        "small": {
          "grams": 62,
          "calories": 124,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 93,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 62,
          "calories": 124,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 93,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 124,
          "calories": 248,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 186,
          "protein": 0,
          "sugar": 0
        },
        "pint": {
          "grams": 124,
          "calories": 248,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 186,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 248,
          "calories": 496,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 372,
          "protein": 0,
          "sugar": 0
        }
      }
    },
    {
      "id": "red_velvet",
      "name": "Red Velvet",
      "sizes": {
        "small": {
          "grams": 62,
          "calories": 217,
          "total_fat": 9,
          "saturated_fat": 3,
          "cholesterol": 23,
          "sodium": 248,
          "protein": 2,
          "sugar": 20
        },
        "regular": {
          "grams": 62,
          "calories": 217,
          "total_fat": 9,
          "saturated_fat": 3,
          "cholesterol": 23,
          "sodium": 248,
          "protein": 2,
          "sugar": 20
        },
        "large": {
          "grams": 124,
          "calories": 434,
          "total_fat": 19,
          "saturated_fat": 7,
          "cholesterol": 46,
          "sodium": 496,
          "protein": 5,
          "sugar": 40
        },
        "pint": {
          "grams": 124,
          "calories": 434,
          "total_fat": 19,
          "saturated_fat": 7,
          "cholesterol": 46,
          "sodium": 496,
          "protein": 5,
          "sugar": 40
        },
        "quart": {
          "grams": 248,
          "calories": 868,
          "total_fat": 37,
          "saturated_fat": 14,
          "cholesterol": 93,
          "sodium": 992,
          "protein": 9,
          "sugar": 81
        }
      }
    },
    {
      "id": "key_lime_pie",
      "name": "Key Lime Pie",
      "sizes": {
        "small": {
          "grams": 24,
          "calories": 72,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 24,
          "sodium": 28,
          "protein": 1,
          "sugar": 5
        },
        "regular": {
          "grams": 24,
          "calories": 72,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 24,
          "sodium": 28,
          "protein": 1,
          "sugar": 5
        },
        "large": {
          "grams": 24,
          "calories": 72,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 24,
          "sodium": 28,
          "protein": 1,
          "sugar": 5
        },
        "pint": {
          "grams": 48,
          "calories": 145,
          "total_fat": 8,
          "saturated_fat": 4,
          "cholesterol": 48,
          "sodium": 56,
          "protein": 3,
          "sugar": 11
        },
        "quart": {
          "grams": 96,
          "calories": 290,
          "total_fat": 15,
          "saturated_fat": 8,
          "cholesterol": 97,
          "sodium": 112,
          "protein": 5,
          "sugar": 22
        }
      }
    },
    {
      "id": "pumpkin",
      "name": "Pumpkin",
      "sizes": {
        "small": {
          "grams": 24,
          "calories": 9,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 24,
          "calories": 9,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 24,
          "calories": 9,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 0
        },
        "pint": {
          "grams": 48,
          "calories": 18,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 2,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 96,
          "calories": 35,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 4,
          "protein": 1,
          "sugar": 0
        }
      }
    },
    {
      "id": "apple_pie",
      "name": "Apple Pie",
      "sizes": {
        "small": {
          "grams": 85,
          "calories": 70,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 10,
          "protein": 0,
          "sugar": 9
        },
        "regular": {
          "grams": 85,
          "calories": 70,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 10,
          "protein": 0,
          "sugar": 9
        },
        "large": {
          "grams": 85,
          "calories": 70,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 10,
          "protein": 0,
          "sugar": 9
        },
        "pint": {
          "grams": 85,
          "calories": 70,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 10,
          "protein": 0,
          "sugar": 9
        },
        "quart": {
          "grams": 170,
          "calories": 140,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 20,
          "protein": 0,
          "sugar": 18
        }
      }
    },
    {
      "id": "mango",
      "name": "Mango",
      "sizes": {
        "small": {
          "grams": 83,
          "calories": 50,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "regular": {
          "grams": 83,
          "calories": 50,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "large": {
          "grams": 83,
          "calories": 50,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "pint": {
          "grams": 125,
          "calories": 75,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "quart": {
          "grams": 250,
          "calories": 150,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 2,
          "sugar": 0
        }
      }
    }
  ],
  "mixins": [
    {
      "id": "almonds",
      "name": "Almonds",
      "sizes": {
        "small": {
          "grams": 13,
          "calories": 74,
          "total_fat": 6,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 3,
          "sugar": 0
        },
        "regular": {
          "grams": 16,
          "calories": 91,
          "total_fat": 8,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 3,
          "sugar": 0
        },
        "large": {
          "grams": 16,
          "calories": 91,
          "total_fat": 8,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 3,
          "sugar": 0
        },
        "pint": {
          "grams": 26,
          "calories": 149,
          "total_fat": 13,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 6,
          "sugar": 0
        },
        "quart": {
          "grams": 46,
          "calories": 263,
          "total_fat": 23,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 10,
          "sugar": 0
        }
      }
    },
    {
      "id": "banana_mixin",
      "name": "Bananas",
      "sizes": {
        "small": {
          "grams": 31,
          "calories": 28,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 4
        },
        "regular": {
          "grams": 31,
          "calories": 28,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 4
        },
        "large": {
          "grams": 47,
          "calories": 42,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 0,
          "sugar": 6
        },
        "pint": {
          "grams": 67,
          "calories": 60,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 1,
          "protein": 1,
          "sugar": 8
        },
        "quart": {
          "grams": 94,
          "calories": 84,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 2,
          "protein": 1,
          "sugar": 11
        }
      }
    },
    {
      "id": "brownie",
      "name": "Brownies",
      "sizes": {
        "small": {
          "grams": 29,
          "calories": 134,
          "total_fat": 7,
          "saturated_fat": 3,
          "cholesterol": 22,
          "sodium": 45,
          "protein": 2,
          "sugar": 9
        },
        "regular": {
          "grams": 29,
          "calories": 134,
          "total_fat": 7,
          "saturated_fat": 3,
          "cholesterol": 22,
          "sodium": 45,
          "protein": 2,
          "sugar": 9
        },
        "large": {
          "grams": 29,
          "calories": 134,
          "total_fat": 7,
          "saturated_fat": 3,
          "cholesterol": 22,
          "sodium": 45,
          "protein": 2,
          "sugar": 9
        },
        "pint": {
          "grams": 59,
          "calories": 272,
          "total_fat": 14,
          "saturated_fat": 7,
          "cholesterol": 45,
          "sodium": 91,
          "protein": 5,
          "sugar": 18
        },
        "quart": {
          "grams": 82,
          "calories": 378,
          "total_fat": 19,
          "saturated_fat": 9,
          "cholesterol": 63,
          "sodium": 126,
          "protein": 6,
          "sugar": 25
        }
      }
    },
    {
      "id": "choc_chips",
      "name": "Chocolate Chips",
      "sizes": {
        "small": {
          "grams": 17,
          "calories": 78,
          "total_fat": 4,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 10
        },
        "regular": {
          "grams": 28,
          "calories": 129,
          "total_fat": 7,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 16
        },
        "large": {
          "grams": 28,
          "calories": 129,
          "total_fat": 7,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 16
        },
        "pint": {
          "grams": 28,
          "calories": 129,
          "total_fat": 7,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 16
        },
        "quart": {
          "grams": 44,
          "calories": 202,
          "total_fat": 11,
          "saturated_fat": 7,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 2,
          "sugar": 25
        }
      }
    },
    {
      "id": "choc_sprinkles",
      "name": "Chocolate Sprinkles",
      "sizes": {
        "small": {
          "grams": 11,
          "calories": 55,
          "total_fat": 3,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 6
        },
        "regular": {
          "grams": 16,
          "calories": 80,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 8
        },
        "large": {
          "grams": 16,
          "calories": 80,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 8
        },
        "pint": {
          "grams": 29,
          "calories": 145,
          "total_fat": 7,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 14
        },
        "quart": {
          "grams": 44,
          "calories": 220,
          "total_fat": 11,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 22
        }
      }
    },
    {
      "id": "cinnamon_crunch",
      "name": "Cinnamon Toast Crunch",
      "sizes": {
        "small": {
          "grams": 9,
          "calories": 37,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 50,
          "protein": 0,
          "sugar": 3
        },
        "regular": {
          "grams": 11,
          "calories": 46,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 62,
          "protein": 1,
          "sugar": 3
        },
        "large": {
          "grams": 11,
          "calories": 46,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 62,
          "protein": 1,
          "sugar": 3
        },
        "pint": {
          "grams": 20,
          "calories": 83,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 112,
          "protein": 1,
          "sugar": 6
        },
        "quart": {
          "grams": 20,
          "calories": 83,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 112,
          "protein": 1,
          "sugar": 6
        }
      }
    },
    {
      "id": "coconut_shavings",
      "name": "Coconut Flakes",
      "sizes": {
        "small": {
          "grams": 11,
          "calories": 51,
          "total_fat": 3,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 15,
          "protein": 0,
          "sugar": 3
        },
        "regular": {
          "grams": 11,
          "calories": 51,
          "total_fat": 3,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 15,
          "protein": 0,
          "sugar": 3
        },
        "large": {
          "grams": 11,
          "calories": 51,
          "total_fat": 3,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 15,
          "protein": 0,
          "sugar": 3
        },
        "pint": {
          "grams": 22,
          "calories": 103,
          "total_fat": 5,
          "saturated_fat": 5,
          "cholesterol": 0,
          "sodium": 29,
          "protein": 0,
          "sugar": 6
        },
        "quart": {
          "grams": 32,
          "calories": 149,
          "total_fat": 7,
          "saturated_fat": 7,
          "cholesterol": 0,
          "sodium": 43,
          "protein": 0,
          "sugar": 9
        }
      }
    },
    {
      "id": "cookie_dough",
      "name": "Cookie Dough",
      "sizes": {
        "small": {
          "grams": 34,
          "calories": 160,
          "total_fat": 9,
          "saturated_fat": 4,
          "cholesterol": 10,
          "sodium": 115,
          "protein": 1,
          "sugar": 12
        },
        "regular": {
          "grams": 34,
          "calories": 160,
          "total_fat": 9,
          "saturated_fat": 4,
          "cholesterol": 10,
          "sodium": 115,
          "protein": 1,
          "sugar": 12
        },
        "large": {
          "grams": 34,
          "calories": 160,
          "total_fat": 9,
          "saturated_fat": 4,
          "cholesterol": 10,
          "sodium": 115,
          "protein": 1,
          "sugar": 12
        },
        "pint": {
          "grams": 68,
          "calories": 320,
          "total_fat": 18,
          "saturated_fat": 7,
          "cholesterol": 20,
          "sodium": 230,
          "protein": 2,
          "sugar": 24
        },
        "quart": {
          "grams": 102,
          "calories": 480,
          "total_fat": 27,
          "saturated_fat": 10,
          "cholesterol": 30,
          "sodium": 345,
          "protein": 3,
          "sugar": 36
        }
      }
    },
    {
      "id": "cookie_bites",
      "name": "Cookie Crisps",
      "sizes": {
        "small": {
          "grams": 14,
          "calories": 65,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 52,
          "protein": 0,
          "sugar": 4
        },
        "regular": {
          "grams": 14,
          "calories": 65,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 52,
          "protein": 0,
          "sugar": 4
        },
        "large": {
          "grams": 14,
          "calories": 65,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 52,
          "protein": 0,
          "sugar": 4
        },
        "pint": {
          "grams": 29,
          "calories": 130,
          "total_fat": 5,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 105,
          "protein": 1,
          "sugar": 9
        },
        "quart": {
          "grams": 44,
          "calories": 195,
          "total_fat": 8,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 158,
          "protein": 2,
          "sugar": 14
        }
      }
    },
    {
      "id": "fruity_pebbles",
      "name": "Fruity Pebbles",
      "sizes": {
        "small": {
          "grams": 6,
          "calories": 24,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 32,
          "protein": 0,
          "sugar": 2
        },
        "regular": {
          "grams": 6,
          "calories": 24,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 32,
          "protein": 0,
          "sugar": 2
        },
        "large": {
          "grams": 6,
          "calories": 24,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 32,
          "protein": 0,
          "sugar": 2
        },
        "pint": {
          "grams": 10,
          "calories": 40,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 53,
          "protein": 0,
          "sugar": 3
        },
        "quart": {
          "grams": 13,
          "calories": 52,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 69,
          "protein": 1,
          "sugar": 4
        }
      }
    },
    {
      "id": "graham_crackers",
      "name": "Graham Cracker",
      "sizes": {
        "small": {
          "grams": 7,
          "calories": 30,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 30,
          "protein": 0,
          "sugar": 2
        },
        "regular": {
          "grams": 7,
          "calories": 30,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 30,
          "protein": 0,
          "sugar": 2
        },
        "large": {
          "grams": 7,
          "calories": 30,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 30,
          "protein": 0,
          "sugar": 2
        },
        "pint": {
          "grams": 16,
          "calories": 69,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 69,
          "protein": 1,
          "sugar": 4
        },
        "quart": {
          "grams": 24,
          "calories": 104,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 104,
          "protein": 2,
          "sugar": 6
        }
      }
    },
    {
      "id": "granola",
      "name": "Granola",
      "sizes": {
        "small": {
          "grams": 16,
          "calories": 67,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 45,
          "protein": 3,
          "sugar": 4
        },
        "regular": {
          "grams": 20,
          "calories": 84,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 56,
          "protein": 4,
          "sugar": 5
        },
        "large": {
          "grams": 20,
          "calories": 84,
          "total_fat": 2,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 56,
          "protein": 4,
          "sugar": 5
        },
        "pint": {
          "grams": 27,
          "calories": 113,
          "total_fat": 3,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 76,
          "protein": 5,
          "sugar": 6
        },
        "quart": {
          "grams": 46,
          "calories": 193,
          "total_fat": 6,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 129,
          "protein": 9,
          "sugar": 11
        }
      }
    },
    {
      "id": "gummy_bears",
      "name": "Gummy Bears",
      "sizes": {
        "small": {
          "grams": 26,
          "calories": 87,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 4,
          "protein": 2,
          "sugar": 12
        },
        "regular": {
          "grams": 37,
          "calories": 123,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 6,
          "protein": 2,
          "sugar": 17
        },
        "large": {
          "grams": 46,
          "calories": 153,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 8,
          "protein": 3,
          "sugar": 21
        },
        "pint": {
          "grams": 46,
          "calories": 153,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 8,
          "protein": 3,
          "sugar": 21
        },
        "quart": {
          "grams": 84,
          "calories": 280,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 14,
          "protein": 6,
          "sugar": 39
        }
      }
    },
    {
      "id": "heath",
      "name": "Heath",
      "sizes": {
        "small": {
          "grams": 17,
          "calories": 91,
          "total_fat": 6,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 51,
          "protein": 0,
          "sugar": 10
        },
        "regular": {
          "grams": 22,
          "calories": 117,
          "total_fat": 7,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 66,
          "protein": 0,
          "sugar": 13
        },
        "large": {
          "grams": 29,
          "calories": 155,
          "total_fat": 10,
          "saturated_fat": 5,
          "cholesterol": 0,
          "sodium": 87,
          "protein": 0,
          "sugar": 17
        },
        "pint": {
          "grams": 37,
          "calories": 197,
          "total_fat": 12,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 111,
          "protein": 0,
          "sugar": 22
        },
        "quart": {
          "grams": 62,
          "calories": 331,
          "total_fat": 21,
          "saturated_fat": 10,
          "cholesterol": 0,
          "sodium": 186,
          "protein": 0,
          "sugar": 37
        }
      }
    },
    {
      "id": "honey",
      "name": "Honey",
      "sizes": {
        "small": {
          "grams": 7,
          "calories": 22,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "regular": {
          "grams": 7,
          "calories": 22,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "large": {
          "grams": 7,
          "calories": 22,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "pint": {
          "grams": 10,
          "calories": 32,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 14,
          "calories": 45,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        }
      }
    },
    {
      "id": "kit_kat",
      "name": "Kit Kat",
      "sizes": {
        "small": {
          "grams": 15,
          "calories": 71,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 9,
          "protein": 1,
          "sugar": 8
        },
        "regular": {
          "grams": 20,
          "calories": 94,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 12,
          "protein": 1,
          "sugar": 11
        },
        "large": {
          "grams": 20,
          "calories": 94,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 12,
          "protein": 1,
          "sugar": 11
        },
        "pint": {
          "grams": 31,
          "calories": 146,
          "total_fat": 8,
          "saturated_fat": 5,
          "cholesterol": 0,
          "sodium": 18,
          "protein": 2,
          "sugar": 16
        },
        "quart": {
          "grams": 57,
          "calories": 268,
          "total_fat": 15,
          "saturated_fat": 8,
          "cholesterol": 0,
          "sodium": 34,
          "protein": 3,
          "sugar": 30
        }
      }
    },
    {
      "id": "m_ms",
      "name": "M&M",
      "sizes": {
        "small": {
          "grams": 17,
          "calories": 85,
          "total_fat": 4,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 12,
          "protein": 1,
          "sugar": 0
        },
        "regular": {
          "grams": 30,
          "calories": 150,
          "total_fat": 8,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 21,
          "protein": 2,
          "sugar": 0
        },
        "large": {
          "grams": 30,
          "calories": 150,
          "total_fat": 8,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 21,
          "protein": 2,
          "sugar": 0
        },
        "pint": {
          "grams": 45,
          "calories": 225,
          "total_fat": 11,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 32,
          "protein": 3,
          "sugar": 0
        },
        "quart": {
          "grams": 71,
          "calories": 355,
          "total_fat": 18,
          "saturated_fat": 10,
          "cholesterol": 0,
          "sodium": 51,
          "protein": 5,
          "sugar": 0
        }
      }
    },
    {
      "id": "maria_cookies",
      "name": "Maria Cookies",
      "sizes": {
        "small": {
          "grams": 6,
          "calories": 26,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 21,
          "protein": 0,
          "sugar": 1
        },
        "regular": {
          "grams": 6,
          "calories": 26,
          "total_fat": 1,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 21,
          "protein": 0,
          "sugar": 1
        },
        "large": {
          "grams": 11,
          "calories": 48,
          "total_fat": 1,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 38,
          "protein": 1,
          "sugar": 2
        },
        "pint": {
          "grams": 18,
          "calories": 78,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 63,
          "protein": 1,
          "sugar": 4
        },
        "quart": {
          "grams": 24,
          "calories": 104,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 84,
          "protein": 2,
          "sugar": 5
        }
      }
    },
    {
      "id": "marshmallow",
      "name": "Marshmallow",
      "sizes": {
        "small": {
          "grams": 11,
          "calories": 33,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 6,
          "protein": 0,
          "sugar": 6
        },
        "regular": {
          "grams": 16,
          "calories": 48,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 8,
          "protein": 1,
          "sugar": 9
        },
        "large": {
          "grams": 16,
          "calories": 48,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 8,
          "protein": 1,
          "sugar": 9
        },
        "pint": {
          "grams": 26,
          "calories": 78,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 13,
          "protein": 1,
          "sugar": 15
        },
        "quart": {
          "grams": 33,
          "calories": 99,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 16,
          "protein": 1,
          "sugar": 19
        }
      }
    },
    {
      "id": "ny_cheesecake",
      "name": "Cheesecake bites",
      "sizes": {
        "small": {
          "grams": 26,
          "calories": 86,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 16,
          "sodium": 81,
          "protein": 1,
          "sugar": 5
        },
        "regular": {
          "grams": 26,
          "calories": 86,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 16,
          "sodium": 81,
          "protein": 1,
          "sugar": 5
        },
        "large": {
          "grams": 50,
          "calories": 165,
          "total_fat": 10,
          "saturated_fat": 6,
          "cholesterol": 30,
          "sodium": 155,
          "protein": 2,
          "sugar": 10
        },
        "pint": {
          "grams": 50,
          "calories": 165,
          "total_fat": 10,
          "saturated_fat": 6,
          "cholesterol": 30,
          "sodium": 155,
          "protein": 2,
          "sugar": 10
        },
        "quart": {
          "grams": 64,
          "calories": 211,
          "total_fat": 13,
          "saturated_fat": 7,
          "cholesterol": 38,
          "sodium": 198,
          "protein": 3,
          "sugar": 12
        }
      }
    },
    {
      "id": "nestles_crunch",
      "name": "Crunch",
      "sizes": {
        "small": {
          "grams": 13,
          "calories": 63,
          "total_fat": 3,
          "saturated_fat": 2,
          "cholesterol": 4,
          "sodium": 18,
          "protein": 1,
          "sugar": 7
        },
        "regular": {
          "grams": 18,
          "calories": 87,
          "total_fat": 4,
          "saturated_fat": 3,
          "cholesterol": 5,
          "sodium": 24,
          "protein": 1,
          "sugar": 10
        },
        "large": {
          "grams": 18,
          "calories": 87,
          "total_fat": 4,
          "saturated_fat": 3,
          "cholesterol": 5,
          "sodium": 24,
          "protein": 1,
          "sugar": 10
        },
        "pint": {
          "grams": 33,
          "calories": 160,
          "total_fat": 8,
          "saturated_fat": 5,
          "cholesterol": 9,
          "sodium": 44,
          "protein": 2,
          "sugar": 18
        },
        "quart": {
          "grams": 33,
          "calories": 160,
          "total_fat": 8,
          "saturated_fat": 5,
          "cholesterol": 9,
          "sodium": 44,
          "protein": 2,
          "sugar": 18
        }
      }
    },
    {
      "id": "cookies",
      "name": "Oreos",
      "sizes": {
        "small": {
          "grams": 12,
          "calories": 56,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 41,
          "protein": 0,
          "sugar": 5
        },
        "regular": {
          "grams": 12,
          "calories": 56,
          "total_fat": 2,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 41,
          "protein": 0,
          "sugar": 5
        },
        "large": {
          "grams": 36,
          "calories": 169,
          "total_fat": 7,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 122,
          "protein": 1,
          "sugar": 15
        },
        "pint": {
          "grams": 48,
          "calories": 226,
          "total_fat": 10,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 162,
          "protein": 1,
          "sugar": 20
        },
        "quart": {
          "grams": 72,
          "calories": 339,
          "total_fat": 15,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 244,
          "protein": 2,
          "sugar": 30
        }
      }
    },
    {
      "id": "peanuts",
      "name": "Peanuts",
      "sizes": {
        "small": {
          "grams": 12,
          "calories": 68,
          "total_fat": 6,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 3,
          "sugar": 0
        },
        "regular": {
          "grams": 16,
          "calories": 90,
          "total_fat": 8,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 4,
          "sugar": 0
        },
        "large": {
          "grams": 16,
          "calories": 90,
          "total_fat": 8,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 4,
          "sugar": 0
        },
        "pint": {
          "grams": 24,
          "calories": 135,
          "total_fat": 12,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 6,
          "sugar": 0
        },
        "quart": {
          "grams": 32,
          "calories": 180,
          "total_fat": 16,
          "saturated_fat": 2,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 8,
          "sugar": 0
        }
      }
    },
    {
      "id": "pecans",
      "name": "Pecans",
      "sizes": {
        "small": {
          "grams": 18,
          "calories": 36,
          "total_fat": 4,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "regular": {
          "grams": 22,
          "calories": 44,
          "total_fat": 5,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "large": {
          "grams": 22,
          "calories": 44,
          "total_fat": 5,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "pint": {
          "grams": 28,
          "calories": 56,
          "total_fat": 7,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 1,
          "sugar": 0
        },
        "quart": {
          "grams": 45,
          "calories": 90,
          "total_fat": 10,
          "saturated_fat": 1,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 2,
          "sugar": 0
        }
      }
    },
    {
      "id": "sprinkles",
      "name": "Rainbow Sprinkles",
      "sizes": {
        "small": {
          "grams": 15,
          "calories": 72,
          "total_fat": 3,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 12
        },
        "regular": {
          "grams": 15,
          "calories": 72,
          "total_fat": 3,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 12
        },
        "large": {
          "grams": 15,
          "calories": 72,
          "total_fat": 3,
          "saturated_fat": 3,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 12
        },
        "pint": {
          "grams": 23,
          "calories": 110,
          "total_fat": 4,
          "saturated_fat": 4,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 18
        },
        "quart": {
          "grams": 45,
          "calories": 216,
          "total_fat": 9,
          "saturated_fat": 8,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 36
        }
      }
    },
    {
      "id": "reeses",
      "name": "Reese's",
      "sizes": {
        "small": {
          "grams": 22,
          "calories": 110,
          "total_fat": 6,
          "saturated_fat": 2,
          "cholesterol": 3,
          "sodium": 71,
          "protein": 2,
          "sugar": 12
        },
        "regular": {
          "grams": 22,
          "calories": 110,
          "total_fat": 6,
          "saturated_fat": 2,
          "cholesterol": 3,
          "sodium": 71,
          "protein": 2,
          "sugar": 12
        },
        "large": {
          "grams": 22,
          "calories": 110,
          "total_fat": 6,
          "saturated_fat": 2,
          "cholesterol": 3,
          "sodium": 71,
          "protein": 2,
          "sugar": 12
        },
        "pint": {
          "grams": 44,
          "calories": 220,
          "total_fat": 13,
          "saturated_fat": 5,
          "cholesterol": 5,
          "sodium": 141,
          "protein": 4,
          "sugar": 23
        },
        "quart": {
          "grams": 66,
          "calories": 330,
          "total_fat": 19,
          "saturated_fat": 7,
          "cholesterol": 8,
          "sodium": 212,
          "protein": 6,
          "sugar": 35
        }
      }
    },
    {
      "id": "snow_caps",
      "name": "Snowcaps",
      "sizes": {
        "small": {
          "grams": 19,
          "calories": 95,
          "total_fat": 4,
          "saturated_fat": 3,
          "cholesterol": 3,
          "sodium": 3,
          "protein": 1,
          "sugar": 11
        },
        "regular": {
          "grams": 31,
          "calories": 155,
          "total_fat": 6,
          "saturated_fat": 4,
          "cholesterol": 5,
          "sodium": 5,
          "protein": 1,
          "sugar": 19
        },
        "large": {
          "grams": 31,
          "calories": 155,
          "total_fat": 6,
          "saturated_fat": 4,
          "cholesterol": 5,
          "sodium": 5,
          "protein": 1,
          "sugar": 19
        },
        "pint": {
          "grams": 31,
          "calories": 155,
          "total_fat": 6,
          "saturated_fat": 4,
          "cholesterol": 5,
          "sodium": 5,
          "protein": 1,
          "sugar": 19
        },
        "quart": {
          "grams": 61,
          "calories": 305,
          "total_fat": 12,
          "saturated_fat": 8,
          "cholesterol": 10,
          "sodium": 10,
          "protein": 2,
          "sugar": 37
        }
      }
    },
    {
      "id": "waffle_cone",
      "name": "Waffle Cones",
      "sizes": {
        "small": {
          "grams": 20,
          "calories": 80,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 35,
          "protein": 1,
          "sugar": 6
        },
        "regular": {
          "grams": 20,
          "calories": 80,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 35,
          "protein": 1,
          "sugar": 6
        },
        "large": {
          "grams": 20,
          "calories": 80,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 35,
          "protein": 1,
          "sugar": 6
        },
        "pint": {
          "grams": 20,
          "calories": 80,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 35,
          "protein": 1,
          "sugar": 6
        },
        "quart": {
          "grams": 40,
          "calories": 160,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 70,
          "protein": 2,
          "sugar": 12
        }
      }
    },
    {
      "id": "white_chocolate",
      "name": "White Chocolate Chips",
      "sizes": {
        "small": {
          "grams": 23,
          "calories": 120,
          "total_fat": 6,
          "saturated_fat": 4,
          "cholesterol": 2,
          "sodium": 15,
          "protein": 1,
          "sugar": 12
        },
        "regular": {
          "grams": 23,
          "calories": 120,
          "total_fat": 6,
          "saturated_fat": 4,
          "cholesterol": 2,
          "sodium": 15,
          "protein": 1,
          "sugar": 12
        },
        "large": {
          "grams": 23,
          "calories": 120,
          "total_fat": 6,
          "saturated_fat": 4,
          "cholesterol": 2,
          "sodium": 15,
          "protein": 1,
          "sugar": 12
        },
        "pint": {
          "grams": 34,
          "calories": 177,
          "total_fat": 9,
          "saturated_fat": 5,
          "cholesterol": 3,
          "sodium": 22,
          "protein": 2,
          "sugar": 18
        },
        "quart": {
          "grams": 50,
          "calories": 260,
          "total_fat": 14,
          "saturated_fat": 8,
          "cholesterol": 5,
          "sodium": 32,
          "protein": 3,
          "sugar": 27
        }
      }
    },
    {
      "id": "caramel_syrup",
      "name": "Caramel",
      "sizes": {
        "small": {
          "grams": 20,
          "calories": 87,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 17,
          "sodium": 23,
          "protein": 1,
          "sugar": 8
        },
        "regular": {
          "grams": 20,
          "calories": 87,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 17,
          "sodium": 23,
          "protein": 1,
          "sugar": 8
        },
        "large": {
          "grams": 20,
          "calories": 87,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 17,
          "sodium": 23,
          "protein": 1,
          "sugar": 8
        },
        "pint": {
          "grams": 20,
          "calories": 87,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 17,
          "sodium": 23,
          "protein": 1,
          "sugar": 8
        },
        "quart": {
          "grams": 20,
          "calories": 87,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 17,
          "sodium": 23,
          "protein": 1,
          "sugar": 8
        }
      }
    },
    {
      "id": "hot_fudge",
      "name": "Hot Fudge",
      "sizes": {
        "small": {
          "grams": 17,
          "calories": 73,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 12,
          "sodium": 39,
          "protein": 1,
          "sugar": 7
        },
        "regular": {
          "grams": 17,
          "calories": 73,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 12,
          "sodium": 39,
          "protein": 1,
          "sugar": 7
        },
        "large": {
          "grams": 17,
          "calories": 73,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 12,
          "sodium": 39,
          "protein": 1,
          "sugar": 7
        },
        "pint": {
          "grams": 17,
          "calories": 73,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 12,
          "sodium": 39,
          "protein": 1,
          "sugar": 7
        },
        "quart": {
          "grams": 17,
          "calories": 73,
          "total_fat": 5,
          "saturated_fat": 3,
          "cholesterol": 12,
          "sodium": 39,
          "protein": 1,
          "sugar": 7
        }
      }
    },
    {
      "id": "whipped_cream",
      "name": "Whipped Cream",
      "sizes": {
        "small": {
          "grams": 26,
          "calories": 87,
          "total_fat": 6,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 4
        },
        "regular": {
          "grams": 26,
          "calories": 87,
          "total_fat": 6,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 4
        },
        "large": {
          "grams": 26,
          "calories": 87,
          "total_fat": 6,
          "saturated_fat": 6,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 4
        },
        "pint": {
          "grams": 0,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        },
        "quart": {
          "grams": 0,
          "calories": 0,
          "total_fat": 0,
          "saturated_fat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "protein": 0,
          "sugar": 0
        }
      }
    }
  ]
};
