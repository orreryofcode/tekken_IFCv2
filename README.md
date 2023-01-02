# **Iron Fist Companion**

This app was developed by me over the span of about a week or two. I had been
wanting to create a prototype for a web app that would allow players to view
important data for characters such as frame data, combos and notable community
players. Ultimately, the goal was to create a learning resource that players
would be able to use when trying to learn a character or matchup because Bandai
Namco seemingly doesn't care enough to do it themselves.

Given that Tekken 8 has been announced and is likely to release within the next
year or two, I am treating this as a sort of test run that will be improved once
T8 releases.

The frame data is pulled from RBNorway. Unfortunately, this also means that it
comes with the horrible formatting they use to display the data. If you want to
try and clean it up, feel free to shoot me a message with any ideas you have.
All of the data is stored as local JSON in <code>public/data/framedata</code>.

Some changes/improvements I would like to make include:

- Notable players
  - Include links to their socials (Twitch, Twitter, YT etc.)
- Character Strengths and Weaknesses
  - What direction to step, general character strategies
- Top 10-15 moves
  - "Go to" moves to use in neutral with a brief explanation of **why** these
    are good.
- Quick reference to moves with special properties
  - ex: What moves have armor, homing, wall break, floor break, etc. properties.

I'm also open to any suggestions for things the community would like to see
added.

---

This app is deployed via Vercel and was built using Vite. You can view the
deployed version [here](https://tekken-ifcv2.vercel.app/).

### **Install dependencies**

    npm i

### **Development mode**

    npm run dev

### **Preview**

    npm run preview

### **Build**

    npm run build

---

# **Design Mockup**

The layout of the page was designed by me using **Figma**. Some of the styling
changed as I built the app (such as the <code>nav</code>), but the general idea
remained the same.

My goal was to create something **simple** and **functional**. Instead of
players having to look for different sites, Google sheets, YouTube videos and a
variety of other online resources, I wanted to create something where players
could find what they needed within a couple of clicks.

Jin Kazama ![Jin Kazama](/public/assets/mockup/Jin%20Kazama.png)

### Bryan Fury

![Bryan Fury](/public/assets/mockup/Bryan%20Fury.png)
