### API Testing Document

#### 1. Create Attraction

- **URL:** `http://localhost:8000/api/attraction/add`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "name": "Space Needle",
    "address": "Space Needle, 400 Broad St, Seattle, WA 98109",
    "gmap_id": "0x5490151f4ed5b7f9:0xdb2ba8689ed0920d",
    "description": "Iconic, 605-ft.-tall spire at the Seattle Center, with an observation deck & a rotating restaurant.",
    "latitude": 47.620506,
    "longitude": -122.349277
  }
  ```

#### 2. Get Attraction

- **URL:** `http://localhost:8000/api/attraction/0x5490151f4ed5b7f9:0xdb2ba8689ed0920d`
- **Method:** GET

#### 3. Add Review

- **URL:** `http://localhost:8000/api/review/add/0x5490151f4ed5b7f9:0xdb2ba8689ed0920d`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "user_id": "111142189554954458264",
    "rating": 5,
    "text": "Beautiful view of Seattle from the top of the needle. U need around 2 hours here. The upper outer deck is covered perfectly well with glass, u can click good pictures. The glass also blocks the high wind on top.\nThe best part of the tower is its rotating glass restaurant. It rotates very slowly and the view is fantastic.\nTheir is a huge souvenir store at the bottom, the selections are diverse."
  }
  ```

#### 4. Get Reviews by Attraction

- **URL:** `http://localhost:8000/api/review/get-reviews-by-attraction/0x5490151f4ed5b7f9:0xdb2ba8689ed0920d`
- **Method:** GET

### Example cURL Commands

#### Create Attraction
```sh
curl -X POST http://localhost:8000/api/attraction/add -H "Content-Type: application/json" -d '{
  "name": "Space Needle",
  "address": "Space Needle, 400 Broad St, Seattle, WA 98109",
  "gmap_id": "0x5490151f4ed5b7f9:0xdb2ba8689ed0920d",
  "description": "Iconic, 605-ft.-tall spire at the Seattle Center, with an observation deck & a rotating restaurant.",
  "latitude": 47.620506,
  "longitude": -122.349277
}'
```

#### Get Attraction
```sh
curl http://localhost:8000/api/attraction/0x5490151f4ed5b7f9:0xdb2ba8689ed0920d
```

#### Add Review
```sh
curl -X POST http://localhost:8000/api/review/add/0x5490151f4ed5b7f9:0xdb2ba8689ed0920d -H "Content-Type: application/json" -d '{
  "user_id": "111142189554954458264",
  "rating": 5,
  "text": "Beautiful view of Seattle from the top of the needle. U need around 2 hours here. The upper outer deck is covered perfectly well with glass, u can click good pictures. The glass also blocks the high wind on top.\nThe best part of the tower is its rotating glass restaurant. It rotates very slowly and the view is fantastic.\nTheir is a huge souvenir store at the bottom, the selections are diverse."
}'
```

#### Get Reviews by Attraction
```sh
curl http://localhost:8000/api/review/get-reviews-by-attraction/0x5490151f4ed5b7f9:0xdb2ba8689ed0920d
```

#### Citation

The review example is sourced from [Google Local Review Data (UCSD)](https://datarepo.eng.ucsd.edu/mcauley_group/gdrive/googlelocal/)

```json
{"name": "Space Needle", "address": "Space Needle, 400 Broad St, Seattle, WA 98109", "gmap_id": "0x5490151f4ed5b7f9:0xdb2ba8689ed0920d", "description": "Iconic, 605-ft.-tall spire at the Seattle Center, with an observation deck & a rotating restaurant.", "latitude": 47.620506299999995, "longitude": -122.34927739999999, "category": ["Observation deck", "Cafe", "Gift shop", "Tourist attraction", "Wine bar"], "avg_rating": 4.6, "num_of_reviews": 9998, "price": "$$$", "hours": [["Thursday", "12\u20139PM"], ["Friday", "12\u20139PM"], ["Saturday", "10AM\u201310PM"], ["Sunday", "10AM\u20138:30PM"], ["Monday", "12\u20137PM"], ["Tuesday", "12\u20137PM"], ["Wednesday", "12\u20137PM"]], "MISC": {"Accessibility": ["Wheelchair accessible entrance"], "Amenities": ["Good for kids"]}, "relative_results": ["0x54901545d5e902b1:0x809dba0423e59752", "0x54901545d66b3b55:0x7b41db287e00e687", "0x549015460a20e6b7:0x2cdb2e39e1c63dd2", "0x54906aba93f21deb:0xc049259540d76c5b", "0x54901546f87aca63:0xd1e929cd1149d812"], "url": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x5490151f4ed5b7f9:0xdb2ba8689ed0920d?authuser=-1&hl=en&gl=us"}
```

```json
{"user_id": "111142189554954458264", "name": "shwetha Ajay", "time": 1618351936147, "rating": 5, "text": "Beautiful view of Seattle from the top of the needle. U need around 2 hours here. The upper outer deck is covered perfectly well with glass, u can click good pictures. The glass also blocks the high wind on top.\nThe best part of the tower is its rotating glass restaurant. It rotates very slowly and the view is fantastic.\nTheir is a huge souvenir store at the bottom, the selections are diverse.", "pics": [{"url": ["https://lh5.googleusercontent.com/p/AF1QipO_NBazss87jgHE8UtoPiuo1ppKB7IFjmWfuFpc=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipOla0cdzYEQnA1DiP6e8k3PvvcM5O6Sya9UBD2G=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipMH717hU_oo2G0e9K3Ur2FPwUjJ33k7f8_Zo3TM=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipPrAifODlhq6SqDwnqfID4TjenW8nWZeptSX_65=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipMcvqliFRcMpRr-n28nvVZQ0pMc__S4QMbvYTEF=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipPLUrX7eSUl3XEklsnOM2gyiVUKgl2SAST_nn8R=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipMZtQzWtqpCXiP9yUuMTYODJYl_yRYUu9ANOaMA=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipNZtvG1i0vzPDg_AFhZVa_kLNYwa5K-CjgSoWMu=w150-h150-k-no-p"]}, {"url": ["https://lh5.googleusercontent.com/p/AF1QipMlK6y0uR4Di39QVb-UCEeNbJ7GTMJE5XsBccS4=w150-h150-k-no-p"]}], "resp": null, "gmap_id": "0x5490151f4ed5b7f9:0xdb2ba8689ed0920d"}
```
