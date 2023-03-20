# Typeform Technology Radar

## Development

Then simply start the dev server:

```
npm run start
```

## Build the radar

```
npx aoe_technology_radar-buildRadar
```

Generate the `rd.json` file containing the radar data

```
npx aoe_technology_radar-generateJson
```

Run the Prepare script

```
npm run prepare
```

Serve

```
cd build
python3 -m http.server 8080
```

Then open here: http://localhost:8080/

### Change scripts

If you change one of the scripts in the scripts' folder, you have to compile them to JavaScript.

Therefore, run `npm run build:scripts` and commit the results in dist_scripts.

To make it more robust the script will be executed on commit.
