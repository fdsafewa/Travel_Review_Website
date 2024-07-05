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
    "user_id": "user123",
    "rating": 5,
    "text": "Amazing place!"
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
