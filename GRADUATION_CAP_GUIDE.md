# Graduation Cap Replacement Guide

## Quick Overview
You need to replace the current Halloween hat (`hat-transformed.glb`) with a graduation cap model to better represent Dr. Memon's academic profile.

## Option 1: Free 3D Models (Fastest)

### Recommended Sources:

1. **Sketchfab** (Best Quality)
   - URL: https://sketchfab.com/3d-models?q=graduation+cap&type=downloadable
   - Filter: "Downloadable"
   - License: Look for "CC BY" or "CC0" (free to use)
   - Download format: GLB or GLTF

2. **Free3D**
   - URL: https://free3d.com/3d-models/graduation-cap
   - Many free graduation cap models
   - Download as OBJ/FBX, then convert to GLB

3. **CGTrader Free Section**
   - URL: https://www.cgtrader.com/free-3d-models/graduation-cap
   - Some free models available
   - Usually good quality

### Specific Recommended Model:
**"Graduation Cap" by KhaledSharif on Sketchfab**
- Search: "graduation cap academic"
- Look for simple, clean designs
- Make sure it's downloadable and free

## Option 2: AI-Generated 3D Model

### Using Meshy AI (Recommended):
1. Go to https://www.meshy.ai/
2. Sign up (free tier available)
3. Use "Text to 3D"
4. Prompt: "Academic graduation cap, mortarboard, simple clean design, blue and black colors, tassel hanging"
5. Generate (takes 5-10 minutes)
6. Download as GLB
7. Name it `graduation-cap.glb`

### Using Luma AI:
1. Go to https://lumalabs.ai/genie
2. Create account
3. Prompt: "Graduation mortarboard cap with tassel, academic style"
4. Download GLB

## Step-by-Step Installation

### Step 1: Get Your Graduation Cap Model

Download or generate a graduation cap model using any method above. Make sure it's in GLB format.

### Step 2: Replace the File

**Option A: Replace Existing File**
```bash
# Simply replace the file:
# Delete: public/models/hat-transformed.glb
# Add: Your new graduation cap as hat-transformed.glb
```

**Option B: Add New File and Update Code**
```bash
# Add new file: public/models/graduation-cap.glb
# Then update the component (see Step 3)
```

### Step 3: Update Component (If Using New Filename)

If you named your file `graduation-cap.glb`, update the component:

**File: `src/components/models/HatModel.jsx`**

Change line 11 from:
```javascript
const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
```

To:
```javascript
const { nodes, materials } = useGLTF("/models/graduation-cap.glb");
```

And change line 40 from:
```javascript
useGLTF.preload("/models/hat-transformed.glb");
```

To:
```javascript
useGLTF.preload("/models/graduation-cap.glb");
```

### Step 4: Adjust Model Scale/Position (If Needed)

The graduation cap might need different positioning. Edit `src/components/models/HatModel.jsx`:

```javascript
return (
  <group
    {...props}
    dispose={null}
    ref={modelRef}
    scale={[2.0, 2.0, 2.0]}        // Adjust size
    rotation={[0.2, -1, 0]}         // Adjust angle
    position={[0, -1, 0]}           // Adjust height
  >
```

Try these values:
- **Scale**: [1.5, 1.5, 1.5] to [2.5, 2.5, 2.5]
- **Rotation**: [0.2, -1, 0] for slight tilt
- **Position**: [0, -1, 0] to [0, 1, 0]

### Step 5: Test Your Changes

```bash
# Restart dev server
npm run dev

# Open: http://localhost:3001/about
# Check if graduation cap appears and looks good
```

## Quick Fix: Use Simple Geometry

If you can't find a good model, I can create a simple graduation cap using Three.js geometry in the component itself!

Would you like me to:
1. Create a procedural graduation cap using Three.js shapes?
2. Wait for you to download a model from the sources above?

Let me know which approach you prefer!

## Troubleshooting

**Model is too small/large:**
- Adjust the `scale` property in HatModel.jsx

**Model is upside down:**
- Change rotation to `[Math.PI, 0, 0]`

**Model doesn't appear:**
- Check browser console for errors
- Verify the GLB file is in `public/models/`
- Make sure filename matches in the code

**Model looks wrong:**
- Some models have multiple meshes - you might need to adjust the component
- Try a different model from Sketchfab

## Best Practices

- **File Size**: Keep under 2MB for fast loading
- **Polycount**: 5k-20k triangles is ideal for web
- **Format**: GLB is preferred over GLTF
- **Colors**: Choose blue/black academic colors or neutral colors that match your theme

---

**Need Help?**
If you download a model and it's not working, share the model name/link and I can help adjust the component code!
